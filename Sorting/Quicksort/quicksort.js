/**
 * The quicksort algorithm. It's complexity is O(nlog n).
 *
 * @public
 *
 * @author Craig OConnor <oconnorct1@gmail.com>
 *
 */



/**
 * Description
 * @method quickSort
 * @param {Array} ar
 * @param {Number} lo index of the first element
 * @param {Number} hi index of the second element
 * @return ar array with the swapped elements
 */
function quickSort (ar, lo, hi){
   if (lo < hi){
      var p = partition(ar,lo,hi);
      quickSort(ar,lo,p-1);
      quickSort(ar,p+1,hi);
   }
   return ar;
}

/**
 * Description
 * @method partition
 * @param {Array} ar
 * @param {Number} lo
 * @param {Number} hi
 * @return i
 */
function partition (ar, lo, hi){

   //Create pivot
   var pivot = ar[hi];

   var i = lo;

   for (j = i; j < hi; j++){

      if (ar[j] <= pivot){
         /**
          * running through the subarray, if the number is less than the pivot, we swap with lo
          * */
         var temp = ar[i];
         ar[i] = ar[j];
         ar[j] = temp;
         i++;
      }
   }

   /**
    * final swap with pivot
    * */
   var temp = ar[i];
   ar[i] = ar[hi];
   ar[hi] = temp;
   return i;
}



//example array
var s = [1,2,3,9,3,7,2,7,8,3,1];

//generate the quicksort
s = quickSort(s,0,s.length-1);

console.log(s);
