// `newerThanVersion` will take two version strings and should:
//   - return true if the first version is newer
//   - return false otherwise 
// for example: 
// 3.4 is newer than 3.3
// 10.1 is newer than 9.9
// 4.1 is newer than 3.10
// 5 is newer than 4

//i: 2 strings
// true if numerical val of num1 > num2


var newerThanVersion = function(v1, v2) {
	let arr1 = v1.split('.') // arrays [0, 12 , 1 ]
	let arr2 = v2.split('.')
  
	//2.1.0 vs 2.1.1
	for (let i = 0; i < arr1.length; i++){
  
		//2 > 1
	  if (parseInt(arr1[i]) > parseInt(arr2[i])) {
		return true 
  
	  } else if (parseInt(arr1[i]) === parseInt(arr2[i])) {
		continue;
	  } else { 
		return false
	  }
	}
	return false //which means both arrays are equal
  }
  
  
  
  function assert(expectedBehavior, descriptionOfCorrectBehavior) {
	if (!expectedBehavior) {
	  console.log(descriptionOfCorrectBehavior);
	} else {
	  console.log('test passed');
	}
  }
  
  // newerThanVersion should be able to handle version strings 
  // that contain a major version, minor version, and build version.
  
  assert(newerThanVersion("1", "2") === false, "Should return false; 2 is newer than 1");
  assert(newerThanVersion("5.1", "4.8") === true, "Should return true; 5.1 is newer than 4.8");
  assert(newerThanVersion("5.1.8", "5.1.7") === true, "Should return true; 5.1.8 is newer than 5.1.7");
  assert(newerThanVersion("5.1.8", "5.1.8") === false, "Should return false; 5.1.8 is the same as 5.1.8");
  assert(newerThanVersion("10.1", "9.8") === true, "Should return true; 10.1 is newer than 9.8");
  assert(newerThanVersion("2.10.2", "2.6.12") === true, "Should return true; 2.10.2 is newer than 2.6.12");
  assert(newerThanVersion("5.1", "5.0") === true, "Should return false ; 5.1 is newer than 5.0");
  assert(newerThanVersion('5', '6') === false, 'Should return false; 5 is older than 6')
  assert(newerThanVersion('0.12.1', '1.2.3') === false, 'Should return false; 0.12.1 is older than 1.2.3')
  assert(newerThanVersion('1', '1.1.1') === false, 'Should return false; 1 is older than 1.1.1')
  