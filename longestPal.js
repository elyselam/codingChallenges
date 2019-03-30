function findLongestPalindrome(sentence) {
	// split sentence into words
	let words = sentence.split(" ")
	// iterate words and collect the palindromes
	let arrayPal = [];
	for (let i = 0; i < words.length; i++) {
	  let word = words[i]
	  if (isPalindrome(word)) {
		arrayPal.push(word);
	  }
	}
	// sort the list of palindromes by word length
	let largestPal = arrayPal.sort()[arrayPal.length-1]
	// return the largest item in the sorted list
	return largestPal;
  }
  
  
  function reverseString(string) {
	//
  }
  
  function isPalindrome(word) {
	// hint: you can detect palindromes by comparing a string to its reverse
  }
  
  function sortAscendingByLength(a, b) {
  }