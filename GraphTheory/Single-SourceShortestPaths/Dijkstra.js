var fs = require('fs');

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

      //Find the pivot
      var p = partition(ar,lo,hi);
      //sort all numbers less then pivot
      quickSort(ar,lo,p-1);
      //sort numbers greater then pivot
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

   var pivot = ar[hi].distance;

   var i = lo;

   for (j = i; j < hi; j++){
      if (ar[j].distance <= pivot){

         //SWAP
         var temp = ar[i];
         ar[i] = ar[j];
         ar[j] = temp;
         i++;
      }
   }

   //SWAP
   var temp = ar[i];
   ar[i] = ar[hi];
   ar[hi] = temp;
   return i;

}


/**
 * Description
 * @method Dijkstra
 * @param {Object Array} G
 * @return 
 */
function Dijkstra(G){

   var S = [];
   var Q = G.slice();

   while (Q.length !== 0){

      //EXTRACT MIN:
      quickSort(Q,0,Q.length-1);
      var u = Q[0];
      Q.shift();


      //for each vertex v in G.adj[u] RELAX:
      u.adj.forEach(function (x,i){
         //If (and only if) we find that the distance is less through this path, update that value.
         if (G[x-1].distance > u.distance + u.weight[i])
            G[x-1].distance = u.distance + u.weight[i];

      });
   }
}


/**
 * Description
 * @method main
 * @param {buffered utf8} data
 * @return 
 */
function main(data){

   var  t = data[0][0];
   data.shift();
   var t_tracker = 0;

   while (t--){

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

         var v = {'distance':Number.MAX_VALUE,'adj':[],'weight':[]};

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
   
      Dijkstra(G);

      G.forEach(function (x){

         if (x.distance === 0){
            //do nothing
         }

         else if (x.distance === Number.MAX_VALUE){
             process.stdout.write('-1' + ' ');
         }

         else {
            process.stdout.write(x.distance + ' ');
         }

      });

      console.log();
      t_tracker += (2+m);
   }
}
