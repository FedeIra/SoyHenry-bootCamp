export const GET_ALL_HOUSES = 'GET_ALL_HOUSES';
export const CREATE_HOUSE = 'CREATE_HOUSE';
export const GET_HOUSE = 'GET_HOUSE';
export const DELETE_HOUSE = 'DELETE_HOUSE';

// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.
// Acá pueden ver un poco mejor la explicación y algunos ejemplos: https://github.com/reduxjs/redux-thunk

// Usar ruta 'http://localhost:3000/houses' para buscar todas las houses en nuestro back.
// Esto lo vas a poder hacer utilizando fetch.
export const getAllHouses = () => dispatch => {
    return fetch(`http://localhost:3000/houses`)
    .then(r => r.json())
    .then(data => {dispatch({type: GET_ALL_HOUSES, payload: data})})
};

// Usar ruta 'http://localhost:3000/houses/:id' para buscar una house por el id pasado
// como parámetro de la action creator.
// Donde :id, el id recibido como argumento de la action creator.
// Ojo, hacer un console.log de la respuesta desde el back. En nuestro reducer esperamos un objeto;
export const getHouse = (id) => dispatch => {
    return fetch(`http://localhost:3000/houses/${id}`)
    .then(r => r.json())
    .then(data => {dispatch({type: GET_HOUSE, payload: data})})
};
// Inicializamos id en 3, para que nuestros próximos ID's no se pisen con los existentes.
// La vas a usar en la funcion createHouse, descomentala cuando te haga falta;
let id = 3;

// Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para crear la house.
export const createHouse = (data) => {
    return {
        type: CREATE_HOUSE,
        payload: {
            id: ++id,
            ...data
        }
    }
}
// Desde el componente ejecutamos la action creator, pasandole como argumento el id de la house que queremos eliminar.
export const deleteHouse = (id) => {
    return {
        type: DELETE_HOUSE,
        payload: id
    }
}