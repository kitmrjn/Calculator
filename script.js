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
        return alert ("Bich that won't work");
    }
    return Number(num1) / Number(num2);
};

function operate (operator, a, b) {
    
    switch (operator) {
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


numbers.forEach(button => {
    button.addEventListener("click", () => {
        if (resetScreen) {
            screenDisplay.value = "";
            resetScreen = false;
        }
        screenDisplay.value += button.textContent;
    });
});

operators.forEach(button => {
    button.addEventListener("click", () => {
        if (currentOperator !== null && !resetScreen) {
            secondNumber = screenDisplay.value;
            const result = operate(currentOperator, firstNumber, secondNumber);
            screenDisplay.value = Math.round(result);
            firstNumber = result;
        } else {
            firstNumber = screenDisplay.value;
        }
        currentOperator = button.textContent;
        resetScreen = true;
    });
});

equals.addEventListener("click", () => {

    if (currentOperator === null || resetScreen) return;
    secondNumber = screenDisplay.value;
    const result = operate(currentOperator, firstNumber, secondNumber);
    screenDisplay.value = Math.round(result);   
    firstNumber = result;
    currentOperator = null;
    resetScreen = true;
});

clear.addEventListener("click", () => {
    
    screenDisplay.value = "";
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    resetScreen = false;
})