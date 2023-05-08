import React, { useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { UserContext } from './UserContext';

const DashboardPage = () => {
  const { user, setUser } = useContext(UserContext);

  // Redirect to login page if user is not authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }

  const { name, todos } = user;

  const handleLogout = () => {
    setUser(null); // Clear the user object in the UserContext
    localStorage.removeItem('token'); // Remove the token from localStorage
    return <Navigate to="/login" />;
  };

  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    // Update the user object with the updated todos
    setUser({ ...user, todos: updatedTodos });
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <h2>Welcome, {name}!</h2>
      <button onClick={handleLogout}>Logout</button>
      <h3>Your Todos:</h3>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleCompleteTodo(todo.id)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;