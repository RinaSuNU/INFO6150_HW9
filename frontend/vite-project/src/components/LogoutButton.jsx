import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // 调用后端登出API
      await axios.post(
        'http://localhost:8000/api/auth/logout', 
        {}, 
        { withCredentials: true }
      );
      
      // 清除前端存储的token（如果有）
      localStorage.removeItem('token');
      
      // 跳转到首页
      navigate('/');
      
      // 可选：刷新页面确保状态更新
      window.location.reload();
      
    } catch (error) {
      console.error('Logout failed:', error);
      // 即使登出失败也跳转
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