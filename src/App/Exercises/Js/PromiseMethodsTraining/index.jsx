import React, { useState, useEffect } from 'react';

export function Exercise() {
  const fetchDataFast = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );

  const fetchDataLong = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );

  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('An error occurred'));
      }, 500)
    );

  const handleButtonClick = async () => {
    try {
      const [resultFast, resultLong] = await Promise.all([
        fetchDataFast(),
        fetchDataLong(),
      ]);

      console.log('Result Fast:', resultFast);
      console.log('Result Long:', resultLong);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFetchAllClick = async () => {
    try {
      const [resultFast, resultLong, resultError] = await Promise.all([
        fetchDataFast(),
        fetchDataLong(),
        fetchDataError(),
      ]);

      console.log('Result Fast:', resultFast);
      console.log('Result Long:', resultLong);
      console.log('Result Error:', resultError);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleFetchAllSettledClick = async () => {
    try {
      const [resultFast, resultLong] = await Promise.allSettled([
        fetchDataFast(),
        fetchDataLong(),
      ]);

      console.log('Result Fast:', resultFast);
      console.log('Result Long:', resultLong);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Fetch Data</button>
      <button onClick={handleFetchAllClick}>Fetch Data</button>
      <button onClick={handleFetchAllSettledClick}>Fetch Data</button>
    </div>
  );
}
