# Creación de API 
#### (El # solo es para titulos)


### 1.Se hace instalación en proyecto nodeJS
```bash
npm init -y
```

### 2.Instalación de dependencias de desarrollo
```bash
npm i typescript nodemon @types/node -D
```

### 3. Instalación del tsconfig.json
```bash
npx tsc --init
```

### 4. En tsconfig.json
```json
    "outDir": "./dist",
    "types": ["node"],
    "verbatimModuleSyntax": false,
```

### 5. Instalación del paquete concurrently
```bash
npm i concurrently
```

### 6. Crear los scripts necesarios en el package.json
```json
    "tscw": "npx tsc -w",
    "dev": "concurrently 'npm run tscw' 'npx nodemon dist/api.js'",
    "test": "echo \"Error: no test specified\" && exit 1"
```

### 7. Crear archivo api.ts y probar que funciona correctamente con el comando:
```bash
npm run dev
```

### 8. Instalación del servidor web Express para NodeJS
```bash
npm i express cors
```

### 9. Al poner el import de express con: import express from 'express'; <-- Poner esto en la terminal
```bash
npm i --save-dev @types/express
```

#### Al trabajar con apis se usan HTTPS
```bash
HTTP
    Verbos
    GET     -> Read
    POST    -> Create
    PUT     -> Uptdate
    PATCH   -> Update
    DELETE  -> Borrar/Eliminar
``` 
