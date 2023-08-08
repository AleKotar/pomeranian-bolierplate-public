import './styles.css';
import { Button } from '../Button/button';
import { Menu } from '../Menu/menu';
import { useEffect } from 'react';

export const GameView = ({ setGameStarted, time, setTime }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      time > 0 && setTime(time - 1);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [time]);

  return (
    <div className="mg-gameview">
      <div>
        <Menu label="CZAS GRY">
          <Button>{time}</Button>
        </Menu>
      </div>
      <div>
        <Menu label="LICZBA RUCHÓW">
          <Button>Pass</Button>
        </Menu>
      </div>
      <div>
        <Menu label="PRZYCISKI STERUJĄCE">
          <Button onClick={() => setGameStarted(false)}>PASS</Button>
        </Menu>
      </div>
    </div>
  );
};
