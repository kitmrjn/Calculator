const operators = document.querySelectorAll('.operators');
const numbers = document.querySelectorAll('.numbers');
const myInput = document.querySelector("#operationInput");
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');

let firstNumber;
let secondNumber;
let operator;
let number;
let newNum = "";


function addition (num1, num2) {
    return Number(num1) + Number(num2);
};

function subtraction (num1, num2) {
    return Number(num1) - Number(num2);
};

function multiplication (num1, num2) {
    return Number(num1) * Number(num2);
} ;

function divide (num1, num2) {
    return Number(num1) / Number(num2);
};

//alert(divide(prompt(`Enter first number`,), prompt(`Enter second number`,)));

function operate (num1, operator, num2) {
    if (operator === '+') {
        return addition (num1, num2);
    } else if (operator === '-') {
        return subtraction (num1, num2);
    } else if (operator === '*') {
        return multiplication (num1, num2);
    } else if (operator === '/') {
        return divide (num1, num2);
    } else {
        return "invalid operator";
    }
};

numbers.forEach(button => {
    button.addEventListener('click', function(){
       myInput.value += this.textContent;
        number = myInput.value;
    });
});

operators.forEach(button => {
    button.addEventListener('click', function () {
        myInput.value += this.textContent;
         number = myInput.value;
    });
});

clear.addEventListener('click', function () {
        myInput.value = "";
    });




equals.addEventListener('click',() => {
    let result = eval(newNum);
    myInput.value = result;
});
