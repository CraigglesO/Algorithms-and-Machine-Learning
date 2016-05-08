/*
 * Written by Craig Travis O'Connor 2016
 * oconnorct1@gmail.com
 *
 * Binary Search Tree - Data Structure
 * This algorithm uses a binary Tree to manage data.
 *
 *
 *
 */

"use strict";

/**
 * @constructor
 * @method BST
 * @return 
 */
function BST() {
   this.root = undefined;
   this.n = 0;
}
module.exports.BST = BST;

BST.prototype = {

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
      if (node){
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

      while(node.left) {
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

      while(node.right) {
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

   //O(h) h <- tree height
   /**
    * Description
    * @method treeInsert
    * @param {} key
    * @param {} value
    * @return 
    */
   treeInsert: function (key,value){
      var node = new Node(key,value);
      var y = undefined;
      var x = this.root;
      while (x) {
         y = x;
         if (key < x.key)
            x = x.left;
         else
            x = x.right;
      }
      node.p = y;
      if (!y){
         this.root = node;     //tree T was empty
      }
      else if (key < y.key){
         y.left = node;
      }
      else {
         y.right = node;
      }
      this.n++;
   },

   //O(1) subroutine
   //u is the object, v is the index
   /**
    * Description
    * @method transplant
    * @param {} nodeP
    * @param {} nodeChild
    * @return 
    */
   transplant : function(nodeP,nodeChild){
      if (!nodeP)
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

   //O(h) h <- tree height
   //z is the index
   /**
    * Description
    * @method treeDelete
    * @param {} node
    * @return 
    */
   treeDelete : function(node){
      var y;
      if (!node.left)
         this.transplant(node,node.right);
      else if (!node.right)
         this.transplant(node,node.left);
      else{
         y = this.treeMinimum(node.right);
         if (y.p !== node){
            this.transplant(y,y.right);
            y.right = node.right;
            y.right.p = y;
         }
         this.transplant(node,y);
         y.left = node.left;
         y.left.p = y;
      }
      this.n--;
   },

   /**
    * Description
    * @method treeGraph
    * @return 
    */
   treeGraph : function(){
      //print graphically:

   }

};

/**
 * @constructor
 * @method Node
 * @param {} key
 * @param {} value
 * @return 
 */
function Node(key,value) {
   this.key = key;
   this.value = value;
}

Node.prototype = {

   'p':null,

   'left':null,

   'right':null
}
