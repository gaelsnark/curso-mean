# Curso MEAN — Sistema de Tienda en TypeScript

Proyectos, clases y prácticas del **Curso MEAN** (MongoDB · Express · Angular · Node.js), desarrollados en **TypeScript**.
El hilo conductor es un **sistema de gestión de una tienda**: clientes, productos, proveedores, vendedores, usuarios y tiendas, que empieza como programas de consola y termina como una **API REST** con Express conectada a **MongoDB**.

## Tecnologías

- **TypeScript** y **Node.js**
- **Express**: API REST
- **MongoDB**: driver oficial `mongodb`
- **@inquirer/prompts** y **readline-sync**: menús interactivos en consola
- **nodemon**, **concurrently** y `tsc -w` para el desarrollo
- **HTML / CSS**: maquetas de un panel de administración

## Estructura del repositorio

| Carpeta | Contenido |
|---|---|
| [`Librerias/`](Librerias) | **Librería compartida** (`librerias`) que usan casi todos los proyectos: entidades (`Persona`, `Cliente`, `Producto`, `Proveedor`, `Vendedor`, `Usuario`, `Tienda`), conexión a MongoDB, menús CRUD reutilizables y utilidades de captura de datos. |
| [`API/`](API) | **API REST con Express**: rutas `/api/v1/clients` para consultar, buscar por ID o criterio, crear, actualizar y eliminar clientes, con controladores separados y pruebas en `rest/client.rest`. |
| [`Clase07/`](Clase07) | **Aplicación de consola completa** con menú principal y CRUD de clientes, productos, proveedores, vendedores, usuarios y tiendas, organizada en capas. |
| [`Clase06/`](Clase06) | Modelado de `Cliente`, `Producto` y `Tienda` con clases. |
| [`Clase05/`](Clase05) | Introducción a bases de datos (relacionales vs. NoSQL) y primeras operaciones con MongoDB. |
| [`Products/`](Products) | Clase `Product` y persistencia de productos en MongoDB. |
| [`CLASES/`](CLASES) | Clases 01 a 04: maquetas HTML de un dashboard (productos, órdenes y detalle de orden), fundamentos de TypeScript y funciones. |
| [`Prácticas/`](Prácticas) | Prácticas 03 y 04: simulación de un cajero (clientes con NIP y saldo) usando interfaces y clases. |
| [`Tarea02/`](Tarea02), [`Tareas/`](Tareas) | Tareas del curso: un programa de usuarios con NIP y saldo, y maquetas HTML. |

## Cómo ejecutarlo

Requisitos: **Node.js 18+** y, para los proyectos con base de datos, una instancia de **MongoDB** local en `localhost:27017`.

```bash
# 1. Instalar y compilar la librería compartida
cd Librerias && npm install && npx tsc

# 2. Entrar a un proyecto, por ejemplo la API
cd ../API && npm install
npm run dev        # compila en modo watch y levanta la API en http://localhost:3000
```

En los proyectos de consola (`Clase07`, por ejemplo):

```bash
npm install
npx tsc            # compila a dist/
node dist/index.js
```

> Los datos de conexión a MongoDB en `Librerias/db.ts` son de un entorno **local de práctica**.

## Autor

**Santiago Gael Durán Ramírez**. Estudiante de Ingeniería en Tecnologías de Información y Negocios Digitales en la Universidad Anáhuac Querétaro.
