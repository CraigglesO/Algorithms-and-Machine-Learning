var RedBlackTree = require('./RedBlackTree').RBT; 
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
   var RBT = new RedBlackTree();
   data.forEach(function (key){
      RBT.treeInsert(key);
   });

   console.log('size: '+RBT.n);
   //find min:
   console.log('min: '+RBT.treeMinimum().key);
   //find max:
   console.log('max: '+RBT.treeMaximum().key);
   //sorted:
   process.stdout.write('sorted ouput:');
   RBT.inorderTreeWalk();
   console.log();
   //iterative and recursive searching (return index)
   console.log('find \'8\' iteratively: '+RBT.iterativeTreeSearch(8).key);
   console.log('find \'8\' recursively: '+RBT.recursiveTreeSearch(8).key);
   var node_8 = RBT.recursiveTreeSearch(8)
   //find the next largest number afer 8
   console.log('\'8\'s successor is: '+RBT.treeSuccessor(node_8).key);
   //find the previous largest number before 8
   console.log('\'8\'s predecessor is: '+RBT.treePredecessor(node_8).key);
   //delete a node via it's index:
   RBT.treeDelete(node_8);
   process.stdout.write('deleted \'8\'. Sorted output:');
   RBT.inorderTreeWalk();
   console.log();
   //print logical representation of Tree:
   console.log(RBT.root);
   //print graphical representation:
   console.log('Graphical representation: INCOMPLETE');

}
