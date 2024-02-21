// PrivateRoute.tsx
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutesCheck() {
  const token = localStorage.getItem('token');
  return token !== null && token !== '' ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutesCheck;
