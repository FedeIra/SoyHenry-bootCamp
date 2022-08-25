const fs = require("fs");

var beatles = [
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
  {
    name: "Pepe",
    birthdate: "07/08/1940",
    profilePic:
      "http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg",
  },
];

const home = (req, res) => {
  let html = fs.readFileSync("./index.html");
  res.writeHead(200), { "Content-Type": "text/html" };
  res.end(html);
};

const api = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(beatles));
};

const artista = (req, res) => {
  // req.url --> "/api/John%20Lennon" --> split[2]= "John%20Lennon" --> 2doSplit= ["John", "Lennon"]

  // ["John", "Lennon"] --> join = "John Lennon"
  // buena practica --> cuandjo necesito comparar textos, hacerlo siempre todo en minuscula
  let nameUrl = req.url.split("/")[2].split("%20").join(" ").toLowerCase();

  // beatles ---> [{...}, {...}, {...}]
  ///                              e
  let integrante = beatles.find(
    (elemento) => elemento.name.toLowerCase() === nameUrl
  );
  if (integrante) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(integrante));
  } else {
    let htmlError = fs.readFileSync("./404.html");
    res.writeHead(404);
    res.end(htmlError);
  }
};

const perfil = (req, res) => {
  // "john lennon"
  let nameUrl = req.url
    .split("/")
    .join("")
    .split("%20")
    .join(" ")
    .toLowerCase();
  let htmlPerfil = fs.readFileSync("./beatle.html", "utf-8");
  // console.log(htmlPerfil);
  let integrante = beatles.find(
    (elemento) => elemento.name.toLowerCase() === nameUrl
  );
  if (integrante) {
    htmlPerfil = htmlPerfil
      .replace("{nombre}", integrante.name)
      .replace("{fecha}", integrante.birthdate)
      .replace("{img}", integrante.profilePic);

    res.writeHead(200);
    res.end(htmlPerfil);
  } else {
    let htmlError = fs.readFileSync("./404.html");
    res.writeHead(404);
    res.end(htmlError);
  }
};

module.exports = {
  home,
  api,
  artista,
  perfil,
};
