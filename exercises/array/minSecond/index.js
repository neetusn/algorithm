var arr = [11,2,3,4,10,23,5,8,0];
var indexOfMin = arr[0];var indexOfSMin = arr[1];
	for(var j = 1;j<arr.length;j++){
		if(arr[j] < indexOfMin){
			indexOfSMin = indexOfMin;
			indexOfMin = arr[j];
		}
	}
console.log(indexOfMin, indexOfSMin);