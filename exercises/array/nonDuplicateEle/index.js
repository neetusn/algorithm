
var arr = [11,2,3,4,10,23,5,8,0,2,3,4,3,2,4];
var obj2 = {};
arr.forEach(function(a){
	obj2[a] = obj2[a]+1 || 1;
});
var nonDuplicate = arr.filter((ch) => {
	return obj2[ch] === 1;
});
