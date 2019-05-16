// Normally, the factorial of a positive integer n is the product of all positive integers less than or equal to n.  For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.

// We instead make a clumsy factorial: using the integers in decreasing order, we swap out the multiply operations for a fixed rotation of operations: multiply (*), divide (/), add (+) and subtract (-) in this order.

// For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.  However, these operations are still applied using the usual order of operations of arithmetic: we do all multiplication and division steps before any addition or subtraction steps, and multiplication and division steps are processed left to right.

// Additionally, the division that we use is floor division such that 10 * 9 / 8 equals 11.  This guarantees the result is an integer.

// Implement the clumsy function as defined above: given an integer N, it returns the clumsy factorial of N.

// Input: 4
// Output: 7
// Explanation: 7 = 4 * 3 / 2 + 1
// Example 2:

// Input: 10
// Output: 12
// Explanation: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1

//1 <= N <= 10000
//-2^31 <= answer <= 2^31 - 1  (The answer is guaranteed to fit within a 32-bit integer.)
// https://www.w3schools.com/js/js_type_conversion.asp
// The Data Type of typeof
//     The typeofoperator is not a variable.It is an operator.Operators(+ - * / ) do not have any data type.

// But, the typeof operator always returns a string(containing the type of the operand).

const clumsy = n => {
	
	//0123
    //*/+-;
    // first operation arr[0] * arr[1]
    //second operation (arr[0]*arr[1]) / arr[2];
    // third operation ((arr[0]*arr[1]) / arr[2]) + arr[3]
    // fourth operation (((arr[0]*arr[1]) / arr[2]) + arr[3]) - arr[4]

	var arr = [];
	for (let i = n; i > 0; i--) {
		arr.push(i);
	}

    var output = arr[0]; //4
    //i am going to identify what the operation will be
	//based on the number of the index of the arr array.
	
	//index 1 is '3'
    for (let j = 1; j < arr.length; j++) {


		//1 % 4 === 1 which means it's the index of array 1, that's 3, so we multiply 4 and 3 

        if (j%4 === 1) { //index needs to start at 1 because can't multiply at index 0
            console.log(`multiplying output ${output} with ${arr[j]}.`);
            //multiply
            output *= arr[j];
            console.log(`output after multiplication is ${output}`);

		}
		//index 2, which is value 2, so we 4*3 / 2
        else if (j%4 === 2) {
            //output /= (arr[j]))
            console.log(`dividing output ${output} with ${arr[j]}.`);
            output /= (arr[j]);
            console.log(`output after division is ${output}`);
        }
        else if (j%4 === 3) {
            console.log(`adding output ${output} with ${arr[j]}.`);
            output += arr[j]
            console.log(`output after addition is ${output}`);

            //add
        }
        else if (j%4 === 0) {
            console.log(`subtracting output ${output} with ${arr[j]}.`);
            output -= arr[j];
            //subtract
            console.log(`output after subtraction is ${output}`);

		}
	}

	return (Math.floor(output));
} 

//[4, 3, 2, 1] 
//[]
// Input: 4
// Output: 7
// Explanation: 7 = 4 * 3 / 2 + 1
// Example 2:

// Input: 10
// Output: 12
// Explanation: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
// Explanation: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
// console.log(clumsy(1));
// console.log(clumsy(2));
// console.log(clumsy(3));
console.log(clumsy(10));