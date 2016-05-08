/**
 * The Floyd Warshall APSP (All Pair Shortest Path) algorithm. It's complexity is O(V^3).
 *
 * @public
 *
 * @author Craig OConnor <oconnorct1@gmail.com>
 *
 */


var fs = require('fs');
var _ = require('underscore');

fs.readFile('text_hr.txt','utf8',function (err,data){
   if (err) { console.error(err);}
   data = data.split('\n');
   data = data.map(function (x) { return x.split(' ').map(Number);});
   main(data);
});


/**
 * Description
 * @method FloydWarshall
 * @param {2D Array} W
 * @param {Number} n <- Array n*n
 * @return 
 */
function FloydWarshall(W,n){

   for (k = 0; k < n; k++){
      for (j = 0; j < n; j++){
         for (i = 0; i < n; i++){
            W[i][j] = Math.min(W[i][j],W[i][k] + W[k][j]);
         }
      }
   }
}

/**
 * Description
 * @method main
 * @param {Buffered input} data
 * @return 
 */
function main(data){


   var W = [];
   var e = [];
   var s = 0;
   //node and edges
   var n = data[0][0];
   var m = data[0][1];
   data.shift();

   //create the nxn array, out it in W:
   for (i = 0; i < n; i++){
      e = Array.apply(null, Array(n)).map(Number.prototype.valueOf,Number.MAX_VALUE);;
      W.push(e);
   }

   //setup known data:
   for (i = 0; i < m; i++){
      W[data[0][0]-1][data[0][1]-1] = data[0][2];
      //add below if undirected:
      //W[data[0][1]-1][data[0][0]-1] = data[0][2];
      data.shift();
   }

   //Run Floyd's algorithm
   W = FloydWarshall(W,n);


   var t = data[0][0];
    data.shift();
    while(t--){
        if (data[0][0] === data[0][1]){
            console.log(0);
        }
        else{
            if (W[data[0][0]-1][data[0][1]-1] === Number.MAX_VALUE){
                console.log(-1);
            }
            else{
                console.log(W[data[0][0]-1][data[0][1]-1]);
            }
        }
        data.shift();
    }

}
