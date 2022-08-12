import React, { useState } from "react";

function Ejemplo({ lang }) {
  if (lang === "hun") {
    // Irarrazaval Federico T.
    return (
      <form>
        <input
          key="lastName" /* Hay que asignarle keys para poder trabajar con ellos. De lo contrario, js piensa que son todos lo mismo. */
          type="text"
          placeholder="Vezetéknév"
          name="lastName"
        />
        <input
          key="firstName"
          type="text"
          placeholder="Keresztnév"
          name="firstName"
        />
        <input
          key="middleInitial" /* Hay que asignarle keys para poder trabajar con ellos. De lo contrario, js piensa que son todos lo mismo. */
          type="text"
          placeholder="KB"
          style={{ width: 30 }}
          name="middleInitial"
        />
      </form>
    );
  }
  // Federico T. Irarrazaval
  return (
    <form>
      <input
        /*   key="firstName" */
        type="text"
        placeholder="First Name"
        name="firstName"
      />
      <input
        /*   key="middleInitial" */
        type="text"
        placeholder="MI"
        style={{ width: 30 }}
        name="middleInitial"
      />
      <input
        /*   key="lastName" */
        type="text"
        placeholder="Last Name"
        name="lastName"
      />
    </form>
  );
}

export default function Lang() {
  const [lang, setLang] = useState("hun");

  return (
    <div>
      <Ejemplo lang={lang} />
      <button
        onClick={(e) => setLang((old) => setLang(old == "hun" ? "es" : "hun"))}
      >
        Lang
      </button>
    </div>
  );
}
