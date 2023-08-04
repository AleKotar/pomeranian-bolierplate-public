import { useEffect, useState } from 'react';
import './styles.css';

export const Exercise = () => {
  const [text, setText] = useState('I love React :) ');
  const [isAnimated, setIsAnimated] = useState(true);

  function toggleAnimation() {
    setIsAnimated((prevState) => !prevState);
  }

  useEffect(() => {
    if (isAnimated) {
      const interval = setInterval(() => {
        const lastLetter = text.charAt(text.length - 1);
        const newText = lastLetter + text.substring(0, text.length - 1);
        console.log(newText);
        setText(newText);
      }, [200]);

      return () => {
        clearInterval(interval);
      };
    }
  }, [text, isAnimated]);

  return (
    <div>
      <p>{text}</p>
      <button onClick={toggleAnimation}>
        {isAnimated ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};
