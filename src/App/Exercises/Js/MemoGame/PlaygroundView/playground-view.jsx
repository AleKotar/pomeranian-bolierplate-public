import './styles.css';
import { useState } from 'react';

const emptyBoard = [];
export const PlaygroundView = () => {
  const [board, setBoard] = useState(emptyBoard);
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
      </div>
      <div className="grid-row">
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
      </div>
      <div className="grid-row">
        <div className="grid-item">9</div>
        <div className="grid-item">10</div>
        <div className="grid-item">11</div>
        <div className="grid-item">12</div>
      </div>
      <div className="grid-row">
        <div className="grid-item">13</div>
        <div className="grid-item">14</div>
        <div className="grid-item">15</div>
        <div className="grid-item">16</div>
      </div>
    </div>
  );
};
