const reverseString = function(str) {
    let l = str.length;
    let temp = '';
    for(let i=l-1; i>=0; i--){
        temp += str[i];
    }
    str = temp;
    return str;
};

// Do not edit below this line
module.exports = reverseString;
