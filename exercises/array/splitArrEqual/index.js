
var s1=[], s2=[];
arr[0] < arr[1]?(s1.push(arr[0]),s2.push(arr[1])):(s1.push(arr[1]),s2.push(arr[0]));

for(let i=0;i<n;i++){
	var sum1 = sum(s1);
	var sum2 = sum(s2);
	console.log(sum1,"===>",sum2);
	if(sum1 === sum2 && i==(n-1) ) {console.log("success",s1,s2,n);break;}
	if(sum1 < sum2){
		s1.push(arr[i]);
	}else if(sum1 >= sum2){
		s2.push(arr[i]);
	}
}
function sum(arr){
	return arr.reduce((sum, el) => {return sum+el});
}

// **********************************
var arr = [1,1,1,1,1,1];
// arr = arr.reverse();
function divideAndRule(arr) {

    return test(arr.reverse()) || test(arr);
    
    
    }   
    
    function test(arr){
        for(var j=0;j<arr.length;j++){
            if(sum(arr) === arr.length && arr.length%2 !==1 && 3 > arr.length > Math.pow(10,5)){
                return -1;
            }
            var s1=[], s2=[],sum1=0, sum2=0, n=arr.length;
            for(var i=0;i<n;i++){
                if (i === j) { continue; }
                sum1 = sum(s1);
                sum2 = sum(s2);
                var f,s=0;		
                if(sum1 === 0 && sum2 === 0){
                    f=arr[i];
                    (j===(i+1))?s=arr[i+2]:s=arr[i+1]; 
                    f<s?(s1.push(f), s2.push(s)):(s1.push(s),s2.push(f));
                }else {
                    (sum1<sum2)?s1.push(arr[i]):s2.push(arr[i]);
                }
            }
            if(sum1===sum2) {
                return 1;
            }else if(sum1!==sum2 && j===(n-1)) {
                return -1;
            }
        }
    }
    function sum(arr){
        if(typeof arr !== 'undefined' && arr.length > 0){
            return arr.reduce(function (sum, el) {return sum+el});
        }else return 0;
    }
    

    // ********************** 

var arr = [1,1,1,1];
function isSubSetSum(arr, n, sum){
	if(sum == 0 ){
		return true;
	}if(n==0 && sum != 0) return false;
	if(arr[n-1] > sum){
		return isSubSetSum(arr, n-1, sum);
	}console.log(sum,"====>",n);
	return isSubSetSum(arr, n-1, sum) || isSubSetSum(arr, n-1,sum-arr[n-1]);	
}
function findPartition(arr, n){
	sum = 0;
	for(i =0;i<n;i++){
		sum += arr[i];		
	}console.log(sum);
	if(sum%2 != 0) return false;
	return isSubSetSum(arr, n, sum/2);
}
findPartition(arr, arr.length);
    
// *************************
var arr = [1,2,3,4,5,6];
var resArr=[];
for(var k=0;k<=arr.length;k++){
    for(var i=0;i<=arr.length;i++){
      if(i!=k && i+1 != k && i+2 != k && arr[k]){
          var ar = [arr[k], ...arr.slice(i,i+2)];
          if(ar.length === 3){
              resArr.push(ar);
          }
      }
    }
}
// // 135,136,153,264,146