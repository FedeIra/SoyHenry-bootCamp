/* 
!AJAX:
Es una librería.

Comunicación entre cliente (frontend) y servidor (backend).

Hoy en día es single page application. Primer request el servidor te devuelve la página html entera. Luego, si yo hago un post simplemente le envío al servidor y solo te devuelve la partecita que cambié, y no todo el html. El cliente solo recibe la porción que tiene que cambiar, ver la info. y dónde ponerla.

Hoy en día se usa json que es compatible con javascript. Es muy similar a los objetos de javascript solo que las propiedades están entre comillas y se mete también al objeto dentro de un braquet.

!Request:
Es una manera de pedir o mandarle algo al servidor. Es una manera de comunicarme. Tiene distintos métodos:

GET: para obtener datos.Cuando introduzco un www... estoy buscando una página web por lo que es un get.
PUT: para modificar un dato en el servidor. El servidor internamente recibe los datos, la dirección y lo modifica.
DELETE: sirve para borrar determinada información.
POST: sería agregar información. Ejemplo: cuando subís una foto a facebook.

Ejemplo en pseudo código:

1) SERVER:
---> server
Fede: [
  {id: 1, name: "García", type: "Cat", age: "4 años"}
  {id: 2, name: "Albin", type: "Cat", age: "3 años"}
]

2) REQUEST:
---> request PUT (es una operación asincrónica, pero en un momento el server nos responde)--- ruta/pets
body = {
  user: Fede,
  id: 1,
  age: "5"
}

3) SERVER RESPONSE:
--> server response --- status code ---> mensaje {texto: "feliz cumple garcía"} y te devuelve esto:

{id: 1, name: "García", type: "Cat", age: "5 años"}

Cuando hacemos requests a un servidor son operaciones asincrónica, por lo que sigo ejecutando lo que está en mi callstack.

Para usar ajax lo tenes que linkear en el head del html:

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
*/
