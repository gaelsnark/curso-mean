import { inputQuestion, inputYesNo, menuOptions, showTitle, TipoBorrado, crudMenu, Usuario, Tienda } from 'librerias';
import { CRUDtienda } from './tiendaCRUD';


export const menuTienda = async (): Promise<void> => {
    console.clear()
    let salir: boolean = false

    do {

        // Tienda
        showTitle('Menú de Opciones')
        const opciones = await crudMenu('Tienda')


        const tienda: Tienda = new Tienda();
        switch (opciones) {
            case 0:
                await CRUDtienda.buscaUID(await inputQuestion('UID (BUSCAR EL UID en base de datos) => '))
                break;

            case 1:
                await CRUDtienda.buscaCriterio(await inputQuestion('Criterio (BUSCAR EL UID en base de datos) => '))
                break;

            case 2:
                await CRUDtienda.nuevo(tienda);
                break;

            case 3:
                await CRUDtienda.modifica('', tienda);
                break;

            case 4:
                await CRUDtienda.elimina('');
                break;

            case 5:
                await CRUDtienda.getCoordenadas(await inputQuestion('Código de coordenadas'));
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


