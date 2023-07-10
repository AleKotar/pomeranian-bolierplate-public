import React, { useState } from 'react';

import './style.css';

export function JakaLiczba() {
  const [firstValue, setFirstValue] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  const handleFirstValue = (e) => {
    let inputValue = e.target.value;
    setFirstValue(inputValue);
  };

  function handleOnClick() {
    const newRandomNumber = generateRandomNumber();
    setRandomNumber(newRandomNumber);
  }
  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  console.log(randomNumber);

  return (
    <div>
      <h1>Jaką jestem liczbą</h1>
      <button className="startButton" onClick={handleOnClick}>
        START
      </button>

      <br></br>
      <input type="number" value={firstValue} onChange={handleFirstValue} />
      <p>
        Odpowiedź:
        {firstValue > randomNumber && 'Zgadywana liczba jest MNIEJSZA!'}
        {firstValue < randomNumber && 'Zgadtwana liczba jest WIĘKSZA!'}
        {firstValue == randomNumber && 'To ta liczba!'}
      </p>
    </div>
  );
}
