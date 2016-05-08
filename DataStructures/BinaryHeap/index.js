var BH = require('./binaryHeap');
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
	//print the original heap:
	console.log(data);
	//build the binary heap:
	console.log('build binary heap:');
    BH.buildMaxHeap(data);
    //print the current heap:
    console.log(BH.T);
    //extract the max:
    console.log('extract max: '+BH.heapExtractMax());
    //print the resulting heap:
    console.log(BH.T);
    //AGAIN extract the max:
    console.log('extract max: '+BH.heapExtractMax());
    //print the resulting heap:
    console.log(BH.T);
    //insert 16 back into the heap:
    BH.maxHeapInsert(16);
    console.log('add 16:');
    //print the resulting change:
    console.log(BH.T);
    //insert 14 back into the heap:
    BH.maxHeapInsert(14);
    console.log('add 14:');
    //print the resulting change:
    console.log(BH.T);
    //return max:
    console.log('max:');
    console.log(BH.heapMaximum());
    //what if we want to merge a second heap:
    console.log('merge heap: [22,11,6]');
    var data2 = [22,11,6];
    BH.mergeHeap(data2);
    console.log(BH.T);



    //lets start over with data:
    console.log('data: '+ data);
    BH.heapSort(data);
    //print the result:
    console.log('heapsort:');
    console.log(BH.T);


}
