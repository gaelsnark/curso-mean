# Introducción a TypeScript 

- D: paquetes para facilitar la ayuda al desarrollador

### Para generar el package.json
```bash
npm init -y
```
### Instalar TypeScript 
```bash
npm i typescript -D
```

### Instalar nodemon
```bash
npm i nodemon -D
```

### Iniciar proyecto de TypeScript 
```bash
npx tsc --init
```

### Sustituir tsconf.json por el siguiente código
```json
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    // "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "commonjs",
    "target": "es2024",
    "types": [],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": false,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
    "esModuleInterop": true
  }
}
```

### Traspilar el TypeScript a JavaScript 
```bash
npx tsc -w
```

### Ejecutar el programa de TypeScript
```bash
node ./dist/index.js
```

### Instalar la librería para preguntar (paquete)
```bash
npm i readline-sync
// esta es otra mejor: 
npm i @inquirer/prompts
```

### Tipos de libería para preguntar (segundo paso que incluye la ayuda y tipos)
```bash
npm i --save-dev @types/readline-sync
```

### Quitar los comentarios en el tsconfig.json en
"outDir": "./dist",

### Agregar false en vez de true en verbatimModuleSyntax en el tsconfig.json en
"verbatimModuleSyntax":


### Comandos para multi-cursor
->shift+comand+option
->shift+comand+l


### Para ir a un directorio
```bash
cd <nombre del directorio>
```

### Para regresar a un directorio anterior
```bash
cd ..
```

### Para remover si es que lo metes al repositorio
```bash
git rm -r <Nombre del archivo>
```

### Para ver toda la ruta en la que estás
```bash
pwd
```

### Para instalar las liberías en la terminal
```bash
npm i ../Librerias/ 
import { MongoClient } from 'mongodb';
```

### Para instalar mongodb
```bash
import { MongoClient } from 'mongodb';
```

### Agregar esto en package.json
```bash
"start"
"tsw": "npx tsc -w",
    "start": "npx nodemon ./dist/index.js",

```
### En la terminal instalar
```bash
npm install -D @types/node
```

