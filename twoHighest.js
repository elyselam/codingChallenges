/**
 * This approach takes 1 single sweep of the array with two pointers.
 *  The highest and secondHighest are initialized to negative Infinity
 *  so that any numbers in the array will be eligible. Then set the
 *  secondHighest first, and if it's greater than the highest, swap.
 */
function twoHighest(nums) {
  
	let highest = -Infinity;
	let secondHighest = -Infinity;
	
	//num = 25
	for (let num of nums) { 
	  //25 > 4
	  if (num > secondHighest) {
		//second = 4
		secondHighest = num;
	  }
	  // 25 > 4
	  if (secondHighest >= highest) {
		//temp = 4
		let tmp = highest; 
		//highest = 25
		highest = secondHighest; 
		//second = 4
		secondHighest = tmp;
	  }
	}
	//highest = 25
	//second = 4
	return [secondHighest, highest];
  }
  
  twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]
  
  
  
  
  
  
  