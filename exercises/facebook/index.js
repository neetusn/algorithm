
function maxSubArraySum){
	var max_so_far=Number.MIN_SAFE_INTEGER;
	var max_ending_here=0;
	for(var i=0;i<arr.length;i++){
		max_ending_here = max_ending_here+arr[i];
		if(max_so_far < max_ending_here){
			max_so_far = max_ending_here;
        }
		if(max_ending_here<0){
			max_ending_here=0;
		}
console.log(max_so_far,'--->',max_ending_here);
	}
return max_so_far;	
}
var  t = maxSubArraySum([-2,-3,4,-1,-2,1,5,-3]);
t;