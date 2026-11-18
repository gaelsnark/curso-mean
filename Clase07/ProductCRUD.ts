import { Producto, inputQuestion, inputYesNo, menuOptions, showTitle, TipoBorrado, ModoCaptura } from 'librerias';

export const ProductCRUD = {

    nuevo: async (producto: Producto) => {

        await producto.preguntaDatos(ModoCaptura.Nuevo)

        showTitle('Datos del producto')
        console.log(producto)


        await producto.guardar(ModoCaptura.Nuevo);
    },
    modifica: async (criterio: string, producto: Producto) => {

        const regex = new RegExp(criterio, 'mi');
        const result = await Producto.buscarPorCriterio<Producto>('e_producto', [{ nombre: regex }, { codigo: regex }]);
        console.log(result);

        // Buscar el producto específico a editar por UID
        const SearchProducto: string = await inputQuestion('UID (Editar) => ')
        const findProducto: any = await Producto.buscarPorID('e_producto', SearchProducto);
        Object.assign(producto, findProducto)
        producto.uid = findProducto._id;
        // Preguntar los datos
        await producto.preguntaDatos(ModoCaptura.Editar)

        // Guardar los datos del producto modificado
        await producto.guardar(ModoCaptura.Editar)
    },
    elimina: async (criterio: string, tipoBorrado: TipoBorrado = TipoBorrado.Lógico) => {

        const regex = new RegExp(criterio, 'mi');
        const result = await Producto.buscarPorCriterio<Producto>('e_producto', [{ nombre: regex }, { codigo: regex }]);
        console.log(result);

        const Searchproducto: string = await inputQuestion('UID (Borrar)=> ')

        // Borrar el producto 
        Producto.borrar(Searchproducto, 'e_producto', tipoBorrado)
    },
    buscaUID: async (uid: string) => {
        const result = await Producto.buscarPorID('e_producto', uid);
        console.log(result);
    },
    buscaCriterio: async (criterio: string) => {
        const regex = new RegExp(criterio, 'mi');
        const result = await Producto.buscarPorCriterio<Producto>('e_producto', [{ nombre: regex }, { codigo: regex }]);
        console.log(result);
    }



}
