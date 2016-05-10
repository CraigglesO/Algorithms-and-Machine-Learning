function LPM(A,C,j,i){
   var m = A.length;
   var n = A[0].length;

   if (j < 0 || j >= m || i < 0 || i >= n)
      return 0;
   if (C[j][i])
      return C[j][i];
   //UP
   if (j+1 < m && A[j][i] + 1 === A[j+1][i])
      return C[j][i] = 1 + LPM(A,C,j+1,i);
   //DOWN
   if (j-1 >= 0 && A[j][i] + 1 === A[j-1][i])
      return C[j][i] = 1+ LPM(A,C,j-1,i);
   //LEFT
   if (i-1 >= 0 && A[j][i] + 1 === A[j][i-1])
      return C[j][i] = 1+ LPM(A,C,j,i-1);
   //RIGHT
   if (i+1 < n && A[j][i] + 1 === A[j][i+1])
      return C[j][i] = 1+ LPM(A,C,j,i+1);
   return C[j][i] = 1;
}

function searchForLongest(A){
   var result = 1;
   var count = [];
   for (i = 0; i < A.length; i++)
      count.push(new Array(A[0].length));
   for (j = 0; j < A.length; j++){
      for (i = 0; i < A[0].length; i++){
         LPM(A,count,j,i);
         result = Math.max(count[j][i],result);
      }
   }
   return result;
}

var matrix = [[1,2,9],[5,3,8],[4,6,7]];
console.log('Length of longest path: '+searchForLongest(matrix));
