let previousValue = "";
let totalValue = "";
let previousScreen = document.querySelector('.previousScreen');
let currentScreen = document.querySelector('.currentScreen');
let numbers = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let decimal = document.querySelectorAll('.decimal');
let buttons = document.querySelectorAll('.button')

numbers.forEach((number) => number.addEventListener('click',function(e){
    addNumber(e.target.textContent);
    currentScreen.textContent = totalValue;

    
}))

let addNumber = function(number){
    totalValue += number
}


let operators = {
    add(operant1, operant2){
    console.log(operant1 + operant2)
    },
    subtract(operant1,operant2){
    totalValue -= operant1 - operant2;
    },

    multiply(operant1,operant2){
    totalValue *= operant1 * operant2;
    },

    divide(operant1,operant2){
    totalValue /= operant1 / operant2;
    },
}

let operate = function(operant1,operator,operant2){
    if(operator === "+"){
        operators.add(operant1,operant2);
    }
    else if (operator === "-"){
        return operators.subtract(operant1,operant2);
    }
    else if (operator === "*"){
        return operators.multiply(operant1,operant2);
    }
    else return operators.divide(operant1,operant2);
    }

operate(5,'+',8);

