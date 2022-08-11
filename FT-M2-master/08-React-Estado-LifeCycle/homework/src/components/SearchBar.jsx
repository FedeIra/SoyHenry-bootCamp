import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={(inputCity) => setCity(inputCity.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
