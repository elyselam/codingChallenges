
//Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

function palPerm(str) {
    str = str.toLowerCase().split(' ').join('');
    let myHash = {};
    let oddCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (!myHash[str[i]]) {
        myHash[str[i]] = 1;
    } else {
        myHash[str[i]] += 1;
    }
}
console.log(myHash)
  
    for (key in myHash) {
      if (myHash[key] % 2 === 1) {
        oddCount += 1;
      }
    }
    
    return oddCount <= 1;
  }
  console.log(palPerm('Tact Coa'));
//   console.log(palPerm('Tact Coa  '));
//   console.log(palPerm('bbba'));
//   console.log(palPerm('bb'));
//   console.log(palPerm('b'));