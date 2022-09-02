/// =========================================================================== ///
/// =============================== HENRY-CATS ================================ ///
/// =========================================================================== ///

'use strict';

let cats = [];
let accessories = [];

module.exports = {
  reset: function () {
    // No es necesario modificar esta función. La usamos para "limpiar" los arreglos entre test y test.

    cats = [];
    accessories = [];
  },

  // ==== COMPLETAR LAS SIGUIENTES FUNCIONES (vean los test de `controller.js`) =====

  addCat: function (name) {
    // Agrega un nuevo felin@, verificando que no exista anteriormente en base a su nombre.
    // En caso de existir, no se agrega y debe arrojar el Error ('El gato o gata ya existe') >> ver JS throw Error
    // Debe tener una propiedad <age> que inicialmente debe ser '1 year'.
    // Debe tener una propiedad <color> que inicialmente es un array vacío.
    // Debe tener una propiedad <accesories> que inicialmente es un array vacío.
    // El gato o gata debe guardarse como un objeto con el siguiente formato:
    // { name: name,  age: '1 year' , color: []}
    // En caso exitoso debe retornar el string '<nombre del gato o gata> fue creado correctamente'.

    if (!cats.some((element) => element.name === name)) {
      let newCat = {
        name,
        age: '1 year',
        color: [],
        accessories: [],
      };
      cats.push(newCat);
      return `${name} fue creado correctamente`;
    }
    throw Error('El gato o gata ya existe');
  },

  listCats: function (age) {
    // En caso de recibir el parámetro <age>, devuelve sólo los gatos correspondientes a dicho age.
    // Si no recibe parámetro, devuelve un arreglo con todos los gatos.
    if (age) {
      return cats.filter((element) => element.age === age);
    }
    return cats;
  },

  addAccessory: function ({ id, color, type, description }) {
    // Agrega un nuevo accesorio.
    // Si el accesorio ya existe, no es agregado y arroja un Error ('El accesorio con el id <id> ya existe')
    // Debe devolver el mensaje 'El accesorio <type> fue agregado correctamente'
    // Inicialmente debe guardar la propiedad <popularity> del accesorio como 'low' por defecto
    // Si la descripción supera los 140 caracteres, debe arrojar un error
    const checkAccesoryExist = accessories.find((element) => element.id === id);

    if (checkAccesoryExist) {
      throw new Error(`El accesorio con el id ${id} ya existe`);
    }

    if (description.length > 140) {
      throw new Error(`La descripción supera los 140 caracteres`);
    }

    const newAccessory = {
      id,
      color,
      type,
      popularity: 'low',
      description,
    };
    accessories.push(newAccessory);
    return `El accesorio ${type} fue agregado correctamente`;
  },

  getAccessories: function (type, color) {
    // Devuelve un array con todos los accesorios.
    // Si recibe parámetro "type", debe retornar  los accesorios que coincidan con el tipo.
    // Si recibe parámetro "color" debe retornar los accesorios que coincidan con el color
    // Si recibe ambos parámetros, se devuelven los accesorios que coincidan con el color o con el tipo

    const filteredType = accessories.filter((element) => element.type === type);

    const filteredColor = accessories.filter(
      (element) => element.color === color
    );

    if (type && !color) {
      return filteredType;
    }
    if (color && !type) {
      return filteredColor;
    }
    if (color && type) {
      return filteredType.concat(filteredColor);
    }
    return accessories;
  },

  deleteAccessory: function (id) {
    // Elimina un accesorio del array
    // Si el id no existe dentro del array de accesorios, arrojar un Error ('El accesorio con el id <id> no fue encontrado')
    // Una vez eliminado el accesorio del array, devolver un mensaje que diga 'El accesorio con el id <id> fue eliminado correctamente'

    const checkIdExist = accessories.find((element) => element.id === id);

    if (!checkIdExist) {
      throw new Error(`El accesorio con el id ${id} no fue encontrado`);
    }

    accessories = accessories.filter((element) => element.id === id);
    return `El accesorio con el id ${id} fue eliminado correctamente`;
  },

  modifyAccessory: function (obj) {
    // Modifica un accesorio del array
    // Si el id no existe dentro del array de accesorios arrojar un Error ('accesorio no encontrado')
    // Si el objeto viene vacio, arrojar un Error ('No se detectaron cambios a aplicar')
    // Una vez modificado el accesorio del array, devolver el accesorio modificado
    const checkIdExist = accessories.findIndex(
      (element) => element.id === obj.id
    );

    if (JSON.stringify(obj) === '{}') {
      throw new Error(`No se detectaron cambios a aplicar`);
    }

    if (checkIdExist < 0) {
      throw new Error(`accesorio no encontrado`);
    }

    accessories[checkIdExist] = { ...accessories[checkIdExist], ...obj }; // reemplaza propiedades que tuviera el accessories[checkIdExist] y si es distinta la agrega directamente.

    return accessories[checkIdExist];
  },

  increaseAccesoryPopularity: function (accessoryId) {
    // Este método es complementario a 'addCatAccessory'
    // Actualiza la propiedad <popularity> del accesorio,
    // Si se actualizó la popularidad del accesorio, devolver true
    // Si no se actualizó la popularidad del accesorio, debe devolver false
  },

  addCatAccessory: function (catName, accessoryId) {
    // Agrega un accesorio a un felin@
    // Si el felin@ ya tiene puesto el accesorio, arrojar un Error('El gato <nombre_gato> ya tiene el accesorio puesto') y no lo agrega
    // Si el gato no existe arrojar un Error ('El gato <nombre_gato> no existe')
    // Si el id de accesorio no existe arrojar un Error ('accesorio no encontrado' y no actualiza la popularidad)
  },

  getAccessoryPopularity: function (accessoryId) {
    //Devuelve la popularidad de un accesorio
    // Para eso deberás comprobar cuantos gatos visten el accesorio recibido por parámetros (es un id)
    // Si la cantidad de gatos que visten el accesorio son 2, entonces la popularidad del accesorio debe valer 'average'
    // Si la cantidad de gatos que visten el accesorio son 3, entonces la popularidad del accesorio debe valer 'high'
  },
};
