//Programa para simular retiro en cajero automático

//Librería
import readline from 'readline-sync'



//Cartera de Clientes
let clientes : any[] = [
    {id: 1, cliente: 'Gael', nip: 1111, saldo: 1000},
    {id: 2, cliente: 'Jose Luis', nip: 2222, saldo: 1500},
    {id: 3, cliente: 'Rodrigo', nip: 3333, saldo: 2000},
    {id: 4, cliente: 'Axel', nip: 4444, saldo: 900},
    {id: 5, cliente: 'Toño', nip: 5555, saldo: 1100}
];

let salir: boolean = false;

do{

    //Preguntar el NIP al usuario
    let NIP: string = readline.question('Escribe tu NIP de 4 dígitos: '); //Lo devuelve en string, el NIP
    console.log('El NIP seleccionado fue: ' + NIP + ' !');
    
    
    //Convertir NIP a dato numérico
    const NIPNumber: number = parseInt(NIP);
    
    // Darle la bienvenida al cliente y mostrar su nombre
    const searchNIP: any = clientes.find((cliente:any) => cliente.nip === NIPNumber) 
    console.log(searchNIP);
    
   

    if(searchNIP == undefined){
        console.log('Lo sentimos no se encontró el NIP proporcionado !');
    } else{
        console.log('==================================');
        console.log(`Bienvenido ${searchNIP.cliente} !!`);
        console.log('==================================');


    let session: boolean = true;
    

         do {
             /* Que operación quieres realizar
             1. -Consulta de Saldo
             2.- Retiro de Efectivo */
         
             // Definir Menú de opciones
             const opciones: string[] = ['Consulta de Saldo', 'Retiro de Efectivo'];
             const indexOpcion = readline.keyInSelect(opciones, 'Selecciona la opción que deseas realizar: ');
             console.log('Usted seleccionó la opción: ', opciones[indexOpcion]);
             
             
             // Opcion 1.- Consultar Saldo
                 if(indexOpcion == 0){
                 //const saldo: any = clientes.find((clientes:any) => clientes.nip === NIPNumber).  //Esto ya lo pusimos
                 console.log(`El saldo actual es de => ${searchNIP.saldo}`);
                 readline.keyInPause();
             }
             
             // Opcion 2.- Retirar efectivo
                 if  (indexOpcion == 1) {
                     let estTransaccionValida: boolean = false;
                     do {
                         //Preguntar cuánto se desea retirar
                         
                         /*otra opción sería: 
                         const retiro: string = readline.question('Cuánto dinero deseas retirar ($):')
                         const retiroNumber: number = parseInt(retiro) */
                        
                         console.log('==============');
                         console.log('SALDO ACTUAL');
                         console.log(`${searchNIP.saldo}`);
                         console.log('==============');
                 
                         let esCantidadValida: boolean = false;
                         let retiro: number = 0.00;

                         do{
                         retiro = parseInt(readline.question('¿Cuánto dinero desear retirar ($):'));
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
                             if (retiro > searchNIP.saldo){
                                 console.log('Lo sentimos fondos insuficientes !!!');
                                 
                             } else if (retiro < 1){
                                 console.log('La cantidad de retiro debe ser mayor a $0');
                             } else{
                                 // Se trae al usuario que se escogió
                                 const transaccion: any= {...searchNIP, saldo: searchNIP.saldo - retiro };
                                 // Otra: const update = clientes.map((item: any) => item.nip === NIPNumber ? transaccion: item);
                     
                                 
                                 const update = clientes.map((item: any)=>{
                                     if(item.nip == NIPNumber){ //Aquí en vez de devolver item devuelve la transacción
                                     return transaccion 
                                 }
                                     else{
                                         return item
                                     } 
                     
                                 })
                     
                     
                                if (readline.keyInYN('¿Está seguro que la cantidad es correcta?')){
                                 clientes = update
                                 estTransaccionValida=true;
                                 console.log('La cartera de clientes actualizada es => ', clientes);
                                 
                                 } else{
                                     //Volver a preguntar cantidad de retiro
                                     console.log("El usuario se equivocó en la cantidad y hay que volver a preguntar la cantidad de retiro")
                                 }
             
                         }
                          } while(!estTransaccionValida);
             }
         
             //Opcion 3.-Salir
             if (indexOpcion == -1 ) {
                 salir = true
                 if(readline.keyInYN('Está seguro de salir de la aplicación ')){
                     session = false;
                 }
             }
         


    } while(session);    

    }    
    

} while(!salir);
