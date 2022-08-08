/*
!REACT
Es una librería. Te entrega una utilidad. Es un set de herramientas que te entrega todo un marco de trabajo. Un framework (ej: less) es menos, solo te entrega un espacio de trabajo.

Es para interfaces gráficas. Más solicitado con angular.

Son altamente dinámicas. Tienen funcionalidades sin necesidad de recargar el navegador. Es REACTIVO.

Es una librería declarativa (no tenemos que hacer el clásico getElementbyId, React lo selecciona el elemento del DOM por atrás. Nosotros solo le decimos lo que queremos), eficiente (no tiene un exceso de funcionalidades) y flexible (se puede extender con otras librerías o tecnologías como reduct y next y además tiene otras herramientas para usar) y sirve para construir interfaces de usuarios. */

const numbers = [4, 2, 3, 6];
//imperativo (le decimos COMO queremos que se hagan las cosas).
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

//declarativo (decime QUE queremos que se haga). REACT es declarativo.
numbers.reduce(function (p, c) {
  return p + c;
});

/*
!VIRTUAL DOM:
Es un espejo sobre el que React va a trabajar. Cuando react detecta un cambio, lo compara el nuevo DOM (copia) con el DOM anterior (actual). Detecta los cambios y renderiza de nuevo solo la parte de los cambios. El resto de la página queda igual. Se gana performance (velocidad, rapidez, experiencia para el usuario de que funcione más rápido cuando interactúa).

Cómo desglozar una aplicación en pequeños compononetes para poder reutilizarlos.
*/

/* 
!COMPONENTES:
Tienen un estado interno. Es como una cajita. Además desde afuera recibe propiedades (props. Se le puede dar cualquier nombre.). A partir de esa propiedad voy modificando lo que se renderiza en el DOM. El estado sirve para comunicación dentro de un componente. Almacena datos dentro del componente. Dentro de un estado podes guardar la info. de un formulario por ejemplo. Podemos condicionar el componente de acuerdo al estado. Es como una variable dentro del componente.

Pueden tener componentes dentro.
*/

/*
!JSX (y BABEL)
REACT introduce este lenguaje que es una mezcla de JS con HTML. Ejemplo:*/

const element = <h1>Hello, World! </h1>;

/*Hay un intermediario (BABEL) que lee el jsx y lo convierte a la sintaxis pura de React.

Cuando abris un corchete en JSX podes escribir código JS.
Ejemplo:
*/
/* const element = {
  < h1 >
  Hello, { formatName(user)}!
  <h1/>
}
 */

/*
!FORMAS DE CREAR COMPONENTES:
La forma de escribirlo es diferente, pero hace lo mismo.*/

// 1)
// !FUNCIONALES:
function Welcome(props) {
  return <h1> Hello, {props.name}</h1>;
}
// 2)
// !DE CLASE:
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
/* Antes si el componente necesitaba estado solo se podía usar clase. Después esto cambio. Las clases tienen otras funcionalidades buenas. Hay que aprender los dos. */

/* 
!WEBPACK CON REACT:
Wepack pasa por todos nuestros archivos y lo que necesite ser transformado lo va a pasar a un bundle. Así tenemos toda nuestra lógica en un solo archivo que sea legible por el browser, como en los bundles.

Tenemos que instalar webpack, react y react dom.

WEbpack recorre toda la aplicación y utlizando babel traduce todo lo que este en react a la sintaxis que necesita para poder ser interpretado por el browser.

El webpack aparte de entry y output puede recibir un paquete con reglas (module). Ejemplo:
*/
module.exports = {
  entry: "./app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
};
