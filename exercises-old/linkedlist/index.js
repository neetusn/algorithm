// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null){
        this.data = data;
		this.next = next;
    }
}

class LinkedList {
	constructor(){
		this.head = null;
	}
	insertFirst(data){
		this.insertAt(data, 0);
	}
	size(){
		let counter = 0;
		var node = this.head;
		while(node){
			counter++;
			node= node.next;
		}
		return counter;
	}
	getFirst(){
		return this.getAt(0);
	}
	getLast(){
		// if(!this.head){
		// 	return null;
		// }
		// var node = this.head;
		// while(node.next){
		// 	node = node.next;
		// }
		// return node;
		return this.getAt(this.size()-1);
	}
	clear(){
		this.head = null;
		
	}
	removeFirst(){
		if(!this.head){
			return null;
		}

		this.head = this.head.next; 
	}
	removeLast(){
		// if(!this.head){
		// 	return;
		// }
		// if(!this.head.next){
		// 	this.head = null
		// 	return;
		// }
		// var prev = this.head;
		// var node = this.head.next;
		// while(node.next){
		// 	prev = node;
		// 	node = node.next;
		// }
		// prev.next = null;
		this.removeAt(this.size()-1);
	}
	insertLast(data){
		// const lst = this.getLast();
		// if(lst){
		// 	lst.next = new Node(data);
		// }else{
		// 	this.head = new Node(data);
		// }
		this.insertAt(data, this.size());
	}
	getAt(index){
		if(!this.head) {
			return null;
		}
		let counter = 0;
		let node = this.head;
		
		while(node) { 
			   
			if(counter === index) {
				return node;
			}counter++;
			node = node.next;
		}
		return null;
	}
	removeAt(index) {
		if(!this.head) {
			return;
		}
		if(index === 0) {
			this.head = this.head.next;
			return;
		}
		var prev = this.getAt(index-1);
		if(!prev || !prev.next) {
			return;
		}
		prev.next = prev.next.next;
	}
	insertAt(data, index){
		if(!this.head){
			this.head = new Node(data);
			return;
		}
		if(index === 0){
			this.head = new Node(data, this.head); 
			return;
		}
		var prev = this.getAt(index-1) || this.getLast();
		prev.next = new Node(data, prev.next);
		return;
	}
	search(searchData){
		var currentNode = this.head;
		var counter = 0;
		while(currentNode){
			if(searchData === currentNode.data){
				return;
			}
			currentNode = currentNode.next;
		}return false;
	}
	forEach(fn){
		let node = this.head;
		let counter = 0;
		while(node){
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while(node){
			yield node;
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
