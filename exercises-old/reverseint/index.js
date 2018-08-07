// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	var reversed = '';
	for(let num of n.toString()){
		reversed = num+reversed; 
	}
	return parseInt(reversed);
}

function reverseInt2(n){
	return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}


module.exports = reverseInt2;
