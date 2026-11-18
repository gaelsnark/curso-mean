
class Product {
    id: string | null;
    Precio: number = 0;
    ProductType: string = '';
    FechaProd: Date = new Date()
    Marca?: string = '';
    lugarOrigen: string = '';
    habilitado: boolean = true;


    // Lo que hagas aquí se ejecuta al poner new persona
    constructor(id: string | null, Precio: number, ProductType: string, FechaProd: Date, Marca?: string, lugarOrigen?: string) {
        this.id = id;
        this.Precio = Precio;
        this.ProductType = ProductType;
        if (Marca) { //si fecha de nacimiento tiene algo en <>
            this.Marca = Marca;
        }
        if (lugarOrigen) {
            this.lugarOrigen = lugarOrigen;
        }
    }
    
    getAntiguedad(): any {
        const hoy = new Date();
        let tiempo = hoy.getFullYear() - this.FechaProd.getFullYear();
        const diferenciaMeses = hoy.getMonth() - this.FechaProd.getMonth();
    
        if (
            diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < this.FechaProd.getDate())
        ) {
            tiempo--;
        }
    
        return tiempo;
    }

}
