/**
 * Description
 * @method fibonacciHeap
 * @return 
 */
var fibonacciHeap = function(){
   this.min = undefined;
   this.n = 0;
};

fibonacciHeap.prototype = {

   /**
    * Description
    * @method insert
    * @param {} key
    * @return node
    */
   insert: function(key){
      var node = new Node(key);
      this.min = mergeList(this.min, node)
      this.n++;
      return node;
   },

   /**
    * Description
    * @method union
    * @param {} H1
    * @param {} H2
    * @return 
    */
   union: function(H1,H2){

   },

   /**
    * Description
    * @method extractMin
    * @return MemberExpression
    */
   extractMin: function(){
      var z = this.min;
      if (z){
         if (z.child){
            var child = z.child;
            do {
               child.parent = undefined;
               child = child.right;
            } while (child !== z.child);
         }

         var nextNode;
         if (z.right !== z){
            nextNode = z.right;
         }
         removeNode(z);
         this.n--;

         this.min = mergeList(nextNode, z.child);
         if (nextNode){
            this.min = nextNode;
            this.min = consolidate(this.min);
         }
      }
      return z.key;
   },

   /**
    * Description
    * @method decreaseKey
    * @return 
    */
   decreaseKey: function(){

   },

   /**
    * Description
    * @method cut
    * @return 
    */
   cut: function(){

   },

   /**
    * Description
    * @method cascadingCut
    * @return 
    */
   cascadingCut: function(){

   },

   /**
    * Description
    * @method delete
    * @param {} z
    * @return 
    */
   delete: function(z){
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
 * @method nodeListIterator
 * @param {} start
 * @return 
 */
var nodeListIterator = function (start){
   this.items = [];
   var current = start;
   do {
      this.items.push(current);
      current = current.right;
   } while (start !== current);
}

/**
 * @private
 * @method hasNext
 * @return BinaryExpression
 */
nodeListIterator.prototype.hasNext = function () {
  return this.items.length > 0;
};

/**
 * @private
 * @method next
 * @return CallExpression
 */
nodeListIterator.prototype.next = function () {
  return this.items.shift();
};

/**
 * Description
 * @method mergeList
 * @param {} a
 * @param {} b
 * @return ConditionalExpression
 */
function mergeList(a, b){
   if (!a && !b){
      return undefined;
   }
   if (!a){
      return b;
   }
   if (!b){
      return a;
   }

   var temp = a.right;
   a.right = b.right;
   a.right.left = a;
   b.right = temp;
   b.right.left = b;

   return compare(a, b) < 0 ? a : b;
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
 * @param {} minNode
 * @return minNode
 */
function consolidate(minNode){
   var A = [];
   var it = new nodeListIterator(minNode);
   while (it.hasNext()){
      var current = it.next();

    // If there exists another node with the same degree, merge them
    while (A[current.degree]) {
      if (compare(current, A[current.degree]) > 0) {
        var temp = current;
        current = A[current.degree];
        A[current.degree] = temp;
      }
      linkHeaps(A[current.degree], current, compare);
      A[current.degree] = undefined;
      current.degree++;
    }

    A[current.degree] = current;
   }
   return minNode;
}

/**
 * Description
 * @method linkHeaps
 * @param {} max
 * @param {} min
 * @param {} compare
 * @return 
 */
function linkHeaps(max, min, compare) {
  removeNode(max);
  min.child = mergeList(max, min.child, compare);
  max.parent = min;
  max.isMarked = false;
}

/**
 * Description
 * @method compare
 * @param {} a
 * @param {} b
 * @return Literal
 */
function compare(a,b){
      if (a.key > b.key){
         return 1;
      }
      if (a.key < b.key){
         return -1;
      }
      return 0;
   }

/**
 * Description
 * @method Node
 * @param {} key
 * @return 
 */
function Node(key) {
  this.key = key;
  this.left = this;
  this.right = this;
  this.degree = 0;

  this.parent = undefined;
  this.child = undefined;
  this.isMarked = undefined;
}

module.exports = fibonacciHeap;