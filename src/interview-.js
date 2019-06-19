/* 
Given a post order traversal of a BST 
8, 12, 10, 16, 25, 20, 15 construct the BST
Don't worry about runtime or other optimization for now
you dont have a BST class available to you

input: 8, 12, 10, 16, 25, 20, 15
output:       15
           /      \
          10      20
         /  \    /  \
        8   12  16  25

  root is the last item in the array (15)
  * start at the end
    compare each item to see if it is less than the root
  when it is less than the root, stop at that index
  take that item and make that the left child
  consider that item as the next root
  * start at the end
    compare each item to see if it is less than the root
  when it is less than the root, stop at that index
*/
// 8, 12, 10, 16, 25, 20, 15
function postToBST(arr, start = 0, end = arr.length - 1) {
  let bst = new _Node(arr[end]); // assuming we created Node
  let i = 0;
  for (i = end; i >= start; i--) { // 1st i -> 10
    if (arr[i] < bst.key) {
      break;
    }
  }
  bst.left = postToBST(arr, start, i); 
  // left: 1st i -> 10, 2nd i -> 8, 3rd i -> 12
  bst.right = postToBST(arr, i + 1, end - 1); 
  // right: 1st i -> 20, 2nd i -> 16, 3rd i -> 25
}

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}