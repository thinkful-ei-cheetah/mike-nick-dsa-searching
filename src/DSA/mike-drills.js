/* 1. How many searches
    input: [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
  * value = 8, start = 0, end = input.length
  Binary Search:
    count = 1
      start = 0
      end = input.length = 10
      middle = 11

    count = 2
      start = 0
      end = middle - 1 = 3
      middle = 5

    count = 3
      start = 2
      end = 3
      middle = 6
    
    count = 4
      start = 3
      end = 3
      middle = 8  **the value we are looking for**
  
  * find value = 16, start =0, end = input.length
  count = 1
      start = 0
      end = input.length = 10
      middle = 11

    count = 2
      start = 5
      end = 10
      middle = 15

    count = 3
      start = 8
      end = 10
      middle = 17

    count = 4
      start = 8
      end = 8
      middle = 15

    count = 5
      start = 9
      end = 8
    
    return - 1
  *It will take 5 iterations to determine that the value is not in the array
*/

// 2. Adding a React UI
// referred to component file

/* 3. Find a book
 input: array of objects representing library
 output: { 'dewey': '100', 'title': 'I Love Coding' }, ...
  binary search by dewey,
    if number is less than 100 on the right
    if number is greater than 100 on the right
  repeat and go to center of results
    if number is less than 100 on the right
    if number is greater than 100 on the right
    ...
  
*/
// function findABook(lib, dewey, title) {
  
// }

/* 4. Searching in a BST
  1) in-order: 14 15 19 25 27 35 79 89 90 91
     pre-order: 35 25 15 14 19 27 89 79 91 90
     post-order: 14 15 19 25 27 35 79 89 90 91

           35
        /      \
       25      89
      /  \    /  \ 
     15  27  79  91
    /  \         /
   14  19       90

   2) post-order: 5 7 6 9 11 10 8
      pre-order: 8, 6, 5, 7, 10, 9, 11

            8
        /      \
       6       10
      / \     /  \
     5   7   9   11
*/

// 5. Implement different tree traversals
const BinarySearchTree = require('./BST');
function treeTraversals() {
  let BST = new BinarySearchTree();
  BST.insert(25, '25');
  BST.insert(15, '15');
  BST.insert(50, '50');
  BST.insert(10, '10');
  BST.insert(24, '24');
  BST.insert(35, '35');
  BST.insert(70, '70');
  BST.insert(4, '4');
  BST.insert(12, '12');
  BST.insert(18, '18');
  BST.insert(31, '31');
  BST.insert(44, '44');
  BST.insert(66, '66');
  BST.insert(90, '90');
  BST.insert(22, '22');

  const preOrder = tree => {
    // console.log({ preOrder: tree.key });
    if (tree.left) {
      preOrder(tree.left);
    }
    if (tree.right) {
      preOrder(tree.right);
    }
  };
  
  const inOrder = tree => {
    if (tree.left) {
      inOrder(tree.left);
    }
    // console.log({ inOrder: tree.key });
    if (tree.right) {
      inOrder(tree.right);
    }
  };

  const postOrder = tree => {
    if (tree.left) {
      postOrder(tree.left);
    }
    if (tree.right) {
      postOrder(tree.right);
    }
    // console.log({ postOrder: tree.key });
  };

  preOrder(BST);
  inOrder(BST);
  postOrder(BST);
}
treeTraversals();

// 6. Find the next commanding officer
const Queue = require('./Queue');
function cmdOfficer(tree, result = []) {
  const queue = new Queue();
  queue.enqueue(tree);

  while (queue.first !== null) {
    const node = queue.dequeue();
    result.push(node.value);

    if (node.left) {
      queue.enqueue(node.left);
    }

    if (node.right) {
      queue.enqueue(node.right);
    }
  }
  // result.forEach(officers => console.log(officers));
}

function nextOfficer() {
  let BST = new BinarySearchTree();
  BST.insert(5, 'Captain Picard');
  BST.insert(3, 'Commander Riker');
  BST.insert(6, 'Commander Data');
  BST.insert(8, 'Lt. Cmdr. Crusher');
  BST.insert(7, 'Lieutenant Selar');
  BST.insert(2, 'Lt. Cmdr. Worf');
  BST.insert(4, 'Lt. Cmdr. LaForge');
  BST.insert(1, 'Lt. security-officer');

  cmdOfficer(BST);
}
nextOfficer();

// 7. Max profit
function maxProfit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > max) {
      max = arr[i + 1] - arr[i];
    }
  }
  console.log(max);
  return max;
}
// gets 24 for next day
maxProfit([128, 97, 121, 123, 98, 97, 105]); 

function maxProfit2(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let diff = arr[j] - arr[i]
      if (diff > max) {
        max = diff
      }
    }
  }
  console.log(max);
  return max;
}
// gets 26 for any following day
maxProfit2([128, 97, 121, 123, 98, 97, 105]);