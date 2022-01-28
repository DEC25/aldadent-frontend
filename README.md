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

Si el comando no se reconoce y no cuentas con NodeJS, puedes descargarlo haciendo [aqui](https://nodejs.org/en/download/).

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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
