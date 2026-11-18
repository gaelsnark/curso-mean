
import { initCollection, inputNumber, inputQuestion, inputYesNo, ModoCaptura } from "./index";
import { Entity } from "./entity";
import { ObjectId } from "mongodb";

const collectionName: string = 'e_vendedor';

export class Vendedor extends Entity<Vendedor> {
    uid: string = '';
    nombre: string = '';
    departamento: string = '';
    telefono: string = '';
    correo: string = '';
    

    async preguntaDatos(modoCaptura: ModoCaptura): Promise<void> {
        if (modoCaptura == ModoCaptura.Nuevo) {
            this.nombre = await inputQuestion('Nombre =>');
            this.departamento = await inputQuestion('Nombre del Departamento =>');
            this.telefono = await inputQuestion('Teléfono =>');
            this.correo = await inputQuestion('correo =>');
            

        } else {
            this.nombre = await inputQuestion('Nombre =>', this.nombre);
            this.departamento = await inputQuestion('Nombre del Contacto =>', this.departamento);
            this.telefono = await inputQuestion('Teléfono =>', this.telefono);
            this.correo = await inputQuestion('Correo =>', this.correo);
            
        }
    }

    // Guardar
    async guardar(modoCaptura: ModoCaptura): Promise<void> {
        if (await inputYesNo('¿La información capturada es correcta? ')) {

            const collection = await initCollection(collectionName);
            if (modoCaptura == ModoCaptura.Nuevo) {
                //Insertar los datos de la persona 
                await collection.insertOne(this);
            }
            else if (modoCaptura == ModoCaptura.Editar) {
                await collection.findOneAndUpdate(
                    { _id: new ObjectId(this.uid!) },
                    {
                        $set: {
                            nombre: this.nombre,
                            departamento: this.departamento,
                            telefono: this.telefono,
                            correo: this.correo
                        }
                    }
                );
            }

        }
        else {
            if (modoCaptura == ModoCaptura.Nuevo) {
                console.log('Se canceló la captura de un NUEVO registro')
            } else if (modoCaptura == ModoCaptura.Editar) {
                console.log('Se canceló la modificación de datos de registro')
            }
        }
    }


}


