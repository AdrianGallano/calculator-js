const semiOperators = document.getElementsByClassName("semi-operator");
const arithmeticOperators = document.getElementsByClassName("operator")
const numbersButton = document.getElementsByClassName("number")
const backspaceButton = document.getElementById("CL")
const clearButton = document.getElementById("AC")
const screenText = document.getElementsByClassName("screen")[0]
const equalButton = document.getElementById("equal");

// States
let numHolder;
let isFirstNumberActive = false;
let isOperatorActive = false;
let currentNumber = 0;
let currentNumberText = "";
let currentOperator = "";
let previousOperator = ""


const displayIndividualNumber = (e) => {
    limitNumInput()
    if(isOperatorActive){
        Array.from(arithmeticOperators).forEach(opr => opr.addEventListener("click", operator))
        isOperatorActive = false;
    }
    if(currentNumberText == "" && e.target.textContent == '0'){
        currentNumberText = "";
    }else{
        currentNumberText += e.target.textContent;
        screenText.textContent = currentNumberText;
    }
    removeOperatorActive()
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
    screenText.textContent = 0
    numHolder;
    isFirstNumberActive = false;
    isOperatorActive = false;
    currentNumber = 0;
    currentNumberText = "";
    currentOperator = "";
    previousOperator = ""
    removeOperatorActive()
}

const getNum = () => {
    if(currentNumberText == ""){
        numHolder = 0;
    }else{
        numHolder = Number(currentNumberText); 
    }
    return numHolder
}

const checkFirstNumberActive = () => {
    if(!isFirstNumberActive){
        isFirstNumberActive = true;
        return false;
    }
    return true;
}

const setOperatorActive = (activeOperator) => {
    Array.from(arithmeticOperators).forEach(btn => {
        if(activeOperator == btn.id){
            btn.classList.add("operator-active")
        }else if(btn.classList.contains("operator-active")){
            btn.classList.remove("operator-active")
        }
    })
    
}

const removeOperatorActive = () => {
    Array.from(arithmeticOperators).forEach(btn => {
        if(btn.classList.contains("operator-active")){
            btn.classList.remove("operator-active")
        }
    })
}

const changeSign = () => {
    if(currentNumberText.includes("-")){
        currentNumberText = currentNumberText.slice(1,)
        screenText.textContent = currentNumberText
    }else{
        currentNumberText = "-" + currentNumberText
        screenText.textContent = currentNumberText
    }
}

const percentage = () => {
    currentNumberText = String(Number(currentNumberText) * 0.01)
    screenText.textContent = currentNumberText
}

const addDecimal = () => {
    if(!currentNumberText.includes(".")){
        currentNumberText += "."
        screenText.textContent = currentNumberText;
    }
}

const total = () => {
    operator("total")
}

const combineNumber = (previousOperator) => {
    if(!checkFirstNumberActive()){
        currentNumber = getNum()
        currentNumberText = ""
    }else{
        switch(previousOperator){
            case "add":
                currentNumber += getNum();
                break;
            case "subtract":
                currentNumber -= getNum();
                break;
            case "divide":
                currentNumber /= getNum();
                break;
            case "multiply":
                currentNumber *= getNum();
                break;
        }
        if(String(currentNumber).length > 10){
            currentNumber = currentNumber.toExponential(4)
        }
    }
}

const finalDisplay = () => {
    currentNumberText = currentNumber;
    if(currentNumberText == "Infinity"){
        currentNumberText = "lmao";
    }
    screenText.textContent = currentNumberText;
    currentNumberText = "";
}

const operator = (e) => {
    setIsOperatorActive()
    previousOperator = currentOperator
    if(e == "total"){
        currentOperator = undefined
    }else{
        currentOperator = e.target.id;
    }
    if(currentOperator){
        setOperatorActive(currentOperator)
    }
    combineNumber(previousOperator)
    finalDisplay()
}

const limitNumInput = () => {
    if(currentNumberText.length > 10){
        currentNumberText = currentNumberText.slice(0, currentNumberText.length-2)
    }
    return currentNumberText
}

const setIsOperatorActive = () => {
    Array.from(arithmeticOperators).forEach(opr => opr.removeEventListener("click", operator))
    isOperatorActive = true;
}

if(isOperatorActive == false){
    Array.from(numbersButton).forEach(number => number.addEventListener("click", displayIndividualNumber))
}

Array.from(arithmeticOperators).forEach(opr => opr.addEventListener("click", operator))

clearButton.addEventListener("click", clear)
backspaceButton.addEventListener("click", backspace)
equalButton.addEventListener("click", total)
semiOperators[0].addEventListener("click", percentage)
semiOperators[1].addEventListener("click", addDecimal)
semiOperators[2].addEventListener("click", changeSign)
