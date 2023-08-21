import './styles.css';

import { MenuView } from './MenuView/menu-view';
import { GameView } from './GameView/game-view';
import { PlaygroundView } from './PlaygroundView/playground-view';
import { useEffect, useState } from 'react';

const INITIAL_TIME = 60;

export function MemoGame() {
  useEffect(() => {
    time === 0 && setIsGameStarted(false);
  });

  const [time, setTime] = useState(5);
  const [initialTime, setInitialTime] = useState(INITIAL_TIME);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState();
  return (
    <div>
      <h3>Gra polegająca na zapamiętywaniu</h3>
      {!isGameStarted && (
        <MenuView
          setBoardSize={setBoardSize}
          setTime={setTime}
          setIsGameStarted={setIsGameStarted}
        />
      )}
      {isGameStarted && (
        <GameView
          setTime={setTime}
          time={time}
          setGameStarted={setIsGameStarted}
        />
      )}
      {isGameStarted && <PlaygroundView setGameStarted={setIsGameStarted} />}
    </div>
  );
}
