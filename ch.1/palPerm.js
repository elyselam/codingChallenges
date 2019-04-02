
//Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
const palPerm = str => {
    let arr1 = [];
    let arr2 = [];
    arr1 = str.split(' ').join('').split('');
    for (let i = 0; i < arr1.length ; i++) {

        arr2[i] = arr1[arr1.length-1-i];
    }
    console.log (arr1,arr2);

    return arr1.join('') === arr2.join('');
}

let input = 'taco cat';
console.log(palPerm(input)) //true "tacocat", "atcocta" 