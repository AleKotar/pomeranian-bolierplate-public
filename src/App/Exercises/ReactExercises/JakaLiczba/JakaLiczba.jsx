import React, { useState } from 'react';

import './style.css';

export function JakaLiczba() {
  const [firstValue, setFirstValue] = useState(0);

  const handleFirstValue = (e) => {
    let inputValue = e.target.value;
    setFirstValue(inputValue);
  };

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  let randomNumber = generateRandomNumber();
  console.log(randomNumber);

  return (
    <div>
      <h1>Jaką jestem liczbą</h1>
      <input type="number" value={firstValue} onChange={handleFirstValue} />
      <p>
        Podpowiedź:
        {firstValue > randomNumber && 'Zgadywana liczba jest MNIEJSZA!'}
        {firstValue < randomNumber && 'Zgadtwana liczba jest WIĘKSZA!'}
        {firstValue === randomNumber && 'NICE ONE, ZGADŁEŚ/AŚ'}
      </p>
    </div>
  );
}
