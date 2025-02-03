/*

var firstNum = '';
var lastNum = '';

function values(x){
	var inputNum = document.getElementById('userInput');
	inputNum.value += x;
	firstNum += inputNum;

}

function erase(){
	document.getElementById('userInput').value = '';
}

function del(){
	var del1 = document.getElementById('userInput');
	del1.value = del1.value.slice(0,-1)
}

function cal(){
	var finalValue = document.getElementById('userInput');
	finalValue.value = eval(finalValue.value)
}

*/

/*
var arr = ["+" , "-" , "*" , "/"];
console.log(arr)

var num1 = "2+3-";
var num2 = "+";

var last = num1[num1 - 1];




console.log(last)
console.log(num1 += num2)
*/




/*
function addNumber() {
    // Get the value from the input field
    const userInput = parseFloat(document.getElementById('numInput').value);

    // Check if the input is a valid number
    if (isNaN(userInput)) {
        alert("Please enter a valid number.");
        return;
    }

    // Pre-defined number to add to the user input (e.g., 10)
    const predefinedNumber = 10;

    // Add the user input to the predefined number
    const sum = userInput + predefinedNumber;

    // Display the result
    document.getElementById('result').textContent = sum;
}

*/



var currentInput = "";
var currentOperation = "";
var previousInput = "";

function numbers(value){
	currentInput += value;
	document.getElementById("screen").value = currentInput
}

function operationSign(value){
	currentOperation = value;
	previousInput = currentInput;
	currentInput = "";
	document.getElementById("screen").value = previousInput + currentOperation + currentInput;
}

function sum(){
	var result = 0;
	var num1 = parseFloat(previousInput);
	var num2 = parseFloat(currentInput);
	
	if(currentOperation === "+"){
		result = num1 + num2;
	}
	else if(currentOperation === "-"){
		result = num1 - num2
	}
	else if(currentOperation === "*"){
		result = num1 * num2
	}
	else if(currentOperation === "/"){
		result = num1 / num2
	}
	
	document.getElementById("screen").value = result;
	currentInput = result.toString();
	previousInput = '';
	currentOperation = '';
}

function clearScreen(){
	currentInput = "";
	currentOperation = "";
	previousInput = "";
	document.getElementById("screen").value = "";
}


