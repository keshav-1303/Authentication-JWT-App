import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axiosConfig';

function Dashboard() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const res = await api.get('/test', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(res.data.message);
      } catch (err) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };
    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: '500px' }}>

      <h2>Dashboard</h2>
      {message && <div className="alert alert-success">{message}</div>}
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </div>
  );
}

export default Dashboard;
