/**
 * The Kruskal MST (Minimum Spanning Tree) algorithm. It's complexity is O(nlog n).
 *
 * @public
 *
 * @author Craig OConnor <oconnorct1@gmail.com>
 *
 */


var fs = require('fs');
var _ = require('underscore');

fs.readFile('text2.txt','utf8',function (err,data){
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
 * @param {Array} ar
 * @param {Number} lo
 * @param {Number} hi
 * @return i
 */
function partition (ar, lo, hi){
   var pivot = ar[hi].weight;
   var i = lo;
   for (j = i; j < hi; j++){
      if (ar[j].weight <= pivot){
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
 * @method KruskalMST
 * @param {Object} G
 * @param {Object} e
 * @return 
 */
function KruskalMST(G,e){
   e.forEach(function (x){
      if (G[x.n1-1].set !== G[x.n2-1].set){
         //this one and all others in the set are now set of n1:
         G[x.n2-1].set = G[x.n1-1].set;
         G[x.n2-1].adj.forEach(function (v){
            G[v].set = G[x.n1-1].set;
         });
         G[x.n2-1].distance = x.weight;
         G[x.n2-1].adj.push(x.n1-1);
         G[x.n2-1].weight.push(x.weight);
         G[x.n1-1].adj.push(x.n2-1);
         G[x.n1-1].weight.push(x.weight);
      }
   });
}

/**
 * Description
 * @method main
 * @param {buffered input} data
 * @return 
 */
function main(data){

   //faster to track where we are than .push() from the data stack
   var t_tracker = 0;

   //create our primary variables
   var G = [];
   var e = [];
   //for Kruskal, this variable proves to be useless.
   var s = 0;
   //node and edges
   var n = data[t_tracker][0];
   var m = data[t_tracker][1];
   for (i = 1; i < m+1; i++){
      e.push({'n1':data[t_tracker+i][0],'n2':data[t_tracker+i][1],'weight':data[t_tracker+i][2]});
   }
   quickSort(e,0,e.length-1);
   //INITIALIZE-SINGLE-SOURCE(G,s)

   //starting position
   s = data[t_tracker+1+m][0]-1;

   for (i = 0; i < n; i++){
      var v = {'distance':Number.MAX_VALUE,'adj':[],'weight':[],'set':i};
      G.push(v);
   }
   G[e[0].n1-1].distance = 0;
   //Run Kruskal's algorithm
   KruskalMST(G,e);
   
   //BFS(G,s);

   var sum = 0;
   G.forEach(function (x){
      //Add all the nodes to see the total sum
      sum += x.distance;
   });

   console.log(sum);
}
