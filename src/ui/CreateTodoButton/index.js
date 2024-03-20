import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  return (
    <button
      className="CreateTodoButton"
      onClick={props.onClick}
    >
     ➕ Anime
    </button>
  );
}

export { CreateTodoButton };