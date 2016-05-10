main();

function maxSubArraySum(A){
   var largest_max = 0, ending_max = 0;

   for (var i = 0; i < A.length; i++){
      ending_max = ending_max + A[i];
      if (ending_max < 0)
         ending_max = 0;
      if (largest_max < ending_max)
         largest_max = ending_max;
   }
   return largest_max;
}

function main(){
   var A = [-2,-3,4,-1,-2,1,5,-3];
   var maxSubSum = maxSubArraySum(A);
   console.log(maxSubSum);
}
