"use strict";
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

// const algo = new Promise(function(resolve,reject){
//     if(1 === 1) resolve("valor")
//     else reject("razon")
// })

// resolve("algo")

function $Promise(executor) {
  if (typeof executor !== "function")
    throw new TypeError("executor is not a function");

  this._state = "pending";
  this._value = undefined;
  this._handlerGroups = [];

  executor(this._internalResolve.bind(this), this._internalReject.bind(this));
}

$Promise.prototype._internalResolve = function (data) {
  if (this._state === "pending") {
    this._state = "fulfilled";
    this._value = data;
    this._llamarHandlers();
  }
};

$Promise.prototype._internalReject = function (data) {
  if (this._state === "pending") {
    this._state = "rejected";
    this._value = data;
    this._llamarHandlers();
  }
};

$Promise.prototype.then = function (successH, errorH) {
  if (typeof successH !== "function") successH = false;
  if (typeof errorH !== "function") errorH = null;

  let downstreamPromise = new $Promise(function () {});

  this._handlerGroups.push({
    successCb: successH,
    errorCb: errorH,
    downstreamPromise,
  });

  if (this._state !== "pending") {
    this._llamarHandlers();
  }

  return downstreamPromise;
};

$Promise.prototype.catch = function (errH) {
  // .catch(err => throw new Error(err))
  return this.then(null, errH);
};

$Promise.prototype._llamarHandlers = function () {
  // handlers --> [ { successCb: e, errorCb: f }]
  // promise.then(a,b).then(c,d).then(e,f)

  //       [   ]

  while (this._handlerGroups.length > 0) {
    var handler = this._handlerGroups.shift(); // { successCb: false, errorCb: x, downstreamPromise}

    if (this._state === "fulfilled") {
      // evaluo si no hay handler
      if (!handler.successCb) {
        handler.downstreamPromise._internalResolve(this._value);
      } else {
        // si hay handler
        try {
          // si hay handler intento llamarlo
          let resultado = handler.successCb(this._value);
          if (resultado instanceof $Promise) {
            resultado.then(
              function (value) {
                handler.downstreamPromise._internalResolve(value);
              },
              function (err) {
                handler.downstreamPromise._internalReject(err);
              }
            );
          } else {
            handler.downstreamPromise._internalResolve(resultado);
          }
        } catch (error) {
          // manejo errores para omdificar mi downstreamPromise
          handler.downstreamPromise._internalReject(error);
        }
      }
    } else {
      // el state es "rejected"

      // evaluo si no hay handler
      if (!handler.errorCb) {
        handler.downstreamPromise._internalReject(this._value);
      } else {
        // si hay handler
        try {
          // intento llamarlo
          let resultado = handler.errorCb(this._value);
          if (resultado instanceof $Promise) {
            resultado.then(
              function (value) {
                handler.downstreamPromise._internalResolve(value);
              },
              function (err) {
                handler.downstreamPromise._internalReject(err);
              }
            );
          } else {
            handler.downstreamPromise._internalResolve(resultado);
          }
        } catch (error) {
          handler.downstreamPromise._internalReject(error);
        }
      }
    }
  }
};

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
