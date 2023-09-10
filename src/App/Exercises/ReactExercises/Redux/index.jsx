import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

export const Redux = () => {
  const testValue = useSelector((state) => {
    console.log(state, 'state w useSelector');
    return state.test.value;
  });
  return <div> To jest wartość ze store {testValue}</div>;
};
