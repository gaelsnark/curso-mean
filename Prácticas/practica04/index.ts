import readline from 'readline-sync'
import {showTitle,inputYesNo,inputQuestion,inputNumber} from 'librerias';


class Person{
nombre: string = '';
apellidos: string = '';
contrasena: number = 0;
}


let persona: any[] = [
    {id: 1, persona: 'Gael', contrasena: 1111, saldo: 1000},
    {id: 2, persona: 'Jose Luis', contrasena: 2222, saldo: 1500},
    {id: 3, persona: 'Rodrigo', contrasena: 3333, saldo: 2000},
    {id: 4, persona: 'Axel', contrasena: 4444, saldo: 900},
    {id: 5, persona: 'Toño', contrasena: 5555, saldo: 1100}
]

let bandera: boolean= true

do{
let usuario: any = inputQuestion('Quién eres? ');
showTitle(`Usuario: ${usuario}`);

let NUMPassword: number = inputNumber('Escribe tu contraseña: ');

const searchPerson: any = persona.find((item:any) => item.contrasena === NUMPassword) 
    
 if(searchPerson){ // Si encuentra al usuario
if(inputYesNo(`¿Eres esta persona?: ${searchPerson.persona}`)){
    console.log(`Tu saldo es de: ${searchPerson.saldo}`)  
    } 
    else{
        console.log('Usuario equivocado !!! Vuelve a poner tu usuario')
    } 
    } else{
        console.log('No se encontró el usuario !!! Vuelve a poner tu usuario')
        bandera=false
    }
} while(bandera)
