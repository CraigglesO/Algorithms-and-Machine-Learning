var fib = require('./fibonacciHeap');
var fs = require('fs');


fs.readFile('text.txt','utf8', function (err,data){
   if (err) {throw err;}
   data = data.split(' ').map(Number);
   main(data);
});

/**
 * Description
 * @method main
 * @param {} data
 * @return 
 */
function main(data){
    var fh = new fib();
    data.forEach(function (x){
        fh.insert(x);
    });
    //console.log(fh.root);
    console.log(fh[0]);
    console.log();
    console.log();
    console.log();
    console.log();
    console.log(fh.extractMin().key);
    console.log(fh.extractMin().key);
    /*
    console.log(fh.extractMin().key);
    console.log(fh.extractMin().key);
    console.log(fh.extractMin().key);
    console.log(fh.extractMin().key);
    console.log(fh.extractMin().key);
    console.log(fh.extractMin().key);
    console.log(fh.extractMin().key);
    console.log(fh.extractMin().key);
    console.log(fh.extractMin().key);
    console.log(fh.extractMin().key);
    console.log(fh.extractMin().key);
    */
    console.log();
    console.log();
    console.log();
    console.log();
    console.log(fh.root);
    //console.log(fh.extractMin());
}
