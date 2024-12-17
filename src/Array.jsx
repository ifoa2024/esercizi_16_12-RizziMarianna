import React from 'react';

const ArrayCombinato = () => {
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];

  const nuovoArray = [0, ...array1, ...array2];  

  return (
    <div>
      <h1>Array Combinato</h1>
      <p>Nuovo Array: {JSON.stringify(nuovoArray)}</p>
    </div>
  );
};

export default ArrayCombinato;
