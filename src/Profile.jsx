import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

const Profile = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5 mb-5">
        <h1 className="mb-4">Editar Perfil</h1>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" defaultValue="Usuario de Prueba" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" defaultValue="test@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Nueva Contraseña</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="mb-3">
                <label htmlFor="password-confirm" className="form-label">Confirmar Nueva Contraseña</label>
                <input type="password" className="form-control" id="password-confirm" />
              </div>
              <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
