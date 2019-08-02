//given array and chunk size, divide array into many subarrays where each subarray is that size

const chunk = (arr, size) => {
	//create empty 'chunked' array
	let chunked = [];

	//increment by size
	//[1, 2, 3, 4, 5], 2)) 
	for (let i = 0; i < arr.length; i+= size) {

		//slice at length of size into 'chunked'

		//slice returns shallow copy of array, include begin and excluding the end

		//[1, 2, 3, 4, 5].slice(0, 2)   // [1, 2]
		//[1, 2, 3, 4, 5].slice(3, 5) 	// [3, 4]
		//[1, 2, 3, 4, 5].slice(6)		//[5]
		chunked.push(arr.slice(i, i+size));
		
	}
	return chunked
}




console.log(chunk([1, 2, 3, 4, 5], 2)) // [[ 1, 2], [3, 4], [5]])



console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))// --> [[ 1, 2, 3], [4, 5, 6], [7, 8]])
console.log(chunk([1, 2, 3, 4, 5], 4)) //[[ 1, 2, 3, 4], [5]])
console.log(chunk([1, 2, 3, 4, 5], 10)) //[[ 1, 2, 3, 4, 5]])











//create empty arr to hold chunks
//for each element in unchunked array
	//retrieve last element in chunked
	//if last element does not exist, or its length is equal to chunk size
		//push new chunk into 'chunked' with el
	//else add element into the chunk
	// const chunk = (arr, size) => {
	// 	const chunked = [];
	// 	//([1, 2, 3, 4, 5], 2))
	// 	for (let i of arr) {
	
	// 		const last = chunked[chunked.length-1];
	// 		//if last doesn't exist, or its length is equal to size
	// 		if (!last || last.length === size) {
	// 			//push that element into chunked
	// 			chunked.push([i])
	// 		} else {
	// 			//have a chunk but it's not full
	// 			last.push(i)
	// 		}
	// 	}
	// 	return chunked
	
	// }
	