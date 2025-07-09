import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axiosConfig';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      setMessage(error?.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow mx-auto" style={{ maxWidth: '400px' }}>
        <h2 className="mb-3 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        {message && <div className="alert alert-info mt-3">{message}</div>}
      </div>
    </div>
  );
}

export default Login;
