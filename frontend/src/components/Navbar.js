import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">AuthApp</Link>
        <div>
          {token ? (
            <>
              <Link className="btn btn-outline-primary me-2" to="/dashboard">Dashboard</Link>
              <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-success me-2" to="/register">Register</Link>
              <Link className="btn btn-outline-primary" to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
