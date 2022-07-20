/* 
CLOSURES: Nosotros accedemos desde una función a una variable que está afuera de su contexto. Lo explico:

Son muy útiles para: 

1) Simular datos privados. Ejemplo: en el ejercicio siguiente, el único que puede acceder a la variable saludo es la función. Es muy útil para reservar variables y así solo pueden ser accedidas desde funciones. Es lo más parecido a un dato o variable privada.

2) Son fábricas de funciones: generadoras de funciones similares. Con el ejemplo siguiente te das cuenta que podes generar funciones similares con valores distintos. Es una fábrica de funciones con pequeñas variaciones. Así es como invento mil tipos de saludos con una sola función.
*/

function saludar(saludo) {
  // saludo = "Hola"
  return function (nombre) {
    // nombre = "Toni"
    console.log(saludo + " " + nombre);
  };
}

var saludarHola = saludar("Hola"); // Esto devuelve una función. ACÁ SE GENERA EL CLOSURE. Básicamente reserva el valor de "hola" para que después la función siguiente pueda acceder a este valor pq sabe que lo va a necesitar.

saludarHola("Toni"); // Hola Toni

/* Si lo vas a ejecutar una sola vez no hace falta hacer la variable y directamente haces lo siguiente: */

saludar("Hola")("Fede"); // Hola Fede. Pero si queres ejecutarla varias veces es mejor hacer lo anterior.

/*
Execution stack del closure:

Global context:
Lexical Environment: 1) saludar(), 2) saludarHola (indefinido), this.


Cuando llega a var saludarHola = saludar("Hola") se genera otro contexto con su propio lexical environment:
Saludar Context:
Lexical Environment: 1) saludo (como párametro). Está la función, pero como se retorna no está en el lexical environment.  

Cuando termina de leerlo, y continúa con el resto del código su contexto se ELIMINA.

Llegamos entonces al saludarHola() generandonse su contexto:

SaludarHola Context:
Lexical environment: 1) nombre. Pero qué pasa con saludo? si ya se destruyó. En efecto, su caja es la siguiente:

return function (nombre) { // nombre = "Toni"
    console.log(saludo + " " + nombre);
  };

Dónde está definido saludo?? Esto es lo raro. De dónde saco su valor??? Acá entra en juego el CLOSURE:

Nosotros accedemos desde una función a una variable que está afuera de su contexto. 

No se elimina el valor de saludo generado por la línea saludarHola = saludar("Hola") porque el hoisting se dió cuenta de que lo iba a necesitar en la función saludar en el que aparece la variable saludo. Sabe que alguien en el futuro la va a necesitar.

Lo lindo del closure es que no tengo que repetir distintas formas de invocar a la función saludar. Ejemplo:
*/

function saludar(saludo) {
  return function (nombre) {
    console.log(saludo + " " + nombre);
  };
}

var saludarHola =
  saludar(
    "Hola"
  ); /* LA CLAVE ES ESTO: creo una variable que usa la función con un parámetro ya determinado. */

saludarHola("Toni"); // Hola Toni
saludarHola(
  "uso la misma variable para invocar la función sin la necesidad de pasarle el valor de saludo que ya está declarado en la variable saludarHola. No repito código."
);
saludarHola("reitero lo anterior");
saludarHola("insisto");

/* Pero si quiero puedo cambiar el valor de saludo: */

var saludarOtroValorDistinto =
  saludar(
    "Chau"
  ); /* Ahora te deja guardado en el contexto global esta valor de saludo para el caso de que invoques la función con la variable saludarOtroValorDistinto. Queda guardado al igual que el valor saludo = hola en un espacio en el que no se elimina pq el hoisting sabe que lo va a usar luego. No se vuelve a crear el contexto de la variable, sino solo el valor de saludo en el limbo.*/

saludarHola(
  "Opa. Ahora invoco la misma función, pero con otro valor de saludo"
);
saludarHola("reitero lo anterior");
saludarHola("insisto");

// Otro ejemplo similar, pero con objeto:

function saludar(saludo) {
  return {
    funcionOne: function (nombre) {
      console.log(saludo + " " + nombre);
    },
    funcionTwo: function (nombre) {
      console.log(saludo + " " + nombre + "!!!!");
    },
  };
}

var saludarHola = saludar("Hola");

