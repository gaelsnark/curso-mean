/*
create
read
update
delete*/

import { inputQuestion, ModoCaptura, showTitle, TipoBorrado, Vendedor } from "librerias";

const collectionName: string = 'e_vendedor';


export const CRUDVendedor = {
    nuevo: async (Vendedor: Vendedor) => {

    await Vendedor.preguntaDatos(ModoCaptura.Nuevo)
    showTitle('Datos del Vendedor')
    console.log(Vendedor)

    
   await Vendedor.guardar(ModoCaptura.Nuevo);
    },
    modifica: async (criterio: string, entidad: Vendedor) => {

        // Buscar el Vendedor a editar entre el universo de datos 
    const regex = new RegExp(criterio, 'mi');
    const result = await Vendedor.buscarPorCriterio<Vendedor>(collectionName, [{nombre: regex},{departamento: regex}]);
    console.log(result);

    // Buscar el Vendedor específico a editar por UID
    const SearchVendedor: string= await inputQuestion('UID (Editar) => ')
    const findEntidad: any = await Vendedor.buscarPorID(collectionName,SearchVendedor);
    Object.assign(entidad, findEntidad)
    entidad.uid = findEntidad._id;
    // Preguntar los datos
    await entidad.preguntaDatos(ModoCaptura.Editar)

    // Guardar los datos del Vendedor modificado
    await entidad.guardar(ModoCaptura.Editar)
    },


    elimina: async (criterio: string, tipoBorrado: TipoBorrado = TipoBorrado.Lógico) => {
        // Buscar el Vendedor a editar entre el universo de datos
    const regex = new RegExp(criterio, 'mi');
    const result = await Vendedor.buscarPorCriterio<Vendedor>(collectionName, [{nombre: regex},{departamento: regex}]);
    console.log(result);

    const SearchVendedor: string= await inputQuestion('UID (Borrar)=> ')
    
    // Borrar el Vendedor
    Vendedor.borrar(SearchVendedor,collectionName, tipoBorrado)
    },
    buscaUID: async (uid: string) => {
    const result = await Vendedor.buscarPorID(collectionName, uid);
    console.log(result);
    },
    buscaCriterio: async (criterio: string) => {
    const regex = new RegExp(criterio, 'mi');
    const result = await Vendedor.buscarPorCriterio<Vendedor>(collectionName, [{nombre: regex},{departamento: regex}]);
    console.log(result);
    },
}