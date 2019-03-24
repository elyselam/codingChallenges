// Write a function mySlice that mirrors the behavior of JavaScript's .slice() array method. 
// The slice() method returns a copy of a portion of an array into a new array object selected from arguments begin to end (end not included). The original array will not be modified.  However,  unlike the built in method, mySlice will accept the array to operate on as its first parameter, rather than being invoked as a method on that array.  Try and mirror the behavior of the native .slice() method exactly.    

// A few things to keep in mind: the `begin` and `end` arguments are optional, `end` can be a negative number, and mySlice should not modify the original array!

// Note: Do not use the native .slice() method in your own implementation!  

//beg: if beg === undefined, returns arr
      //includes that index
//if end === undefined, grabs the rest of array
      //stops here, exclusive. < 


function mySlice(arr, beg, end) {
	let res = []
	if (beg === undefined) {
		return arr
	}
	//if no ending index, we iterate to the remainder of arr
	if (end === undefined) {
		end = arr.length
	}
	//if end is a negative number
	//([1,2,3,4], 0, -1)
	//end = -1 
	if (end < 0) {
		//end = 4 + - 1 => index 3 
		end = arr.length + end
	}
	//i = 0; i stops at index 3
	for (let i = beg; i < end; i++) {
		console.log(end)
		console.log(typeof arr[i]) //1, 2 , 3
		res.push(arr[i])
	}
	arr = res
	return arr
};
					// 0,1,2,3 
console.log(mySlice([1,2,3,4], 0, -1));
// //OUTPUT: [1, 2, 3]
//[1 ,2 ,3,4].slice(0, -2)

//EXAMPLE TESTS

// console.log(mySlice([1,2,1]));
// //OUTPUT: [1, 2, 1]

// console.log(mySlice([1,2,1], 1));
// //OUTPUT: [2, 1]
					// 0,1,2,3
//console.log(mySlice([1,2,3,4], 2, 3));
//OUTPUT: [3]
				// 0,1,2,3 
//console.log(mySlice([1,2,3,4], 0, -1));
// //OUTPUT: [1, 2, 3]
