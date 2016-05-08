/*
 * Written by Craig Travis O'Connor 2016
 * oconnorct1@gmail.com
 *
 * Red Black Search Tree - Data Structure
 * This algorithm uses a derivative of the binary Tree to manage data.
 *
 *
 * A red-black tree with n internal nodes has height at most 2log(n+1). 
 */
 
"use strict";

/**
 * Description
 * @method RBT
 * @return 
 */
function RBT() {
   this.root = undefined;
   this.n = 0;
   this.sentinel = new Node(null);
   this.sentinel.red = false;
}
module.exports.RBT = RBT;

RBT.prototype = {

    //O(n) <- recursive
   /**
    * Description
    * @method inorderTreeWalk
    * @return 
    */
   inorderTreeWalk : function(){
      this.inorderTreeWalkTraversal(this.root);
   },

   /**
    * Description
    * @method inorderTreeWalkTraversal
    * @param {} node
    * @return 
    */
   inorderTreeWalkTraversal : function(node){
      if (node !== this.sentinel){
         this.inorderTreeWalkTraversal(node.left);
         process.stdout.write(' '+node.key);
         this.inorderTreeWalkTraversal(node.right);
      }
   },

   //O(h) h <- tree height
   /**
    * Description
    * @method recursiveTreeSearch
    * @param {} key
    * @param {} node
    * @return 
    */
   recursiveTreeSearch : function(key,node){
      if (!node){
         node = this.root;
      }

      if (!node || key === node.key)
         return node;
      if (key < node.key)
         return this.recursiveTreeSearch(key,node.left);
      else
         return this.recursiveTreeSearch(key,node.right);
   },

   //O(h) h <- tree height
   //iteration tends to be more efficient than recursion.
   /**
    * Description
    * @method iterativeTreeSearch
    * @param {} key
    * @param {} node
    * @return 
    */
   iterativeTreeSearch : function(key,node){
      if (!node){
         node = this.root;
      }

      do {
         if (key < node.key)
            node = node.left;
         else
            node = node.right;
      }while(node && key !== node.key)


      if (!node)
         return -1;
      else
         return node;
   },

   //O(h) h <- tree height
   /**
    * Description
    * @method treeMinimum
    * @param {} node
    * @return node
    */
   treeMinimum : function(node){
      if (!node){
         node = this.root;
      }

      while(node.left !== this.sentinel) {
         node = node.left;
      }
      return node;
   },

   //O(h) h <- tree height
   /**
    * Description
    * @method treeMaximum
    * @param {} node
    * @return node
    */
   treeMaximum : function(node){
      if (!node){
         node = this.root;
      }

      while(node.right !== this.sentinel) {
         node = node.right;
      }
      return node;
   },

   //the successor 
   //O(h) h <- tree height
   /**
    * Description
    * @method treeSuccessor
    * @param {} node
    * @return 
    */
   treeSuccessor : function(node){
      if (node.right)
         return this.treeMinimum(node.right);
      var y = node.p;
      var x;
      do {
         x = y;
         y = y.p;
      }while (y && node === y.right);

      if (!y)
         return -1;
      else
         return y;
   },

   /**
    * Description
    * @method treePredecessor
    * @param {} node
    * @return 
    */
   treePredecessor : function(node){
      if (node.left)
         return this.treeMinimum(node.left);
      var y = node.p;
      var x;
      do {
         x = y;
         y = y.p;
      }while (y && node === y.left);

      if (!y)
         return -1;
      else
         return y;
   },

   //O(log n)
   /**
    * Description
    * @method treeInsert
    * @param {} key
    * @param {} value
    * @return 
    */
   treeInsert : function(key,value){
      var node = new Node(key,this.sentinel,value);
      var y = this.sentinel;
      var x = this.root;
      while (x !== this.sentinel && x){
         y = x;
         if (key < x.key)
            x = x.left;
         else
            x = x.right;
      }
      node.p = y;
      if (y == this.sentinel){
         this.root = node;
      }
      else if (key < y.key)
         y.left = node;
      else
         y.right = node;
      this.rbInsertFixup(node);
      this.n++;
   },

   /**
    * Description
    * @method rbInsertFixup
    * @param {} node
    * @return 
    */
   rbInsertFixup : function(node){
      while (node.p && node.p.p && node.p.red){
         if (node.p === node.p.p.left){
            var uncle = node.p.p.right;
            if (uncle.red){
               node.p.red = false;
               uncle.red = false;
               node = node.p.p;
               node.red = true;
            }
            else{
               if (node === node.p.right){
                  node = node.p;
                  this.leftRotate(node);
               }
               node.p.red = false;
               node.p.p.red = true;
               this.rightRotate(node.p.p);
            }
         }
         else if (node.p === node.p.p.right){
            var uncle = node.p.p.left;
            if (uncle.red){
               node.p.red = false;
               uncle.red = false;
               node = node.p.p;
               node.red = true;
            }
            else{
               if (node === node.p.left){
                  node = node.p;
                  this.rightRotate(node);
               }
               node.p.red = false;
               node.p.p.red = true;
               this.leftRotate(node.p.p);
            }
         }
         //this.root = node.p; //make sure the parent is updated as well as we iterate
      }
      this.root.red = false;
   },

   //O(1) subroutine
   //u is the object, v is the index
   /**
    * Description
    * @method rbTransplant
    * @param {} nodeP
    * @param {} nodeChild
    * @return 
    */
   rbTransplant : function(nodeP,nodeChild){
      if (nodeP === this.sentinel)
         this.root = nodeChild;
      else if (nodeP === nodeP.p.left)
         nodeP.p.left = nodeChild;
      else
         nodeP.p.right = nodeChild;
      if (nodeChild)
         nodeChild = nodeP.p;
   },

   /**
    * Description
    * @method treeExtractMinimum
    * @param {Node} node <- object
    * @return node <- Node object
    */
   treeExtractMinimum : function(){
      var node = this.treeMinimum(this.root);
      this.treeDelete(node);
      return node;
   },

   /**
    * Description
    * @method treeExtractMaximum
    * @param {Node} node <- object
    * @return node <- Node object
    */
   treeExtractMaximum : function(){
      var node = this.treeMaximum(this.root);
      this.treeDelete(node);
      return node;
   },

   //O(log n)
   /**
    * Description
    * @method treeDelete
    * @param {Node} node <- object
    * @return 
    */
   treeDelete : function(node){
      var x;
      var y = node;
      var y_init_red = y.red;
      if (node.left === this.sentinel){
         x = node.right;
         this.rbTransplant(node,node.right);
      }
      else if (node.right === this.sentinel){
         x = node.left;
         this.rbTransplant(node,node.left);
      }
      else {
         y = this.treeMinimum(node.right);
         y_init_red = y.red;
         x = y.right;
         if (y.p === node)
            x.p = y;
         else{
            this.rbTransplant(y,y.right);
            y.right = node.right;
            y.right.p = y;
         }
         this.rbTransplant(node,y);
         y.left = node.left;
         y.left.p = y;
         y.red = node.red;
      }
      if (!y_init_red)
         this.rbDeleteFixup(x);
      this.n--;
   },

   /**
    * Description
    * @method rbDeleteFixup
    * @param {} node
    * @return 
    */
   rbDeleteFixup : function(node){
      while (node !== this.sentinel && !node.red){
         if (node === node.p.left){
            var w = node.p.right;
            if (w.red){
               w.red = false;
               node.p.red = true;
               this.leftRotate(node.p);
               w = node.p.right;
            }
            if (!w.left.red && !w.right.red){
               w.red = true;
               node = node.p;
            }
            else{
               if (!w.right.red){
                  w.left.red = false;
                  w.color = true;
                  this.rightRotate(w);
                  w = node.p.right;
               }
               w.red = node.p.red;
               node.p.red = false;
               w.right.red = false;
               this.leftRotate(node.p);
               node = this.root;
            }
         }
         else{
            var w = node.p.left;
            if (w.red){
               w.red = false;
               node.p.red = true;
               this.rightRotate(node.p);
               w = node.p.left;
            }
            if (!w.left.red && !w.right.red){
               w.red = true;
               node = node.p;
            }
            else{
               if (!w.left.red){
                  w.right.red = false;
                  w.color = true;
                  this.leftRotate(w);
                  w = node.p.left;
               }
               w.red = node.p.red;
               node.p.red = false;
               w.left.red = false;
               this.rightRotate(node.p);
               node = this.root;
            }
         }
      }
      node.red = false;
   },

   //O(1)
   //rotational sets for insert an delete:
   /**
    * Description
    * @method leftRotate
    * @param {} node
    * @return 
    */
   leftRotate : function(node){
      var y = node.right;
      node.right = y.left;
      if (y.left !== this.sentinel)
         y.left.p = node;
      y.p = node.p;
      if (node.p === this.sentinel) //defining the parents new child. if no parent, x was the root
         this.root = y;
      else if (node === node.p.left) //if x was the left child
         node.p.left = y; 
      else //else x was the right child
         node.p.right = y;
      y.left = node;
      node.p = y;
   },

   /**
    * Description
    * @method rightRotate
    * @param {} node
    * @return 
    */
   rightRotate : function(node){
      var y = node.left;
      node.left = y.right;
      if (y.right !== this.sentinel)
         y.right.p = node;
      y.p = node.p;
      if (node.p === this.sentinel) //defining the parents new child. if no parent, x was the root
         this.root = y;
      else if (node === node.p.right) //if x was the right child
         node.p.right = y; 
      else //else x was the right child
         node.p.left = y;
      y.right = node;
      node.p = y;
   }

};

/**
 * @constructor
 * @method Node
 * @param {} key
 * @param {} sentinel
 * @param {} value
 * @return 
 */
function Node(key,sentinel,value) {
   this.key = key;
   this.value = value;
   this.red = true;
   this.left = sentinel;
   this.right = sentinel;
}

Node.prototype = {

   'p': null,
}