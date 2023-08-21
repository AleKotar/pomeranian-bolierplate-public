import './styles.css';

// Boolean
export function Exercise() {
  // 1.
  // Napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i zwraca ją posortowana
  // funkcja ma nie zmieniać pierwotnej tablicy

  const sortImmute = (arr) => arr.slice().sort((a, b) => a - b);

  // const sortImmute = (arr) => {
  //   return arr.slice().sort((a, b) => a - b)
  // };

  // const sortImmute = (arr) => {
  //   const sortedArray = arr.slice().sort((a, b) => a - b)

  //   return sortedArray;
  // };

  const arr = [1, 3, 2, 5, 4];
  const sortedArr = sortImmute(arr);

  console.log(arr);
  console.log(sortedArr);

  // 2.
  // funkcja zwraca podany w argumencie element ciągu Fibonacciego
  // napisać rekurencyjnie

  const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  console.log(fibonacci(4));

  // 3.
  // stwórz funkcję calculateWithChar, która przyjmuje jako argument jeden operator matematyczne
  // '+', '-', '*', '/'
  // funkcja calculateWithChar ma zwracać funkcję, która przyjmuje dwie liczby jako argumenty

  const calculateWithChar = (operator) => {
    return (num1, num2) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'złe wejście';
      }

      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
        case '%':
          return num1 % num2;
        default:
          return 'zły znak';
      }
    };
  };

  console.log(calculateWithChar('+')(1, 2));
  console.log(calculateWithChar('*')(1, 2));
  console.log(calculateWithChar('/')(1, 2));
  console.log(calculateWithChar('---')(1, 2));
  console.log(calculateWithChar('+')('abc', 2));

  //Duza litera

  function upperObject(obj) {
    const resultObj = {};

    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        if (typeof value === 'string' && value.length > 0) {
          resultObj[key] = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
          resultObj[key] = value;
        }
      }
    }

    return resultObj;
  }

  const originalObj = { name: 'john', surname: 'wick', age: 1000 };
  const changedObject = upperObject(originalObj);

  console.log({ originalObj, changedObject });

  //Obliczanie sredniej ocen

  function calculateAverage(gradesArray) {
    let sum = 0;
    for (const grade of gradesArray) {
      sum += grade;
    }
    const averageGrade = sum / gradesArray.length;
    return averageGrade;
  }

  function calcAvr(studentsArray) {
    const resultArray = [];

    for (const student of studentsArray) {
      const studentWithAverage = {
        ...student,
        averageGrade: calculateAverage(student.grades),
      };
      resultArray.push(studentWithAverage);
    }

    return resultArray;
  }

  const tablicaPierwotna = [
    { id: 0, name: 'eve', grades: [4, 2, 4, 6, 1, 2, 3] },
    { id: 2, name: 'eve2', grades: [4, 2, 4, 6, 1, 2, 3] },
  ];

  const tablicaWynikowa = calcAvr(tablicaPierwotna);

  console.log({
    tablicaPierwotna,
    tablicaWynikowa,
  });

  // Funckja z niewiadoma liczba argumentow

  function sumOfParam(...args) {
    let sum = 0;

    for (const arg of args) {
      if (typeof arg !== 'number' || isNaN(arg)) {
        return 'złe wejście';
      }

      sum += arg;
    }

    return sum;
  }

  console.log(sumOfParam(1, 2, 3, 4, 5, 6)); // Wynik: 21
  console.log(sumOfParam(1, 2, 3, 'not a number', 5, 6)); // Wynik: 'złe wejście'

  // zadanie 4
  function CheckRepeatingNumbers(target) {
    if (typeof target !== 'number') {
      return () => 'wrong entry';
    }

    return (...numbers) => {
      let count = 0;
      for (const num of numbers) {
        if (typeof num === 'number' && num === target) {
          count++;
        }
      }

      return count;
    };
  }

  // Wywołanie funkcji
  const checkNumberTwo = CheckRepeatingNumbers(2);
  console.log(checkNumberTwo(1, 2, 3, 2, 4, 5, 2)); // Wynik: 3

  return <div>Test</div>;
}
