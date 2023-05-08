import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import { UserContext } from './UserContext';
import Logout from './Logout';

const App = () => {
  const [user, setUser] = useState({
    username: 'tammy62',
    password: 'Tam@6712',
    name: 'John Doe',
    email: 'john.doe@example.com',
    todos: [
      { id: 1, title: 'Complete React assignment', completed: false },
      { id: 2, title: 'Buy groceries', completed: false },
      { id: 3, title: 'Clean the house', completed: true }
    ],
    loggedIn: false // Added loggedIn property
  });
  console.log(user,'App');

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;