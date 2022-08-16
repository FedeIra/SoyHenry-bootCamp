import axios from "axios";

export function increment() {
  return {
    type: "INCREMENT",
  };
}
export function decrement() {
  return {
    type: "DECREMENT",
  };
}
export function reset() {
  return {
    type: "RESET",
  };
}

export function getPost() {
  return {
    type: "GET_POST",
  };
}

export function receivePost(post) {
  return {
    type: "RECEIVE_POST",
    post,
  };
}

/* ESTOS PEDIDOS A APIS (O ASINCRONOS) JAMÁS SE HACE EN EL REDUCER!!!!!!!!!!!!!!!!!!!!!!!! (este no es el archivo reducer, sino el de acciones.)*/
export function fetchPost(valor) {
  return function (dispatch) {
    dispatch(
      getPost()
    ); /* esta primer instancia va al type get post definido arriba function getPost() que luego en el reducer hace que loading pase a ser true ( loading: true,). Entonces esto va devuelta al reducer pq sí lo puede resolver y cambia el estado de loading a true. Y se vuelve a renderizar esta parte correspondiente a loading*/
    axios /* ahora llega la parte asincrona. Hace consulta a esta url con el valor (número) que recibió como parametro */
      .get(`https://jsonplaceholder.typicode.com/todos/${valor}`)
      .then(
        (r) => r.data
      ) /* accedes a un dato gracias al número que representa un id */
      .then((d) =>
        dispatch(receivePost(d))
      ) /* en d se aloja la respuesta que es el objeto entero del id y con esto hace un dispatch de receivePost. El middleware lo lee y lo manda a reduce => dispatch(receivePost(d))
      Ahora:
      loading: false,
      post: action.post que pasa a ser el objeto entero
      Ahora el estado está actualizado que eran propiedades del componente. Por lo tanto, se vuelve a renderizar y muestra en pantalla el funcionamiento.*/
      .catch((e) => console.log(e));
  };
} /* como devuelve una función pasa primero por el middleware para procesar esto. Si fuera una acción solamente iría directo al reduce.*/
