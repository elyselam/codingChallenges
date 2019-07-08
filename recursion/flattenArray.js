const flatten = (arr, result = []) => {
	arr.forEach(a => {
		//if item is an array
		if (Array.isArray(a)) {
			result = result.concat(flatten(a));
		} else {
			//if just a value, push to result
		result.push(a);		
	}
})
	return result;
}

console.log(flatten([1, [2], [[3], 4], 5]))// [1,2,3,4,5]



// const flatten = (arr, result = []) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (Array.isArray(arr[i])) {
// 			result.concat(flatten(arr[i]));
// 		}
// 		result.push(arr[i]);		
// 	}
// 	return result;
// }