// EXERCISES PRACTICE JAVASCRIPT LOGIC
// Axel Javier Guadalupe Alvarez Felipe

// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaSemana = prompt('Que dia de la semana es? ');
if(diaSemana == "Sabado" || diaSemana == "Domingo"){
    alert("!Buen fin de semana")
} else {
    alert("!Buena semana")
}

// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numeroIngresado = prompt("Ingresar un numero porfavor ");
if(numeroIngresado >= 0){
    alert("El numero ingresado es positivo")
} else {
    alert("El numero ingresado es negativo")
}

// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
let puntuacion = prompt("Ingresa la puntuacion ");
if(puntuacion >= 100){
    alert("¡Felicidades has ganado "); 
} else {
    alert("Intenta nuevamente para ganar ")
}

// Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldo = 500;
alert(`Tu saldo es de $ ${saldo}.`);

// Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt("Ingrese su nombre ")
alert("Bienvenido " + nombre);