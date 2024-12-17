
import React from 'react';

const Bandiera = () => {
  // Creiamo un array con i colori della bandiera
  const colori = ['Viola', 'BianRossoco']; // Solo due colori (manca il terzo)

  // Utilizziamo il destructuring con un valore predefinito per il terzo colore
  const [primoColore, secondoColore, terzoColore = 'nero'] = colori;

  return (
    <div>
      <h1>Colori della Bandiera</h1>
      <p>Primo Colore: {primoColore}</p>
      <p>Secondo Colore: {secondoColore}</p>
      <p>Terzo Colore: {terzoColore}</p>
    </div>
  );
};

export default Bandiera;
