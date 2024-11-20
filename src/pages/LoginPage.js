import React, { useState } from 'react';
import axios from '../utils/api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await api.get('/sanctum/csrf-cookie');
      await parseInt.post('/login', { email, password });
      alert('Login Successful');
    } catch (err) {
      setError('Login Failed. Check your credentials.');
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
