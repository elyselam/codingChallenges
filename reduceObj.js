function strFrequency(arr) {

	return arr.reduce((count, el) => {
	  if (el in count) {
		count[el]++
	  } else {
		count[el] = 1;
	  }
	  return count;
	}, {});  
  }
  
  var names = ["Bob", "Bill", "Bo", "Ben", "Bob", "Brett", "Ben", "Bill", "Bo", "Ben", "Bob", "Ben"];
  
  console.log(strFrequency(names));
  //{ Bob: 3, Bill: 2, Bo: 2, Ben: 4, Brett: 1 }