function isEven(num) {

    if (num === 0) {
        return true;
    }
    else if (num === 1) {
        return false;
    }
    else {
        return isEven(num - 2); //keeps subtracting 2 until it hits base cases
    }

}
console.log("50 is even " + isEven(50));


