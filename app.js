function values(x){
	document.getElementById('userInput').value += x;
}

function erase(){
	document.getElementById('userInput').value = '';
}

function del(){
	var del1 = document.getElementById('userInput');
	del1.value = del1.value.slice(0,-1)
}
/*
var arr = ["+" , "-" , "*" , "/"];
console.log(arr)

var num1 = "2+3-";
var num2 = "+";

var last = num1[num1 - 1];




console.log(last)
console.log(num1 += num2)
*/
