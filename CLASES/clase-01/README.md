# Clase01.-Fundamentos de GIT 

En el index.html poner !

### Comandos Condiguración Inicial

**Estatus de archivos en git**
- U -> Untracked
- M -> Modify
- A -> Append o Added

**Modificaodres**
- El modificador -b significa crear


Abrir una terminal en Mac y ejecutar los siguientes comandos 
```bash
git config --global user.name "Santiago Gael Durán Ramírez"
git config --global email.name "santiagogaelduranramirez@gmail.com"
```

para pedir ayuda en definiciones:
ejecutamos el siguiente comando
```bash
git --help
git <comand> --help
```

Para inicializar un nuevo repositorio de git **Git** utilizamos el siguiente comando:
```bash
git init
```

Para cambiar el nombre de la rama princial **master** a **pro** se utiliza el siguiente comando:
```bash
git branch -m master pro
```

Para configurar el nombre de la rama por default al inicializar un proyecto se utiliza
el siguiente comando:
```bash
git config --global init.defaultBranch pro
```

### Comandos del Ciclo de Vida de **Git**
```bash
git status
get add .
git stauts
git commit -m "<message>"
```

Para regresar al último commit del proyecto, utilizar el siguiente comando:
```bash
git checkout -- .
```

Para ver el listado de **commits** utilizar el siguiente comando:
```bash
git log
```

flujo de trabajo en **Git**
![](assets/images/git%20workflow.webp)


### Vincular repositorio local con repositorio remoto(**GitLab**)
Para vincular el repositorio local con el repositorio remoto de GitLab se utilizan los siguientes comandos:
```bash
# Agregar repositorio remoto (repositorio normal)
git remote add origin santiagogaelduranramirez:token@gitlab.com/curso-mean-gto/clase-01.git

# Modificar repositorio remoto (por si te equivocas al querer subirlo, por si algo falla al subirlo a gitlab al poner el repositorio normal)
git remote set-url origin https://santiagogaelduranramirez:token@gitlab.com/curso-mean-gto/clase-01.git

# Subir cambios del repositorio local al repositorio remoto
git push -u origin pro

# Subir los cambios al git lab
git push
```


### Clonar repositorio 
Para clonar un repositorio de git se hace con la siguiente instrucción: 
```bash
#Vas a GitLab, en tu proyecto, en el código copias el de https
git clone https://santiagogaelduranramirez:token@gitlab.com/curso-mean-gto/clase-01.git
```

### Configuración de Ramas por ambiete
Rama para crear una nueva rama se ejecuta el siguiente comando
```bash
# Crear rama de qa 
git checkout -b qa
# Subir los cambios a Gitlab
git push -u origin qa
git push 

# Crear rama de dev 
git checkout -b dev
# Subir los cambios a Gitlab
git push -u origin dev
git push
```

### Para moverte o crear ramas es con 
```bash
# el modificador -b significa crear
git checkout -b "<nombre de la rama>"
```

### Para realizar merge entre ramas se utilizan los siguientes comandos
```bash
# Posicionarse en la rama que recibirá el MERGE
# Ejemplo: git checkout qa (o pro si ya está hecho en qa)
git checkout <nombre-de-la-rama>

# Realizar el Merge entre ramas
# Ejemplo: git merge dev
git merge <branch-to-merge>

```

