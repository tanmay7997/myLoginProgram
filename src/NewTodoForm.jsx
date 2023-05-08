import React, { useState } from 'react';

const NewTodoForm = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      const todo = {
        id: Date.now(),
        title: newTodo,
        completed: false,
      };
      onAddTodo(todo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>New Todo:</label>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;