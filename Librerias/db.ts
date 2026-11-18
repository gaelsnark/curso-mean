import { Collection, MongoClient } from "mongodb";

const dbName = 'dbcurso';

export const url = 'mongodb://dba-root:mongoadminsecret@localhost:27017';

export const connectDB = async (url: string): Promise<MongoClient> => {
    // Cliente de CMongoDB

    const client = new MongoClient(url);

    // Database Name
    const dbName = 'dbcurso';

    // Se conecta a mongoDB
    await client.connect();
    //console.log('Connected successfully to server');

    // Regresar Objeto de Conexión a Base de Datos
    return client;

}

export const initCollection = async (collectionName: string): Promise<Collection> => {
    // Crear lógica para buscar personas en base de datos de MongoDB
    const mongo: MongoClient = await connectDB('mongodb://dba-root:mongoadminsecret@localhost:27017');
    const db = mongo.db(dbName);
    return db.collection(collectionName);

}