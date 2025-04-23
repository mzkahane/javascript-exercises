const removeFromArray = function(array, ...args) {
    let ret = []
    for (elem of array) {
        if (!(args.includes(elem))) {
            ret.push(elem)
        }
    }

    return ret
};

// Do not edit below this line
module.exports = removeFromArray;
