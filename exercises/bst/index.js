// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.root = data;
        this.left = null;
        this.right = null;
    }
    insert(data){
       if(data < this.root && this.left){
            this.left.insert(data);
       }else if(data < this.root ){
           this.left = new Node(data);
       }else if(data > this.root && this.right){
           this.right(data);
       }else if(data > this.root){
           this.right = new Node(data);
       }
    }
    findMinNode(node){
        if(node.left){
            return findMinNode(node.left);
        }
    }
    removeNode(node, key)
    {
            
        // if the root is null then tree is 
        // empty
        if(node === null)
            return null;
    
        // if data to be delete is less than 
        // roots data then move to left subtree
        else if(key < node.data)
        {
            node.left = this.removeNode(node.left, key);
            return node;
        }
    
        // if data to be delete is greater than 
        // roots data then move to right subtree
        else if(key > node.data)
        {
            node.right = this.removeNode(node.right, key);
            return node;
        }
    
        // if data is similar to the root's data 
        // then delete this node
        else
        {
            // deleting node with no children
            if(node.left === null && node.right === null)
            {
                node = null;
                return node;
            }
    
            // deleting node with one children
            if(node.left === null)
            {
                node = node.right;
                return node;
            }
            
            else if(node.right === null)
            {
                node = node.left;
                return node;
            }
    
            // Deleting node with two children
            // minumum node of the rigt subtree
            // is stored in aux
            var aux = this.findMinNode(node.right);
            node.data = aux.data;
    
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    
    }
    contains(data) {
        if(this.root === data){
            return this;
        }
        if( this.root < data && this.left){
            this.right.contains(data);
        }else if (this.root > data && this.right) {
            this.left.contains(data);
        }
        return null;
    }
}

module.exports = Node;
