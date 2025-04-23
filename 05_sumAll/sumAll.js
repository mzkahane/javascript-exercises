const sumAll = function(start, end) {

    if ((start < 0 || end < 0) || 
        (!Number.isInteger(start) || !Number.isInteger(end))) {
        return "ERROR"
    }

    if (start > end) {
        let temp = start
        start = end
        end = temp
    }

    let array = []
    for (let i = start; i <= end; i++) {
        array.push(i)
    }

    let sum = 0
    for (let n of array) {
        sum += n
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
