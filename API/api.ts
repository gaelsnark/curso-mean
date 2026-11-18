import express, { NextFunction, Request, Response } from 'express';
import RoutesCliente from './routes/cliente.route';


// El servidor, crear instancia:

const api = express();

// Habilitas las funcines 
api.use(express.json());
api.use(express.urlencoded({extended: true}));

api.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`📍 ${req.method} ${req.path}`);;
    next();
});

api.use('/api/v1/clients',RoutesCliente); // Esto es cómo quieres mandar a llamar para buscarlo en internet, con dentro de lo de ''

api.use((req: Request, res: Response) => {
    console.log('❌ Ruta no encontrada:', req.path);
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Arrancar el API
api.listen(3000,() => { // EL 3000 es el puerto
console.log('API funcionando correctamente !!!');

}) 