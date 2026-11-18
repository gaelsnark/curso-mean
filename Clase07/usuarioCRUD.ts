/*
create
read
update
delete*/

import { Usuario, inputQuestion, ModoCaptura, showTitle, TipoBorrado } from "librerias";


export const CRUDUsuario = {
    nuevo: async (usuario: Usuario) => {

    await usuario.preguntaDatos(ModoCaptura.Nuevo)
    showTitle('Datos del Usuario')
    console.log(usuario)

    
   await usuario.guardar(ModoCaptura.Nuevo);
    },
    modifica: async (criterio: string, usuario: Usuario) => {

    const regex = new RegExp(criterio, 'mi');
    const result = await Usuario.buscarPorCriterio<Usuario>('e_usuario', [{nombre: regex},{razonSocial: regex}]);
    console.log(result);

    // Buscar el Usuario específico a editar por UID
    const SearchUsuario: string= await inputQuestion('UID (Editar) => ')
    const findUsuario: any = await Usuario.buscarPorID('e_usuario',SearchUsuario);
    Object.assign(usuario, findUsuario)
    usuario.uid = findUsuario._id;
    // Preguntar los datos
    await usuario.preguntaDatos(ModoCaptura.Editar)

    // Guardar los datos del Usuario modificado
    await usuario.guardar(ModoCaptura.Editar)
    },
    elimina: async (criterio: string, tipoBorrado: TipoBorrado = TipoBorrado.Lógico) => {

    const regex = new RegExp(criterio, 'mi');
    const result = await Usuario.buscarPorCriterio<Usuario>('e_usuario', [{nombre: regex},{razonSocial: regex}]);
    console.log(result);

    const SearchUsuario: string= await inputQuestion('UID (Borrar)=> ')
    
    // Borrar el Usuario 
    Usuario.borrar(SearchUsuario,'e_usuario', tipoBorrado)
    },
    buscaUID: async (uid: string) => {
    const result = await Usuario.buscarPorID('e_usuario', uid);
    console.log(result);
    },
    buscaCriterio: async (criterio: string) => {
    const regex = new RegExp(criterio, 'mi');
    const result = await Usuario.buscarPorCriterio<Usuario>('e_usuario', [{nombre: regex},{razonSocial: regex}]);
    console.log(result);
    }
}