//given array and chunk size, divide array into many subarrays where each subarray is that size

//create empty arr to hold chunks
//for each element in unchunked array
	//retrieve last element in chunked
	//if last element does not exist, or its length is equal to chunk size
		//push new chunk into 'chunked' with el
	//else add element into the chunk
const chunk = (arr, size) => {
	const chunked = [];
	//last el of array, if la`
	for (let i of arr) {
		const last = chunked[chunked.length-1];
		if (!last || last.length === size) {
			chunked.push([i])
		} else {
			last.push(i)
		}
	}
	return chunked

}






console.log(chunk([1, 2, 3, 4], 2)) //[[ 1, 2], [3, 4]])
console.log(chunk([1, 2, 3, 4, 5], 2)) // [[ 1, 2], [3, 4], [5]])
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))// --> [[ 1, 2, 3], [4, 5, 6], [7, 8]])
console.log(chunk([1, 2, 3, 4, 5], 4)) //[[ 1, 2, 3, 4], [5]])
console.log(chunk([1, 2, 3, 4, 5], 10)) //[[ 1, 2, 3, 4, 5]])