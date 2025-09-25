import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí se podría limpiar el estado de autenticación (ej. sessionStorage, context, etc.)
    navigate('/login');
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm py-2">
        <div className="container-fluid">
          {/* Logo */}
          <Link 
            className="navbar-brand d-flex align-items-center"
            to="/"
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 800,
              color: '#1a365d',
              fontSize: '1.4rem',
              letterSpacing: '-1px'
            }}
          >
            <img src="https://img.icons8.com/ios-filled/32/1a365d/source-code.png" alt="logo" style={{marginRight: 8}} />
            GH Connect
          </Link>
          {/* Toggler */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Menú y extras */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Menú centrado */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/almacen">Documentos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Indicadores</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/organigrama">Organigrama</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Noticias</Link>
              </li>
            </ul>
            {/* Buscador y avatar */}
            <form className="d-flex align-items-center me-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Buscar" style={{maxWidth: 180, fontSize: '0.95rem'}} />
            </form>
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="avatar"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #e2e8f0'
                  }}
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/profile">Perfil</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" onClick={handleLogout}>Cerrar Sesión</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;