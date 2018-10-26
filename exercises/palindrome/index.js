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

function getMinInsertion(str, l, h){
	if(l > h) return Number.MAX_SAFE_INTEGER;
	if( l == h) return 0;
	if(l == h-1) {
		return (str[l] == str[h] ? 0:1);
    }
if(str[l] == str[h]){
		return getMinInsertion(str, l+1, h-1);
	}else {
		return Math.min(getMinInsertion(str, l+1,h),getMinInsertion(str,l,h-1)) + 1;
	}
}
getMinInsertion("abcbe",0,4);
Number.MIN_SAFE_INTEGER;


module.exports = palindrome3;
