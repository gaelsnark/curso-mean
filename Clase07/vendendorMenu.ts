import { inputQuestion, inputYesNo, menuOptions, showTitle, TipoBorrado, crudMenu, Usuario, Tienda, Vendedor } from 'librerias';
import { CRUDVendedor } from './vendedorCRUD';


export const menuVendedor = async (): Promise<void> => {
    console.clear()
    let salir: boolean = false

    do {

        // Vendedor
        showTitle('Menú de Opciones')
        const opciones = await crudMenu('Vendedor')


        const entidad: Vendedor = new Vendedor();
        switch (opciones) {
            case 0:
                await CRUDVendedor.buscaUID(await inputQuestion('UID (BUSCAR EL UID en base de datos) => '))
                break;

            case 1:
                await CRUDVendedor.buscaCriterio(await inputQuestion('Criterio (BUSCAR EL UID en base de datos) => '))
                break;

            case 2:
                await CRUDVendedor.nuevo(entidad);
                break;

            case 3:
                await CRUDVendedor.modifica('',entidad);
                break;

            case 4:
                await CRUDVendedor.elimina('');
                break;
            

            case 6:
                salir = true
                break;
        }


        if ((await inputYesNo('Desea salir del CRUD de Tienda? ')) || salir == true) {
            salir = true
        } else {
            salir = false;
            console.clear();
        }

    } while (!salir);
}


