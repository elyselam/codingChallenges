//i: arr
//o: number that was repeated twice
//e: numbers repeated more than twice, numbers not there

//Write a function called findTwins, which accepts an array of integers and finds two of same numbers and returns the number that is repeated twice. The function should return null if there is not a number repeated twice. count occurances of each item if value of count is 2, returns that key

function findTwins(arr) {
	if (arr.length === 0) return null;
	let count = {}; 
	let ones = 0; //we want to return null if elements don't repeat
  
	for (let i = 0; i < arr.length; i++) {   
	  let num = arr[i];
	  if (count[num] === undefined) {
		count[num] = 0;
	  } 
	  count[num]++;
	}   
	 //if value of count is 2, returns that key
	for (let key in count) {	  
	  	if (count[key] === 2) {     
			return parseInt(key);
		} else {
			if (count[key] === 1) { //{3:1, 2: 1, 1: 1, 4: 1,  5:1}
			ones++ //if there are no repeats { 0: 1, 1: 1, 3: 2, 4: 1, 6: 3 }
			//console.log(`these are ${ones}`)
			}
	  	}
	//if keys added up to the same number as length, we know all the values were 1
	}
	  if (ones === arr.length) {
		return null
	} 
}

console.log(findTwins([2,3,6,34,7,8,2])) // 2
console.log(findTwins([3,6,6,6,4,3,1,0])) // 3
console.log(findTwins([])) // null
console.log(findTwins([3,1,4,2,5])) // null