// In a shift cipher the meanings of the letters are shifted by some set amount. A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


//asciitable: num 65(A)-90(Z) represent uppercase letters
//letter n (ascii #78) is the midpoint and which you have to subtract 
const rot13 = (str, result = "") => {
	for (let i = 0; i < str.length; i++) {
		//find ascii num of that letter
		let asciiNum = str[i].charCodeAt();
		
		//move a 13 times to the left if letter is before 'n'
		if (asciiNum >= 65 && asciiNum <= 77) {
			//convert ascii back to letters, and add the result string
			result += String.fromCharCode(asciiNum + 13)
		} else if (asciiNum >= 78 & asciiNum <90) {
			result += String.fromCharCode(asciiNum - 13);			
		} else {
			//spaces are added to result, isn't counted in rotation
			result += str[i]
		}
	}
	return result;
}



console.log(rot13("SERR CVMMN!")) //FREE PIZZA!