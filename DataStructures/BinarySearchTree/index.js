var binarySearchTree = require('./binarySearchTree').BST; 
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
   var BST = new binarySearchTree();
   data.forEach(function (key){
      BST.treeInsert(key);
   });

   console.log('size: '+BST.n);
   //find min:
   console.log('min: '+BST.treeMinimum().key);
   //find max:
   console.log('max: '+BST.treeMaximum().key);
   //sorted:
   process.stdout.write('sorted ouput:');
   BST.inorderTreeWalk();
   console.log();
   //iterative and recursive searching (return index)
   console.log('find \'8\' iteratively: '+BST.iterativeTreeSearch(8).key);
   console.log('find \'8\' recursively: '+BST.recursiveTreeSearch(8).key);
   var node_8 = BST.recursiveTreeSearch(8)
   //find the next largest number afer 8
   console.log('\'8\'s successor is: '+BST.treeSuccessor(node_8).key);
   //find the previous largest number before 8
   console.log('\'8\'s predecessor is: '+BST.treePredecessor(node_8).key);
   //delete a node via it's index:
   BST.treeDelete(node_8);
   process.stdout.write('deleted \'8\'. Sorted output:');
   BST.inorderTreeWalk();
   console.log();
   //print logical representation of Tree:
   console.log(BST.root);
   //print graphical representation:
   console.log('Graphical representation: INCOMPLETE');

}
