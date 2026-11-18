/*======== Clase de Funciones ========*/

// Métodos => No regresa nada (Solo hace algo)

function imprime (pathdelDocumento: string): void {
    // To do => Por hacer
    // Leer el documento

    // Cargar el driver de la impresora

    // Mandar la página de configuración

    // Imprimir
    console.log('Se está imprimiendo la página');
}




// Funciones => Regresa un valor

function suma (a: number, b: number): number {
    return a + b;
}
const sumaNueva = (a:number, b: number): number => a + b;   //Solo se hace cuando tienes una sola línea de código


function resta (a: number, b: number): number {
    return a - b;
}
const restaNueva = (a:number, b: number): number => a - b;


function multiplica (a: number, b: number): number {
    return a * b;
}
const multiplicaNueva = (a:number, b: number): number => a * b;

function divide (a: number, b: number): number | string {
  //  if (b == 0){
  //      return 'No se puede dividir entre 0'
  //  } else
  //  return a / b;
  return b == 0 ? 'No se puede dividir entre 0': a / b;
}
const divideNueva = (a: number, b: number): number | string => b == 0 ? 'No se puede dividir entre 0': a / b;  //Si b es igual a 0 se muestra el mensaje, sino se hace la división


// Ejemplo de vacío
const showTitle = (title: string, character: string = '=' , offset: number = 4): void => {

    const longitud: number = title.length + offset;
    

    console.log(character.repeat(longitud));
    console.log(`${character} ${title} ${character}`);
    console.log(character.repeat(longitud));
}


const imprimeN= (): void => {
     // To do => Por hacer
    // Leer el documento

    // Cargar el driver de la impresora

    // Mandar la página de configuración

    // Imprimir

    console.log('Se está imprimiendo la página');
}

import readline from 'readline-sync'

const inputQuestion = (question: string): string => {
        return readline.question(question);
}

const inputNumber= (question: string): number => {
        return parseInt(readline.question(question))
}

/* Ejemplo con Upper (upper para convertir a mayúsculas)
const fullName = (firstName: string, upper: boolean = false,lastName?: string): string => {
   
    if (upper){
        return `${firstName} ${lastName || ''}`. toUpperCase(); 
    } else 
    return `${firstName} ${lastName || ''}`
    
}
*/

const fullName = (firstName: string, upper: boolean, ...restArgs: string[] ): string => {
        if (upper){
            return `${firstName} ${restArgs.join('')}` 
        }
        else{
            return `${firstName} ${restArgs.join('')}`
        }
}

/*
// Mandadr llamar a la función
console.log(divideNueva(7,0));
console.log(fullName('Gael', false, 'Durán Ramírez', 'De', 'Guanajuato')); 

// Mandadr llamar al método
console.log(imprime());

let dato = inputQuestion('Escribe tu nombre => ')
console.log(`El dato solicitado fue: ${dato}`);


let edad = inputNumber('Escribe tu edad => ')
console.log(`La edad es: ${edad}`);
*/

//Ejemplos de Métodos o funciones vacías
showTitle('Consulta de Saldo');

showTitle('Retiro de efectivo');

const title = inputQuestion('¿Cuál es tu nombre?: ')
showTitle(title, '*')

showTitle('Saldo', '/')