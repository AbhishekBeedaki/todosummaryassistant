import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getTodos = () => API.get('/todos');
export const addTodo = (todo) => API.post('/todos', todo);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
export const updateTodo = (id, todo) => API.put(`/todos/${id}`, todo);
export const summarize = () => API.post('/todos/summarize');

