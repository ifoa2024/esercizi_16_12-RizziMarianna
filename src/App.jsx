import React from 'react';
import './App.css'; 
import './App.css'
import Nome from './nome';
import Bandiere from './bandiere'
import Libri from './libri'
import Prodotto from './prodotto'
import Array from './Array';

const App = () => {
    return (
      <div className="App">
        <h1>Informazioni sulla persona</h1>
        <Nome/> 

        <h2>Colori della bandiera</h2>
        <Bandiere/>

        <h3>La mia libreria:</h3>
        <Libri/>

        <h4>Prodotto</h4>
        <Prodotto/>

        <h5>Array combinato</h5>
        <Array/>
        </div>
    );
};
export default App
