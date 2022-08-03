var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }
  for (let i = 0; i < startEl.children.length; i++) {
    var collectedElements = traverseDomAndCollectElements(
      matchFunc,
      startEl.children[i]
    );
    resultSet = resultSet.concat(collectedElements);
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = (selector) =>
  // tu código aquí
  selector[0] === "#"
    ? "id"
    : selector[0] === "."
    ? "class"
    : selector.includes(".")
    ? "tag.class"
    : "tag";

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);

  var matchFunction;

  if (selectorType === "id") {
    return (matchFunction = (el) => el.id && `#${el.id}` === selector);
  } else if (selectorType === "class") {
    matchFunction = (el) => {
      for (let clase = 0; clase < el.classList.length; clase++) {
        if (`.${el.classList[clase]}` === selector) {
          return true;
        }
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (el) => {
      let classTag = selector.split("."),
        tag = classTag[0],
        clase = classTag[1];

      return (
        matchFunctionMaker(tag)(el) && matchFunctionMaker(`.${clase}`)(el)
      ); /* Es la auto invocación con el parámetro necesario */
    };
  } else if (selectorType === "tag") {
    matchFunction = (el) => {
      return el.tagName && el.tagName.toLowerCase() === selector;
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
