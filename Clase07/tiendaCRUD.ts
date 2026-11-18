/*
create
read
update
delete*/

import { inputQuestion, ModoCaptura, showTitle, TipoBorrado, Tienda } from "librerias";

const collectionName: string = 'e_tienda';


export const CRUDtienda = {
    nuevo: async (tienda: Tienda) => {

    await tienda.preguntaDatos(ModoCaptura.Nuevo)
    showTitle('Datos del tienda')
    console.log(tienda)

    
   await tienda.guardar(ModoCaptura.Nuevo);
    },
    modifica: async (criterio: string, tienda: Tienda) => {

    const regex = new RegExp(criterio, 'mi');
    const result = await Tienda.buscarPorCriterio<Tienda>(collectionName, [{codigo: regex},{nombre: regex},{domicilio: regex},{pais: regex},{codigoPostal: regex}]);
    console.log(result);

    // Buscar el tienda específico a editar por UID
    const Searchtienda: string= await inputQuestion('UID (Editar) => ')
    const findtienda: any = await Tienda.buscarPorID(collectionName,Searchtienda);
    Object.assign(tienda, findtienda)
    tienda.uid = findtienda._id;
    // Preguntar los datos
    await tienda.preguntaDatos(ModoCaptura.Editar)

    // Guardar los datos del tienda modificado
    await tienda.guardar(ModoCaptura.Editar)
    },
    elimina: async (criterio: string, tipoBorrado: TipoBorrado = TipoBorrado.Lógico) => {

    const regex = new RegExp(criterio, 'mi');
    const result = await Tienda.buscarPorCriterio<Tienda>(collectionName, [{codigo: regex},{nombre: regex},{domicilio: regex},{pais: regex},{codigoPostal: regex}]);
    console.log(result);

    const Searchtienda: string= await inputQuestion('UID (Borrar)=> ')
    
    // Borrar el tienda 
    Tienda.borrar(Searchtienda,collectionName, tipoBorrado)
    },
    buscaUID: async (uid: string) => {
    const result = await Tienda.buscarPorID(collectionName, uid);
    console.log(result);
    },
    buscaCriterio: async (criterio: string) => {
    const regex = new RegExp(criterio, 'mi');
    const result = await Tienda.buscarPorCriterio<Tienda>(collectionName, [{codigo: regex},{nombre: regex},{domicilio: regex},{pais: regex},{codigoPostal: regex}]);
    console.log(result);
    },
    getCoordenadas: async (codigo: string) =>{
       const coordenadas = Tienda.getCoordenadas(codigo);
       console.log(coordenadas)
    }
}