saludarHola.funcionOne("Fede"); // Hola Fede

var saludarChao = saludar("Chao");
saludarChao.funcionTwo("Fede"); // Chao Fede!!!!

// Otro ejemplo:

var creaFuncion = function () {
  var arreglo = [];

  for (var i = 0; i < 3; i++) {
    // hace un for 3 veces
    arreglo.push(function () {
      console.log(i); //
    });
  }
  // i = 3 (queda reservado en el espacio de memoria gracias al closure. Quedo guardado gracias al for y la función que está afuera del contexto del for donde está i puede acceder a i gracias al closure.)
  return arreglo; //
};

var arr = creaFuncion();

arr[0](); //
arr[1](); //
arr[2](); //

/* En el arr tengo lo siguiente:

arr = [
  function(){console.log(i)}, 
  function(){console.log(i)},
  function(){console.log(i)}
]

arr[0] = function(){console.log(i)}
arr[1] = function(){console.log(i)}
arr[2] = function(){console.log(i)}

arr[0] = console.log(i)
arr[1] = console.log(i)
arr[2] = console.log(i)

Acá ya sabemos que si o si tienen que dar lo mismo.

Ahora, qué valor tiene i en el contexto de la función: console.log(i).

Sabemos que debido al for, el último i terminó siendo igual a 3, por lo que en su contexto, i = 3.

Por lo tanto, console.log(i) = 3.

Al igual que en el ejercicio anterior, se produjo un valo de i que se guardó porque el hoisting sabía que lo iban a necesitar.

TRADUCIDO:
*/

// Paso 0 ==> i = 0
// arreglo = [] ==> arreglo = [function () { console.log(i)}]

// Paso 1 ==> i = 1
// arreglo = [function() {console.log(i)}] ==> arreglo = [function() {console.log(i)}], function() {console.log(i)}

// Paso 2 ==> i = 2
// arreglo = [function() {console.log(i)}, function() {console.log(i)} ==> arreglo = [function() {console.log(i)}], function() {console.log(i)}

// Paso 3 ==> i = 3
// No entra al for.

var creaFuncion = function () {
  var arreglo = [];
  for (var i = 0; i < 3; i++) {
    // IIFE
    arreglo.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(
        i
      ) /* Con esto te sacas de encima el closure pq el hoisting entiende que no vas a necesitar recurrir al valor i pq ya lo usaste en el momento. Esto pq en vez de pushear la función, pushea la función ya ejecutada. J va a valer lo que valga i en ese momento. No te sirve guardar el i pq se usa en el momento pq es una función que se autoinvoca. Es decir, se ejecuta de una.*/
    );
  }
  return arreglo;
};

var arr = creaFuncion();

arr[0](); // 0
arr[1](); // 1
arr[2](); // 2

/* Comparación con el ejemplo anterior:

Ejemplo anterior:
arr[0] = function(){console.log(i)}
arr[1] = function(){console.log(i)}
arr[2] = function(){console.log(i)}

Ejemplo de ahora:
arr[0] = function(){console.log(0)} Esto debido a que cuando lo invoco ya le estaba pasando el valor con el i al final (i)
arr[1] = function(){console.log(1)}
arr[2] = function(){console.log(2)}

*/

function hacerSaludo(lenguaje) {
  if (lenguaje === "en") {
    return function () {
      console.log("Hi!");
    };
  }

  if (lenguaje === "es") {
    return function () {
      console.log("Hola!");
    };
  }
}

var saludoIngles = hacerSaludo("en");
var saludoEspaniol = hacerSaludo("es");

saludoIngles(); // Hi
saludoEspaniol(); // Hola!

/* 
BIND

El this siempre aputna al contexto global si lo ejecutamos suelto y al objeto si lo invocamos como metodo de objeto.

Pero nosotros podemos manipularlo a nuestor gusto con BIND, CALL y APPLY que nos permiten cambiar el valor del this.

*/

var persona = {
  nombre: "Guille",
  apellido: "Aszyn",
};

var logNombre = function () {
  console.log(this.nombre);
};

logNombre(); // undefined porque se está ejecutando suelta en el contexto global. Su this va a apuntar al objeto global donde no está definido nombre.

persona.log = logNombre;
persona.log(); // Guille. Ahora si me devuelve el nombre Guille pq la función se ejecuta en el contexto del objeto, por lo que el this está en el objeto donde sí está definido el nombre. Se ejecuta como método de persona.

