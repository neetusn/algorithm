// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
 var matches = str.match(/[aeiou]/gi);
 return matches === null ? 0:matches.length;
}
function vowels2(str){
	var cnt = 0;
	str.toLowerCase().split('').forEach((chr) => {
		if(['a','e','i','o','u'].includes(chr)){cnt++}
	});return cnt;
}

module.exports = vowels2;
