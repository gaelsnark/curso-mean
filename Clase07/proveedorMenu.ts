import { inputQuestion, inputYesNo, menuOptions, showTitle, TipoBorrado, crudMenu, Usuario, Tienda, Proveedor } from 'librerias';
import { CRUDproveedor } from './proveedorCRUD';


export const menuProveedor = async (): Promise<void> => {
    console.clear()
    let salir: boolean = false

    do {

        // Proveedor
        showTitle('Menú de Opciones')
        const opciones = await crudMenu('Proveedor')


        const entidad: Proveedor = new Proveedor();
        switch (opciones) {
            case 0:
                await CRUDproveedor.buscaUID(await inputQuestion('UID (BUSCAR EL UID en base de datos) => '))
                break;

            case 1:
                await CRUDproveedor.buscaCriterio(await inputQuestion('Criterio (BUSCAR EL UID en base de datos) => '))
                break;

            case 2:
                await CRUDproveedor.nuevo(entidad);
                break;

            case 3:
                await CRUDproveedor.modifica('',entidad);
                break;

            case 4:
                await CRUDproveedor.elimina('');
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


