import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Credenciales quemadas
    if (username === 'admin' && password === 'password') {
      navigate('/home');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuario"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">
            Ingresar  
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;