
import React from 'react';

const Nome = () => {
  // Creiamo un oggetto persona
  const persona = {
    nome: 'Marianna',
    cognome: 'Rizzi',
    età: 30
  };

  // Utilizziamo il destructuring per estrarre le proprietà
  const { nome, età } = persona;

  return (
    <div>
      <h1>Dettagli Persona</h1>
      <p>Nome: {nome}</p>
      <p>Età: {età}</p>
      {/* Non estraiamo il cognome, quindi non lo usiamo nel componente */}
    </div>
  );
};

export default Nome;
