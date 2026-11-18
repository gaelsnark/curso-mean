/*
create
read
update
delete*/

import { Cliente, inputQuestion, ModoCaptura, showTitle, TipoBorrado } from "librerias";


export const CRUDCliente = {
    nuevo: async (cliente: Cliente) => {

    await cliente.preguntaDatos(ModoCaptura.Nuevo)
    showTitle('Datos del Cliente')
    console.log(cliente)

    
   await cliente.guardar(ModoCaptura.Nuevo);
    },
    modifica: async (criterio: string, cliente: Cliente) => {

    const regex = new RegExp(criterio, 'mi');
    const result = await Cliente.buscarPorCriterio<Cliente>('e_cliente', [{nombre: regex},{razonSocial: regex}]);
    console.log(result);

    // Buscar el cliente específico a editar por UID
    const SearchCliente: string= await inputQuestion('UID (Editar) => ')
    const findCliente: any = await Cliente.buscarPorID('e_cliente',SearchCliente);
    Object.assign(cliente, findCliente)
    cliente.uid = findCliente._id;
    // Preguntar los datos
    await cliente.preguntaDatos(ModoCaptura.Editar)

    // Guardar los datos del cliente modificado
    await cliente.guardar(ModoCaptura.Editar)
    },
    elimina: async (criterio: string, tipoBorrado: TipoBorrado = TipoBorrado.Lógico) => {

    const regex = new RegExp(criterio, 'mi');
    const result = await Cliente.buscarPorCriterio<Cliente>('e_cliente', [{nombre: regex},{razonSocial: regex}]);
    console.log(result);

    const SearchCliente: string= await inputQuestion('UID (Borrar)=> ')
    
    // Borrar el cliente 
    Cliente.borrar(SearchCliente,'e_cliente', tipoBorrado)
    },
    buscaUID: async (uid: string) => {
    const result = await Cliente.buscarPorID('e_cliente', uid);
    console.log(result);
    },
    buscaCriterio: async (criterio: string) => {
    const regex = new RegExp(criterio, 'mi');
    const result = await Cliente.buscarPorCriterio<Cliente>('e_cliente', [{nombre: regex},{razonSocial: regex}]);
    console.log(result);
    }
}