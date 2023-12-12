import React, { useState, useEffect } from 'react';
import "../komponens/lightonstyle.css"
const meret = 3; // Grid size
const kezdetiDb = 4; // Initial number of lights to be turned on

const LightOnApp = () => {
  const [lampak, setLampak] = useState(Array(meret * meret).fill(false));

  useEffect(() => {
    ujJatek();
  }, []);

  const toggleLampa = (index) => {
    const newLampak = [...lampak];
    newLampak[index] = !newLampak[index]; // Toggle the clicked lamp

    // Toggle neighboring lamps
    if (index % meret > 0) newLampak[index - 1] = !newLampak[index - 1]; // Left
    if (index % meret < meret - 1) newLampak[index + 1] = !newLampak[index + 1]; // Right
    if (index >= meret) newLampak[index - meret] = !newLampak[index - meret]; // Above
    if (index < meret * (meret - 1)) newLampak[index + meret] = !newLampak[index + meret]; // Below

    setLampak(newLampak);
  };

  const ujJatek = () => {
    const initialLampak = Array(meret * meret).fill(false);
    let onCount = 0;

    while (onCount < kezdetiDb) {
      const index = Math.floor(Math.random() * meret * meret);
      if (!initialLampak[index]) {
        initialLampak[index] = true;
        onCount++;
      }
    }

    setLampak(initialLampak);
  };

  const countLightsOn = () => {
    return lampak.filter(lampa => lampa).length;
  };

  return (
    <main>
      <header>
        <button className="uj" onClick={ujJatek}>Új Játék</button>
      </header>
      <article>
        {lampak.map((allapot, index) => (
          <div key={index} 
               className={'lampa' + (allapot ? ' on' : '')} 
               onClick={() => toggleLampa(index)}
               style={{ backgroundColor: allapot ? 'green' : 'red' }}>
          </div>
        ))}
      </article>
      <div className="infoSzoveg">Lámpák száma: {countLightsOn()}</div>
    </main>
  );
};

export default LightOnApp;
