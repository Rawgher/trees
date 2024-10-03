/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    const minDFS = (node) => {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minDFS(node.right) + 1;
      if (node.right === null) return minDFS(node.left) + 1;
      return Math.min(minDFS(node.left), minDFS(node.right)) + 1;
    }

    return minDFS(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    const maxDFS = (node) => {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxDFS(node.right) + 1;
      if (node.right === null) return maxDFS(node.left) + 1;
      return Math.max(maxDFS(node.left), maxDFS(node.right)) + 1;
    }

    return maxDFS(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;
    let res = 0;

    const getMaxSum = (node) => {
      if (node === null) return 0;
      const lSum = getMaxSum(node.left);
      const rSum = getMaxSum(node.right);
      res = Math.max(res, node.val + lSum + rSum)
      return Math.max(0, node.val + lSum, node.val + rSum);
    }

    getMaxSum(this.root);
    return res;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let queue = [this.root];
    let closest = null;

    while(queue.length) {
      let curNode = queue.shift();
      let curVal = curNode.val;
      let higher = curVal > lowerBound;
      let newClosest = curVal < closest || closest === null;

      if (higher && newClosest) {
        closest = curVal;
      }

      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }

    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
