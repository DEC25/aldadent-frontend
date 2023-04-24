# Pasos para ejecutar el proyecto en local

## NodeJS

Se debe tener instalado **NodeJS** junto con el Administrador de Paquetes de Node **(npm)**.

Para verificar si tienes instalado **NodeJS** junto con **npm** puedes ejecutar los siguientes comandos:

```bash
node --version && npm --version
```

Nos deberia responder algo similiar a lo siguiente:

>v##.#.#.

>#.#.#.

Si el comando no se reconoce y no cuentas con NodeJS, puedes descargarlo [aqui](https://nodejs.org/en/download/).

## Instalar las dependencias de ReactJS

>### Verificar la ubicacion de la terminal
>
>Primero, debemos tener en cuenta que nuestra consola debe de estar ubicada en la carpeta del proyecto.
>
>Para eso podemos escribir el siguiente comando:
>
>```bash
>pwd
>```
>
>El comando nos deberia responder con una linea similar a la siguiente:
>
>>C:/Users/<tu_usuario>/Desktop/html-css
>
>Podemos saber que estamos en nuestro proyecto ya que el ultimo argumento es `html-css`.
>
>Considerando que no se le haya cambiado el nombre al momento de clonar el repositorio...
>Si se le cambio el nombre a la carpeta, el ultimo argumento deberia ser el nombre que se le asignó.

### Continuar con la instalacion de dependencias

Luego de realizar el primer paso, tenemos que instalar las dependencias de **React** para que el proyecto
se pueda ejecutar sin ningun problema.

Para eso debemos ejecutar el siguiente comando:

```bash
npm install
```

## Compilar el proyecto

Luego de haber instalado las dependencias del proyecto, solo queda compilarlo con el siguiente comando:

```bash
npm start
```

> El proceso de compilación puede demorar algunos minutos, pero cuando el proyecto haya terminado de compilarse
> se abrirá el navegador de forma automatica.

---