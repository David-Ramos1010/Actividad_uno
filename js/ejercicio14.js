function Calcular(){
	let valor = document.getElementById("numeros").value;

	if (valor == ""){
		alert('¡Tienes que introducir un número!');
		return;
	}
	
	if(!valor.includes(",")){
		alert('¡Los números deben de estar separados por comas!');
		return;
	}
	
	let arreglo = valor.split(",");
	let numeros = arreglo.map(Number); //aquí se convierte el arreglo a números

	let maximo = Math.max(...numeros);
	let minimo = Math.min(...numeros);

	let suma = numeros.reduce((acc, valor) => acc + valor, 0);
	let promedio = suma / numeros.length;

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;
	document.getElementById("promedio").value = promedio;
}