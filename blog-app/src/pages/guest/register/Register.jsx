import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from '../../../api/axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('/auth/register', {
        user_name: name,
        user_email: email,
        user_password: password
      })

      navigate('../login');
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
    <h1>Register</h1>
    <input type="name" placeholder="UserName" onChange={(e) => setName(e.target.value)} />
    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    <button onClick={handleRegister}>Register</button>
    
    </>
  )
}

export default Register
