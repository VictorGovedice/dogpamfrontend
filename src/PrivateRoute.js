import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('userToken');

  useEffect(() => {
    if (!isAuthenticated) {
      alert('Faça login para acessar a área do usuário');
      navigate('/usuarioPet', { state: { from: location } });
    }
  }, [isAuthenticated, navigate, location]);

  return isAuthenticated ? children : null;
}

export default PrivateRoute;
