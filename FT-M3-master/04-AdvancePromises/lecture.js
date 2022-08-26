const pA = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('Se resolvió A');
    reject('Se rechazó A');
  }, 1000);
});
console.log(`1: ${pA}`); // 1: Promise { <pending> }. Todavía no se resolvió. Esta en la instancia de pending.

pA.then((data) => {
  console.log(`2: ${data}`);
}); // 2: Se resolvió A. Data se carga con el valor que se haya resuelto en resolve.

//---------------------------------------------------------------
const pA2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Se rechazó A');
  }, 1000);
});

pA.then((data) => {
  console.log(`2: ${data}`);
}); // te devuelve error pq no tenemos un error handler para el reject.

//---------------------------------------------------------------
const pA3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Se resolvió A');
    reject('Se rechazó A');
  }, 1000);
});

console.log(`1: ${pA3}`); // 1: [object Promise]

pA3.then(
  (data) => {
    console.log(`2: ${data}`);
  },
  (err) => {
    console.log(`3: ${err}`);
  }
); // 3: Se rechazó A

console.log(`1: `, pA3); //1:  Promise { <pending> }

//---------------------------------------------------------------

const pA4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Se resolvió A');
    reject('Se rechazó A');
  }, 1000);
});

const pB = pA4.then();

console.log(`1:`, pB); // 1: Promise { <pending> } Esto pq sigue pendiente de que se resuelva. Solo se resuelve con then.

pB.then((data) => {
  console.log(`2: ${data}`);
}); // 2: Se resolvió A

//---------------------------------------------------------------
const pA5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Se resolvió A');
    reject('Se rechazó A');
  }, 1000);
});

pA5
  .then() // devuelve una promesa que resuelve el mismo valor que la promesa original pA4. Es decir, pA4.then() es igual a pA4.
  .then()
  .then()
  .then((data) => {
    console.log(`y esto??`, data);
  }); // y esto?? Se resolvió A

//---------------------------------------------------------------
const pA6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Se resolvió A');
    reject('Se rechazó A');
  }, 1000);
});

pA6
  .then((data) => {
    console.log(`1: `, data);
  }) // promesa B -----> se rechazó A. No devuelve nada pq es solo un success handler.
  .then((data) => {
    console.log(`2: `, data);
  }) // promesa C -----> se rechazó A
  .then(null, (err) => {
    console.log(`3: `, err);
  }); // 3: Se rechazó A. Esto equivale a un CATCH

//---------------------------------------------------------------
const pA7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Se resolvió A');
    // reject('Se rechazó A');
  }, 1000);
});

pA7
  .then((data) => {
    console.log(`1: `, data);
    // return `1: `, data; Acá el segund then te devuelve 2: Se resolvió A
  }) // 1: Se resolvió A
  .then((data) => {
    console.log(`2: `, data);
  }) // 2: undefined pq el then anterior no retorna nada sino que undefined. Si le hubieras puesto un return sería otra la historia.
  .then(null, (err) => {
    console.log(`3: `, err);
  }); // nada

//---------------------------------------------------------------

promisifiedReadFile('./file.txt')
  .then((stanza) => {
    console.log(stanza);
    return promisifiedReadFile('./file2.txt');
  })
  .then((stanza) => {
    console.log(stanza);
  });

//---------------------------------------------------------------
const pA8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Se resolvió A');
    // reject('Se rechazó A');
  }, 1000);
});

pA8
  .then((data) => {
    console.log(`1: ${data}`); // 1: Se resolvió A
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('SE RESOLVIÓ ESTA OTRA');
        // reject('Se rechazó esta otra');
      }, 1000);
    });
  })
  .then((data) => {
    console.log(`2: ${data}`); //2: SE RESOLVIÓ ESTA OTRA
    return data.toLowerCase();
  })
  .then((data) => {
    console.log(`3: ${data}`); //3: se resolvió esta otra
  })
  .catch((err) => {
    console.log(`4: ${err}`); //nada pq fue puro success. Si hubiera un error en la primera promesa, devolveria: 4: Se rechazó A. Si hubiera error en la segunda promesa, devolveria: 4: Se rechazó esta otra
  });

//---------------------------------------------------------------
const pA9 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Se resolvió A');
    reject('Se rechazó A');
  }, 1000);
});

pA8
  .then((data) => {
    console.log(`1: ${data}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve('SE RESOLVIÓ ESTA OTRA');
        reject('Se rechazó esta otra');
      }, 1000);
    });
  })
  .then((data) => {
    console.log(`2: ${data}`);
    return data.toLowerCase();
  })
  .then((data) => {
    console.log(`3: ${data}`);
  })
  .then(null, (err) => {
    console.log(`4: ${err}`); //4: Se rechazó A
  })
  .then((data) => {
    console.log(`5: ${data}`);
  }) //5: undefined . Pq el then anterior no retorna nada sino que undefined.
  .catch((err) => {
    console.log(`5: ${err}`);
  });

//---------------------------------------------------------------
const pA10 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Se resolvió A');
    reject('Se rechazó A');
  }, 1000);
});

pA8
  .then((data) => {
    console.log(`1: ${data}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve('SE RESOLVIÓ ESTA OTRA');
        reject('Se rechazó esta otra');
      }, 1000);
    });
  })
  .then((data) => {
    console.log(`2: ${data}`);
    return data.toLowerCase();
  })
  .then((data) => {
    console.log(`3: ${data}`);
  })
  .then(null, (err) => {
    console.log(`4: ${err}`); //4: Se rechazó A
    return 'Fede'; // en el siguiente then devuelve Fede
  })
  .then((data) => {
    console.log(`1: ${data}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve('SE RESOLVIÓ ESTA OTRA');
        reject('Se rechazó esta otra');
      }, 1000);
    });
  }) /* El error puede retornar una promesa incluso */
  .then((data) => {
    console.log(`5: ${data}`);
  }) //5: undefined . Pq el then anterior no retorna nada sino que undefined.
  .catch((err) => {
    console.log(`5: ${err}`);
  });

//---------------------------------------------------------------
const pA11 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Se resolvió A');
    reject('Se rechazó A');
  }, 1000);
});

pA9
  .then((data) => {
    console.log(`1: ${data}`);
    throw new Error(`Rompioooo`);
  }) /* Cuando lanza error es equivalente a un error handler y por eso no entra a los then. sino que va al then null o catch. En este caso, está primero el then null por lo que entra ahí y al devolver fede el siguiente then devuelve fede y termina ahí pq no retorna nada esa última. */
  .then((data) => {
    console.log(`2: ${data}`);
    return data.toLowerCase();
  })
  .then((data) => {
    console.log(`3: ${data}`);
  })
  .then(null, (err) => {
    console.log(`4: ${err}`);
    return 'Fede';
  })
  .then((data) => {
    console.log(`5: ${data}`);
  })
  .catch((err) => {
    console.log(`5: ${err}`);
  });
