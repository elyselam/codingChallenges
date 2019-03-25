//i: arr of unique numbers
//o: new arr, rankings of original array,

//Given an array of unique numbers, return a new array of rankings of the original array. For example, if your input array is [10, 5, 20], the output should be [2, 3, 1], since 10 is the second largest number, 5 is the third largest, and 20 is the largest.

function rankings(arr){
	//slice so we make a copy of arr bc sort modifies array
	let sorted = arr.slice().sort((a, b) => a - b) //[ 5, 10, 20 ]
	let obj = {};
	let res = [];
	for (let i = 0; i < sorted.length; i++) {
	  //obj[5]
	  let num = sorted[i];
   //bc index starts at 0
	  //bc we have unique numbers
	
	  //obj[each element] = i + 1
	  obj[num] = i + 1; //{5: 1}
	}
	console.log(obj) //{ '5': 1, '10': 2, '20': 3 }
  
	//loop over array, use each element as the key in the obj
  
	for (let i = 0; i < arr.length; i++) {
	  console.log(arr[i])
	  let key = arr[i]
	  //value in obj that is in original array
	  //grabbing value into resulting array
	  res.push(obj[key])
	}
	return res;  
  }
rankings([10, 5, 20]); // [2, 3, 1]