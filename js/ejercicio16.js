// Funciones flecha para las operaciones
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

// Función principal
function calcularOperacion(operacion) {
  const numero1Input = document.getElementById('numero1');
  const numero2Input = document.getElementById('numero2');
  const resultadoInput = document.getElementById('resultado');

  const valor1 = numero1Input.value.trim();
  const valor2 = numero2Input.value.trim();

  // Validar campos vacíos
  if (valor1 === '' || valor2 === '') {
    Swal.fire({
      icon: 'error',
      title: 'Campos vacíos',
      text: 'Debes ingresar ambos números.'
    });
    return;
  }

  // Convertir a número
  const num1 = Number(valor1);
  const num2 = Number(valor2);

  // Validar que sean números válidos
  if (isNaN(num1) || isNaN(num2)) {
    Swal.fire({
      icon: 'error',
      title: 'Valores inválidos',
      text: 'Ingresa solo números válidos.'
    });
    return;
  }

  let resultado;

  // Seleccionar la operación
  switch (operacion) {
    case 'suma':
      resultado = sumar(num1, num2);
      break;
    case 'resta':
      resultado = restar(num1, num2);
      break;
    case 'multiplicacion':
      resultado = multiplicar(num1, num2);
      break;
    case 'division':
      resultado = dividir(num1, num2);
      break;
    default:
      resultado = 'Operación no válida';
  }

  // Si el resultado es un mensaje de error (división por cero)
  if (typeof resultado === 'string') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: resultado
    });
    resultadoInput.value = '';
    return;
  }

  // Mostrar el resultado
  resultadoInput.value = resultado;
}