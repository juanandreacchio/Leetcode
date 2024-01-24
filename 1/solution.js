var twoSum = function(nums, target) {
    for (let i = 0; i < array.length; i++) {
        const first = array[i];
        for (let j = 0; j < array.length; j++) {
            const second = array[j];
            if (first + second === target && i != j){
                return [i,j]
            }
        }
    }
};