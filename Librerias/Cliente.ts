import { ModoCaptura } from "./index";
import { initCollection } from "./db";
import { Entity } from "./entity";
import { inputYesNo, inputNumber, inputQuestion, showTitle } from "./inputs";
import { ObjectId } from "mongodb";


const collectionName: string = 'e_cliente';

export class Cliente extends Entity<Cliente> {
    // Campos
    uid: string = '';
    nombre: string = '';
    nombreComercial: string = '';
    tipoPersona: string = '';
    regimen: string = '';
    rfc: string = '';
    razonSocial: string = '';
    domicilio: string = '';
    credito: number | undefined = 0;


    async preguntaDatos(modoCaptura: ModoCaptura): Promise<void> {

        if(modoCaptura == ModoCaptura.Nuevo){
        // Preguntas
        this.nombre = await inputQuestion('Nombre => ');
        this.nombreComercial = await inputQuestion('Nombre Comercial => ');
        this.tipoPersona = await inputQuestion('Tipo Persona => ');
        this.regimen = await inputQuestion('Régimen => ');
        this.rfc = await inputQuestion('RFC => ');
        this.razonSocial = await inputQuestion('Razón social => ');
        this.domicilio = await inputQuestion('Domicilio => ');
        this.credito = await inputNumber('Crédito => ');
        }


        else{
        this.nombre = await inputQuestion('Nombre => ', this.nombre);
        this.nombreComercial = await inputQuestion('Nombre Comercial => ', this.nombreComercial);
        this.tipoPersona = await inputQuestion('Tipo Persona => ', this.tipoPersona);
        this.regimen = await inputQuestion('Régimen => ', this.regimen);
        this.rfc = await inputQuestion('RFC => ',this.rfc);
        this.razonSocial = await inputQuestion('Razón social => ',this.razonSocial);
        this.domicilio = await inputQuestion('Domicilio => ', this.domicilio);
        this.credito = await inputNumber('Crédito => ', this.credito);
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
                            nombreComercial: this.nombreComercial,
                            tipoPersona: this.tipoPersona,
                            regimen: this.regimen,
                            rfc: this.rfc,
                            razonSocial: this.razonSocial,
                            domicilio: this.domicilio,
                            credito: this.credito
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
