import React, { useState } from 'react';
import './styles.css';

export function TextFundamentals() {
  const [font, setFont] = useState('no-font');

  function handleChangeFont() {
    setFont('fontQuickSand');
  }
  function defaultFont() {
    setFont('text-block');
  }
  return (
    <div className="all">
      <div className={`${setFont} ${font}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          distinctio iste dolor quos exercitationem praesentium, facilis
          architecto laboriosam natus, dolores minus? Qui incidunt explicabo
          deserunt veniam tenetur saepe exercitationem corporis?
        </p>
      </div>
      <button onClick={handleChangeFont}>Change font to QuickSand</button>
      <button onClick={defaultFont}>Change to default</button>
    </div>
  );
}
