const operators = document.querySelectorAll('.operators');
const numbers = document.querySelectorAll('.numbers');
const screenDisplay = document.querySelector("#operationInput");
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let resetScreen = false;


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
    if (num2 === "0") {
        return "Error";
    }
    return Number(num1) / Number(num2);
};

function operate (operator, a, b) {
    
    switch (operate) {
        case "+":
            return addition (a, b);
        case "-":
            return subtraction (a, b);
        case "x": 
            return multiplication (a, b);
        case "➗":   
            return divide (a, b);
        default: 
            return null;
    }
}
