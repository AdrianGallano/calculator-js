const semiOperators = document.getElementsByClassName("semi-operator");
const arithmeticOperators = document.getElementsByClassName("operator")
const numbersButton = document.getElementsByClassName("number")
const backspaceButton = document.getElementById("CL")
const clearButton = document.getElementById("AC")
const screenText = document.getElementsByClassName("screen")[0]

// States
let numHolder;
let isFirstNumberActive = false;
let isOperatorActive = false;
let currentNumber = 0;
let currentNumberText = "";
let currentOperator = "";


const displayIndividualNumber = (e) => {
    if(currentNumberText == "" && e.target.textContent == '0'){
        currentNumberText = "";
    }else{
        currentNumberText += e.target.textContent;
        screenText.textContent = currentNumberText;
    }
    
}

const backspace = () => {
    if(currentNumberText.length > 1){
        currentNumberText = currentNumberText.slice(0, currentNumberText.length-1)
        screenText.textContent = currentNumberText
    }else{
        currentNumberText = ""
        screenText.textContent = 0
    }
}

const clear = () => {
    currentNumberText = ""
    screenText.textContent = 0
}

const operator = (e) => {
    numHolder = Number(currentNumberText) 
    currentOperator = e.target.id;
    console.log(e.target.id)


}


Array.from(numbersButton).forEach(number => number.addEventListener("click", displayIndividualNumber))
Array.from(arithmeticOperators).forEach(opr => opr.addEventListener("click", operator))
clearButton.addEventListener("click", clear)
backspaceButton.addEventListener("click", backspace)


// try everytime we press an we receive two things
// currentNumberText converted to number
// the operator pressed 
// if first number is not active assign it instead
// and reset the currentNumberText







