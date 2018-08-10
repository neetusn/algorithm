// hash table constant time look up in insertion
// lookup: O(1), insertion: O(1)
// stores data key and value pair
function HashTable(size){
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}
function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
}
HashTable.prototype.hash = function (key){
    var total = 0;
    for(var i = 0;i<key.length;i++){
        total += key.charCodeAt(i);
    }
    var res = total % this.numBuckets;
    return res;
};
HashTable.prototype.insert = function (key, value) {
    var index = this.hash(key);
    if(!this.buckets[index]) {
        this.buckets[index] = new HashNode(key, value);
    }else if(this.buckets[index].key === key){
		this.buckets[index].value = value;
	}
	else {
        var currentNode = this.buckets[index];
        while(currentNode.next){
			if(currentNode.next.key === key){
				currentNode.next.value = value;
				return;
			}
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }
    
}
HashTable.prototype.get = function(key){
    var index = this.hash(key);
    if(!this.buckets[index]){
        return null;
    }else {
        var currentNode = this.buckets[index];
        while(currentNode){
            if(currentNode.key === key){
                return currentNode.value;
            }
        }return null;
    }
}
HashTable.prototype.retrieveAll = function(){
    var allNodes = [];
    for(var i = 0; i<this.numBuskets;i++){
        var currentNode = this.buckets[i];
        while(currentNode){
            allNodes.push(currentNode);
            currentNode = currentNode.next;
        }
    }return allNodes;
};
var myHT = new HashTable(30);
// console.log(valueOf(myHT));
// myHT.hash('becca');
myHT.insert('dean', 'dean@gmail.com');
myHT.insert('dean2', 'dean2@gmail.com');
console.log(myHT);



