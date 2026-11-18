import readline from 'readline-sync'

let persona1: UsuarioI = {
nombre: 'Gael', 
apellidos: 'Duran', 
nip: 8899,
saldo:1000
}

let persona2: UsuarioI= {
nombre: 'Jose Luis', 
apellidos: 'Rosas Peimbert', 
nip:1234,
saldo:1000
}

interface UsuarioI{
nombre: String 
apellidos: string 
nip: number
saldo: number
}

const nip: UsuarioI[]= [
persona1,
persona2
]

interface retirar{
    RE:number
    ret:string
    cantidad:number
}

const banco: retirar[]= [ 
{RE:1, ret: 'retiro1', cantidad: 100},
{RE:2, ret: 'retiro2', cantidad: 200},
{RE:3, ret: 'retiro3', cantidad: 400},
{RE:4, ret: 'retiro4', cantidad: 700},
{RE:5, ret: 'retiro5', cantidad: 1000},
]


const search: any = nip.find((item:any) => item.nip == 1234)
if(search == undefined){
console.log('Lo sentimos no se encontro el usuario');
} 
else{
    
    console.log(search)
}

let userName: string = readline.question('Qué retiro deseas hacer: ');

//Establecer una condición
const busqueda: string = 'retiro2';
const cantidadNueva: number = 200;



const BancoNew = banco.find((item: any) => {
if (item.nombre = busqueda) {
return {...item, cantidad: item.saldo-cantidadNueva }
}
return item
});



console.log('Te queda ',BancoNew,' en tu cuenta')