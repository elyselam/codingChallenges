//function PentagonalNumber(num) read num which will be a positive integer and determine how many dots exist in a pentagonal shape around a center dot on the Nth iteration. For example, in the image below you can see that on the first iteration there is only a single dot, on the second iteration there are 6 dots, on the third there are 16 dots, and on the fourth there are 31 dots. 

function PentagonalNumber(num) { 
	var sum = 1 //if num = 1, sum = 1
	for (let i = 1; i <=  num; i++) {
	   sum += (i-1) * 5
	} 
	return sum;         
  }
PentagonalNumber(1) //1
PentagonalNumber(2) //6
PentagonalNumber(3) //16
PentagonalNumber(4) //31
  
  
function recursePentagonalNumber(num) {
	if (num === 1) {
		return 1;
	}
	//								1-1 + (1-1) * 5
	//								2-1 + (2-1) * 5
	//								3-1 + (3-1) * 5
	//								4-1 + (4-1) * 5
	return recursePentagonalNumber(num-1) + (num-1) * 5
}
recursePentagonalNumber(3)