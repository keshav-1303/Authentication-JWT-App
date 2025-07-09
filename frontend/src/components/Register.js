import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axiosConfig';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/signup', { name, email, password });
      setMessage(response.data.message);
      navigate('/login');
    } catch (error) {
      setMessage(error?.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className="card p-4">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" className="form-control mb-2"
          value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" className="form-control mb-2"
          value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="form-control mb-2"
          value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" className="btn btn-success">Register</button>
      </form>
      {message && <div className="alert alert-info mt-2">{message}</div>}
    </div>
  );
}

export default Register;
