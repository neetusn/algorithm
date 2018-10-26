// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(start, end) {
	var i = start;
	while(i<parseInt(n)){
		i++;
		if(i%5===0 && i%3===0) console.log('fizzbuzz');
		else if(i % 3 ==0) console.log('fizz');
		else if(i % 5 == 0 ) console.log('buzz');
		else console.log(i);
	}
}

module.exports = fizzBuzz;




/*
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
    
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write(input + ".\n");       // Writing output to STDOUT
}
function multiplesT(num){
	if(num%3 == 0 && num%5 == 0){
		return 35;
	}else if(num%3 == 0){
		return 3;	
	}else if(num%5 == 0){
		return 5;
	}else 
		return false;
}
var arr = [2,3,5];
function printPattern(arr){
    var arrLen = arr[1].length;
    var arrLen2 = arr[2].length;
    for(var i=1;i<arrLen;i++){
        res = multiplesT(arr[1]);
        if(res==35){
            process.stdout.write("FizzBuzz");
        }else if(res == 3){
            process.stdout.write("Fizz");
        }else if(res == 5){
            process.stdout.write("Buzz");
        }else process.stdout.write(i);
    }
    for(var i=1;i<arrLen2;i++){
        res = multiplesT(arr[2]);
        if(res==35){
            process.stdout.write("FizzBuzz");
        }else if(res == 3){
            process.stdout.write("Fizz");
        }else if(res == 5){
            process.stdout.write("Buzz");
        }else process.stdout.write(i);
    }
	
}printPattern(arr);
// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
var inpt = [];

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
    inpt.push(input);
    
});

process.stdin.on("end", function () {
    // process.stdout.write(stdin_input);
    var inVal = stdin_input.split('\n');
    var arr = inVal[1].split(' ');
   
   main(arr);
});

function main(arr) {
    //  console.log(Number(arr[0]));
     for(var k=0;k<arr.length;k++){
        var i = 0, n=arr[k];
        while(i<Number(n)){
            i++;
            if(i%5===0 && i%3===0) console.log('FizzBuzz');
            else if(i % 3 ==0) console.log('Fizz');
            else if(i % 5 == 0 ) console.log('Buzz');
            else console.log(i);
        }
    }
}

pratik.yadav@cimpress.com.


// console.log(arguments.length);
var res ={};
// for(var i =0;i<arguments.length;i++){
for(var k in obj1){
	if(obj2[k] >= 0 ){
		res[k] = obj2[k]+obj1[k];
    }
}
console.log(res);

