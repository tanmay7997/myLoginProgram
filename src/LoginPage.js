import React, { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  console.log(UserContext,'Login');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === user.username && password === user.password) {
      const updatedUser = { ...user, loggedIn: true };
      setUser(updatedUser);
      const token = 'exampleToken';
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  if (user && user.loggedIn) {
    return <Navigate to="/dashboard" />;
  }  

  /*if (user) {
    return <Navigate to="/dashboard" />;
  }*/

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
  <div className="text-center">
    <h1 style={{ color: 'red' }} className="text-danger">Login Page</h1>
    <form onSubmit={handleSubmit}>
      <label style={{ color: 'blue' }}>Username: </label>
      <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br/><br/>
      <label style={{ color: 'blue' }}>Password: </label>
      <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br/><br/>
      <button type="submit" className="btn btn-success mt-3" style={{ color: 'yellow', backgroundColor: 'green' }}>Login</button>
    </form>
  </div>
</div>
  );
};

export default LoginPage;