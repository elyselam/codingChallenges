//One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

//pale, pie -> true pales, pale -> true pale, bale -> true pale, bake -> false


const oneAway = (str1, str2) => {
	if (str1.length < str2.length) {

		let temp = str1; //temp = pale
		str1 = str2; //str1 = ple
		str2 = temp; //str2 = pale
	}
	//iterate through the longer string
	for (let i = 0; i < str2.length; i++) {
		//remove letter that the 2 strings have in common
		if (str1[0] === str2[0]) {
			str1 = str1.slice(1) //removes p
			str2 = str2.slice(1) //removes p
		} else if (str1[str1.length - 1] === str2[str2.length - 1]) {
				str1 = str1.slice(0, -1); //shortens from the back
				str2 = str2.slice(0, -1)
		}
	}
	
	return str1.length <= 1 
}

//									 0123 , 023	
console.log(oneAway("pale","ple")); // true
// console.log(oneAway("pales","pale")); // true
// console.log(oneAway("pale", "bale")); // true
// console.log(oneAway("pale", "bake")); // false