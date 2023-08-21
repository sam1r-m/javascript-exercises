const sumAll = function(first, last) {
    let sum = 0;

    if ((typeof(first) != "number") || (typeof(last) != "number")) {
        return "ERROR";
    }
    else if ((first < 0) || (last < 0)) {
        return "ERROR";
    }
    else if (first > last) {
        let temp = first;
        first = last;
        last = temp;
    }

    for (first; first <= last; first++) {
        sum = sum + first;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
