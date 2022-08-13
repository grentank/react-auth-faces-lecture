import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../Contexts/MyContexts';

export default function RequireAuth({ children }) {
  const { user } = useUserContext();
  const location = useLocation();
  if (!user?.id) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
