let nextNum = 0;
let currentNumber = 0;


const addition = (num) => {
    currentNumber += num;
}

const subtraction = (num) => {
    currentNumber -= num;
}

const division = (num) => {
    currentNumber /= num;
}

const multiplication = (num) => {
    if(currentNumber === 0){
        currentNumber = 1;
    }
    currentNumber *= num
}

const runCalc = () => {
    currentNumber = Number(prompt("please enter a number: "))
    const operator = prompt("choose your operator (+, -, *, /): ") 
    nextNum = Number(prompt("please enter another number: "))
    switch(operator){

        case '+':
            addition(nextNum)
            break;
        case '-':
            subtraction(nextNum)
            break;
        case '*':
            multiplication(nextNum)
        case '/':
            division(nextNum)
    }
    alert(currentNumber)

}
runCalc()
