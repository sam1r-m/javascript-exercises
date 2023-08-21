const reverseString = function(string) {
    let returnString = "";
    let length = string.length - 1;

    for (let i = length; i >= 0; i--) {
        returnString = returnString + string.charAt(i);
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
