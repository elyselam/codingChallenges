//Given an array of numbers (not necessarily unique values), your goal is to measure how close the array is to being sorted by counting the number of inversions it has. An inversion occurs when two numbers in the array are out of order.

//Implement a function called numInversions which counts the number of inversions in the array.

//i: array of numbers, not unique
//o: how close it's to being sorted, inversion happens when 2 numbers are out of order

// function numInversion(arr) {
  
// }
// numInversions([]); // 0
// numInversions([5]); // 0
// numInversions([1,2]); // 0
// numInversions([2,1]); // 1
// numInversions([1,2,3]); // 0
// numInversions([1,3,2]); // 1
// numInversions([3,2,1]); // 3




function isEven(n) {
	if (n == 0) return true;
	else if (n == 1) return false;
	else if (n < 0) return isEven(-n);
	else return isEven(n - 2);
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → false