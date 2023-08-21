import React, { useState, useEffect } from 'react';

export function Exercise() {
  const [resolvedValue, setResolvedValue] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await new Promise((resolve) => {
          setTimeout(() => {
            resolve('Promise resolved!');
          }, 2000); // Simulating async operation
        });

        setResolvedValue(result);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>React useEffect and Promises</h1>
      <div>Resolved Value: {resolvedValue}</div>
    </div>
  );
}
