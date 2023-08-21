import './styles.css';
import { useState } from 'react';

export function Exercise() {
  const text = 'aleksander aleksander aleksander aleksander';

  const [inputValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function ucinacz(b) {
    return b.substr(0, 10);
  }

  function PierwszaLitera(a) {
    return a.charAt(0).toUpperCase() + a.slice(1);
  }

  function WalidacjaEmail(email) {
    if (email.includes('@')) {
      return true;
    }
    return false;
  }

  function isPalindrome(e) {
    const cleanedE = e.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedE = cleanedE.split('').reverse().join('');
    return cleanedE === reversedE;
  }

  return (
    <div>
      <div className="zad1">
        <h2>Zadanie1</h2>
        <p>{PierwszaLitera(text)}</p>
      </div>
      <div className="zad2">
        <h2>Zadanie2 - ucinacz</h2>
        <input type="text" id="inputField" onInput={handleInputChange}></input>
        <p>{ucinacz(inputValue)}</p>
      </div>
      <div className="zad3">
        <h2>Zadanie3</h2>
        <input type="text" onInput={handleInputChange}></input>
        <p>{WalidacjaEmail(inputValue).toString()}</p>
      </div>
      <div className="zad5">
        <h2>Zadanie5</h2>
        <p>{isPalindrome(text).toString()}</p>
      </div>
    </div>
  );
}
