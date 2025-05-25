import React from 'react';

function TodoItem({ todo, onEdit, onDelete }) {
  return (
    <li style={{ marginBottom: '10px' }}>
      {todo.text}
      <button onClick={() => onEdit(todo)} style={{ marginLeft: '10px' }}>edit</button>
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: '5px' }}>delete</button>
    </li>
  );
}

export default TodoItem;
