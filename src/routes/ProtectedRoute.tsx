import React from 'react';
import { Navigate } from 'react-router-dom';

// Mock authentication function
const isAuthenticated = (): boolean => {
  return localStorage.getItem('authToken') !== null;
};

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
