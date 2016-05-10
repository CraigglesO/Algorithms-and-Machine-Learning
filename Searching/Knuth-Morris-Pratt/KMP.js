//O(n)
function KMP(T,P){
   var n = T.length;
   var m = P.length;
   var pi = computePrefixFunction(P);
   var q = 0;

   for (i = 0; i < n; i++){
      while (q > 0 && P[q] !== T[i])
         q = pi[q];
      if (P[q] === T[i])
         q++;
      if (q === m){
         console.log('Pattern occurs at: '+(i+1-m));
         q = pi[q];
      }
   }
}

//O(m)
function computePrefixFunction(P){
   var m = P.length;
   var pi = new Array(m);
   pi[0] = 0;
   var k = 0;

   for (q = 1; q < m; q++){
      while (k > 0 && P[k] !== P[q])
         k = pi[k];
      if (P[k] === P[q])
         k++;
      pi[q] = k;
   }
   return pi;
}

var T = 'abcababacdadfabab';
var P = 'ababa';

KMP(T,P);
