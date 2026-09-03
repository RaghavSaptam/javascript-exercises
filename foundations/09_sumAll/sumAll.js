const sumAll = function(num1, num2) {
    if(num1 > 0 && num1 % 1 === 0 && typeof num1 === 'number' && num2 > 0 && num2 % 1 === 0 && typeof num2 === 'number'){
        let i = Math.min(num1, num2);
        let j = Math.max(num1, num2);
        let sum = 0;
        for(; i<=j; i++){
            sum += i;
        }
        return sum;
    }else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
