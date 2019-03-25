function power(base, exponent) {
	//base case
	if (exponent == 0) {
	  return 1;
	} else {
	  //2 * (2, 3 - 1)  
	  //2 * (2, 2 - 1) => 2 * 
	  //2 * (2, 1 - 1) => 2 * 1 = 2
   /* power(2,3) put on stack returns 2 * power(2,2)
	  power(2,2) put on stack returns 2 * power(2,1)
	  power(2,1) put on stack returns 2 * power(2,0) 
	  power(2,0) returns 1
	  power(2,1) returns 2*1
	  power(2,2) returns 2*(2*1)
	  power(2,3) returns 2*(2*(2*1)
	  power(2,3) returns in other words 8
	  
   */
	  return base * power(base, exponent - 1);
	}
  }
  
  console.log(power(2, 3));
  // → 8