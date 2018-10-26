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


var points = [40,30,24,1,3];var p =  [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}];
    points.sort((a, b) => {
        return 0.5 - Math.random();
    });
    points.sort((a,b) => b-a);
    Math.max.apply(null,[40,30,80,100]);
    Math.min.apply(null,points);
    var t = Object.assign({}, points);
    myArrMax(points);
    function myArrMax(arr){
        var len = arr.length, max = Infinity;
    // console.log(max);
        while(len--){
            if(arr[len] < max){
                max = arr[len];
            }
        }return max;
    }
    p.sort((a,b) => {
        a.year - b.year;
    });
    var at = [11,2,23,44,54,66,'',null,undefined].filter(a => a!='' && a != null );
    at.splice(2,1);at;
    
    