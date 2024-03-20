import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2
      className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
    >
      Has visto {completedTodos} Animes {totalTodos} de tu lista🙆🙆
    </h2>
  );
}

export { TodoCounter };