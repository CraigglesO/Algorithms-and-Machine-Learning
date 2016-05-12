/*
 * Written by Craig Travis O'Connor 2016
 * oconnorct1@gmail.com
 *
 * Fibonacci Heap - Data Structure
 * This algorithm is complex, but makes up for it with it's speed
 *
 *
 *
 */

/**
 * Description: Creates a Fibonacci heap
 * @constructor
 * @method fibonacciHeap
 * @return 
 */
var fibonacciHeap = function(){
   this.root = undefined;
   this.n = 0;
};

fibonacciHeap.prototype = {

   /**
    * Description
    * @method insert
    * @param {} key
    * @return
    */
   insert: function(key,value){
      var node = new Node(key,value);
      this.root = mergeList(this.root, node)
      this.n++;
   },

   /**
    * Description
    * @method union
    * @param {} H1
    * @param {} H2
    * @return 
    */
   union: function(tree){
    this.root = mergeList(this.root,tree.root);
    this.n += tree.n;
   },

   /**
    * Description
    * @method extractroot
    * @return MemberExpression
    */
   extractMin: function(){
      var z = this.root;
      if (z){
         if (z.child){
            var child = z.child;
            do {
              //add child to rootlist
               child.parent = undefined;
               child = child.right;
            } while (child !== z.child);
         }

         var nextNode;
         if (z.right !== z){
            nextNode = z.right;
         }
         removeNode(z);
         this.root = mergeList(nextNode, z.child);
         if (nextNode){
            this.root = nextNode;
            this.root = consolidate(this.root);
         }
      }
      this.n--;
      return z;
   },

   /**
    * Description
    * @method decreaseKey
    * @return 
    */
   decreaseKey: function(node,nKey){
    if (nKey > node.key)
      return console.error('new key is greater than current key');
    node.key = nKey;
    var y = node.parent;
    if (y && node.key < y.key){
      cut(node,y,this.root);
      cascadingCut(y,this.root);
    }
    if (node.key < this.root.key)
      this.root = node;
   },

   /**
    * Description
    * @method fib
    * @param {} n
    * @return ConditionalExpression
    */
   fib: function(n){
      return n < 1 ? 0
        : n <= 2 ? 1
        : this.fib(n - 1) + this.fib(n - 2);
   }

};

/**
 * Description
 * @method mergeList
 * @param {} a
 * @param {} b
 * @return ConditionalExpression
 */
function mergeList(a, b){
  if (!a && !b) {
    return undefined;
  }
  if (!a) {
    return b;
  }
  if (!b) {
    return a;
  }

   var temp = a.right;
   a.right = b.right;
   a.right.left = a;
   b.right = temp;
   b.right.left = b;

   return (a.key < b.key) ? a : b;
}

/**
 * Description
 * @method removeNode
 * @param {} node
 * @return 
 */
function removeNode(node){
   var left = node.left;
   var right = node.right;
   left.right = right;
   right.left = left;
   node.right = node;
   node.left = node;
}

/**
 * Description
 * @method consolidate
 * @param {} rootNode
 * @return rootNode
 */
function consolidate(rootNode){
   var A = [];
   
   //setup all root nodes for review
   var iter = [];
   var t = 0;
   var current = rootNode;
   do {
      iter.push(current);
      current = current.right;
   } while (rootNode !== current);

   do {
    var y = iter[t];
    deg = y.degree;
    while(A[deg]){
      if (y.key > A[deg].key){
        var temp = y;
        y = A[deg];
        A[deg] = temp;
      }
      link(A[deg],y);
      A[deg] = undefined;
    }
    A[deg] = y;
    t++;
   } while(iter[t]);

   rootNode = undefined;
   for (var i = 0; i < A.length; i++){
    if (A[i]){
      A[i].right = A[i];
      A[i].left = A[i];
      rootNode = mergeList(rootNode,A[i]);
    }
   }

   return rootNode;
}

/**
 * Description
 * @method linkHeaps
 * @param {} max
 * @param {} root
 * @param {} compare
 * @return 
 */
function link(max, rootNode){
  removeNode(max);
  rootNode.child = mergeList(max, rootNode.child);
  max.parent = rootNode;
  rootNode.degree++;
  max.mark = false;
}

function cut(node, parent, rootNode){
  parent.degree--;
  if (node.next === node)
    parent.child = undefined;
  else 
    parent.child = node.next;
  removeNode(node);
  rootNode = mergeList(rootNode,node);
  node.mark = false;

  return rootNode
}

function cascadingCut(node, rootNode){
  var z = node.parent;
  if (z){
    if (!node.mark)
      node.mark = true;
    else{
      rootNode = cut(node, z, rootNode);
      rootNode = cascadingCut(z,rootNode);
    }
  }

  return rootNode
}

/**
 * Description: Node object
 * @constructor
 * @method Node
 * @param {} key
 * @return 
 */
function Node(key,value){
  this.key = key;
  this.value = value;
  this.left = this;
  this.right = this;
  this.degree = 0;
  this.parent = undefined;
  this.child = undefined;
  this.mark = undefined;
}

module.exports = fibonacciHeap;