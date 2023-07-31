import './styles.css';
import React from 'react';

export function Exercise() {
  //zadanie1
  function toCamelCase(inputString) {
    return inputString
      .toLowerCase()
      .split(' ')
      .reduce((result, word, index) => {
        if (index === 0) {
          return word;
        }
        return result + word.charAt(0).toUpperCase() + word.slice(1);
      }, '');
  }
  const YourComponent = () => {
    const inputString = 'to be or not to be';
    const camelCaseResult = toCamelCase(inputString);

    //zadanie2
    const napis1 = 'hello';
    const napis2 = 'world';

    function commonLetters(napis1, napis2) {
      const tablicaNapis1 = napis1.split('');
      const tablicaNapis2 = napis2.split('');

      const wspolneLitery = tablicaNapis1.filter((litera) =>
        tablicaNapis2.includes(litera)
      );
      return wspolneLitery;
    }
    const wynik = commonLetters(napis1, napis2);

    //zadanie3

    function iloscSamoglosek(slowo) {
      const samogloski = ['a', 'e', 'i', 'o', 'u', 'y']; // Możesz dodać inne samogłoski w razie potrzeby
      let ilosc = 0;

      slowo = slowo.toLowerCase(); // Zamieniamy słowo na małe litery, aby uniknąć problemów z wielkością liter

      for (let i = 0; i < slowo.length; i++) {
        if (samogloski.includes(slowo[i])) {
          ilosc++;
        }
      }

      return ilosc;
    }

    function iloscSamoglosekWTekstach(tablicaSlow) {
      const ilosci = [];

      for (let i = 0; i < tablicaSlow.length; i++) {
        const slowo = tablicaSlow[i];
        const ilosc = iloscSamoglosek(slowo);
        ilosci.push(ilosc);
      }

      return ilosci;
    }

    // Przykładowe użycie funkcji:
    const slowa = ['apple', 'banana', 'orange', 'arbuz'];
    const wynikSamoglosek = iloscSamoglosekWTekstach(slowa);
    console.log(wynikSamoglosek); // Wynik: [2, 2, 2, 5]

    const slowo = 'Iceman';
    const slowo2 = 'nameci';
    //zadanie4
    function isAnagram(slowo, slowo2) {
      const cleanedSlowo = slowo.toLowerCase();
      const cleanedSlowo2 = slowo2.toLowerCase();
      const reverseSlowo = cleanedSlowo.split('').reverse().join('');
      return reverseSlowo === cleanedSlowo2;
    }
    const sprawdzAnagram = isAnagram(slowo, slowo2);

    return (
      <div>
        <p>Input String: {inputString}</p>
        <p>CamelCase Result: {camelCaseResult}</p>
        <p>Wspolne litery: {wynik}</p>
        <p>Samogloski: {wynikSamoglosek}</p>
        <p>Sprawdź anagram: {sprawdzAnagram.toString()}</p>
      </div>
    );
  };

  return <YourComponent />;
}
