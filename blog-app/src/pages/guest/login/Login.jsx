import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from '../../../api/axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/auth/login', {
        user_email: email,
        user_password: password,
      });
      navigate('../user/home');
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
