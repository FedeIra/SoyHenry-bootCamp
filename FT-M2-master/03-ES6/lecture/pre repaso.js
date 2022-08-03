/*
ES6

!LET Y CONST:
*/
function f() {
  var a = "Fede";
  let b = "Fede";

  if (true) {
    var a = "Fran";
    let b = "Fran";
  }
  /* let b = "Fran"; No se puede declarar b en el mismo bloque dos veces*/
  console.log(a); // Fran
  console.log(b); // Fede
}
f();

/* CONST, al igual que let tiene un alcance de bloque: */
function f() {
  var a = "Fede";
  const b = "Fede";

  if (true) {
    var a = "Fran";
    const b = "Fran";
  }
  /* const b = "Fran"; No se puede declarar b en el mismo bloque dos veces*/
  console.log(a); // Fran
  console.log(b); // Fede
}
f();

/* La diferencia es que no se puede cambiar el valor */
function f() {
  var a = "Fede";
  const b = "Fede";

  if (true) {
    var a = "Fran";
    const b = "Fran";
  }
  /* b = "Fran"; ERROR no se puede cambiar valor */
  console.log(a); // Fran
  console.log(b); // Fede
}
f();

/* El const si se puede cambiar accediendo a su array o valores. Ejemplo: */

function f() {
  var a = "Fede";
  const b = { nombre: "Fede" };

  if (true) {
    var a = "Fran";
    const b = "Fran";
  }
  b.nombre = "Fran";

  console.log(a); // Fran
  console.log(b); // Fede
}
f(); //Fran { nombre: 'Fran' }

/*Te deja pq estás cambiando la propiedad de un objeto. Estoy cambiando el valor interno aunque la referencia de memoria es la misma. Con arreglo pasa lo mismo. No cambias el lugar de memoria donde se encuentra el objeto.*/

/*
! ARROW FUNCTIONS */

var arr = [1, 2, 3, 4];

/* Sin arrow function: */

var nuevo = arr.map(function (element) {
  return element + 1;
});
console.log(nuevo); // [ 2, 3, 4, 5 ]

/* Con arrow function */

var nuevo2 = arr.map((element) => element + 1);
/* A la izquierda de la flecha están los argumentos de la función. Si no hay argumentos ni siquiera hace falta ponerle parentesis como se puede ver de este ejemplo. Si no lleva argumentos va el parentesis vacío.

Del lado derecho de la flecha van las instrucciones de la función.
console.log(nuevo2); // [ 2, 3, 4, 5 ]
Si no pongo llaves hay un return implícito. Si tengo una instrucción más compleja tengo que escribir la llave y hacer la lógica.*/

var fn = () => {
  var nombre = "hola";
  console.log(nombre);
  return nombre;
}; /* fijate acá que le puse brackets e incluso return. */

/*
!THIS:
Qué pasa con el this. Va ejemplo de función normal:

*/

var bob = {
  name: "Bob",
  friends: ["Fede", "Fran", "Toni"],

  printfriends() {
    this.friends.forEach(function (f) {
      console.log(this.name + " knows " + f);
    }); /*el this está en el contexto de dentro del método del objeto bob, por eso no te lee el name */
  },
};
bob.printfriends();

/* Para solucionar esto hacíamos lo siguiente:. Usamos la variable that.*/

var bob = {
  name: "Bob",
  friends: ["Fede", "Fran", "Toni"],

  printfriends() {
    var that = this;
    this.friends.forEach(function (f) {
      console.log(that.name + " knows " + f);
    }); /*el this está en el contexto de dentro del método del objeto bob, por eso no te lee el name */
  },
};
bob.printfriends();

/* Mirá la diferencia con arrow function: */

var bob = {
  name: "Bob",
  friends: ["Fede", "Fran", "Toni"],

  printfriends() {
    var that = this;
    this.friends.forEach((f) =>
      console.log(that.name + " knows " + f)
    ); /*NI SIQUIERA FUNCIONA EL THAT */
  },
};
bob.printfriends(); /*
!BINDEAN EL this automáticamente al contexto que fueron creadas. EL ARROW FUNCTION BINDEA AL THIS AL CONTEXTO EN EL QUE FUE CREADA */

/* ARROW EN MÉTODOS DE CONSTRUCTORAS. Primer ejemplo sin arrow function: */

