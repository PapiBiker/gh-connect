import React, { useState } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

const Organigrama = () => {
  const data = {
    Piura: {
      "Gerencia de Sede": {
        manager: 'Juan Perez',
        subManagers: ['Ana Gomez'],
        planners: [],
        supervisors: ['Luis Fernandez']
      },
      Produccion: {
        manager: 'Maria Rodriguez',
        subManagers: ['Carlos Sanchez'],
        planners: ['Jose Martin', 'Sofia Torres'],
        supervisors: ['Diego Costa', 'Carmen Herrera', 'Daniel Vargas']
      },
      "Control de Calidad": {
        manager: 'Pedro Ramirez',
        subManagers: [],
        planners: ['Isabel Castillo'],
        supervisors: ['Sergio Ramos', 'Paula Mendoza']
      },
      "Gestion Humana": { manager: 'Andres Morales', subManagers: [], planners: [], supervisors: [] },
      Riego: { manager: 'Ricardo Castro', subManagers: [], planners: [], supervisors: [] },
      Sanidad: { manager: 'Beatriz Alonso', subManagers: [], planners: [], supervisors: [] },
    },
    Ica: {
        "Gerencia de Sede": { manager: 'Rosa Flores', subManagers: ['Miguel Angel'], planners: [], supervisors: [] },
        Produccion: { manager: 'Javier Hernandez', subManagers: ['Elena Ruiz'], planners: ['David Garcia'], supervisors: ['Jorge Navarro'] },
        Packing: { manager: 'Isabel Castillo', subManagers: [], planners: [], supervisors: [] },
    },
    Trujillo: {
        "Gerencia de Sede": { manager: 'Andres Morales', subManagers: [], planners: [], supervisors: [] },
        "Servicios Generales": { manager: 'Carmen Herrera', subManagers: [], planners: [], supervisors: [] },
        Packing: { manager: 'Daniel Vargas', subManagers: [], planners: [], supervisors: [] },
    },
  };

  const [selectedSede, setSelectedSede] = useState('Piura');

  const handleSedeChange = (event) => {
    setSelectedSede(event.target.value);
  };

  const areas = data[selectedSede];

  return (
    <div>
      <Header />
      <main className="container mt-5 mb-5">
        <h1 className="mb-4">Organigrama de la Empresa</h1>
        
        <div className="mb-4">
          <label htmlFor="sede-select" className="form-label">Selecciona una Sede:</label>
          <select id="sede-select" className="form-select" value={selectedSede} onChange={handleSedeChange}>
            {Object.keys(data).map(sede => (
              <option key={sede} value={sede}>{sede}</option>
            ))}
          </select>
        </div>

        <h2 className="mb-4">Mostrando organigrama de: {selectedSede}</h2>
        <div className="row">
          {Object.entries(areas).map(([area, details]) => (
            <div key={area} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-header fw-bold bg-secondary text-white">{area}</div>
                <div className="card-body">
                  {details.manager && <p className="card-text mb-1"><strong>Gerente:</strong> {details.manager}</p>}
                  {details.subManagers && details.subManagers.length > 0 && (
                    <div>
                      <p className="card-text mb-1"><strong>Sub-Gerentes:</strong></p>
                      <ul className="list-unstyled ps-3">
                        {details.subManagers.map(m => <li key={m}>{m}</li>)}
                      </ul>
                    </div>
                  )}
                  {details.planners && details.planners.length > 0 && (
                    <div>
                      <p className="card-text mb-1"><strong>Planners:</strong></p>
                      <ul className="list-unstyled ps-3">
                        {details.planners.map(p => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                  )}
                  {details.supervisors && details.supervisors.length > 0 && (
                    <div>
                      <p className="card-text mb-1"><strong>Supervisores:</strong></p>
                      <ul className="list-unstyled ps-3">
                        {details.supervisors.map(s => <li key={s}>{s}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Organigrama;
