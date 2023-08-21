const removeFromArray = function(array, ...removeTheseValues) {
    let arrayLength = array.length;
    let lengthOfValues = removeTheseValues.length;

    for (let i = 0; i < lengthOfValues; i++) {
        for (let j = 0; j < arrayLength; j++) {
            if (array[j] === removeTheseValues[i]) {
                array.splice(j, 1);
            } 
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
