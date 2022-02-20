const numbersButton = document.getElementsByClassName("number")
const clear = document.getElementById("AC")
const currentNumText = document.getElementsByClassName("screen")[0]
const operators = document.getElementsByClassName("operator")
let operatorActive = false;
let currentValue = 0;

const getNum = (e) =>{
    changeScreenText(e.target.textContent)
}

const resetAll = () => {
    operatorActive = false;
    currentValue = 0
    currentNumText.textContent = currentValue
}

const changeScreenText = (num) => {
    if(currentNumText.textContent == "0"){
        currentNumText.textContent = "";
    }
    currentNumText.textContent += num;

    if(operatorActive === true){
        currentValue += Number(currentNumText.textContent)
        currentNumText.textContent = "0"
        operatorActive = false;
    }
}

const setOperatorActive = () => {
    operatorActive = true;
}

Array.from(numbersButton).forEach(num=>num.addEventListener("click", getNum))
Array.from(operators).forEach(oper=> oper.addEventListener("click", setOperatorActive))
clear.addEventListener("click", resetAll)


