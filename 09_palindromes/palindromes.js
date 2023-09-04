const palindromes = function (string) {
    const filteredStringArray = string.split('').filter(e => {
        return (e !== ' ' && e !== ',' && e !== '.' && 
                e !== '!' && e !== '?' && e !== '-');
    })

    let filteredString = filteredStringArray.join('').split(' ').join('');
    filteredString = filteredString.toLowerCase();
    const reversedString = filteredString.split('').reverse().join('');

    return (filteredString === reversedString);
};

// Do not edit below this line
module.exports = palindromes;
