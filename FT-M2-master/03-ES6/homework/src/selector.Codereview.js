var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matcheen en resultSet
  // usa matchFunc para identificar elementos que matcheen

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...result];
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  if (selector.split(".").length > 1) return "tag.class";
  else return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector); //'class'
  var matchFunction;

  if (selectorType === "id") {
    matchFunction = (el) => "#" + el.id === selector;
  } else if (selectorType === "class") {
    matchFunction = (el) => el.classList.contains(selector.substring(1));
  } else if (selectorType === "tag.class") {
    //$("img.photo")
    matchFunction = function (el) {
      let [etiqueta, clase] = selector.split("."); // ["img", "photo"]
      //let arreglito = selector.split('.')
      //arreglito[0] // tag
      //arreglito[1] // class

      return (
        el.classList.contains(clase) &&
        el.tagName.toLowerCase() === etiqueta.toLowerCase()
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = (el) =>
      el.tagName && el.tagName.toLowerCase() === selector.toLowerCase();
  }

  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
