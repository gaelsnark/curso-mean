import { Cliente, crudMenu, inputQuestion, inputYesNo, menuOptions, showTitle, TipoBorrado } from 'librerias';
import { CRUDCliente } from './clienteCRUD';


export const menuCliente = async (): Promise<void> => {
    console.clear()
        let salir: boolean = false
    
        do {
            
        // Clientes
        showTitle('Menú de Opciones')
        const opciones = await crudMenu('cliente')
    
        
        const cliente: Cliente = new Cliente();
        switch (opciones) {
            case 0:
                CRUDCliente.buscaUID(await inputQuestion('UID (BUSCAR EL UID en base de datos) => '))
                break;
        
            case 1:
                CRUDCliente.buscaCriterio(await inputQuestion('Criterio (BUSCAR EL UID en base de datos) => '))
                break;
        
            case 2:
                CRUDCliente.nuevo(cliente);
                break;
        
            case 3:
                CRUDCliente.modifica('', cliente);
                break;
        
            case 4:
                CRUDCliente.elimina('');
                break;
        
            case 5:
                salir = true
                break;
        }
        
        
        if ((await inputYesNo('Desea salir del programa? ')) || (salir == true)) {
            salir = true
        } else {
            salir = false;
            console.clear();
        }
        
        } while (!salir);
}


