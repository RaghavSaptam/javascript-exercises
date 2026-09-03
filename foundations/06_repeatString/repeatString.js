const repeatString = function(str, num) {
    if(num == 0){
        return '';
    }else if(num < 0){
        return 'ERROR';
    }else{
        let temp = '';
        for(let i=0; i<num; i++){
            temp += str;
        }
        return temp;
    }
};

// Do not edit below this line
module.exports = repeatString;
