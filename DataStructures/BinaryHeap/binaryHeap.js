/*
* Written by Craig Travis O'Connor 2016
* oconnorct1@gmail.com
*
* Max Binary Heap implementation.
* This algorithm chooses the MAXIMUM number to be the root node.
*
*
*
*/

var BH = {

   T : [],
   size : 0,

   /**
    * Description: the parent of the node via indexing.
    * @method parent
    * @param {Number} i  <- index
    * @return CallExpression
    */
   parent : function (i){
      return Math.floor((i-1)/2);
   },

   /**
    * Description: The left child of the node via indexing.
    * @method left
    * @param {Number} i  <- index
    * @return BinaryExpression
    */
   left : function (i){
      return (2*i) + 1;
   },

   /**
    * Description: The right child of the node via indexing.
    * @method right
    * @param {Number} i  <- index
    * @return BinaryExpression
    */
   right : function (i){
      return (2*i) + 2;
   },

   /**
    * Description: This 'bubbles up' the value passed to it recursively, should it's parent be less than
    *              the number under review. This takes O(log n) time.
    * @method maxHeapify
    * @param {Number} i  <- index
    * @return 
    */
   maxHeapify : function(i){
      var l = this.left(i);
      var r = this.right(i);
      var largest;
      if (l < this.size && this.T[l] > this.T[i])
         largest = l;
      else
         largest = i;
      if (r < this.size && this.T[r] > this.T[largest])
         largest = r;
      if (largest !== i){
         var temp = this.T[i];
         this.T[i] = this.T[largest];
         this.T[largest] = temp;
         this.maxHeapify(largest);
      }
   },

   /**
    * Description: Properly sort the array from least to greatest. This is O(n log n) time.
    * @method heapSort
    * @param {} A
    * @return 
    */
   heapSort : function(A){
      this.buildMaxHeap(A);
      for (i = this.T.length-1; i >= 0; i--){
         var temp = this.T[0];
         this.T[0] = this.T[i];
         this.T[i] = temp;
         this.size--;
         this.maxHeapify(0);
      }
      this.size = this.T.length;
   },

   /**
    * Description: add a new key to the heap.
    * @method maxHeapInsert
    * @param {Number} k <- key
    * @return result
    */
   maxHeapInsert : function(k){
      this.size++;
      if (this.size > this.T.length)
         this.T.push(Number.MIN_VALUE);
      var result = this.heapIncreaseKey(this.size-1,k);
      return result;
   },

   /**
    * Description: Return the maximum. O(1) time
    * @method heapMaximum
    * @return MemberExpression
    */
   heapMaximum : function(){
      return this.T[0];
   },

   /**
    * Description: If there is a key whose value we would like to change maximum of O(h) time.
    * @method heapIncreaseKey
    * @param {Number} i  <- index
    * @param {} k
    * @return Literal <- success
    */
   heapIncreaseKey : function(i,k){
      if (k < this.T[i])
         return -1;
      this.T[i] = k;
      while (i > 0 && this.T[this.parent(i)] < this.T[i]){
         var temp = this.T[i];
         this.T[i] = this.T[this.parent(i)];
         this.T[this.parent(i)] = temp;
         i = this.parent(i);
      }
      return 0;
   },

   /**
    * Description: Priority queue. Get and remove the maximum from the heap O(long n) time.
    * @method heapExtractMax
    * @return max
    */
   heapExtractMax : function(){
      if (this.size < 1)
         return -1;
      var max = this.T[0];
      this.T[0] = this.T[this.size-1];
      this.T[this.size-1] = Number.MIN_VALUE;
      this.size--;
      this.maxHeapify(0);
      return max;
   },

   /**
    * Description: This creates the heap O(n/2) time.
    * @method buildMaxHeap
    * @param {Array} A
    * @return 
    */
   buildMaxHeap : function(A){
      this.T = A.slice();
      this.size = this.T.length;
      for (i = (this.size/2); i >= 0; i--){
         this.maxHeapify(i);
      }
   },

   /**
    * Description If we pass in another heap, this takes O(n) time.
    * @method mergeHeap
    * @param {Array} A2
    * @return 
    */
   mergeHeap : function(A2){
      for (i = 0; i < A2.length; i++){
         this.maxHeapInsert(A2[i]);
      }
   }

};

module.exports = BH;

