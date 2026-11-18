
import { initCollection, inputNumber, inputQuestion, inputYesNo, ModoCaptura } from "./index";
import { Entity } from "./entity";
import { ObjectId } from "mongodb";

const collectionName: string = 'e_tienda';

export class Tienda extends Entity<Tienda> {
    uid: string = '';
    codigo: string = '';
    nombre: string = '';
    domicilio: string = '';
    pais: string = '';
    codigoPostal: string = '';
    fotoUrl: string = '';
    latitud: number | undefined = 0;
    longitud: number | undefined = 0;

    async preguntaDatos(modoCaptura: ModoCaptura): Promise<void> {
        if (modoCaptura == ModoCaptura.Nuevo) {
            this.codigo = await inputQuestion('Código =>');
            this.nombre = await inputQuestion('Nombre =>');
            this.domicilio = await inputQuestion('Domicilio =>');
            this.pais = await inputQuestion('País =>');
            this.codigoPostal = await inputQuestion('Código Postal =>');
            this.fotoUrl = await inputQuestion('Foto =>');
            this.latitud = await inputNumber('Latitud =>');
            this.longitud = await inputNumber('Longitud =>');


        } else {
            this.codigo = await inputQuestion('Código =>', this.codigo);
            this.nombre = await inputQuestion('Nombre =>', this.nombre);
            this.domicilio = await inputQuestion('Domicilio =>', this.domicilio);
            this.pais = await inputQuestion('País =>', this.pais);
            this.codigoPostal = await inputQuestion('Código Postal =>', this.codigoPostal);
            this.fotoUrl = await inputQuestion('Foto =>', this.fotoUrl);
            this.latitud = await inputNumber('Latitud =>', this.latitud);
            this.longitud = await inputNumber('Longitud =>', this.longitud);
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
                            codigo: this.codigo,
                            nombre: this.nombre,
                            domicilio: this.domicilio,
                            pais: this.pais,
                            codigoPostal: this.codigoPostal,
                            foto: this.fotoUrl,
                            longitud: this.longitud,
                            latitud: this.latitud
                        }
                    }
                );
            }

        }
        else {
            if (modoCaptura == ModoCaptura.Nuevo) {
                console.log('Se canceló la captura de un NUEVOO tienda')
            } else if (modoCaptura == ModoCaptura.Editar) {
                console.log('Se canceló la modificación de datos tienda')
            }
        }
    }

    static getCoordenadas(codigo: string): {lat: number, lng: number} {
  
        switch(codigo){
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


