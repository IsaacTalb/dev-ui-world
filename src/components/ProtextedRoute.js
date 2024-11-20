import React, { Children } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localstorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
