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

function caesarCipher(string,shiftFactor){
    let cipherArray=[]
    string.split("").forEach(element => {
        let elementCode=element.charCodeAt(0);
        if(elementCode>=65 && elementCode<=90){
            elementCode=(elementCode+shiftFactor)%91 || 65;
        }
        else if(elementCode>=97 && elementCode<=122){
            elementCode=(elementCode+shiftFactor)%123 || 97;
        }
        let cipherElement=String.fromCharCode(elementCode);
        cipherArray.push(cipherElement);
    });
    return cipherArray.join("");
}

function analyzeArray(array){
    return {
        average: Math.floor(array.reduce((previousNumber,currentNumber) => previousNumber+currentNumber,0)/array.length),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    };
}
module.exports={capitalize, reverseString, calculator, caesarCipher, analyzeArray};