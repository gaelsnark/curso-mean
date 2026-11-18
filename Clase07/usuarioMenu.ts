import { inputQuestion, inputYesNo, menuOptions, showTitle, TipoBorrado, crudMenu, Usuario } from 'librerias';
import { CRUDUsuario } from './usuarioCRUD';


export const menuUsuario = async (): Promise<void> => {
    console.clear()
    let salir: boolean = false

    do {

        // UsCRUDUsuarios
        showTitle('Menú de Opciones')
        const opciones = await crudMenu('Usuario')


        const usuario: Usuario = new Usuario();
        switch (opciones) {
            case 0:
                await CRUDUsuario.buscaUID(await inputQuestion('UID (BUSCAR EL UID en base de datos) => '))
                break;

            case 1:
                await CRUDUsuario.buscaCriterio(await inputQuestion('Criterio (BUSCAR EL UID en base de datos) => '))
                break;

            case 2:
                await CRUDUsuario.nuevo(usuario);
                break;

            case 3:
                await CRUDUsuario.modifica('', usuario);
                break;

            case 4:
                await CRUDUsuario.elimina('');
                break;

            case 6:
                salir = true
                break;
        }


        if ((await inputYesNo('Desea salir del CRUD de Usuarios? ')) || salir == true) {
            salir = true
        } else {
            salir = false;
            console.clear();
        }

    } while (!salir);
}


