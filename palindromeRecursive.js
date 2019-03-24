function palindrome(str){
  str = str.toLowerCase();

  if (str.length === 1) {
    return true;
  }
  if (str[0] !== str[str.length-1]) {
    return false;
  }
    //shortens both sides
  return palindrome(str.slice(1,-1));
  
}
palindrome('racecar');

