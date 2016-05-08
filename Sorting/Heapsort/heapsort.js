/*
 * Written by Craig Travis O'Connor 2016
 * oconnorct1@gmail.com
 *
 * Heap Sort Algorithm
 * This algorithm uses a binary heap to sort the numbers in the array.
 *
 * NOTE: This Algorithm is NOT stable and thus may swap the order of equal integers.
 *
 */

'use strict';

var fs = require('fs');
//Read in the file:
fs.readFile('text.txt','utf8', function (err,data){
   if (err) {throw err;}
   data = data.split(' ').map(Number);
   main(data);
});

/**
 * Description: Heapsort Implementation
 * @method main
 * @param {Array} data
 * @return 
 */
function main(data){
   //organize the array:
   data = heapSort(data);
   //print results:
   console.log(data);
}


//O(log n) <- recursive
/**
 * Description
 * @method maxHeapify
 * @param {Array} A
 * @param {Number} i <- index
 * @param {Number} heapSize <- decreasing as we 'remove' each minimum node.
 * @return 
 */
function maxHeapify(A,i,heapSize){
   var l = (2*i) + 1; //left index
   var r = (2*i) + 2; //right index
   var largest;
   if (l < heapSize && A[l] > A[i])
      largest = l;
   else
      largest = i;
   if (r < heapSize && A[r] > A[largest])
      largest = r;
   if (largest !== i){
      var temp = A[i];
      A[i] = A[largest];
      A[largest] = temp;
      maxHeapify(A,largest,heapSize);
   }
}

/**
 * Description: Properly sort the array from least to greatest. This is O(n log n) time.
 * @method heapSort
 * @param {Array} A
 * @return A <- Sorted array
 */
function heapSort(A){
   var heapSize = A.length;
   buildMaxHeap(A);
   for (var i = A.length-1; i >= 1; i--){
      var temp = A[0];
      A[0] = A[i];
      A[i] = temp;
      heapSize--;
      maxHeapify(A,0,heapSize);
   }
   return A;
}


/**
 * Description: This creates the heap O(n/2) time.
 * @method buildMaxHeap
 * @param {Array} A
 * @return 
 */
function buildMaxHeap(A){
   for (var i = (A.length/2); i >= 0; i--){
      maxHeapify(A,i,A.length);
   }
}