function Persona(nombre, apellido) {
  this.nombre = nombre || "Fede";
  this.apellido = apellido || "Panella";
}

Persona.prototype.getNombre = function () {
  return this.nombre + " " + this.apellido;
};

var fede = new Persona();
console.log(fede.getNombre()); // Fede Panella

/* Ahora con arrow function: */

function Persona2(nombre, apellido) {
  this.nombre = nombre || "Fede";
  this.apellido = apellido || "Panella";
}

Persona2.prototype.getNombre = () => this.nombre + " " + this.apellido;

var fede = new Persona2();
console.log(fede.getNombre()); // undefined undefined porque el arrow function bindea el this al contexto que fue creado. El this del arrow function es el contexto en el que fue creado.

/*CLASS (sugar sintax)

*/
class test {
  constructor(name, apellido = "Irarrazaval") {
    this._name = name;
    this._apellido = apellido;
  }
  getnombre() {
    return this._name + " " + this._apellido;
  }
}

var Walter = new test("Walter");
console.log(Walter.nombre);

function test2(name, apellido) {
  this._name = name;
  this._apellido = apellido;
}
test2.prototype.nombre = function () {
  return this._name + " " + this._apellido;
};

var walter = new test2("Walter", "Williams");
console.log(walter.nombre());

class SoyHenry extends test {
  constructor(name, apellido, cohorte) {
    super(
      name,
      apellido
    ); /* El super es igual a decir que hereda las propiedades de test. No hace falta que herede todas las propiedades. */
    this.cohorte = cohorte;
  }
  getCohorte() {
    return this._name + " " + this._apellido + this.cohorte;
  }
}

var fede = new SoyHenry("federico", "irarrazaval", 29);
var fede2 = new SoyHenry("federico", undefined, 29);

console.log(fede); // SoyHenry { _name: 'federico', _apellido: 'irarrazaval', cohorte: 29 }
console.log(fede2); // me imprime lo mismo pq toma el valor por defecto irarrazaval del apellido.

console.log(Walter.getnombre()); // puedo invocar la función  Walter Irarrazaval
console.log(fede2.getnombre()); // puedo invocar la función porque heredó esta función de su padre Persona: federico Irarrazaval

/*
!OBJETOS LITERALES:
 */

/* Esto es un objeto literal: */
objetoLiteral = {};

/* Ademas si una propiedad del objeto y el parametro de la función que lo crea podes hacer lo siguiente: */
function crearObjetoLiteral(nombre, apellido) {
  obj = {
    nombre,
    apellido,
  };
  return obj;
}
/* No es una función constructora. Ni siquiera utiliza el this. */
var miObjeto = crearObjetoLiteral("federico", "irarrazaval");
console.log(miObjeto); // { nombre: 'federico', apellido: 'irarrazaval' }

/*
!Propiedad dinámicas: */
function crearObjetoLiteral2(nombre, apellido, prop, value) {
  obj = {
    nombre,
    apellido,
    [prop]: value,
  };
  return obj;
}

console.log(crearObjetoLiteral2("Fede", "Irarrazaval", "altura", 1.9)); //{ nombre: 'Fede', apellido: 'Irarrazaval', altura: 1.9 }

// Otro ejemplo:
var nombre = "fede";

var obj = {
  nombre,
  saluda() {
    console.log("Hola " + nombre);
  },
};

console.log(obj); // { nombre: 'fede', saluda: [λ: saluda] }
console.log(obj.saluda()); // Hola fede

/*
!TEMPLATE STRINGS

Antes:
*/

var plural = "ustedes";

var str = "hola como estan " + plural + "\n Me alegro mucho"; // para saltar línea hay que ponerle \n. Aparte para concatenar tengo que separarlo y ponerle +

console.log(str); // hola como estan ustedes
// Me alegro mucho

/* Ahora, con los template strings es mucho más fácil. No tengo que ponerle el + ni tampoco el \n: */

var templateString = `hola como están ${plural}
Me alegro mucho`;

console.log(templateString); // hola como estan ustedesMe alegro mucho

/* 
!DESTRUCTURING:

Sirve paras sacar valores y o valores propiedades
 */

var arr = [1, 2, 3];

var [a, b, c] = arr;

console.log(a); //1
console.log(b); //2
console.log(c); //3

var [d, , e] = arr; /* Puedo sacar valores del arreglo que quiera */

