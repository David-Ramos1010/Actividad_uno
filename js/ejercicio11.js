function Convertir(){
	var num1 = document.getElementById("num1").value;

	if (num1 == ""){
		alert('¡Tienes que introducir un número!');
		return;
	}
	else {
		var num2 = parseFloat(num1) * 0.621371;
		document.getElementById("num2").value = num2;
	}
}