import React, { useEffect, useState } from 'react';

export const Exercise = () => {
  const sentence = 'I love react :)';
  const [displayedSentence, setDisplayedSentence] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= sentence.length) {
        setDisplayedSentence(sentence.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval time (in milliseconds) to control the animation speed

    return () => clearInterval(interval);
  }, []);

  return <div>{displayedSentence}</div>;
};

export default Exercise;
