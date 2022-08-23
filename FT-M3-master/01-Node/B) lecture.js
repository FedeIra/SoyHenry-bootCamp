/*
!NODE
Node está escrito en C++.


!V8: es un motor basado en JS. Motor de ejecución.
Este motor le permite al navegador poder ejecutar JS. Funciona en el navegador pero puede correr por sí mismo por fuera. Puede ser insertado también en una aplicación de C++.

!Al motor V8 le sumamos LIBUV
Le da maneras de organizar nuestro código para que sea reutilizable. Permite leer y escribir archivos. Por ejemplo: desde un archivo JS podemos saber lo que hay escrito en una note sin tener que abrirlo. Leer y escribir en bases de datos también, y datos de internet.

Node.js es la combinación de V8 y LIBUV.

Los modulos sirven para complementar nuestros códigos para ir agregando funcionalidad, nuevas features, etc. Todo desde un servidor enviando una solicitud desde el frontend.

NPM es el gestor para todo lo que vamos a tener en el back end. Controlamos las versiones de nuestras tecnologías, etc.

Creas el package.json con npm init.
Luego le podes poner npm install para instalar las dependencias que le hayas agregado al package.json.

!PACKAGE LOCK: informa nuestras versiones
{
  "name": "01-node-demo",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "01-node-demo",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "moment": "^2.29.1"
      }
    },
    "node_modules/moment": {
      "version": "2.29.4",
      "resolved": "https://registry.npmjs.org/moment/-/moment-2.29.4.tgz",
      "integrity": "sha512-5LC9SOxjSc2HF6vO2CyuTDNivEdoz2IvyJJGj6X8DJ0eFyfszE0QiEd+iXmBvUP3WHxSjFH/vIsA0EN00cgr8w==",
      "engines": {
        "node": "*"
      }
    }
  },
  "dependencies": {
    "moment": {
      "version": "2.29.4",
      "resolved": "https://registry.npmjs.org/moment/-/moment-2.29.4.tgz",
      "integrity": "sha512-5LC9SOxjSc2HF6vO2CyuTDNivEdoz2IvyJJGj6X8DJ0eFyfszE0QiEd+iXmBvUP3WHxSjFH/vIsA0EN00cgr8w=="
    }
  }
}
*/

/*
!Versiones
{
  "name": "01-node-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.29.1"
  }
}

Con una nueva funcionalidad (número del medio), se resetea el número de patches a 0.

*/

/* EJEMPLOS:
!Modo asincrónico:
 */
var fs = require("fs");

fs.readFile(__dirname + "/greet.txt", "utf8", function (err, data) {
  if (err) return console.log(err);
  console.log("data");
});

console.log("Listo!");
/* fs es un modulo nativo de node q nos permite interactuar con los archivos de nuestra pc. */

/* Listo!
[Error: ENOENT: no such file or directory, open 'c:\Users\Usuario\Desktop\Programacion\SoyHenry-Boot Camp\SoyHenry-bootCamp\FT-M3-master\01-Node\demo\files\greet.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'c:\\Users\\Usuario\\Desktop\\Programacion\\SoyHenry-Boot Camp\\SoyHenry-bootCamp\\FT-M3-master\\01-Node\\demo\\files\\greet.txt'
}

Sale el console.log de abajo primero pq está en modo asincrónico. Te tira error pq no está creado el package json e instalado el archivo que quería leer greet.txt.

!Modo asincrónico:
Creado el archivo greet.txt, puedo usar ese texto. El data devuelve todo lo que está escrito en el archivo greet.txt:
*/
fs.readFile(__dirname + "/greet.txt", "utf8", function (err, data) {
  if (err) return console.log(err);
  console.log(data);
});

console.log("Listo!");

// utf8: es un encoding para los textos.

/* Tiene muchisimas más funcionalidades aparte del readFile. */

/*
!NODEMON:
Se llama nodemon. Básicamente es un paquete de npm que podemos instalar con npm install --save nodemon. Y lo que hace es watchear por cambios en el código y reiniciar el programa cuando haya cambios.
*/
/* Construir una consola en nuestra terminal */

// console.log(Object.keys(process));

/*
[
  'version',
  'versions',
  'arch',
  'platform',
  'release',
  '_rawDebug',
  'moduleLoadList',
  'binding',
  '_linkedBinding',
  '_events',
  '_eventsCount',
  '_maxListeners',
  'domain',
  '_exiting',
  'config',
  'dlopen',
  'uptime',
  '_getActiveRequests',
  '_getActiveHandles',
  'getActiveResourcesInfo',
  'reallyExit',
  '_kill',
  'cpuUsage',
  'resourceUsage',
  'memoryUsage',
  'kill',
  'exit',
  'hrtime',
  'openStdin',
  'allowedNodeEnvironmentFlags',
  'assert',
  'features',
  '_fatalException',
  'setUncaughtExceptionCaptureCallback',
  'hasUncaughtExceptionCaptureCallback',
  'emitWarning',
  'nextTick',
  '_tickCallback',
  '_debugProcess',
  '_debugEnd',
  '_startProfilerIdleNotifier',
  '_stopProfilerIdleNotifier',
  'stdout',
  'stdin',
  'stderr',
  'abort',
  'umask',
  'chdir',
  'cwd',
  'env',
  'title',
  'argv',
  'execArgv',
  'pid',
  'ppid',
  'execPath',
  'debugPort',
  'argv0',
  '_preload_modules',
  'setSourceMapsEnabled',
  'mainModule'
]
  */
