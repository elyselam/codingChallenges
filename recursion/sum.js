//takes array of int & returns sum

const sumArr = arr => {
	if (arr.length < 1) {
		return 0;
	}
	//1 + sum([2,3,4,5]
	//1 + (2 + sum([3,4,5]))
	//1 + (2 + (3 + sum([4,5])))
	//1 + (2 + (3 + (4 + sum([5]))))
	//1 + (2 + (3 + (4 + (5 + sum([]))))
	//15 :D!
	//return head + sum(tail)
	//slice makes a new array
	debugger
	return arr[0] + sumArr(arr.slice(1))

}
let arr = [1,2,3,4,5]
console.log(sumArr(arr)) //15


////currentNum is item that gets popped out
// let currentNum = arr.shift()

// //arr is shorten from the front 
// let result = sumArr(arr)

// //item popped out + shorten array
// return currentNum + result
// }