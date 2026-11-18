import { ObjectId } from "mongodb";
import { ModoCaptura, TipoBorrado, initCollection } from "./index";

export abstract class Entity<TipoEntity> {
    
    abstract uid: string;
    abstract nombre: string;

    init() {
        console.log('Esta iniciando la clase');
    }

    abstract preguntaDatos(modoCaptura: ModoCaptura): Promise<void>;
    abstract guardar(modoCaptura: ModoCaptura): Promise<void>; 

    static async buscarPorCriterio<Type>(collectionName: string, filters: any[]): Promise<Type[]> {
        // Crear lógica para buscar en la base de datos de MongoDB
        const collection = await initCollection(collectionName);
        const query: any = await collection.find({ $or: filters }).toArray()

        return query
    };
    
    static async buscarPorID<Type>(collectionName: string, uid: string): Promise<Type | null> {
        const collection = await initCollection(collectionName);
        const datosEntity = await collection.findOne({ _id : new ObjectId(uid) })

        if (!datosEntity) 
            return null

        return datosEntity as Type
    }; 

    static async borrar(uid: string, collectionName: string, tipo: TipoBorrado): Promise<void> {
        const collection = await initCollection(collectionName);
        if (tipo == TipoBorrado.Fisico) {
            collection.deleteOne({ _id: new ObjectId(uid) })
        } else if (tipo == TipoBorrado.Lógico) {
            collection.findOneAndUpdate(
                { _id : new ObjectId(uid) },
                { $set: { habilitado: false } }
            ) 
        }
    };

}