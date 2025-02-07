
var currentInput = "";
var currentOperation = "";
var previousInput = "";

function numbers(value){
	currentInput += value;
	document.getElementById("screen").value = currentInput;

	return;
}

function del(){
	var currentInput = document.getElementById('screen');
	currentInput.value = currentInput.value.slice(0,-1);

	return;
}

function operationSign(value){
	currentOperation = value;
	previousInput = currentInput;
	currentInput = "";
	document.getElementById("screen").value = previousInput + currentOperation + currentInput;
	
	return;
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

	return;
}

function clearScreen(){
	currentInput = "";
	currentOperation = "";
	previousInput = "";
	document.getElementById("screen").value = "";

	return;
}


/*
var previousInput ="5+5-";
var currentOperation = "/";
var changeSign = previousInput[previousInput.length - 1];

var allSigns = ["+" , "-" , "*" ,"/"];
if(allSigns.indexOf(changeSign) !== -1 && allSigns.indexOf(currentOperation) !== -1){
	previousInput = previousInput.slice(0,-1) +currentOperation;
}
else{
	previousInput += currentOperation;
}

console.log(previousInput)
*/