console.log(d); //1
console.log(e); //3

/* Con los objetos se puede hacer algo muy similar: */

var obj = {
  nombre: "Fran",
  apellido: "Etcheverry",
  edad: "no me acuerdo",
};

var { apellido, nombre } = obj;

console.log(apellido); // Etcheverry
console.log(nombre); // Fran

/* Incluso lo puedo renombrar: */

var obj2 = {
  nombre2: "Fran",
  apellido2: "Etcheverry",
  edad2: "no me acuerdo",
};

var { apellido2: surName, nombre2: firstName } = obj2;
/* console.log(apellido2); // apellido2 is not defined */
console.log(firstName); // Fran
/* Te lee en los console log el surName y firstName */

// Esto sirve para REACT especialmente:

objNuevo = {
  nombre: "destructuring",
};
function g({ nombre }) {
  console.log(nombre);
}
g(objNuevo); // destructuring
/* Dentro de los párametros del argumento estoy haciendo un destructuring. Recibe como argumento un objeto que tiene la propiedad de nombre y pasa como argumento su valor. */

/* 
!FACEOF DESTRUCTURING:
Evita que explote todo */

var [a, b, c] = [];
console.log(a); // te tira undefined en lugar de error. Es para que sea a prueba de este tipo de errores.

/*
!DEFAULT, REST, SPREAD:

DEFAULT:
*/
function funcionDefault(params = "por defecto") {
  console.log(params);
}
funcionDefault(); // por defecto

/*
REST:
*/
function funcionRest(cantidad, ...palabras) {
  console.log(cantidad);
  console.log(palabras);
}
funcionRest(4, "como", "va", "el", "M2"); // 4 [ 'como', 'va', 'el', 'M2' ]

/* Los 3 puntitos está diciendo que vas a recibir un argumento seguro y no sabes cuántos más. 

!SPREAD:*/

var arr = [1, 2, 3];

function funcionSpread(x, y, z) {
  console.log(x + y + z);
}
funcionSpread(
  ...arr
); /* 6. Es equivalente a borrarle las llavecitas o braquets. Le llegan valores concatenados y/o sumados del array, pero no en forma de array */

/* Puedo hacer lo mismo con un objeto: */
var obj = { a: 1 };
var copia = {
  ...obj,
}; /* Es lo equivalente a borrar las llaves, por lo que estaría creando un objeto nuevo. */
copia.b = 2;
console.log(obj); // {a: 1}
console.log(copia); // {a: 1, b:2} NO me modifico el objeto original, "obj".

/* Lo mismo puedo hacer on arreglo: */
var arr1 = [1, 2, 3, 4];
var copiaArr1 = [
  ...arr1,
]; /* Es lo equivalente a borrar las llaves, por lo que estaría creando un array nuevo. */
var arr2 = [7, 8, 9]; // [7, 8, 9]
var arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 7, 8, 9]


/*
!PROMISES:

Promises es una librería para mejorar la programación asíncrónica. Las Promises son una representación de tipo first-class de un valor que va a estar disponible en el futuro. Esto también ya existia con otras librerías de terceros.

Funciona como una promesa en la vida real. Algo que todavía no sucedió. O se cumple o no se cumple.

Por lo general son códigos asincrónicos que terminan yendo al callback queue.


 */

function timeout(duration = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

var p = timeout(1000)
  .then(() => { //El punto then es el plan que tenes para el caso de que la promesa se cumpla.
    return timeout(2000);
  })
  .then(() => {
    throw new Error("hmm");
  })
  .catch((err) => { //Si la promesa no se cumple está el plan .catch
    return Promise.all([timeout(100), timeout(200)]);
  });

/* Se puede implementar llamadas recursivas sin tener que agregar un un frame al call stack haciendo que sea segura la ejecución de una función recursiva (sin temer por el stack overflow). */

function factorial(n, acc = 1) {
    'use strict';
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}

// Stack overflow in most implementations today,
// but safe on arbitrary inputs in ES6
factorial(100000)

/* 
!COMPATIBILIDAD:
Es similar a lo del archivo less que se traduce. Hay varios navegadores que no entiende ES6 o ES5. Uno de los principales en BABEL. Un ejemplo de estos sistemas es react que traduce el ES6 a ES5 para que lo entiendan los navegadores.
 */