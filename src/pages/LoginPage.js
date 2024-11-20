import React, { useState } from 'react';
import axios from '../utils/api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });

      localStorage.setItem('token', response.data.token);

      alert('Login Successful!');
    } catch (error) {
      console.error('Login Failed', error);
      alert('Invalid Credentials');
    }
  };

  return (
    <div>
      <h2>Login Panel</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submmit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
