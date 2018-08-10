var arr = [1,2,3,4,5];
var arr2 = [3,4,5,6,7];
var res = [];
while(arr.length >= 1 && arr2.length >= 1){
	if(arr[0] <= arr2[0]){
		res.push(arr.shift());
    }else {
		res.push(arr2.shift());
	}
}console.log(res);