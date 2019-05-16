


// preImmersive - buildingBlocksMastery - 100 - getAverageOfElementsAtProperty *
//     Write a function called “getAverageOfElementsAtProperty”.

// Given an object and a key, “getAverageOfElementsAtProperty” returns the average of all the elements in the array located at the given key.

//     Notes:
// * If the array at the given key is empty, it should return 0.
//     * If the property at the given key is not an array, it should return 0.
//         * If there is no property at the given key, it should return 0.

function getAverageOfElementsAtProperty(obj, key) {
	//console.log(obj[key]) //[]
	var sum = obj[key].reduce((sum, el) => sum + el)
	
	return sum / obj[key].length

	
}
 
var obj = {
    key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2