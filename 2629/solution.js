var compose = function(functions) {
    
    return function(x) {
        let lastResult = x
        for (let i = functions.length - 1; i >= 0; i--) {
            lastResult = functions[i](lastResult)
        }
        return lastResult
    }
};