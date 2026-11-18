
import { initCollection, inputQuestion, inputYesNo, ModoCaptura } from "./index";
import { Entity } from "./entity";
import { ObjectId } from "mongodb";

const collectionName: string = 'e_usuario';

export class Usuario extends Entity<Usuario> {
    uid: string = '';
    nombre: string = '';
    correo: string = '';
    password: string = '';
    fotoUrl: string = '';

    async preguntaDatos(modoCaptura: ModoCaptura): Promise<void> {
        if (modoCaptura == ModoCaptura.Nuevo) {
            this.nombre = await inputQuestion('Nombre =>');
            this.correo = await inputQuestion('Correo =>');
            this.password = await inputQuestion('Password =>');
            this.fotoUrl = await inputQuestion('Foto =>');
        } else {
            this.nombre = await inputQuestion('Nombre =>', this.nombre);
            this.correo = await inputQuestion('Correo =>', this.correo);
            this.password = await inputQuestion('Password =>', this.password);
            this.fotoUrl = await inputQuestion('Foto =>', this.fotoUrl);
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
                            correo: this.correo,
                            pasword: this.password,
                            foto: this.fotoUrl,
                        }
                    }
                );
            }

        }
        else {
            if (modoCaptura == ModoCaptura.Nuevo) {
                console.log('Se canceló la captura de un NUEVOO cliente')
            } else if (modoCaptura == ModoCaptura.Editar) {
                console.log('Se canceló la modificación de datos cliente')
            }
        }
    }



}


