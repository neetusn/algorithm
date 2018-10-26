// constant time look up , used to store key value pair
// hashTable and hashNode
function HashTable(size){
	this.buckets = Array(size);
	this.numBuckets = this.buckets.length;
}
HashTable.prototype.hash = function(key){
	var total = 0;
	for(var i=0;i<key.length;i++){
		total += key.charCodeAt(i);
	}var bucket = total%this.numBuckets;
	return bucket;
	
};
HashTable.prototype.insert = function(key,value){
	var node = new HashNode(key,value);
	var index = this.hash(key);
	if(!this.buckets[index]){
		this.buckets[index] = node;
    }else if(this.buckets[index].key === key){
		this.buckets[index].value = value;
	}else{
		var curNode = this.buckets[index];
		while(curNode.next){
			if(curNode.next.key === key){
				curNode.next.value = value;
				return;
			}
			curNode = curNode.next;
		}curNode.next = node;
	}
};
function HashNode(key, value, next){
	this.key = key;
	this.value = value;
	this.next = next || null;
}
var hsTbl = new HashTable(30);
hsTbl.insert("neetu", 123123);hsTbl.insert("neetu", 9999);hsTbl;
