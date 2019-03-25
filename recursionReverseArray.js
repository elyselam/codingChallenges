function reverseArr(arr) {
	if (arr.length === 0) {
	  return [];
	}
		  //[4].concat(reverseArr([1,2,3])
		  //[3].concat(reverseArr([1,2]))
		  //[2].concat(reverseArr([1]))
		  //[1].concat(reverseArr[])
		  //[1].concat([])
  
		  //[4].concat([3].concat([2]).concat[1].concat[0].concat[])
  
	return arr.slice(-1).concat(reverseArr(arr.slice(0,-1)));
  }
  
  console.log(reverseArr([1,2,3,4])); //[ 4, 3, 2, 1 ]
  
  console.log(reverseArr([])) //[]
  
  console.log(reverseArr([1])) //1