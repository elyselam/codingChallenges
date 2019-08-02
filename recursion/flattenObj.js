const flattenObj = obj => {
	let result = {};
	for (let key in obj) {
		if (typeof obj[key] == 'object') {
			let subObj = flattenObj(obj[key]);
			for (subKey in subObj) {
				result[key + '.' + subKey] = subObj[subKey];
			}
		}else{
			result[key] = obj[key]
		}
	}
	return result
}
let test = {
	"Key1" : "1",
	"Key2" : {
			  "a" : "2",
			  "b" : "3",
			  "c" : {
					  "d" : {"x":{"y": "10"}},
					  "e" : "1"
					 }
			   }
		 }
console.log(flattenObj(test))
//     {'Key1': '1', 
// 'Key2.a': '2', 
// 'Key2.b': '3', 
// 'Key2.c.d.x.y': '10',   
// 'Key2.c.e': '1' }