import { Cliente, inputQuestion, ModoCaptura, showTitle, TipoBorrado } from 'librerias'

(async() => {



    const cliente = new Cliente();


//     //========================
//     // Crear un nuevo cliente 
//     //========================

//     // Preguntar datos del cliente
//     await cliente.preguntaDatos()

//     // Mostrar datos capturados del cliente
//     showTitle('Datos del Cliente')
//     console.log(cliente)

//     // Guardar el cliente en base de datos 
//    cliente.guardar(ModoCaptura.Nuevo);
   

//     //========================
//     // Editar un nuevo cliente 
//     //========================
       // Buscar el cliente a editar entre el universo de clientes
    // const regex = new RegExp('Gael', 'mi');
    // const result = await Cliente.buscarPorCriterio<Cliente>('e_cliente', [{nombre: regex},{razonSocial: regex}]);
    // console.log(result);

    // // Buscar el cliente específico a editar por UID
    // const SearchCliente: string= await inputQuestion('UID (Editar) => ')
    // const findCliente: any = await Cliente.buscarPorID('e_cliente',SearchCliente);
    // Object.assign(cliente, findCliente)
    // cliente.uid = findCliente._id;
    // // Preguntar los datos
    // await cliente.preguntaDatos(ModoCaptura.Editar)

    // // Guardar los datos del cliente modificado
    // await cliente.guardar(ModoCaptura.Editar)


    //========================
    // Borrar un nuevo cliente 
    //========================
    
   const regex = new RegExp('Gael', 'mi');
    const result = await Cliente.buscarPorCriterio<Cliente>('e_cliente', [{nombre: regex},{razonSocial: regex}]);
    console.log(result);

    // Buscar el cliente específico a editar por UID
    const SearchCliente: string= await inputQuestion('UID (Borrar)=> ')
    
    // Borrar el cliente 
    Cliente.borrar(SearchCliente,'e_cliente', TipoBorrado.Lógico)
})();