arr.filter()
arr.map()
arr.reduce()
arr.forEach


// **********************
var arr1 = [], arr2 =[], arr3=[];
function divideArr(arr, n){
    var sum_so_far=0,sum=0;
    for(let i=0;i<n;i++){
        sum += arr[i];
    }
    sum_so_far = 0;
    for(let j=0;j<n;j++){
		arr3.push(arr[j]);
        if(2 * sum_so_far + arr[j] == sum){
            printSubArr(arr,0,j-1,arr1);
            printSubArr(arr,j+1,n-1,arr2);
            return true;
        }
    	sum_so_far += arr[j];
    }return false;
}

function printSubArr(arr, start, end, arrR){
	for(let i=start;i<=end;i++){
// console.log(arr[i]);
		arrR.push(arr[i]);
	}
}var arr=[6,2,3,2,1];
divideArr(arr,arr.length);//arr3;//
console.log(arr2, arr1);
