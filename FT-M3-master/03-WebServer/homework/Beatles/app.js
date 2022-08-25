/* USANDO EL Q CAMBIABA LA VARIABLE NOMBRE USANDO CON ESTO
EN BARRA API MUESTRA ARREGLO COMPLETO
El %20 es para rellenar espacios cuando escribis la url metiendo espacios.
Usar bootstrap no es obligatorio */

var http = require('http');
var fs = require('fs');

const beatles = [
  {
    name: 'John Lennon',
    birthdate: '09/10/1940',
    profilePic:
      'https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg',
  },
  {
    name: 'Paul McCartney',
    birthdate: '18/06/1942',
    profilePic:
      'http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg',
  },
  {
    name: 'George Harrison',
    birthdate: '25/02/1946',
    profilePic:
      'https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg',
  },
  {
    name: 'Richard Starkey',
    birthdate: '07/08/1940',
    profilePic:
      'http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg',
  },
];

http
  .createServer(function (req, res) {
    for (let i = 0; i < beatles.length; i++) {
      if (`${decodeURIComponent(req.url)}@` === `/${beatles[i].name}@`) {
        let html = fs.readFileSync(__dirname + '/beatle.html', 'utf8');
        html = html.replace('{name}', beatles[i].name);
        html = html.replace('{birthdate}', beatles[i].birthdate);
        html = html.replace('{profilePic}', beatles[i].profilePic);
        res.end(html);
      }
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('not a beatles member');
  })
  .listen(1337, '127.0.0.1');

/*   var http = require("http");
  var fs = require("fs");

  const beatles = [
    {
      name: "John Lennon",
      birthdate: "09/10/1940",
      profilePic:
        "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
    },
    {
      name: "Paul McCartney",
      birthdate: "18/06/1942",
      profilePic:
        "http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg",
    },
    {
      name: "George Harrison",
      birthdate: "25/02/1946",
      profilePic:
        "https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg",
    },
    {
      name: "Richard Starkey",
      birthdate: "07/08/1940",
      profilePic:
        "http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg",
    },
  ];

  http
    .createServer(function (req, res) {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        let html = fs.readFileSync(__dirname + "/index.html", "utf8");
        res.end(html);
      }
      if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(beatles));
      }

      for (let i = 0; i < beatles.length; i++) {
        if (decodeURIComponent(req.url) === `/${beatles[i].name}`) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(beatles[i]));
        }
      }
      for (let i = 0; i < beatles.length; i++) {
        if (`${decodeURIComponent(req.url)}@` === `/${beatles[i].name}@`) {
          let html = fs.readFileSync(__dirname + "/index.html", "utf8");
          html = html.replace("{name}", beatles[i].name);
          html = html.replace("{birthdate}", beatles[i].birthdate);
          html = html.replace("{profilePic}", beatles[i].profilePic);
          res.end(html);
        }
      }

      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("not a beatles member");
    })
    .listen(1337, "127.0.0.1");
 */
