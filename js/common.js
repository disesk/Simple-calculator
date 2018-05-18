plus.onclick = function () {
	var num1 = document.getElementById("numOne").value;
	num1 = parseFloat(num1);
	var num2 = document.getElementById("numTwo").value;
	num2 = parseFloat(num2);
	var result = num1 + num2;
	if (isFinite(result)) {
		document.getElementById("result").innerHTML = result;
	} else {
		alert('Введены некорректные данные');
	}
};
 
minus.onclick = function () {
	var num1 = document.getElementById("numOne").value;
	num1 = parseFloat(num1);
	var num2 = document.getElementById("numTwo").value;
	num2 = parseFloat(num2);
	var result = num1 - num2;
	if (isFinite(result)) {
		document.getElementById("result").innerHTML = result;
	} else {
		alert('Введены некорректные данные');
	}
};

divide.onclick = function () {
	var num1 = document.getElementById("numOne").value;
	num1 = parseFloat(num1);
	var num2 = document.getElementById("numTwo").value;
	num2 = parseFloat(num2);
	var result = num1 / num2;
	if (isFinite(result)) {
		document.getElementById("result").innerHTML = result;
	} else {
		alert('Введены некорректные данные');
	}
};
multiply.onclick = function () {
	var num1 = document.getElementById("numOne").value;
	num1 = parseFloat(num1);
	var num2 = document.getElementById("numTwo").value;
	num2 = parseFloat(num2);
	var result = num1 * num2;
	if (isFinite(result)) {
		document.getElementById("result").innerHTML = result;
	} else {
		alert('Введены некорректные данные');
	}
};

reset.onclick = function () {
	document.getElementById("numOne").value = "";
	document.getElementById("numTwo").value = "";
	document.getElementById("result").innerHTML = "";
};