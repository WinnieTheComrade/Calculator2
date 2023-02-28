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
    add(operant, operant){
    totalValue += operant + operant;
    },
    subtract(operant,operant){
    totalValue -= operant - operant;
    },

    multiply(operant,operant){
    totalValue *= operant * operant;
    },

    divide(operant,operant){
    totalValue /= operant / operant;
    },
}

let operate = function()