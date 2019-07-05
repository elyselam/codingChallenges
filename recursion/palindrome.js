//01234
//doggo
//mom

const isPalindrome = str => {
	if (str.length <= 1) {
		return true;
	}
	//d === o //false
	//m === m //true
	//returns false right away if first and last items don't match
	if (str[0] === str[str.length - 1]) {
		//shortens argument at the first and last element each time
		return isPalindrome(str.slice(1, str.length - 1))
	}
	return false
}



isPalindrome('hi'); // false
isPalindrome('iii'); // true