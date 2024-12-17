// Libro.jsx
import React from 'react';

const Libro = () => {
  // Creiamo l'oggetto libro con l'autore come oggetto annidato
  const libro = {
    titolo: 'Il Signore degli anelli',
    autore: {
      nome: 'J. R. R.',
      cognome: 'Tolkien'
    },
    numeroPagine: 1380
  };

  // Utilizziamo il destructuring annidato per estrarre titolo e cognome
  const { titolo, autore: { cognome } } = libro;

  return (
    <div>
      <h1>Dettagli del Libro</h1>
      <p>Titolo: {titolo}</p>
      <p>Cognome dell'autore: {cognome}</p>
    </div>
  );
};

export default Libro;
