function deepEqual(obj, obj1){
    if (typeof obj !== "object" || obj == null ||
        typeof obj1 !== "object" || obj1 == null) {
		return false;
	}
	//in case we have objects inside of values
	for (key in obj) {
		//need to check if there is nested object as values
		//recursive function called 
        if (typeof obj[key] === "object" && typeof obj1[key] === "object") {
			if (deepEqual(obj[key],obj1[key]) === false) {
                console.log('here');
                return false;
            }
		}
		//if not nested objects, we check if values are equal
		if (obj[key] !== obj1[key]) {
			console.log('print')
			return false;
        } 
	}
	//check keys if they are the same
	//Object.keys() returns an array
	let arr = Object.keys(obj).sort();
	let arr1 = Object.keys(obj1).sort()

	if (arr.length !== arr1.length) {
		return false;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr1[i]) {
			return false
		}
		return true;
	}		
	return true;
}

let obj = {here: {is: "an"}, object: 2};
let obj1 = {here: ['is', "an"], object: 2}
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false


console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


//console.log(deepEqual(obj, {here: ['is', "an"], object: 2}));