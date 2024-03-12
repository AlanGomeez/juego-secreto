//document.querySelector(); = permite acceder a cada uno de los elementos.

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
// let maxIntentos = 3;

console.log(numeroSecreto);

function asignarElementoTexto(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

// LLAMAR POR ID
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === numeroSecreto){
        asignarElementoTexto('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if (numeroUsuario < numeroSecreto) {
            asignarElementoTexto('p', 'El numero es mayor');
        }else{
            asignarElementoTexto('p', 'El numero es menor');
        }
    intentos++;
    limpiarCaja();
    }
    // if(intentos > maxIntentos){
    //     asignarElementoTexto('p', "Llegaste al maximo de 3 intentos. Perdiste!");
    // }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros de la lista...
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarElementoTexto('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        //si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) { //recibe como parametro el valor a chequear
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}

function condicionesIniciales() {
    asignarElementoTexto('h1', 'Juego del numero secreto');
    asignarElementoTexto('p', `elija un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo
    //generar el número aleatorio
    //inicializar el número intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


//_______________________________________________________
//PRIMERA FORMA
    // function generarNumeroSecreto() {
    //     let numeroSecreto = Math.floor(Math.random()*10)+1;
    //     return numeroSecreto;
    // }

//LIMPIAR CAJA
    //seleccionamos valorCaja y al valor lo dejamos vacio ''.
    //usamos # para llamar al ID.
    //SINO
    // let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';










//EJERCICIOS
// //2
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora del desafio.';

// //3
// function clickConsole() {
//     console.log('El boton fue clicado');
// }
// //4
// function clickPrompt() {
//     let Ciudad = prompt('elija una ciudad de brasil.');
//     alert(`Estuve en ${Ciudad} y me acorde de ti.`);
// }
// //5
// function alerta() {
//     alert('Yo amo JS');
// }

// function suma() {
//     let num1 = parseInt(prompt('Elije el primer numero para sumar'));
//     let num2 = parseInt(prompt('Elije el segundo numero para sumar'));
//     let resultado = num1 + num2;
//     alert(`${num1} + ${num2} = ${resultado}`);
// }


//EJERCICIOS
//1 Crear una función que muestra "¡Hola, mundo!" en la consola.
// console.log("hola,mundo");

//2 Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.
// function mostrarNombre(nombre) {
//     console.log(`Hola ` + nombre);
// }
// mostrarNombre('alan');

//3 Crear una función que recibe un número como parámetro y devuelve el doble de ese número.
// function calcularDoble(numero) {
//     return numero * 2;
// }

// let resultadoDoble = calcularDoble(15);
// console.log(resultadoDoble);

//4 Crear una función que recibe tres números como parámetros y devuelve su promedio.
// function calcularPromedio(a, b, c) {
//     return a + b + c / 3;
// }
// let resultadoPromedio = calcularPromedio(10, 10, 10);
// console.log(resultadoPromedio);

//5 Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.
// function numeroMayor(a, b) {
//     return (a > b ? a : b);
// }
// let numero = numeroMayor(6, 2);
// console.log(numero);

//6 Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.

// function multiplicarNumero(numero) {
//     return numero * numero;
// }
// let multiplicar = multiplicarNumero(5);
// console.log(multiplicar);




