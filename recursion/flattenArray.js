function flatten(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (isArray(arr[i])) {
			result.push(flatten(arr[i]));
		}
		result.push(arr[i]);		
	}
	return result;
}

function assertEqual(actual, expected, testName) {
	
	if (actual.length !== expected.length) {
		console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
		} else if (actual === expected) {
		console.log('passed');
		}  else {
		console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
		}
	}

assertEqual([1, [2], [[3], 4], 5], [1,2,3,4,5], flatten)