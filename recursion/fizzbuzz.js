function fizzBuzz(n) {
	if (n < 1) {
		return;
	} 
	if (n % 3 === 0 && n % 5 === 0) {
		console.log('fizzbuzz');
	} else if (n % 3 === 0) {
		console.log('fizz');
	} else if (n % 5 === 0) {
		console.log('buzz');
	} else {
		console.log(n);
	}
	return fizzBuzz(n-1);

};
fizzBuzz(15)

function fizzBuzzArray(n, result = []) {
	if (n < 1) {
		return result;
	} 
	if (n % 3 === 0 && n % 5 === 0) {
		result.push('fizzbuzz');
	} else if (n % 3 === 0) {
		result.push('fizz');
	} else if (n % 5 === 0) {
		result.push('buzz');
	} else {
		result.push(n);
	}
	return result.concat(fizzBuzz(n-1));
}
console.log(fizzBuzzArray(15))