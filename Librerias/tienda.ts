import { ObjectId } from "mongodb";
import { initCollection, inputNumber, ModoCaptura, showTitle } from "./index";

const colTienda = 'e_Market';

export class store {

    _id: ObjectId = new ObjectId();
    Nombre: string = '';
    Lugar: string = '';
    Compañia: string = '';
    CoordenadasShoop: number | undefined = 0.0;
    CoordenadasYou: number | undefined = 0.0;

    constructor() {

    }

    async guardar(modo: ModoCaptura) {
            const collection = await initCollection(colTienda);

            if (modo == ModoCaptura.Nuevo) {
                //Insertar los datos de la tienda
                await collection.insertOne(this);
            }

            showTitle('Tienda capturada de forma correcta')

    }
};



