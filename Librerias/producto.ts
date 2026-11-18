import { ObjectId } from "mongodb";
import { Entity } from "./entity";
import { initCollection, inputYesNo, ModoCaptura, showTitle, inputQuestion, inputNumber } from "./index";

const colProducto: string = 'e_producto';


export class Producto extends Entity<Producto> {

    uid: string = ''; //ObjectId = new ObjectId();
    codigo: string = '';
    nombre: string = '';
    descripcion: string = '';
    codigoBarras: string = '';
    categoria: string = '';
    marca: string = '';
    modelo: string = '';
    precio: number | undefined = 0.0;
    fechaCaducidad: Date = new Date();
    stockMax: number | undefined = 0;
    stockMin: number | undefined = 0;

    //  constructor(fechaCaducidad?: Date) {
    //     if (fechaCaducidad) { 
    //         this.fechaCaducidad = fechaCaducidad;
    //     }
    //  }

    getFechaCaducidad() {
        const ahora = new Date();

        // Si la fecha ya pasó
        if (this.fechaCaducidad <= ahora) {
            return "La fecha ya ha expirado";
        }

        let años = this.fechaCaducidad.getFullYear() - ahora.getFullYear();
        let meses = this.fechaCaducidad.getMonth() - ahora.getMonth();
        let dias = this.fechaCaducidad.getDate() - ahora.getDate();

        // Ajuste de días negativos
        if (dias < 0) {
            meses--;
            // Obtenemos el último día del mes anterior para compensar
            const ultimoDiaMesAnterior = new Date(this.fechaCaducidad.getFullYear(), this.fechaCaducidad.getMonth(), 0).getDate();
            dias += ultimoDiaMesAnterior;
        }

        // Ajuste de meses negativos
        if (meses < 0) {
            años--;
            meses += 12;
        }

        return { años, meses, dias };
    }

    async preguntaDatos(modoCaptura: ModoCaptura): Promise<void> {

        if (modoCaptura == ModoCaptura.Nuevo) {
            // Preguntas
            this.nombre = await inputQuestion('Nombre => ');
            this.codigo = await inputQuestion("Código => ");
            this.descripcion = await inputQuestion('Describe el producto => ');
            this.codigoBarras = await inputQuestion('Código de Barras => ');
            this.categoria = await inputQuestion('Categoría del producto => ');
            this.marca = await inputQuestion('Marca del producto => ');
            this.modelo = await inputQuestion('Modelo del producto => ');
            this.precio = await inputNumber('Precio => ');
            this.fechaCaducidad = await new Date();
            this.stockMax = await inputNumber('Stock Max => ');
            this.stockMin = await inputNumber('Stock Min => ');
        }


        else {
            this.nombre = await inputQuestion('Nombre => ', this.nombre);
            this.codigo = await inputQuestion("Código => ", this.codigo);
            this.descripcion = await inputQuestion('Describe el producto => ', this.descripcion);
            this.codigoBarras = await inputQuestion('Código de Barras => ', this.codigoBarras);
            this.categoria = await inputQuestion('Categoría del producto => ', this.categoria);
            this.marca = await inputQuestion('Marca del producto => ', this.marca);
            this.modelo = await inputQuestion('Modelo del producto => ', this.modelo);
            this.precio = await inputNumber('Precio => ', this.precio);
            this.fechaCaducidad = await new Date();
            this.stockMax = await inputNumber('Stock Max => ', this.stockMax);
            this.stockMin = await inputNumber('Stock Min => ', this.stockMin);
        }
    }


    async guardar(modoCaptura: ModoCaptura): Promise<void> {
        if (await inputYesNo('¿La información capturada es correcta? ')) {
            // Crear lógica para guardado de base de datos en MongoDB

            const collection = await initCollection(colProducto);

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
                            codigo: this.codigo,
                            descripcion: this.descripcion,
                            codigoBarras: this.codigoBarras,
                            categoria: this.categoria,
                            marca:  this.marca,
                            modelo: this.modelo,
                            precio: this.precio,
                            fechaCaducidad: this.fechaCaducidad,
                            stockMax: this.stockMax,
                            stockMin: this.stockMin,
                        }
                    }
                );
            }

            else {
                if (modoCaptura == ModoCaptura.Nuevo) {
                    console.log('Se canceló la captura de un NUEVOO cliente')
                } else if (modoCaptura == ModoCaptura.Editar) {
                    console.log('Se canceló la modificación de datos cliente')
                }
            }

            showTitle('Producto capturado de forma correcta')

        }
    }
}

