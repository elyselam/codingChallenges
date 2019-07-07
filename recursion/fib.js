//i: index 
//o: number

const fib = i => {
	debugger
	if (i < 2) {
		return i;
	}

	//fib(5-1) + fib(5-2) 
	//fib(4-1) + fib(4-2)
	//fib(3-1) + fib(3-2)
	//fib(2-1) + fib(2-2) 
	return fib(i-1) + fib(i-2)
}


console.log(fib(3));  // => 2
console.log(fib(5));  // => 4
console.log(fib(7)); //13
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144