/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // checking if there are any nodes
    if (!this.root) return 0;
    let treeSum = this.root.val;

    const sum = (node) => {
      // go through all the children of a node
      for (let child of node.children) {
        // add the value to the current node
        treeSum += child.val;
        // if there are more items, keep iterating
        if (child.children.length > 0) {
          sum(child);
        }
      }
    }

    sum(this.root);
    return treeSum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let count = this.root.val % 2 == 0 ? 1 : 0;

    const getEven = (node) => {
     for (let child of node.children) {
      if (child.val % 2 == 0) count++;
      if (child.children.length > 0) {
        getEven(child);
      }
     }
    }

    getEven(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = this.root.val > lowerBound ? 1 : 0;

    const getGNum = (node) => {
     for (let child of node.children) {
      if (child.val > lowerBound) count++;
      if (child.children.length > 0) {
        getGNum(child);
      }
     }
    }

    getGNum(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
