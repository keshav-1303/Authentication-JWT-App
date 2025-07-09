import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Optional 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="text-center">
      <h2>Welcome to the Auth App!</h2>
      <p>Please register or login to continue.</p>
      <Link to="/login" className="btn btn-primary me-2">Login</Link>
      <Link to="/register" className="btn btn-success">Register</Link>
    </div>
  );
}

// Optional: 404 component
function NotFound() {
  return (
    <div className="text-center">
      <h2>404 - Page Not Found</h2>
      <Link to="/" className="btn btn-secondary">Go Home</Link>
    </div>
  );
}

export default App;
