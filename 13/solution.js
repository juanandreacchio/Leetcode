var romanToInt = function(s) {
    let value = 0
    const numbers = s.split('')
    let i = 0
    while (i < numbers.length) {
        switch (numbers[i]){
            case 'I':
                if (numbers[i+1] === 'V'){
                    value+=4
                    i+=2
                }
                else if (numbers[i+1] === 'X'){
                    value += 9
                    i+=2
                }
                else{
                    value+=1
                    i+=1
                }
                break;
            case 'X':
                if (numbers[i+1] === 'L'){
                    value+=40
                    i+=2
                }
                else if (numbers[i+1] === 'C'){
                    value += 90
                    i+=2
                }
                else{
                    value+=10
                    i+=1
                }
                break;
            case 'C':
                if (numbers[i+1] === 'D'){
                    value+=400
                    i+=2
                }
                else if (numbers[i+1] === 'M'){
                    value += 900
                    i+=2
                }
                else{
                    value+=100
                    i+=1
                }
                break;
            case 'V':
                value += 5
                i++
                break;
            case 'L':
                value+= 50
                i++
                break;
            case 'D':
                value+=500
                i++
                break;
            case 'M':
                value+=1000
                i++
                break;
            }
                
    }
    return value
};

/* Better solution
function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        if (next > current) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}
*/