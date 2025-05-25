import React from 'react';

function TodoForm({ value, setValue, onSubmit, isEditing }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter todo..."
  style={{
    padding: '16px 20px',
    fontSize: '1.2rem',
    width: '80%',
    borderRadius: '8px',
    border: '2px solid #ccc',
    marginRight: '10px'
  }}
/>

      <button onClick={onSubmit}>{isEditing ? 'Update' : 'Add'}</button>
    </div>
  );
}

export default TodoForm;
