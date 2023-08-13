import React, { useState } from 'react';
import './styles.css';

export function Exercise() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const validate = (value) => {
    if (isNaN(value)) {
      throw new Error('Input must be a number');
    }
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setError(null);

    try {
      validate(newValue);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Exercise;
