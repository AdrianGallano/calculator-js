let currentNum;
let newNum;

const addition = (newNum) => {
    currentNum += newNum
}

const subtraction = (newNum) => {
    currentNum -= newNum
}

const division = (newNum) => {
    currentNum /= newNum
}

const mulitplication = (newNum) => {
    currentNum *= newNum
}


const chooseOperator = () => {
    return {
        "": addition(),
        
    }
}