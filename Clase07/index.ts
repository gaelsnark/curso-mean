import { Cliente, inputQuestion, inputYesNo, menuOptions, showTitle, TipoBorrado } from 'librerias';
import { menuCliente } from './clienteMenu';
import { menuUsuario } from './usuarioMenu';
import { menuProduct } from './productMenu';
import { menuTienda } from './tiendaMenu';
import { menuProveedor} from './proveedorMenu';
import { menuVendedor } from './vendendorMenu';


(async () => {

    console.clear()
    let exit: boolean = false

    do {

        // Clientes
        showTitle('Menú de Opciones')
        const opciones = await menuOptions(
            [
                { name: 'Usuarios', value: 0, description: 'Busca Usuario' },
                { name: 'Clientes', value: 1, description: 'Busca Cliente por Criterio' },
                { name: 'Productos', value: 2, description: 'Producto' },
                { name: 'Tiendas', value: 3, description: 'Tiendas' },
                { name: 'Proveedores', value: 4, description: 'Proveedores' },
                { name: 'Vendedores', value: 5, description: 'Vendedores' },
                { name: 'Salir', value: 6, description: 'Salir del programa' }
            ],
            'Selecciona la opción que deseas realizar => '
        );

        switch (opciones) {
            case 0:
                await menuUsuario();
                break;

            case 1: await menuCliente();

                break;

            case 2: await menuProduct();

                break;

            case 3: 
                    await menuTienda();
                break;

            case 4:
                    await menuProveedor();
                break;

            case 5:
                await menuVendedor();
                break;
            case 6:
                exit = true
                break;
        }


        if (exit == true) {
            if (await inputYesNo('Está seguro de salir del Menu ')){
                exit = true;
            }
            else {
                exit = false;
            }
        } else {
            exit = false;
            console.clear();
        }

    } while (!exit);
}) ();
