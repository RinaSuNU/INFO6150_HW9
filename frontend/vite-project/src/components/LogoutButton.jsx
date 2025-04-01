import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {

      await axios.post(
        'http://localhost:8000/api/auth/logout', 
        {}, 
        { withCredentials: true }
      );
      

      localStorage.removeItem('token');
      

      navigate('/');
      

      window.location.reload();
      
    } catch (error) {
      console.error('Logout failed:', error);
      navigate('/');
    }
  };

  return (
    <Button 
      color="inherit"
      onClick={handleLogout}
    >
      LogOut
    </Button>
  );
};

export default LogoutButton;