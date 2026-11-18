export * from './inputs';
export * from './db';
export * from './persona';
export * from './producto';
export * from './tienda';
export * from './Cliente';
export * from './crudMenu';
export * from './usuario';
export * from './tiendaReal';
export * from './proveedores';
export * from './vendendor';
           

export enum ModoCaptura { // (Sirven para escoger entre lo que le pongas, que será 1 o 0)
    Nuevo, // 0
    Editar // 1
}

export enum TipoBorrado {
    Fisico,
    Lógico
}