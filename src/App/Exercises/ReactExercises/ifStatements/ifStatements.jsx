import React, { useState } from 'react';

import './style.css';

export function IfStatements() {
  const [clicks, setClicks] = useState(0);
  const [isVisible, setVisible] = useState(true);
  const [text, setText] = useState('Test text z useState');

  const handleButtonClick = () => {
    const currentClicks = clicks + 1;
    setClicks(currentClicks);

    if (currentClicks > 5) {
      console.log('currentClicks jest większe od 5');
      setVisible(false);
    } else if (currentClicks === 3) {
      console.log('równe 3');
      setText('cliks =3');
    } else {
      console.log('currentClicks jest mniejszze od 5');
    }
  };

  return (
    <div>
      <p>{clicks}</p>
      <p>{text}</p>
      {isVisible && <button onClick={handleButtonClick}>Kliknij mnie</button>}
    </div>
  );
}
