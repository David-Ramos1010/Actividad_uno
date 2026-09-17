function Convertir(){
	var num1 = document.getElementById("num1").value;

	if (num1 == ""){
		alert('¡Tienes que introducir un número!');
		return;
	}

		else if (num1 < 0) {
			alert('¡El número tiene que ser positivo!')
			return;
		}

		else {
			var num2 = parseFloat(num1) * 17.23;
			document.getElementById("num2").value = num2;
		}
}