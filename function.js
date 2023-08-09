function capitalize(string){
    return string[0].toUpperCase()+string.slice(1);
}

function reverseString(string){
    return string.split("").reverse().join("");
}

class calculator{
    static addition(a,b){
        return a+b;
    }

    static subtraction(a,b){
        return a-b;
    }

    static multiplication(a,b){
        return a*b;
    }

    static division(a,b){
        if(b===0){
            throw new Error("Can't divide by zero");
        }
        return a/b;
    }
}

function analyzeArray(array){
    return {
        average: Math.floor(array.reduce((previousNumber,currentNumber) => previousNumber+currentNumber,0)/array.length),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    };
}
module.exports={capitalize, reverseString, calculator, analyzeArray};