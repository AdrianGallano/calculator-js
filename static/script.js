const semiOperators = document.getElementsByClassName("semi-operator");
const arithmeticOperators = document.getElementsByClassName("operator")
const numbersButton = document.getElementsByClassName("number")
const backspaceButton = document.getElementById("CL")
const clearButton = document.getElementById("AC")
const screenText = document.getElementsByClassName("screen")[0]

// States
let isFirstNumberActive = false;
let currentNumber = 0;
let currentNumberText = "";
let isOperatorActive = false;


const displayNumber = (e) => {
    currentNumberText += e.target.textContent
    screenText.textContent = currentNumberText
}

const setFirstNumber = () => {
    if(isOperatorActive == true && isFirstNumberActive == false){
        currentNumber = Number(currentNumberText)
        isFirstNumberActive = true;
        return true;
    }
    return false;
}

const itsComplicated = (e) => {
    isOperatorActive = true;
    if(setFirstNumber() != true){
        combineNumber(e.target.id, Number(currentNumberText))
    }
    
}

const combineNumber = (chosenOperator, nextNum) => {
    console.log(chosenOperator)
    switch(chosenOperator){
        case 'addition':
            currentNumber += nextNum;
            break;
        case 'subtraction':
            currentNumber -= nextNum;
            break;
        case 'multiplication':
            currentNumber *= nextNum;
            break;
        case 'division':
            currentNumber /= nextNum;
            break;
    }
}

Array.from(numbersButton).forEach(number => number.addEventListener("click", displayNumber))
Array.from(arithmeticOperators).forEach(number => number.addEventListener("click", itsComplicated))











