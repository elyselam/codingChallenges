// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function highestScoringWord(str) {
	let words = str.split(' ');
	let max = 0;
	let highest = ""
	
	for (let i = 0; i < words.length; i++) {
	  let word = words[i];
	  let sum = 0;
  
	  for (let j = 0; j < word.length; j++) {
		sum += word.charCodeAt(j) - 96 // bc instruction says a = 1
	  }
	  if (max < sum) {
		highest = word
	  }
	}
	return highest
  }
  
  console.log(highestScoringWord("hello world")); // "world"
  