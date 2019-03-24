// Write a function that accepts a string and returns the number of vowels in that string. Use recursion.

function countVowels(str) {
	//base case
	if (str.length <= 0) {
	  return 0;
	}
	// recursive case: the 'true' or 'false' value when added will convert to 1 or 0
	console.log(isVowel(str[0]))
	console.log(str.slice(1)) //shorten string each time fn runs, run
		  //        F       + our
		  //        o       + ur
	return isVowel(str[0]) + countVowels(str.slice(1)) //returns numbers
				  //false  +              (our)
				  //true + true = 2
  }
	
	
function isVowel(char) {
	var vowels = 'aeiouAEIOU';
	return vowels.indexOf(char) > -1; //returns - 1 > -1 , which is false
									  //returns index of vowel
  }
     
console.log(countVowels('Four'));   // => 2
  
  
