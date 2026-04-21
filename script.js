


let equation = document.querySelector(".display-Eq");
let expression = "";

let result = document.querySelector(".display-Ans");
let answer = null;


function appendDisplay(input){

    const operators = ['+', '-', '*', '/'];

    let lastChar = expression.slice(-1);

    if (operators.includes(lastChar) && operators.includes(input)) {
        
        return;
    }

    expression += input;
    equation.textContent = expression;

}

function clearDisplay(){
    expression = "";
    answer = "";
    equation.textContent = "";
    result.textContent = "0";
}

function backspace(){
    expression = expression.slice(0, -1);
    equation.textContent = expression;
}

function Calculate(){
    const operators = ['+', '-', '*', '/'];

    try {
        let lastChar = expression.slice(-1);

        if(operators.includes(lastChar)){
            throw new Error("Last Char can not be an operator");
        }

        answer = eval(expression);
        result.textContent = answer;

    } catch (error) {
        console.error(error.message);
            expression = expression.slice(0,-1);
            answer = eval(expression);
            result.textContent = answer;
    }

}