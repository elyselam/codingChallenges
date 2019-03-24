/*
Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
 - str: A string of uppercase characters.
 - searchLetters: An array of uppercase single-character strings (i.e ["A", "F", "K"])
The function should return the length of the longest streak of letters (consecutive letters) in the `str` that are in the `searchLetters`.

Note that a streak does not have to consist of the same letter repeated, a streak
just needs to contains letters from the `searchLetters` array.

longestLetterStreak("ACCA", ["C"]); // => 2
longestLetterStreak("YACCADCA", ["C", "A"]); // => 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]); // => 3
longestLetterStreak("YYYYY", ["Z", "K", "Y"]); // => 5
*/

function longestLetterStreak(str, searchLetters) {

	//returns -1 if ch isn't found 
	let longestStreak = -1;
	let count = 0;
  
	for (let i = 0; i < str.length; i++) {
	  let char = str[i];
	  //if the target letter is not undefined in the str
	  if (searchLetters.indexOf(char) !== -1){
		//count increases by value of 1
		count += 1;
		//if the current count is larger than -1
		if(count > longestStreak){
		  longestStreak = count;
		}
	  } 
	}
	return longestStreak;
  }
  
  longestLetterStreak("ACCA", ["b"]); // => 2