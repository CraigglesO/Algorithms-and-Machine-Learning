
function cutRod(p,n){
   var r = new Array(n+1);
   r[0] = 0;

   for (j = 1; j <= n; j++){
      var q = Number.MIN_VALUE;
      for (i = 0; i < j; i++)
         q = Math.max(q,p[i] + r[j-i-1]);
      r[j] = q;
   }
   return r[n];
}

var A = [1,5,8,9,10,17,17,20];
console.log("Maximum obtainable value is: "+cutRod(A,A.length));
