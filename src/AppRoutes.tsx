import React from 'react';
import { Routes, Route,Link } from 'react-router-dom';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Private } from './pages/Private';
import { Login } from './pages/Login';
//import { Home } from './pages/Home';

const AppRoutes = () => {
    
    return (
    
    <h1>
            <Link to="/"></Link>
            <Link to="/private"></Link>
   
    <Routes>
    
    <Route path="/" element={<Login />} />
    <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
    </Routes> 
    </h1>
  );
};

export default AppRoutes;