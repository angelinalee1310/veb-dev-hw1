/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(arg) {
        if (functions.length === 0) {
            return arg;
        }
        let res = arg;
        for (let i = functions.length - 1; i >= 0; i--) {
            res = functions[i](res);
        }
        return res;  
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */