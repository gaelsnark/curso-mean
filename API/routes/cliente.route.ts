import { Router } from "express";
import {Client} from "../controllers/cliente.controller"

// Esto es las funciones que se hacen
const router: Router = Router();

router.get('/healthy', Client.healthy);

router.get('/getAll', Client.getAll); // Imaginemos que busquemos un id, lo que hace es darme todos por el All
router.get('/getById', Client.getById) // Que busque por ID
router.get('/getAllByCriterio', Client.getAllByCriterio)

router.post('/create', Client.create);
router.patch('/update', Client.create);
router.delete('/delete', Client.create);

export default router;