//Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const isUnique = arr => {
	return (new Set(arr).size === arr.length) ? true : false
}

console.log(isUnique([1,2,3,5,3,3]));