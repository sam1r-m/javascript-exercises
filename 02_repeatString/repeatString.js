const repeatString = function(string, numberOfTimes) {
    if (numberOfTimes < 0) {
        return "ERROR";
    }
    
    let returnString = "";
    for (let i = 0; i < numberOfTimes; i++) {
        returnString = returnString + string;
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
