import { Producto, inputQuestion, inputYesNo, menuOptions, showTitle, TipoBorrado, crudMenu } from 'librerias';
import { ProductCRUD } from './ProductCRUD';



export const menuProduct = async (): Promise<void> => {

    console.clear();
    let exit: boolean = false;

    do {


        // Productos
        showTitle('Menú de Opciones')
        const opciones = await crudMenu('Producto');

        const producto: Producto = new Producto();
        switch (opciones) {
            case 0:
                ProductCRUD.buscaUID(await inputQuestion('UID (BUSCAR EL UID en base de datos) => '))

                break;

            case 1:
                ProductCRUD.buscaCriterio(await inputQuestion('Criterio (BUSCAR EL UID en base de datos) => '))
                break;

            case 2:
                await ProductCRUD.nuevo(producto);
                break;

            case 3:
                await ProductCRUD.modifica('', producto);
                break;

            case 4:
                //    producto.elimina('');
                await ProductCRUD.elimina('', TipoBorrado.Fisico);
                break;

            case 6:
                exit = true
                break;
        }


        if ((await inputYesNo('Desea exit del CRUD de Productos? ')) || exit == true) {
            exit = true
        } else {
            exit = false;
            console.clear();
        }

    } while (!exit);

}

