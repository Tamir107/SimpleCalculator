function isOperator(char){
    return (char === '+' || char === '-' || char === '/' || char === 'X');
}

function setNum1(op){
    if(expression.innerHTML === '') return;
    num1 = parseInt(expression.innerHTML);
    if(num1 === null || isNaN(num1)){
        alert("You must enter a number before using an operator.");
        clearCalc();
        return;
    }
    operator = op;
    writingToNum2 = true;
}

function appendResult(num){
    if(endOfCalc === true){
        clearCalc();
    }
    if(isOperator(num)){
        operatorCounter++;
        if (operatorCounter > 1){
            alert("You can use only one operator");
            clearCalc();
            return;
        }
    }
    if(isOperator(num) && isOperator(expression.innerHTML.charAt(expression.innerHTML.length - 1))){
        alert("cant add another operator");
        clearCalc();
        return;
    }
    expression.innerHTML += num;

    if(writingToNum2 === true && isOperator(num) === false){
        num2 += num;
    }
}

function getFinalResult(){
    num2 = parseInt(num2);
    if(isNaN(num2)){
        result.innerHTML = "= " + parseInt(expression.innerHTML);
        endOfCalc = true;
        return;
    }

    writingToNum2 = false;
    endOfCalc = true;

    switch (operator){
        case '+': result.innerHTML = "= "+(num1+num2);break;
        case '-': result.innerHTML = "= "+(num1-num2);break;
        case '/': result.innerHTML = "= "+(num1/num2);break;
        case 'X': result.innerHTML = "= "+(num1*num2);break;
        case '': result.innerHTML = "= " + parseInt(expression.innerHTML);break;
    }
}

function clearCalc(){
    expression.innerHTML = '';
    result.innerHTML = '';
    num1 = '';
    num2 = '';
    operator = '';
    writingToNum2 = false;
    endOfCalc = false;
    operatorCounter = 0;
}

const result = document.getElementById("resultScreen");
const expression = document.getElementById("expressionScreen");
let num1 = '';
let num2 = '';
let operator = '';
let writingToNum2 = false;
let endOfCalc = false;
let operatorCounter = 0;