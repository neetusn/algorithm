// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	var charMap = {},max=0,maxChar='';
	for(let char of str){
		charMap[char] = charMap[char] + 1 || 1;
		charMap[char] > max ? (max = charMap[char], maxChar = char) : max;
	}return res;
}

module.exports = maxChar;
