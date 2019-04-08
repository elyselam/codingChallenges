// Bracket Match
// A string of brackets is considered correctly matched if every opening bracket in the string can be paired up with a later closing bracket, and vice versa. For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t. For instance, “((” could become correctly matched by adding two closing brackets at the end, so you’d return 2.
// Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched.
// Explain the correctness of your code, and analyze its time and space complexities.


//if not (), then return (total count - count of ())
//{count: ()}
//for loop to count how many (), complete count 

//`)())(`
function bracketMatch(str) {
	let openBracket = 0; //left bracket
	let needClosing = 0; //right bracket
	let left = 0;
  	let right = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			openBracket++;
			left++
		} else if (str[i] === ')' && openBracket === 0) {
			needClosing++;
			right++
		} else if (str[i] === ')' && openBracket > 0) {
			openBracket--;
			right++
		}
	}
	return openBracket + needClosing
}


bracketMatch(`(()`) //output: 1


bracketMatch(`(()`); //output: 1
bracketMatch(`)())(`) //3
// bracketMatch(`(())`) //0

// bracketMatch(`())(`) //2

