import { ObjectId } from "mongodb";
import { initCollection } from "./db";
import { inputNumber, inputQuestion, inputYesNo, showTitle } from "./inputs";
import { input, number } from "@inquirer/prompts";
import { ModoCaptura, TipoBorrado } from "./index";

const colPersona: string = 'e_persona';

export class Persona {
    // Propiedades
    uid: string | null;
    nombre: string = '';
    apellidos: string = '';
    fechaNacimiento: Date = new Date(2007, 6, 6);
    lugarNacimiento: string = '';
    habilitado: boolean = true;

    // Lo que hagas aquí se ejecuta al poner new persona
    constructor(uid: string | null, nombre: string, apellidos: string, fechaNacimiento?: Date, lugarNacimiento?: string) {
        this.uid = uid;
        this.nombre = nombre;
        this.apellidos = apellidos;
        if (fechaNacimiento) { //si fecha de nacimiento tiene algo en <>
            this.fechaNacimiento = fechaNacimiento;
        }
        if (lugarNacimiento) {
            this.lugarNacimiento = lugarNacimiento;
        }
    }

    // Métodos
    getEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const diferenciaMeses = hoy.getMonth() - this.fechaNacimiento.getMonth();

        // Si el mes actual es menor al de nacimiento, 
        // o si es el mismo mes pero el día actual es menor, aún no cumple años.
        if (
            diferenciaMeses < 0 ||
            (diferenciaMeses === 0 && hoy.getDate() < this.fechaNacimiento.getDate())
        ) {
            edad--;
        }

        return edad;
    }

    getNombreCompleto(reverse: boolean = false): string {
        if (reverse)
            return `${this.apellidos} ${this.nombre}`
        else
            return `${this.nombre} ${this.apellidos}`
    }

    

    static async borrar(tipo: TipoBorrado, uid: string): Promise<void> {
        const collection = await initCollection(colPersona);
        if (tipo == TipoBorrado.Fisico) {
            collection.deleteOne({ _id: new ObjectId(uid) })

        } else if (tipo == TipoBorrado.Lógico) {
            collection.findOneAndUpdate(
                { _id: new ObjectId(uid) },
                { $set: { habilitado: false } }
            )
        }
    }


    async guardar(modo: ModoCaptura) {
        if (await inputYesNo('¿La información capturada es correcta? ')) {
            // To Do ...
            // Crear lógica para guardado de base de datos en MongoDB

            const collection = await initCollection(colPersona);

            if (modo == ModoCaptura.Nuevo) {
                //Insertar los datos de la persona 
                await collection.insertOne(this);
            }
            else if (modo == ModoCaptura.Editar) {
                // Editar Datos To Do...
                await collection.findOneAndUpdate(
                    { _id: new ObjectId(this.uid!) },
                    {
                        $set: {
                            nombre: this.nombre,
                            apellidos: this.apellidos,
                            fechaNacimiento: this.fechaNacimiento,
                            lugarNacimiento: this.lugarNacimiento
                        }
                    }
                );
            }


            // Cerrar Conexión a Base de Datos

            // Mostrar Mensaje
            showTitle('Usuario capturado de forma correcta')

        } else {
            if (modo == ModoCaptura.Nuevo) {
                console.log('Se canceló el registro de una nueva persona')
            } else if (modo == ModoCaptura.Editar) {
                console.log('Se canceló la modificiación de datos de la persona')
            }
        }
    }


    async preguntaDatos(modo: ModoCaptura): Promise<Persona> {
        
        let anioNacimiento: number | undefined = 0;
        let numeroMesNacimiento: number | undefined = 0;
        let diaNacimiento: number | undefined = 0;
        
        if (modo == ModoCaptura.Nuevo) {
            // Hacer preguntas al usuario
            this.nombre = await inputQuestion('Nombre => ')
            this.apellidos = await inputQuestion('Apellidos => ')
            anioNacimiento = await inputNumber('Año de Nacimiento => ')
            numeroMesNacimiento = await inputNumber('Mes de Nacimiento => ')
            diaNacimiento = await inputNumber('Día de Nacimiento => ')
            this.fechaNacimiento = new Date(anioNacimiento!, numeroMesNacimiento! - 1, diaNacimiento);
            this.lugarNacimiento = await inputQuestion('Lugar de Nacimiento => ')
            
            // Mostrar Datos Capturados
            // Darle vida a una clase
            
        } else if (modo == ModoCaptura.Editar) {
            this.uid = this.uid;
            this.nombre = await input({ message: 'Nombre => ', default: this!.nombre })
            this.apellidos = await input({ message: 'Apellidos => ', default: this!.apellidos })
            anioNacimiento = await number({ message: 'Año de nacimiento => ', default: this!.fechaNacimiento.getFullYear() })
            numeroMesNacimiento = await number({ message: 'Mes de nacimiento => ', default: (this!.fechaNacimiento.getMonth() + 1) })
            diaNacimiento = await number({ message: 'Día de nacimiento => ', default: (this!.fechaNacimiento.getDate()) })
            this.fechaNacimiento = new Date(anioNacimiento!, numeroMesNacimiento! - 1, diaNacimiento!)
            this.lugarNacimiento = await input({ message: 'Lugar de nacimiento => ', default: this!.lugarNacimiento })
            
            
        }
        return this
        // Ya no se ocupa: 
        // return new Persona(modo == ModoCaptura.Nuevo ? null : uid, nombre, apellidos, fechaNacimiento, lugarNacimiento); // si modo == modocaptura.nuevo será nullo, si no, uid: tendra eso, si si le inyectas el null
        
    }
    
    static async buscarPorcriterio(criterio: string): Promise<Persona[]> {
    // Crear lógica para buscar personas en base de datos de MongoDB
    const collection = await initCollection(colPersona);

    const regex = new RegExp(criterio, 'mi')
    const query: any = await collection.find({ $or: [{ "nombre": regex }, { "apellidos": regex }] }).toArray();

    return query
    }


    getGeolocation() {
        // To Do...
        // Utilizar el domicilio completo para obtener las coordenadas de latitud y longitud del domicilio para georegerenciar en un mapa
    }

    static async buscaPorUID(uid: string): Promise<Persona | null>{
    const collection = await initCollection(colPersona);
    const datosPersona = await collection.findOne({ _id: new ObjectId(uid) })

    if (!datosPersona)
        return null

    return new this (datosPersona!._id.toString(), datosPersona.nombre, datosPersona.apellidos, datosPersona!.fechaNacimiento, datosPersona!.lugarNacimiento)

    }
}
