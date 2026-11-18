import { Separator } from "@inquirer/prompts";
import { menuOptions } from "./inputs";


export const crudMenu = async (entity: string): Promise <number> => {
    return await menuOptions(
    [
        { name: 'Buscar por UID', value: 0, description: `Busca ${entity} por UID` },
        { name: 'Buscar por Criterio', value: 1, description: `Busca ${entity} por Criterio` },
        { name: 'Nuevo', value: 2, description: `Crear Nuevo ${entity}`},
        { name: 'Modificar', value: 3, description: `Modificar ${entity}` },
        { name: 'Borrar', value: 4, description: `Borrar${entity}` },
        entity == 'Tienda'? {name: 'Obtén Coordenadas', value: 5, description: `Obtén Coordenadas de  ${entity}` }: new Separator,
        { name: 'Salir', value: 6, description: `Salir del menú ${entity}` }
    ],
    'Selecciona la opción que deseas realizar => '
);
    
}


