
import { initCollection, inputNumber, inputQuestion, inputYesNo, ModoCaptura } from "./index";
import { Entity } from "./entity";
import { ObjectId } from "mongodb";

const collectionName: string = 'e_proveedor';

export class Proveedor extends Entity<Proveedor> {
    uid: string = '';
    nombre: string = '';
    rfc: string = '';
    domicilio: string = '';
    nombreContacto: string = '';
    telefono: string = '';
    correo: string = '';
    

    async preguntaDatos(modoCaptura: ModoCaptura): Promise<void> {
        if (modoCaptura == ModoCaptura.Nuevo) {
            this.nombre = await inputQuestion('Nombre =>');
            this.rfc = await inputQuestion('rfc =>');
            this.domicilio = await inputQuestion('Domicilio =>');
            this.nombreContacto = await inputQuestion('Nombre del Contacto =>');
            this.telefono = await inputQuestion('Teléfono =>');
            this.correo = await inputQuestion('correo =>');
            


        } else {
            this.nombre = await inputQuestion('Nombre =>', this.nombre);
            this.rfc = await inputQuestion('rfc =>', this.rfc);
            this.domicilio = await inputQuestion('Domicilio =>', this.domicilio);
            this.nombreContacto = await inputQuestion('Nombre del Contacto =>', this.nombreContacto);
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
                            rfc: this.rfc,
                            domicilio: this.domicilio,
                            nombreContacto: this.nombreContacto,
                            Teléfono: this.telefono,
                            correo: this.correo
                        }
                    }
                );
            }

        }
        else {
            if (modoCaptura == ModoCaptura.Nuevo) {
                console.log('Se canceló la captura de un NUEVO proveedor')
            } else if (modoCaptura == ModoCaptura.Editar) {
                console.log('Se canceló la modificación de datos de proveedor')
            }
        }
    }

    static getCoordenadas(nombre: string): {lat: number, lng: number} {
  
        switch(nombre){
            case '32595-122105':
                return{lat:24, lng: 55}
                break;

            case '23359-229184':
                return{lat:54, lng: 25}
                break;

            default:
                return {lat: 0.0, lng: 0.0}
        }
}


}


