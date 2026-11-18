/*
create
read
update
delete*/

import { inputQuestion, ModoCaptura, showTitle, TipoBorrado, Proveedor } from "librerias";

const collectionName: string = 'e_proveedor';


export const CRUDproveedor = {
    nuevo: async (proveedor: Proveedor) => {

    await proveedor.preguntaDatos(ModoCaptura.Nuevo)
    showTitle('Datos del proveedor')
    console.log(proveedor)

    
   await proveedor.guardar(ModoCaptura.Nuevo);
    },
    modifica: async (criterio: string, entidad: Proveedor) => {

        // Buscar el Registro a editar entre el universo de datos 
    const regex = new RegExp(criterio, 'mi');
    const result = await Proveedor.buscarPorCriterio<Proveedor>(collectionName, [{nombre: regex},{rfc: regex}]);
    console.log(result);

    // Buscar el proveedor específico a editar por UID
    const Searchproveedor: string= await inputQuestion('UID (Editar) => ')
    const findEntidad: any = await Proveedor.buscarPorID(collectionName,Searchproveedor);
    Object.assign(entidad, findEntidad)
    entidad.uid = findEntidad._id;
    // Preguntar los datos
    await entidad.preguntaDatos(ModoCaptura.Editar)

    // Guardar los datos del proveedor modificado
    await entidad.guardar(ModoCaptura.Editar)
    },


    elimina: async (criterio: string, tipoBorrado: TipoBorrado = TipoBorrado.Lógico) => {
        // Buscar el Registro a editar entre el universo de datos
    const regex = new RegExp(criterio, 'mi');
    const result = await Proveedor.buscarPorCriterio<Proveedor>(collectionName, [{nombre: regex},{rfc: regex}]);
    console.log(result);

    const Searchproveedor: string= await inputQuestion('UID (Borrar)=> ')
    
    // Borrar el Registro
    Proveedor.borrar(Searchproveedor,collectionName, tipoBorrado)
    },
    buscaUID: async (uid: string) => {
    const result = await Proveedor.buscarPorID(collectionName, uid);
    console.log(result);
    },
    buscaCriterio: async (criterio: string) => {
    const regex = new RegExp(criterio, 'mi');
    const result = await Proveedor.buscarPorCriterio<Proveedor>(collectionName, [{nombre: regex},{rfc: regex}]);
    console.log(result);
    },
    getCoordenadas: async (codigo: string) =>{
       const coordenadas = Proveedor.getCoordenadas(codigo);
       console.log(coordenadas)
    }
}