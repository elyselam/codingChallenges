//i: index 
//o: number

const fib = i => {
	if (i < 2) {
		return i;
	}
	return fib(i-1) + fib(i-2)
}


console.log(fib(3));  // => 2
console.log(fib(4));  // => 3
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144