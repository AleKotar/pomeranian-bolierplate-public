import React, { useState } from 'react';
import './styles.css';

export function Exercise() {
  const [inputValue, setInputValue] = useState(''); // Stan przechowujący wartość wprowadzoną do pola input
  const [validationMessage, setValidationMessage] = useState(''); // Stan przechowujący komunikat walidacji

  // 1) Dodaj input
  const inputElement = (
    <input
      type="text"
      placeholder="Enter an integer"
      value={inputValue}
      onChange={(event) => {
        setInputValue(event.target.value); // Aktualizacja stanu na podstawie zmiany wartości inputa
        validate(event.target.value); // Wywołanie metody validate z aktualną wartością inputa
      }}
    />
  );

  // 2) Dodaj metodę validate z jednym parametrem
  const validate = (value) => {
    try {
      const parsedValue = parseInt(value);

      if (isNaN(parsedValue) || parsedValue !== parseInt(value)) {
        throw new Error('Podany parametr nie jest liczbą całkowitą (int)');
      } else {
        setValidationMessage('');
      }
    } catch (error) {
      setValidationMessage(error.message);
    }

    // Tutaj możesz dodać inne operacje związane z walidacją
  };

  return (
    <div>
      {inputElement}
      <div className="validation-message">{validationMessage}</div>
    </div>
  );
}
