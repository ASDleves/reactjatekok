import React, { useState } from 'react';
import Jatekter from '../komponens/Jatekter'; // Update the path as necessary
import TModell from '../modell/tModell'; // Update the path as necessary
import "../komponens/jatekter.css"
const TictactoeApp = () => {
  const tmodel = new TModell();
  const [list, setList] = useState(tmodel.getList());

  function katt(index) {
    if (list[index] === "") {
      tmodel.setAllapot(index);
      setList(tmodel.getList());
    }
  }

  return (
    <div className="tictactoe">
      <header className="App-header">
        Tictactoe
      </header>
      <article>
        <Jatekter lista={list} onCellClick={katt} />
      </article>
    </div>
  );
};

export default TictactoeApp;
