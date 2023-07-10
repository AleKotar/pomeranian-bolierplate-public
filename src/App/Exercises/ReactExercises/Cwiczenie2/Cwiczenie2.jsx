import React from 'react';

import './style.css';

export function Cwiczenie2() {
  const [tekst, setTekst] = React.useState('0');
  function click(event) {
    event.preventDefault();

    console.log('Kliknięto przycisk');

    console.log(event);

    let i = 0;

    console.log('tresc inputa: ', trescInputa);

    setTekst(trescInputa);
  }

  return (
    <div className="blok-8__cwiczenie-1">
      <h1>Cześć!</h1>

      <div>
        <div>
          <form onSubmit={click}>
            <button type="submit">Kliknięto mnie {tekst} raz/razy</button>
          </form>
        </div>

        <div>
          <p>{tekst}</p>
        </div>
      </div>
    </div>
  );
}
