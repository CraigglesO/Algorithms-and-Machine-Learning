var a = [0,5,2,67,3,7,3];
var b = [];

function merging (low, mid, high){
   var l1 = low;
   var l2 = mid + 1;

   for (i = low; l1 <= mid && l2 <= high; i++) {
      if (a[l1] <= a[l2])
         b[i] = a[l1++];
      else
         b[i] = a[l2++];
   }

   while (l1 <= mid)
      b[i++] = a[l1++];

   while (l2 <= high)
      b[i++] = a[l2++];

   for (i = low; i <= high; i++)
      a[i] = b[i];

}

function mergeSort(low, high) {
   var mid;

   if (low < high) {
      mid = Math.floor((low + high) / 2);
      mergeSort(low,mid);
      mergeSort(mid+1,high);
      merging(low,mid,high);
   }
   else
      return;

}

console.log('before: '+a);
mergeSort(0,a.length);
a.shift();
console.log('after: '+a);
