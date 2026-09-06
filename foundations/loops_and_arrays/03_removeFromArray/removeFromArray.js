const removeFromArray = function(arr, ...num) {
    let l = arr.length;
    for(let i=0; i<l; i++){
        if(num.includes(arr[i])){
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
