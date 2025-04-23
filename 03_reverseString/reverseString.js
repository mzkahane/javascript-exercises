const reverseString = function(string) {
    let letters = string.split("")
    let reverse = ""

    for (let i = letters.length-1; i >= 0; i--)
        reverse += letters[i]

    return reverse
};

// Do not edit below this line
module.exports = reverseString;
