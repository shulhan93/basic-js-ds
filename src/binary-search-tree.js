const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootN = null;
  }

  root() {
    return this.rootN
  }

  add(n) {
    const node = new Node(n)
    if (this.rootN == null) {
      this.rootN = node;
      return;
    }

    function travers(currentNode) {

      if (node.data < currentNode.data) {
        if (currentNode.leftChild != null) {
          travers(currentNode.leftChild)
        } else {
          currentNode.leftChild = node
        }
      } else {
        if (currentNode.rightChild != null) {
          travers(currentNode.rightChild)
        } else {
          currentNode.rightChild = node;

        }
      }
    }

    travers(this.rootN)
  }

  has(data) {
    function travers(currentNode) {
      if (currentNode == null)
        return false
      if (currentNode.data == data)
        return true
      else if (currentNode.data > data)
        return travers(currentNode.leftChild)
      else
        return travers(currentNode.rightChild)
    }

    return travers(this.rootN)
  }

  find(data) {
    function travers(currentNode) {
      if (currentNode == null)
        return null
      if (currentNode.data == data)
        return currentNode
      if (currentNode.data > data)
        return travers(currentNode.leftChild)
      else
        return travers(currentNode.rightChild)
    }

    return travers(this.rootN)
  }

  remove(data) {

    function travers(currentNode, prevNode) {
      if (currentNode == null)
        return null
      if (currentNode.data == data)
        return { node: currentNode, prev: prevNode }
      if (currentNode.data > data)
        return travers(currentNode.leftChild, currentNode)
      else
        return travers(currentNode.rightChild, currentNode)
    }

    function deleteChildNode(node, prev) {
      if (prev == null) {
        this.rootN = null
      } else {
        if (prev.leftChild == node) {
          prev.leftChild = null
        } else {
          prev.rightChild = null
        }
      }
    }

    function deleteOneChildNode(node, prev) {
      let newNode = null;
      if (node.leftChild)
        newNode = node.leftChild
      else if (node.rightChild)
        newNode = node.rightChild

      if (prev == null) {
        this.rootN = newNode
      } else {
        if (prev.leftChild == node) {
          prev.leftChild = newNode
        } else {
          prev.rightChild = newNode
        }
      }
    }

    function deleteTwoChild(node, prev) {
      let prevResult = node;
      let result = node.leftChild;
      if (result.rightChild) {
        while (result.rightChild) {
          prevResult = result
          result = result.rightChild
        }
      }

      deleteOneChildNode.call(this, result, prevResult)
      let leftNodeChild = node.leftChild
      let rightNodeChild = node.rightChild

      if (prev == null) {
        result.leftChild = leftNodeChild
        result.rightChild = rightNodeChild
        this.rootN = result
      } else {
        if (prev.leftChild == node) {
          result.leftChild = leftNodeChild
          result.rightChild = rightNodeChild
          prev.leftChild = result
        } else {
          result.leftChild = leftNodeChild
          result.rightChild = rightNodeChild
          prev.rightChild = result
        }
      }

    }

    let result = travers(this.rootN, null)
    let node = result.node
    let prev = result.prev

    if (!node.leftChild && !node.rightChild) {
      deleteChildNode.call(this, node, prev)
    } else if (!node.leftChild && node.rightChild || node.leftChild && !node.rightChild)
      deleteOneChildNode.call(this, node, prev)
    else
      deleteTwoChild.call(this, node, prev)
  }

  min() {
    let arr = [];

    function traverseDFRecursive(node, callback) {
      callback(node);

      if (node.leftChild) {
        arr.push()
        traverseDFRecursive(node.leftChild, callback);
      }

      if (node.rightChild) {
        traverseDFRecursive(node.rightChild, callback);
      }
    }

    function traverseDF(root, callback) {
      traverseDFRecursive(root, callback);
    }
    traverseDF(this.rootN, node => arr.push(node.data))
    return Math.min(...arr)
  }

  max() {
    let arr = [];

    function traverseDFRecursive(node, callback) {
      callback(node);

      if (node.leftChild) {
        arr.push()
        traverseDFRecursive(node.leftChild, callback);
      }

      if (node.rightChild) {
        traverseDFRecursive(node.rightChild, callback);
      }
    }

    function traverseDF(root, callback) {
      traverseDFRecursive(root, callback);
    }
    traverseDF(this.rootN, node => arr.push(node.data))
    return Math.max(...arr)
  }
}

module.exports = {
  BinarySearchTree
};