import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Logout = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      setUser(null); // Clear the user object in the UserContext
      localStorage.removeItem('token'); // Remove the token from localStorage
      navigate('/login'); // Navigate to the login page
    };

    handleLogout();
  }, [navigate, setUser]);

  return null; // No content to render in the Logout component
};

export default Logout;
