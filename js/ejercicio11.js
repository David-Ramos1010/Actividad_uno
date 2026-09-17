function Convertir(){
	var num1 = document.getElementById("num1").value;

	var num2 = parseFloat(num1) * 0.621371;
	document.getElementById("num2").value = num2;
}