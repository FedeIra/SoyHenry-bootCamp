const fs = require('fs');

function promisifiedReadFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf8', function (err, data) {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

const readFilePromise = (archivo) => {
  promisifiedReadFile(archivo).then((file) => {
    console.log('Log promise file: ', file);
    return 'Lectura exitosa';
  });
};

// readFilePromise(' archivo.txt');

const readFileAsync = async (archivo) => {
  console.log('Log async file: ', await promisifiedReadFile(archivo));
  return 'Lectura exitosa';
};

// readFileAsync('archivo.txt');

// Podemos guardarlo en variable, pero no es recomendado:
var p1 = readFileAsync('archivo.txt');

p1.then((result) => {
  console.log('Soy P1: ', result);
});
// Log async file:  Bla bla bla bla
// Soy P1:  Lectura exitosa
