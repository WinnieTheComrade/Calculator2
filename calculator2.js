let previousValue = "";
let totalValue = "";
let previousScreen = document.querySelector('.previousScreen');
let currentScreen = document.querySelector('.currentScreen');
let numbers = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let decimal = document.querySelectorAll('.decimal');

let operators = {
    add(operant1, operant2){
    totalValue += operant1 + operant2;
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
    if()
}