// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	return str.split('').reduce((prev, curChar) => curChar+prev, '');
}

function reverse2(str){
	return str.split('').reverse().join('');
}

function reverse3(str){
	var reversed = '';
	for(let character of str){
		reversed = character+reversed;
	}return reversed;
}
reverse3('neetu');
module.exports = reverse;
