import { inputNumber, inputQuestion, ModoCaptura, Producto, Tienda} from 'librerias'
(async () => {

const product: Producto = new Producto();

product.codigo = await inputQuestion('Código => ');
product.nombre = await inputQuestion('Nombre => ');
product.descripcion = await inputQuestion('Descripción => ');
product.categoria = await inputQuestion('Categoría => ');
product.codigoBarras = await inputQuestion('Código de barras => ');
product.marca = await inputQuestion('Marca => ');
product.modelo = await inputQuestion('Modelo => ');
product.fechaCaducidad = new Date(2026, 0, 31);
product.precio = await inputNumber('Precio => ')
product.stockMax = 8;
product.stockMin = 9;

product.guardar(ModoCaptura.Nuevo)

console.log(product.getFechaCaducidad());


})();