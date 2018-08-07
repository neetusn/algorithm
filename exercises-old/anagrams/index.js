// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	var obj1,obj2={};

	obj1 = buildCharMap(stringA);
	obj2 = buildCharMap(stringB);
	if(Object.keys(obj1).length !== Object.keys(obj2).length){
		return false;
	}
	for(let chr in obj1){
		if(obj1[chr] !== obj2[chr])
		{
			return false;
		}
	}return true;
}
function anagrams2(strA, strB){
	return (cleanString(strA) === cleanString(strB));
}
function cleanString(str){
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
function buildCharMap(str){
	var obj = {};
	for(let chr of str.replace(/[^\w]/g,'').toLowerCase()){
		obj[chr]= obj[chr]+1 || 1;
	}
	return obj;
}
module.exports = anagrams;
