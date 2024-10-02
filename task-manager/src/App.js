import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
