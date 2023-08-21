import React from 'react';

import './style.css';

export function ToDoWithServer() {
  return (
    <div className="wrapper">
      <h2>TODO</h2>
      <h3>Tutaj znajdziesz listę swoich zadań</h3>
      <div className="to-do-box">
        <h3>Title</h3>
        <p>Name</p>
        <p>Date and Hour</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          aliquam optio saepe, ullam officia velit quidem consequatur labore
          quae illum adipisci ducimus expedita. Accusamus quis, minus quos
          sapiente in dignissimos?
        </p>
      </div>
      <div className="to-do-box">
        <h3>Title</h3>
        <p>Name</p>
        <p>Date and Hour</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          aliquam optio saepe, ullam officia velit quidem consequatur labore
          quae illum adipisci ducimus expedita. Accusamus quis, minus quos
          sapiente in dignissimos?
        </p>
      </div>
    </div>
  );
}
