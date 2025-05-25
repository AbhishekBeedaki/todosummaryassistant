import React, { useEffect, useState } from 'react';
import { getTodos, addTodo, deleteTodo, updateTodo, summarize } from './services/api';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddOrUpdate = async () => {
    if (!newTodo.trim()) return;

    if (editingId) {
      await updateTodo(editingId, { text: newTodo });
      setEditingId(null);
    } else {
      await addTodo({ text: newTodo });
    }

    setNewTodo('');
    fetchTodos();
  };

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setNewTodo(todo.text);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const handleSummarize = async () => {
  try {
    setLoading(true);
    await summarize();
    setStatus(' Summary sent to Slack!');
  } catch {
    setStatus(' Failed to send summary.');
  } finally {
    setLoading(false);
  }
};

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h1>Todo Summary Assistant</h1>
      <TodoForm
        value={newTodo}
        setValue={setNewTodo}
        onSubmit={handleAddOrUpdate}
        isEditing={!!editingId}
      />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <button onClick={handleSummarize}>📤 Summarize & Send to Slack</button>
      {status && <p>{status}</p>}
    </div>
  );
}

export default App;
