function Verificar() {
	var num1 = document.getElementById("num1").value;
	
	if (num1 == "") {
	alert('¡Tienes que introducir tu edad!');
	return;
	}

	if (num1 < 0) {
		alert('¡Tu edad tiene que ser un número positivo!')
		return;
	}

	if (num1 >= 18){
		document.getElementById("num2").value = "¡Felicidades! Puedes votar";
		return;
	}
	else {
		document.getElementById("num2").value = "¡Lo siento! No puedes votar";
		return;
	}
}