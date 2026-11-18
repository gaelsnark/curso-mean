// Esta carpeta tendrá bastantes métodos

import { NextFunction, Request, Response } from "express";
import { Cliente } from "librerias";

export const Client = {
    healthy: (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({
            ok: true,
            message: '=> End '

        })
        
    },

    getAll: (req: Request, res: Response, next: NextFunction) => {

        
    },

    getAllByCriterio: async (req: Request, res: Response, next: NextFunction) => {

        console.log(req.body);

    const { criterio }  = req.body;
   //const { criterio }  = req.params;  // Se lo pasas por la URL en client rest

    const regex = new RegExp(criterio, 'mi');
    const result = await Cliente.buscarPorCriterio<Cliente>('e_cliente', [{nombre: regex},{razonSocial: regex}]);
    console.log(result);
    
    if (result.length == 0){
        res.status(404).json({
                ok: true,
                message: '=> End Point getAllByCriterio funcionando correctamente..',
                result: `No se encontraron coincidencias ${criterio}`
            });
        return; // funciona como break
    }

    res.status(200).json({
                ok: true,
                message: '=> End Point getAllByCriterio funcionando correctamente..',
                result
            });

    },

    getById: () => {


    },

    create: () => {

    },

    update: () => {

    },

    delete: () => {

    },
}