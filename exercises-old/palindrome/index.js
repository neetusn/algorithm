// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	var reversed = str.split('').reverse().join('');
	return (reversed === str);
}
function palindrome3(str){
	return str.split('').every((curChar, index, arr) => {
			return curChar === str[str.length-index-1];
	});
}

module.exports = palindrome3;
