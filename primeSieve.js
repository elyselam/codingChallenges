//Return an array of all the prime numbers from 2 to N, without using division or modulus. Sieve!


function primeNum(n) {
  let arr = new Array(n + 1).fill(0).map((x, i) => i);
  console.log(arr) 
  //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

  for (let i = 2;  i <= arr.length/2; i++) {

    for (let j = i; j <= n; j++) {

      //arr[2*2] = 4 = 0
      //arr[3*2] = 6 = 0
      //arr[4*2] = 8 = 0
      //arr[5*2] = 10 = 0
      //arr[6*2] = 10 = 0
      //arr[7*2] = 14 = 0

      //arr[3*3] = 9 = 0
      //arr[3*4] = 12 = 0
      //arr[3*5] = 15 = 0

      arr[i * j] = 0;
    }
  }
  //filter out the zeros
  return arr.filter(n => n !== 0)
}



primeNum(15) // [2, 3, 5, 7, 11, 13]
