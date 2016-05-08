/**
 * The Prim MST (Minimum Spanning Tree) algorithm. It's complexity is O(nlog n).
 *
 * @public
 *
 * @author Craig OConnor <oconnorct1@gmail.com>
 *
 */


var fs = require('fs');
var _ = require('underscore');

fs.readFile('text.txt','utf8',function (err,data){
   if (err) { console.error(err);}
   data = data.split('\n');
   data = data.map(function (x) { return x.split(' ').map(Number);});
   main(data);
});

/**
 * Description
 * @method quickSort
 * @param {Array} ar
 * @param {Number} lo
 * @param {Number} hi
 * @return ar
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
 * @param {} ar
 * @param {} lo
 * @param {} hi
 * @return i
 */
function partition (ar, lo, hi){
   var pivot = ar[hi].distance;
   var i = lo;
   for (j = i; j < hi; j++){
      if (ar[j].distance <= pivot){
         var temp = ar[i];
         ar[i] = ar[j];
         ar[j] = temp;
         i++;
      }
   }
   var temp = ar[i];
   ar[i] = ar[hi];
   ar[hi] = temp;
   return i;
}

/**
 * Description
 * @method PrimMST
 * @param {Object Array} G
 * @return 
 */
function PrimMST(G){

   var Q = G.slice();

   while (Q.length !== 0){

      //EXTRACT MIN:
      quickSort(Q,0,Q.length-1);
      var u = Q[0];
      Q.shift();

      //for each vertex v in G.adj[u] RELAX:
      u.adj.forEach(function (x,i){
         if (G[x-1].distance > u.weight[i] && _.contains(Q,G[x-1])){
            G[x-1].distance = u.weight[i];
            G[x-1].parent = _.indexOf(G,u);
         }
      });
   }
}

/**
 * Description
 * @method main
 * @param {Parsed buffer} data
 * @return 
 */
function main(data){

   var t_tracker = 0;


   var G = [];
   var e = [];
   var s = 0;
   //node and edges
   var n = data[t_tracker][0];
   var m = data[t_tracker][1];
   for (i = 1; i < m+1; i++){
      e.push(data[t_tracker+i]);
   }

   //INITIALIZE-SINGLE-SOURCE(G,s)

   //starting position
   s = data[t_tracker+1+m][0]-1;

   for (i = 0; i < n; i++){
      var v = {'parent':null,'distance':Number.MAX_VALUE,'adj':[],'weight':[]};
      G.push(v);
   }

   //set the edges and weights
   e.forEach(function (x,i){

      G[x[0]-1].adj.push(x[1]);
      G[x[0]-1].weight.push(x[2]);
      G[x[1]-1].adj.push(x[0]);
      G[x[1]-1].weight.push(x[2]);
   });

   G[s].distance = 0;
   
   //Run Prim's algorithm
   PrimMST(G);

   var sum = 0;
   G.forEach(function (x){
      //Add all the nodes to see the total sum
      sum += x.distance;
   });

   console.log(sum);
}
