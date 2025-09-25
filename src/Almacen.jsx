import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

const sections = [
  {
    title: 'Políticas',
    items: [
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/security-configuration.png', name: 'Política de Seguridad de la Información' },
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/privacy-policy.png', name: 'Política de Privacidad de Datos' },
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/ok.png', name: 'Política de Uso Aceptable' }
    ]
  },
  {
    title: 'Procedimientos',
    items: [
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/maintenance.png', name: 'Procedimiento de Gestión de Incidentes' },
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/process.png', name: 'Procedimiento de Control de Cambios' },
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/backup-restore.png', name: 'Procedimiento de Respaldo y Recuperación' }
    ]
  },
  {
    title: 'Manuales',
    items: [
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/book.png', name: 'Manual del Usuario del Sistema' },
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/book.png', name: 'Manual de Administración del Sistema' },
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/book.png', name: 'Manual de Desarrollo de Software' }
    ]
  },
  {
    title: 'Guías',
    items: [
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/tip.png', name: 'Guía de Inicio Rápido' },
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/solution.png', name: 'Guía de Solución de Problemas' },
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/best-seller.png', name: 'Guía de Mejores Prácticas' }
    ]
  },
  {
    title: 'Formatos',
    items: [
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/document--v1.png', name: 'Formato de Solicitud de Cambio' },
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/document--v1.png', name: 'Formato de Reporte de Incidente' },
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/document--v1.png', name: 'Formato de Evaluación de Riesgos' }
    ]
  },
  {
    title: 'Presentaciones',
    items: [
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/presentation.png', name: 'Presentación de Inducción' },
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/presentation.png', name: 'Presentación de Capacitación' },
      { icon: 'https://img.icons8.com/ios-filled/24/1a365d/presentation.png', name: 'Presentación de Resultados Trimestrales' }
    ]
  }
];

const Almacen = () => {
  return (
    <div>
      <Header />
      <main className="container py-5" style={{background: "#f6f7f9", minHeight: "90vh"}}>
        <h1 className="mb-4" style={{fontWeight: 800, fontSize: "2.2rem", color: "#1a365d"}}>Gestión Documental</h1>
        {sections.map(section => (
          <div key={section.title} className="mb-4">
            <h5 className="mb-3" style={{fontWeight: 700, color: "#1a365d"}}>{section.title}</h5>
            <div className="row g-3">
              {section.items.map(item => (
                <div key={item.name} className="col-12 col-md-4">
                  <div className="card h-100 border-0 shadow-sm" style={{borderRadius: 12}}>
                    <div className="card-body d-flex align-items-center">
                      <img src={item.icon} alt="" style={{marginRight: 12}} />
                      <span style={{fontWeight: 600, color: "#222"}}>{item.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Almacen;