/* Ahora bien, cómo hago para evitar todo el codigo de las últimas dos líneas para cambiar el this a lo que quiera? PARA ESO ESTÁ BIND*/

var logNombrePersona = logNombre.bind(persona);
// el primer parametro de bind es el this! Acá le paso su this al objeto por lo que this.nombre = Guille. Básicamente, le decís que el this apunte a persona. La flecha this apuntaba a global y ahora le decís que apunte a persona.
logNombrePersona(); // ahora te devuelve Guille

/* ACLARACIÓN: esto no es lo mismo que pasarle la función logNombre como método al objeto. NO SUCEDE ESTO. Mirá: */

/* persona.logNombre(); */ // me devuelve persona.logNombre is not a function

/* Básicamente, el  var logNombrePersona = logNombre.bind(persona); equivale a lo siguiente:
var logNombrePersona = function() {
  console.log(persona.nombre)
}

BIND DEVUELVE UNA FUNCION! Y NO MOdIFICA LA ORIGINAL. Mirá!:*/

logNombre(); // me tira undefined de vuelta. Si lo hubiera cambiado me hubiera devuelto Guille.

/* 
OTRA UTILIDAD DE BIND:
Hay otra utilidad del método bind para bindear párametros de una función. ejemplo:
*/

function multiplica(a, b, c) {
  return a * b * c;
}

multiplica(2, 3, 4); // 24

/* Hatsa acá todo normal...
Pero si quiero generar subfunciones parecidas? */

var multiplicaPorInicialmenteDos = multiplica.bind(
  this,
  2
); /* Acá le paso this diciendole que lo deje tal como estaba, pero le paso otro parámetro. Necesito antes haber invocado la función con los parámetros */
// el Bind le `bindeó` el 2 al argumento a.
// y devolvió una función nueva con ese parámetro bindeado. Es lo equivalente a lo siguiente:

/* function multiplicaPorInicialmenteDos(b, c) {
  return 2 * b * c;
} */

multiplicaPorInicialmenteDos(3, 4); // 24

var multiplicaFijo2y3 = multiplica.bind(
  this,
  2,
  3
); /* Acá se bindea del primero en adelante. Si queres cambiarle tenes que cambiar directamente los parámetros de la función padre */

/* Esto es lo equivalente a:
function multiplicaFijo2y3(2, 3){
  return 2*3*c;
}

*/
multiplicaFijo2y3(4); // 24: el 4 pasa a ser el parametro de c

/* CALL:
El bind devolvía una nueva función. El call hace dos cosas en uno. Hace el bind y lo invoca de uno. A su vez, podemos dejar fijos parámetros.
*/

var persona = {
  nombre: "Guille",
  apellido: "Aszyn",
};

var logNombre = function () {
  console.log(this.nombre);
};

// el primer parametro de call es el this!
logNombre.call(persona); // Guille . Acá le digo que apunte el this a persona

// Call hace lo mismo que Bind, solo que invoca la función,
// no devuelve una nueva.
// tambien bindea argumentos!
//
var logNombre = function (arg1, arg2) {
  console.log(arg1 + " " + this.nombre + " " + arg2);
};

logNombre.call(
  persona,
  "Hola",
  ", Cómo estas?"
); /* Acá le digo que apunte el this a persona y le agrego los dos parámetros que pide la función */

//Hola Guille, Cómo estas?

/* Si necesitas apuntar el this para una única vez es mejor el call, pero si lo queres apuntar para hacer varias funciones o usos entonces es mejor el bind */

/* APPLY:
Es exactamente igual al call con la diferencia de que si quiero usar la función de dónde estaba el this, cuando le pase los parámetros si corresponde, los tengo que pasar en array en lugar de coma.

El call y apply se ejcutan en el momento. No te devuelven una nueva función. 

*/

// Apply es igual a call, solo que el segundo argumento es un
// arreglo.

var persona = {
  nombre: "Guille",
  apellido: "Aszyn",
};

var logNombre = function (arg1, arg2) {
  console.log(arg1 + " " + this.nombre + " " + arg2);
};

logNombre.apply(persona, ["Hola", ", Cómo estas?"]);
//Hola Guille , Cómo estas?
