
import React from 'react';

const Prodotto = () => {

  const prodotto = {
    nome: 'Ipad',
    prezzo: 1999,
    categoria: 'Elettronica',
    disponibilita: 'Disponibile',
    marca: 'Apple',
    anno: 2024
  };

  const { nome, prezzo, ...altreProprieta } = prodotto;

  return (
    <div>
      <h1>Dettagli del Prodotto</h1>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Prezzo:</strong> {prezzo} €</p>

      <h2>Altre Proprietà</h2>
      <ul>
        {Object.entries(altreProprieta).map(([key, value]) => (
          <li key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Prodotto;
