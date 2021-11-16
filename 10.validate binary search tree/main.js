`A binary search tree (BST) is a binary tree whose elements are positioned in a special order such that in each binary search tree
all values in the left subtree are less than those in the subtree on the right.
A binary tree is a tree in which each node has two child nodes. 
The first child node is known as the left child node and the second child node is known as the right child node. 
Whereas a binary search tree is a binary tree where each node has a unique key such that each left node is less than each right node.`
class Node{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }

    validate() {
        return this.valid(this.root, Number.MIN_VALUE, Number.MAX_VALUE);
    }

    valid(node, min, max){
        if (node === null) return true;
        if (node.data <min|| node.data >max) return false;
        return (this.valid(node.left,min,node.data-1)&&this.valid(node.right,node.data+1,max));
    }
}