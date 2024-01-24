var isPalindrome = function(x) {
    const numberString = x.toString()
    const numbers = numberString.split('')
    const numbers_aux = [...numbers]
    numbers.reverse()
    console.log(numbers);
    console.log(numbers_aux);
    let i = 0, contador = 0
    while (contador < numbers_aux.length){
        console.log(numbers_aux[i]);
        console.log(numbers[i]);
        if (numbers_aux[i] !== numbers[i]){
            return false
        }
        i++;
        contador++;
    }
    return true
};

/* Better solution 

var isPalindrome = function(x) {
    let y = x.toString();
    let j = y.length -1;

    if (x < 0) {
        return false;
    }

    if (y.length === 1) {
        return true
    }

    if (y.length === 2) {
        return (y[0] === y[1])
    }

    for(i =0; i <= (y.length / 2); i++) {
        if (y[i] !== y[j] ) {
           return false;
        } 
        j--;
    }

    return true;
    
};

*/

console.log(isPalindrome(121));
