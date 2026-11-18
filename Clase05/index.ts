/*MOTORES DE BASES DE DATOS

Relacionales    |   NoSQL
MySQL           |   MongoDB         
Postgres        |   REDIS
SQL Server      |   Casandra */


import { showTitle, Persona, menuOptions, ModoCaptura, TipoBorrado, inputQuestion } from 'librerias';
import { input, Separator } from '@inquirer/prompts';


//  process.env.NODE_ENV == 'PROa ? 'editablea:'tab'se Name
const dbName = 'dbcurso';



// Funcion Anónima Asíncrona
(async () => {
    //Implementación del menú de Opciones de CRUD
    showTitle('Menú de Opciones')
    const opciones = await menuOptions([
        { name: '1.-Buscar', value: 0, description: 'Busca persona por criterio' },
        { name: '2.-Nuevo', value: 1, description: 'Da de alta a una nueva persona' },
        { name: '3.-Modificar', value: 2, description: 'Actualiza los datos de una persona' },
        { name: '4.-Borrar', value: 3, description: 'Borrado lógico o físico de una persona' },
        new Separator(),
        { name: '5.-Salir', value: 4, description: 'Salir' },

    ], 'Selecciona la opción que quieres => '
    );
    console.log(opciones);


    switch (opciones) {

        case 0: // Buscar usuario
            const criterio = await inputQuestion('Escribe el criterio de búsqueda => ')
            // consultaDatos(criterio);
            console.log(await Persona.buscarPorcriterio(criterio));
            break;

        case 1:  // Nuevo usuario
            const modCapt: ModoCaptura = ModoCaptura.Nuevo;
            showTitle('Solicitar Datos de la Persona');
            const newPersona = new Persona('', '', '') // Creas una nueva instancia
            await newPersona.preguntaDatos(modCapt) // Preguntas los datos
            await newPersona.guardar(modCapt);

            showTitle(``)
            break;

        case 2: // Modificar usuario
            const modoEdit: ModoCaptura = ModoCaptura.Editar;

            // Buscar al usuario que se desea editar
            const busqueda = await input({ message: 'Escribe el criterio de búsqueda => ' });


            showTitle('Usuarios Encontrados!!!')
            const encontrados = await Persona.buscarPorcriterio(busqueda);
            if (encontrados.length == 0) {
                console.log(`No se encontraron usuarios con el criterio de búsqueda => ${busqueda}`);
            } else {
                console.log(encontrados);
            }

            // Preguntar el Unique ID (uid) del usuario que se desea modificar) y traerlo de la base de datos de MongoDB
            const uid = await input({ message: 'Escribe el UID del usuario => ' })
            const persona: Persona | null = await Persona.buscaPorUID(uid);


            if (!persona) { // No lo encontró
                console.log(`Lo sentimos, no se encontró el ID => ${uid}`);

            } else { // Si lo encontró
                persona.uid = uid;
                await persona.preguntaDatos(modoEdit);
                await persona.guardar(modoEdit);

            }

            break;

        case 3: // Eliminar usuario
            const deleteIndex = await menuOptions(
                [{ name: 'Borrado Físico', value: '0', description: 'Borrado Físico de la persona (no se puede recuperar)', disabled: true },
                { name: 'Borrado Lógico', value: '1', description: 'Borrado Lógico' }
                ],
                '¿Qué tipo de Borrado quieres realizar? => ')
            switch (deleteIndex) {
                case 0: // Borrado Físico
                    showTitle('Borrado Físico')
                    await Persona.borrar(TipoBorrado.Fisico, await inputQuestion('Escribe el Id que quieres borrar => '));
                    console.log('Borrado Físico realizado de forma correcta !!!');
                    break;

                case 1: // Borrado Lógico
                    showTitle('Borrado Lógico')
                    await Persona.borrar(TipoBorrado.Lógico, await inputQuestion('Escribe el Id que quieres borrar => '));
                    console.log('Borrado Lógico realizado de forma correcta !!!');
                    break;
            }



            break;
    }

}
)();


