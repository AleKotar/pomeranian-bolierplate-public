import React, { useState } from 'react';
import './style.css';
import { TransgenderTwoTone } from '@mui/icons-material';

export const FormPrivateExercise = () => {
  const [course, setCourse] = useState('');
  const [payment, setPayment] = useState('');

  const customOptions = {
    css: {
      title: 'ustawienie środowiska',
      state: false,
    },
    javascript: {
      title: 'intro do GitHub',
      state: false,
    },
    react: {
      title: 'materiały dodatkowe',
      state: false,
    },
  };
  return (
    <form className="fp-whole-wrapper">
      <h2>Zamówienie produktu</h2>
      <div className="fp-course">
        <label id="fp-course-label" htmlFor="CourseField">
          Wybierz produkt*
        </label>
        <select
          id="select-course"
          value={course}
          onChange={(e) => {
            setCourse(e.target.value);
          }}
        >
          <option value="front-end"> kurs front-end</option>
          <option value="devOps">kurs DevOps</option>
          <option value="backend">kurs backend</option>
        </select>
      </div>
      <div className="fp-payment">
        <label id="fp-payment-label">Wybierz metodę płatności*</label>
        <div>
          <input
            type="radio"
            value="blik"
            id="payment-blik"
            checked={payment === 'blik'}
            onChange={(e) => setPayment(e.target.value)}
          />
          <label>Blik</label>
        </div>
        <div>
          <input
            type="radio"
            id="payment-karta"
            value="karta"
            checked={payment === 'karta'}
            onChange={(e) => setPayment(e.target.value)}
          />
          <label>Karta</label>
        </div>
        <div>
          <input
            type="radio"
            id="payment-przelew"
            value="przelew"
            checked={payment === 'przelew'}
            onChange={(e) => setPayment(e.target.value)}
          />
          <label>Przelew tradycyjny</label>
        </div>
      </div>
      <div className="fp-custom-options">
        <label>Opcje dodatkowe do zamówienia</label>
      </div>

      {/* <h2>ZAMÓWIENIE PRODUKTU</h2>
      <div>
        <label className="fp-label-payment" htmlFor="PaymentField">
          Wybierz formę płatności*
        </label>
        <select
          id="payment-select"
          value={payment}
          onChange={
            (handlePayment = (e) => {
              e.target.value;
            })
          }
        >
          <option></option>
        </select>
      </div> */}
    </form>
  );
};
