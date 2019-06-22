// * 678 lines if code
const plus = document.getElementById("add");
const minus = document.getElementById("subtract");
const mult = document.getElementById("multiply");
const div = document.getElementById("divide");
const clear = document.getElementById("clear");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function add() 
{
    var answer = parseInt(num1.value) + parseInt(num2.value);
    result.innerHTML = `Result of question: ${num1.value} + ${num2.value} = ${answer}`;
    blankVals();
}

function subtract() 
{
    var answer = parseInt(num1.value) - parseInt(num2.value);
    result.innerHTML = `Result of question: ${num1.value} - ${num2.value} = ${answer}`;
    blankVals();
}

function multiply() 
{
    var answer = parseInt(num1.value) * parseInt(num2.value);
    result.innerHTML = `Result of question: ${num1.value} * ${num2.value} = ${answer}`;
    blankVals();
}

function divide() 
{
    var answer = parseInt(num1.value) / parseInt(num2.value);
    if (num1.value == 0 && num2.value == 0)
        result.innerHTML = `Result is undefined`;

    else if (num2.value == 0)
        result.innerHTML = `Cannot divide by 0`;

    else
        result.innerHTML = `Result of question: ${num1.value} / ${num2.value} = ${answer}`;
    blankVals();
}

function clearAll()
{
    num1.value = "";
    num2.value = "";
    result.innerHTML = `Result of question: 0 + 0 = 0`;
}

function blankVals()
{
    if ((num1.value == "") || (num2.value == "") || (num1.value == "" && num2.value == ""))
        result.innerHTML = `No blank values please`;
}

function changeUi(sheet) 
{
    document.getElementById("pageStyle").setAttribute("href", sheet);    
}