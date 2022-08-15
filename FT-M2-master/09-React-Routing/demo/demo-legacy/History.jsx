import React, { useState } from "react";

/* El objeto history de Route tiene varias propiedades:
action, block, go, goBack, goForward, length, push y replace.
History también tiene una propiedad location con history. Cuidado con esto que muta.*/
export default function History({ history }) {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  function goBack() {
    history.goBack();
  }

  function goForward() {
    history.goForward();
  }

  function go() {
    if (!isNaN(number)) {
      history.go(number);
    }
  }

  function push() {
    if (text) {
      history.push(`/${text}`);
    }
  }

  function replace() {
    if (text) {
      history.replace(`/${text}`);
    }
  }

  return (
    <div>
      <h2>History</h2>
      <h4>Actual history stack length: {history.length}</h4>
      <button onClick={goBack}>Go back</button>
      <button onClick={goForward}>Go forward</button>
      <br></br>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={go}>Go!</button>
      <br></br>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={push}>Push</button>
      <button onClick={replace}>Replace</button>
    </div>
  );
}
