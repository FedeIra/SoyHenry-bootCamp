/*
!EXPRESS

!1) INSTALACIÓN Y LLAMADO (al inicio de la aplicación):
npm install express --save
*/
let express = require('express');

let app = express(); // app es el resultado de la ejecución express()
//! TRAIGO MODULO CON RUTAS:
const roots = require('./roots lecture/roots.js'); // importamos el archivo roots.js

//! MIDDLEWARES:
//Ejemplos de middleware:
app.use((req, res, next) => {
  console.log('estoy en:', req.url);
  next();
}); /* Cuando tengas un request ejecuta esta función. Luego seguí haciendo lo que te indique el request. Incluso habiendo eliminado los console.log de todos los requests de arriba, debido a este middleware, te va a consologear 'estoy en:', req.url */

let morgan = require('morgan'); /* Te consologea info del request. */
app.use(morgan()); // te imprime toda la info del request. Puede ser útil para ver qué pasa con el request
// app.use(
//   morgan('dev')
// ); /* Este middleware se ejecuta antes de que el request se ejecute. */

//middleware cors
// let cors = require('cors'); /* Permite que una aplicación se pueda comunicar con otra aplicación. */
// app.use(
//   cors()
// ); /* Este middleware se ejecuta antes de que el request se ejecute. */

//MIDDLEWARE MÁS UTILIZADO:
app.use(express.json()); //para que express entienda el body de la petición. Acá no hace falta hacer un .next. Acá le digo para cualquier ruta usa express.json() y lo interpreta. Hay que ponerlo siempre! (se suele usar casi siempre)

//!MÉTODOS GET:
// 1) normal:
app.get('/', function (req, res) {
  // console.log('Estoy en /');
  res.send('respond with a resource');
});

//! 2) USANDO MODULO CON RUTAS: normal usando flecha y devolviendo en formato título:
// app.get('/html', (req, res) => {
// console.log('Estoy en /html');
//   res.send('<h1>estoy en /html</h1>'); // Devuelve esto, pero como título h1
// });
app.use(`/html`, roots); // uso el módulo con las rutas para que se ejecute el middleware de arriba y replico lo que está arriba que lo había pasado al modulo roots. SIGUE FUNCIONANDO.

// 3) res.json:
app.get('/obj', (req, res) => {
  // console.log('Estoy en /obj');
  const obj = {
    status: 'OK',
    message: 'Estoy en /obj',
  };
  res.json(obj); //si quiero enviar dato de tipo json
});

// 4) send status:
app.get('/status', (req, res) => {
  // console.log('Estoy en /status');
  res.sendStatus(404); //te devuelve un status code 404
});

app.get('/msg/status', (req, res) => {
  // console.log('Estoy en /msg/status');
  res.status(400).send('algo anda mal'); //te devuelve un status code 400 pero con el mensaje adicional de "algo anda mal". ES EL QUE MÁS SE SUELE USAR.
});

app.get('/msgi/status', (req, res) => {
  // console.log('Estoy en /msgi/status');
  res.status(400).json({ msg: 'pues no mi ciela' }); // se puede mandar también con send, pero mejor dejarle el json para que sea claro el formato.
}); // te devuelve un json

app.get('/msgu/status', (req, res) => {
  // console.log('Estoy en /msgu/status');
  res.status(400).send(`<h1>Pues no mi ciela</h1>`);
});

app.get('/ab?cd', function (req, res) {
  res.send('ab?cd');
}); //Esta ruta matcheará acd y abcd

app.get('/ab*cd', function (req, res) {
  res.send('ab*cd');
}); //Esta ruta matcheará abcd, abbcd, abbbcd, y así sucesivamente

app.get('/api/:id', function (req, res) {
  res.json({ parametro: req.params.id });
}); // req.params.id es el parámetro que se pasa en la ruta

app.get('/user/saludar', (req, res) => {
  res.send(`Hola usuario`);
}); // la tengo que poner arriba de la siguiente (/user/:name) pq esta es más especifica. Si la pongo abajo siempre va a matchear con la primera.

app.get('/user/:name', (req, res) => {
  res.json({ user: req.params.name });
});

// app.get('/user/:name', (req, res) => {
//   res.send(req.params.name);
// });

app.get('/user/saludo/:saludar', (req, res) => {
  res.send(`Hola ${req.params.saludar}`);
});

//!GET CON QUERYS
app.get('/query', (req, res) => {
  // console.log(`Soy las`, req.query);
  const { nombre } = req.query;
  // console.log(`Soy el nombre`, nombre);
  // console.log(req.url);
  res.send(`Hola ${nombre}`);
});

// está lógica en una base de datos con objetos:
const users = [
  {
    id: 1,
    name: 'Juan',
  },
  {
    id: 2,
    name: 'Pedro',
  },
  {
    id: 3,
    name: 'Luis',
  },
];

app.get('/query/users', (req, res) => {
  res.json(users);
});

app
  .get('/query/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id == id);
    res.json(user);
    // res.json(user.name); // Puedo hacer lo que quiera con estos datos.
    // console.log(user); // { id: 2, name: 'Pedro' }
    let nombre = user.name;
    // console.log(nombre); // Pedro
  })
  .get('/query/users/:id/:name', (req, res) => {
    const { id, name } = req.params;
    const user = users.find((user) => user.id == id);
    res.json(user);
  })
  .get('/query/users/:id/:name/:age', (req, res) => {
    const { id, name, age } = req.params;
    const user = users.find((user) => user.id == id);
    res.json(user);
  });

//! MÉTODOS POST:
/* Para crear o agregar algo. */
//REQUEST (body) ---->MIDDELWARE (traducción) ---> RUTA (leer el body)
//Express no sabe interpretar lo que le mandan por body. Para eso necesita middleware.
app.post('/usuarios', (req, res) => {
  console.log(req.body);
  const { name, lastName } = req.body; //el body es un objeto que se pasa en el body de la petición.
  res.send(`Usuario ${name} ${lastName} creado con éxito`);
});

// axios.post('/users', {name: 'Juan'}) {...}

//!SETEAR PUERTO Y EXPORTAR (al final de la ejecución):
app.listen(1337);
