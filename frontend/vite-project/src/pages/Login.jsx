import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import './Login.css';


const Login=() =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/auth/login', { username, password });
            
            if (res.data.success) {
                alert('登录成功!');
                navigate('/home'); // Redirect to home page after login
              } else {
                alert(response.data.message);}
            
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return(
        <div>
            <div className="container">
            <Typography variant="h2" gutterBottom>Login</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <form onSubmit={handleSubmit}>
                <TextField 
                    className="login-textfield"
                    label="Username"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <TextField
                    className="login-textfield"
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button className="login-button" type="submit" variant="contained">
                Login
                </Button>
            </form>
            </div>
        </div>
    );
};

export default Login;