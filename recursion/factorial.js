function factorial(n) {
	if (n === 0) {
		return 1
	}
	let next = factorial(n-1)
	let curr = n;
	return curr * next
}


console.log(factorial(5)); // 120
console.log(factorial(1)); // 1
console.log(factorial(0)); // 1