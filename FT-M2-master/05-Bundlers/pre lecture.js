/*
!MODULOS:
Se puede importar funciones y tiene mucha importancia cuando se declaran para ver si se puede acceder a ellas o no, al igual que la repetición de variables en los dos documentos ya que se pueden pisar.
  */

const weekDay = (function () {
  const names = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  window.algo =
    "algo"; /* Esto se hacía como simulador de que se exporta al hacerse pública y la podían usar desde otros lados*/
  return {
    name: function name(number) {
      return names[number];
    },
    number: function number(name) {
      return names.indexOf(name);
    },
  };
})();

console.log(weekDay.name(weekDay.number("Domingo")));

/* Aunque se importe esta función, y se haga una variable en el otro doc con names, por closure, se va a usar la variables names declarada en el contexto de la función donde nace la función name. Esto lo hacían cuando no había módulos lo que solucionó este tema ya que no se pisaban las variables. */

/* Todo el Javascript del browser se ejecuta en un mismo ambiente, donde el objeto window es el contexto global compartido de cualquier JavaScript corriendo en una sola página web. Cualquier variable que es declarada con la keyword var fuera de el cuerpo de una función (o declarada sin el keyword var en cualquier lado cuando no estamos en strict-mode) se convierte en pares key-value en el objeto window. Si deseas escribir Javascript en archivos separados, escribís el path a tu archivo en un <script> tag, y el browser pide el script de esa dirección y ejecuta ese script en el mismo, ambiente compartido como cada otro script.

Esto significa que si tenemos el siguiente archivo Javascript: */

// fileA.js

var foo = 42;

function bar() {
  console.log(foo);
}
y;

// fileB.js

var baz = 74;
// Y luego requerimos ambas en un archivo html de esta forma:

{
  /*
<script src="/fileA.js"></script>
<script src="/fileB.js"></script>
*/
}
// Esto significa que fileA.js va a correr primero, seguido por fileB.js. Luego de que ambos archivos corrieron, nuesto objeto window se verá así:

window.foo; // 42
typeof window.bar; // "function"
window.baz; // 74
// Puedes ver como esto puede rápidamente volverse problemático! Miremos a los dos grandes problemas que nos enfrentamos:

/* PROBLEMA UNO: COLISIÓN DE NOMBRES
Por ejemplo, que pasa si agregamos una fileC.js... */

{
  /*
<script src="/fileA.js"></script>
<script src="/fileB.js"></script>
<script src="/fileC.js"></script> 
*/
}

// ...el cual se ve como esto:

// fileC.js

var foo = "uh oh!"; // We've already declared a variable called "foo" in fileA.js! But we're redefining it here!
bar(); // this is our bar function from fileA.js!

/* JS empezó a meter formas de trabajar con modulos.>
!COMMON JS:
Con la palabra reservada export. Ejemplo:
NOMBRE DEL ARCHIVO: WeekDays.js
 */

var names = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

exports.name = function name(number) {
  return names[number];
};
exports.number = function number(name) {
  return names.indexOf(name);
}; /* Con la palabra export se da la posibilidad de que se exporte la función a otro archivo. */

var weekDays = require("./WeekDays.js"); /* Desde el lado que se requiere o se importa, se pedía "require" y se pasaba la ruta donde estaba el archivo que podía exportarse.

Lo equivalente a esta línea es lo siguiente (un objeto de dos funciones):

weekDays = {
  exports.name = function name(number) {
  return names[number];
};
exports.number = function number(name) {
  return names.indexOf(name);
};
}

Guardandola en una variable que luego la podes invocar poniendo la variable seguido de la función. Ejemplo: */

weekDay.number("Domingo");
weekDay.name("Fede");
console.log(weekDay.name(weekDay.number("Domingo")));

/* EL TEMA es que el export y require no es compatible con los navegadores. Solo serviría en un entorno de back end como node.

También está el module export que es muy similar. Tampoco funciona en el navegador. Ejemplo:*/

var names = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

module.exports.name = function name(number) {
  return names[number];
};
module.exports.number = function number(name) {
  return names.indexOf(name);
};
exports.name = function name(number) {
  return names[number]; /* así también funciona */
};

module.export =
  function algo() {}; /* Este module export te los pisa a los anteriores y termina siendo lo único que se exporta*/

/* Acá toman importancia los bundlers!!!:

!ES6
Es compatible con el browser! PERO NO CON NODE.JS! En backend usamos los anteriores para importar/exportar.
*/
var names = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

export var fede =
  "Fede"; /* Se puede exportar lo que quiero y después cuando pedís el import lo mismo */
// Para exportarlo
export function name(number) {
  return names[number];
}
export function number(name) {
  return names.indexOf(name);
}

// Para importarlo:
import {
  number,
  name,
} from "/script1.js"; /* le pido que me importe con los nombres de las funciones y no le pido el var fede, pero además el el html tengo que ponerle lo siguiente:*/

<script src="./script1.js" type="module"></script>;

/* También tenemos un export default: */
export default function myDefault() {
  console.log("Soy un default");
}
/* Para importarlo cambia: */

import traeteElDefaultPonele from "/script1.js"; /* para importar objetos default no es necesario ponerle un nombre específico o el nombre de los objetos que queremos importar. Podemos ponerle cualquier nombre. */

traeteElDefaultPonele();

/*
!BUNDLERS:
Agarra todo el código, lo mezcla, lo hace de una manera que el navegador pueda entenderlo.

Agarra los archivos (entry point) y a partir de ahí los recorre y arma el grafo de dependencias diciendo cuál depende de cuál y te devuelve un archivo donde van a estar todos los archivos que teníamos en uno solo. La idea es que pongas un solo script en el html y que además esté todo en orden de dependencia para que no haya conflictos.

!WEBPACK:
Es un bundler que usa react. Para poder utilizarlo hay que:

Webpack toma nuestros archivos JavaScript y produce un solo, archivo JavaScript transformado. Webpack transpila nuestro Javascript a... Javascript distinto!

1)
npm init
npm install --save-dev webpack webpack-cli

//package.json
"scripts": {
  "start": "node server.js"
  "build": "webpack"
}
/ crear archivo webpack.config.js

2) Crear un archivito: */
// webpack.config.js
module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  devtool: "eval-source-map",
};
/*
El entry es la dirección del archivo por el cual tiene que empezar a hacer todo el recorrido.
En output donde quiero que guarde el archivo que va a terminar haciendo.
En path es la dirección.
El filename es el nombre del archivo que quiero que me devuelva se suele usar "bundle.js"

Al momento de invocarlo en html es más simple:
*/
<script src="./dist/bundle.js"></script>;
