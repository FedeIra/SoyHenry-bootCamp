import React from "react";

export default function Location({ location }) {
  return (
    /* acá está haciendo un destructuring de location. Podría ponerle props. Sin embargo, también va a tener match y history. Con estos valores puedo hacer cosas. */
    <div>
      {location.state ? (
        <h2>State: {location.state?.extraData}</h2>
      ) : (
        <h2>
          Query: {location.search}
        </h2> /* LE paso un query que se compone de una propiedad con su valor asociado separados por &. Los necesito para hacer algo. Guarda información sobre la URL actual*/
      )}
    </div>
  );
}

/* El objeto Location de Route tiene varias propiedades: hash, pathname,search y state.
 */
