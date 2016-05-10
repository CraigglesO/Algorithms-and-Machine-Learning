function SS(A){
   for (i = 0; i < A.length-1; i++){
      for (j = i+1; j < A.length; j++){
         if (A[i] > A[j]){
            var temp = A[i];
            A[i] = A[j];
            A[j] = temp;
         }
      }
   }
}

var A = [0,5,8,32,6,8];
SS(A);
console.log(A);
