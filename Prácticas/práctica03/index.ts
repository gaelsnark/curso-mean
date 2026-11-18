console.log("Hola");

import readline from 'readline-sync'


interface primera{
    id:number,
    cliente: string,
    nip:number,
    saldo:number,
    otro?:any
}

let variable: number = 2;

let clientes : primera[] = [
    {id: 1, cliente: 'Gael', nip: 1111, saldo: 1000},
    {id: 2, cliente: 'Jose Luis', nip: 2222, saldo: 1500},
    {id: 3, cliente: 'Rodrigo', nip: 3333, saldo: 2000},
    {id: 4, cliente: 'Axel', nip: 4444, saldo: 900},
    {id: 5, cliente: 'Toño', nip: 5555, saldo: 1100}
]

//let nombre: string = '';
//let ID: string = '';
//let cliente.saldo:any = null;  o así {}
//let searchNombre: any = {};
//let IDNumb:number=0;

let inputNombre: string = '';
let searchNombre: any = undefined;

let inputNIP: number = 0;
const limiteIntentos: number = 3;

const consultaSaldo = (nombre:string, nip: number) => {
    
    const cliente= clientes.find((item:any) => item.cliente === nombre && item.nip === nip)
    return cliente != undefined ? cliente.saldo : 0.00
}

const retiroEfectivo = (cliente:any, inputNIP: number) => {
    let esCantidadValida: boolean = false;
                         let retiro: number = 0.00;
                        let clientesUpdated: any []= [];
                         do{
                         retiro = parseInt(readline.question('¿Cuánto dinero desear retirar ($): '));
                         if (retiro > 0){
                             esCantidadValida = true;
                             readline.keyInPause();
                         } else{
                             console.log('Cantidad no valida favor de volver a capturar');
                             readline.keyInPause();
                         }
                         } while(esCantidadValida == false);
                 
                        
                         
                         /*if (readline.keyInYN('¿Está correcta la cantidad?')) {
                             //Aplicar retiro en cuenta */
                             console.log('Aplicar retiro en cuenta de', retiro);
                 
                             // Validación de saldo
                             if (retiro > cliente.saldo.saldo){
                                 console.log('Lo sentimos fondos insuficientes !!!');
                                 
                             } else if (retiro < 1){
                                 console.log('La cantidad de retiro debe ser mayor a $0');
                             } else{
                                 // Se trae al usuario que se escogió
                                 const transaccion: any= {...cliente, saldo: cliente.saldo - retiro };
                                 // Otra: const update = clientes.map((item: any) => item.nip === NIPNumber ? transaccion: item);
                     
                                 
                                clientesUpdated = clientes.map((item: any)=>{
                                     if(item.nip == inputNIP){ //Aquí en vez de devolver item devuelve la transacción
                                     return transaccion 
                                 }
                                     else{
                                         return item
                                     } 
                     
                                 })
                         }

                         return clientesUpdated;
        }


//lógica para capturar el nombre del cliente 
do {
    //Solicita el nombre a la persona
inputNombre = readline.question("Cuál es tu nombre? ");
    console.log('Tu nombre es ' + inputNombre + ' !');
    //Buscar a a persona en el arreglo
    searchNombre = clientes.find((item: any) => item.cliente === inputNombre)


    if (searchNombre !=undefined){
        //Lógica para encontrar el NIP del cliente seleccionado
       

        let intentos : number = 0;
        do { //darles tres intentos para poner su NIP
        inputNIP = parseInt(readline.question(`USUARIO: | ${inputNombre} | Escribe tu nip :`));

        if (searchNombre.nip === inputNIP) {

            let indexOpcion: number = -1;

            do{
                //Se encontró el NIP del cliente por lo tanto
                // Definir Menú de Opciones
                const opciones: string[] = ['Consulta de Saldo', 'Retiro de Efectivo'];
                indexOpcion = readline.keyInSelect(opciones, 'Selecciona la opción que deseas realizar: ');
                
                switch (indexOpcion){
                    case 0: //Consulta de Saldo'
                    console.log(`Su saldo es de ${consultaSaldo(searchNombre.cliente, searchNombre.nip)}`);
                    readline.keyInPause();
                    break;

                    case 1: //Retiro de efectivo
                    let estTransaccionValida: boolean = false;

                    do{
                        const update= retiroEfectivo(searchNombre,inputNIP)
                        if (readline.keyInYN('¿Está seguro que la cantidad es correcta?')){
                                     clientes = update;
                                     estTransaccionValida=true;
                                     console.log('La cartera de clientes actualizada es => ', clientes);
                                     
                                     } else{
                                         //Volver a preguntar cantidad de retiro
                                         console.log("El usuario se equivocó en la cantidad y hay que volver a preguntar la cantidad de retiro")
                                     }

                    }while(!estTransaccionValida)
                    break;
                }

            }while (indexOpcion != -1);
            
           
        } else{
            intentos ++;
        }
    } while (inputNIP!= searchNombre.nip && intentos < limiteIntentos);
    if (intentos == limiteIntentos){
        console.log("Lo senitmos excediste el número de intentos y haz bloqueado tu cuenta")
        searchNombre = undefined;
    }

} 
else{
     console.log(`No se encontró el usuario | ${inputNombre} | favor de verificar`)
}
} while(searchNombre == undefined);

 console.log('Se salió del Do While...');

/*
do{
    nombre = readline.question("Cuál es tu nombre?");
    console.log('Tu nombre es ' + nombre + ' !');
    
    ID = readline.question('Escribe tu ID de 4 dígitos: '); 
    console.log('El NIP seleccionado fue: ' + ID + ' !');

    const IDNumb: number= parseInt(ID)

cliente.saldo= clientes.find((cliente:any) => cliente.nip === IDNumb)
searchNombre = clientes.find((cliente:any) => cliente.cliente === nombre)

    if(searchNombre == undefined) {
        nombreBuscado == '';
    
    } else{
        nombreBuscado = searchNombre.cliente;
       }
    if (cliente.saldo == undefined){
        nipBuscado = 0;
    }
    else
        nipBuscado = cliente.saldo.nip;

//console.log(cliente.saldo)
//console.log(searchNombre)

console.log("Nombre es====>", nombre);
console.log("searchNombre es====>", searchNombre.cliente);
console.log("cliente.saldo es====>", cliente.saldo.nip);
console.log("IDNumb es====>",IDNumb);

} while (nombre == nombreBuscado && IDNumb==nipBuscado)

    */