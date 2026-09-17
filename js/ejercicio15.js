let estudiantes = [];

function agregarEstudiante() {
  const nombreInput = document.getElementById("nombre");
  const calificacionInput = document.getElementById("calificacion");

  const nombre = nombreInput.value.trim();
  const calificacionTexto = calificacionInput.value.trim();

  if (nombre === "" || calificacionTexto === "") {
    alert("¡Debes completar ambos campos!");
    return;
  }

  const calificacion = Number(calificacionTexto);

  if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
    alert("Ingresa una calificación válida (número entre 0 y 100).");
    return;
  }

  const estudiante = {
    nombre: nombre,
    calificacion: calificacion
  };

  estudiantes.push(estudiante);

  nombreInput.value = "";
  calificacionInput.value = "";
  nombreInput.focus();

  mostrarEstudiantes();
}

function mostrarEstudiantes() {
  const lista = document.getElementById("listaEstudiantes");
  lista.innerHTML = "";

  estudiantes.forEach((estudiante, indice) => {
    const li = document.createElement("li");
    li.textContent = `${indice + 1}. ${estudiante.nombre} - ${estudiante.calificacion}`;
    lista.appendChild(li);
  });
}

function calcularResultados() {
  if (estudiantes.length === 0) {
    alert("Primero agrega al menos un estudiante.");
    return;
  }

  const promedio = estudiantes.reduce(
    (total, estudiante) => total + estudiante.calificacion,
    0
  ) / estudiantes.length;

  const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
  const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

  const estudianteMayor = estudiantes.find(e => e.calificacion === calificacionMaxima);
  const estudianteMenor = estudiantes.find(e => e.calificacion === calificacionMinima);

  document.getElementById("promedio").value = promedio.toFixed(2);
  document.getElementById("mayor").value = estudianteMayor ? estudianteMayor.nombre : "";
  document.getElementById("menor").value = estudianteMenor ? estudianteMenor.nombre : "";
}