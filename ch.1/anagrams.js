// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples


const anagrams = (str1, str2) => {
	let result = {};
	for (let ch of word) {
		if (result[ch]) {
			result[ch]++
		} else {
			result[ch] = 1
		}
	}
	return result

}




console.log(anagrams('rail safety', 'fairy tales')) // True
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')) // True
console.log(anagrams('Hi there', 'Bye there')) // False
