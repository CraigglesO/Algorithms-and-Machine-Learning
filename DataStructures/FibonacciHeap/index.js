var fib = require('./fibonacciHeap2');
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
    console.log(fh.minNode);
    console.log();
    console.log();
    console.log();
    console.log();
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log(fh.extractMinimum());
    console.log();
    console.log();
    console.log();
    console.log();
    console.log(fh.minNode);
    //console.log(fh.extractMin());
}
