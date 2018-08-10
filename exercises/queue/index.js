// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor(){
        this.data = [];
    }
    add(record){
        this.data.unshift(record);
    }
    remove(){
        return this.data.pop();
    }
    peek(){
        return this.data[this.data.length-1];
    }
    reverseFirstKElement(k){
        var arr2 = [];
        for(var i =0;i<k;i++){	
            arr2.push(this.data.shift());
        }
        for(var j = 0;j<k;j++){
            this.add(arr2.shift());
        }
    }
}
// var q = new Queue();
// q.add(1);q.add(2);q.add(3);q.add(4);q.add(5);q.add(6);console.log(q.data);
// q.reverseFirstKElement(3);console.log(q.data);
module.exports = Queue;
