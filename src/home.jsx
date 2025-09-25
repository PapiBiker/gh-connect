import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

const shortcuts = [
  {
    icon: "https://img.icons8.com/ios-filled/40/1a365d/opened-folder.png",
    label: "Gestión Documental"
  },
  {
    icon: "https://img.icons8.com/ios-filled/40/1a365d/combo-chart--v1.png",
    label: "Gestión de Indicadores"
  },
  {
    icon: "https://img.icons8.com/ios-filled/40/1a365d/conference-call.png",
    label: "Organigrama"
  },
  {
    icon: "https://img.icons8.com/ios-filled/40/1a365d/megaphone.png",
    label: "Noticias"
  }
];

const news = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    category: "Noticias",
    title: "Nueva política de trabajo remoto",
    summary: "Detalles sobre la nueva política de trabajo remoto que entra en vigor el próximo mes."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80",
    category: "Noticias",
    title: "Actualización del organigrama",
    summary: "Se han realizado cambios en la estructura organizativa. Consulte el organigrama actualizado."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    category: "Noticias",
    title: "Próximos eventos de la empresa",
    summary: "Manténgase informado sobre los próximos eventos y actividades de la empresa."
  }
];

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container py-5" style={{maxWidth: 900}}>
        <div className="text-center mb-4">
          <h1 style={{fontWeight: 800, fontSize: "2.5rem", color: "#1a365d"}}>Bienvenido a GH Connect</h1>
          <div className="mb-2" style={{color: "#4a5568"}}>Su portal para la gestión de documentos, indicadores y noticias.</div>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar documentos, indicadores, noticias..."
            style={{
              maxWidth: 600,
              background: "#f6f7f9",
              border: "1px solid #e2e8f0",
              borderRadius: 10,
              fontSize: "1.1rem",
              padding: "0.9rem 1.2rem"
            }}
          />
        </div>
        <div>
          <div className="mb-2" style={{fontWeight: 700, color: "#222"}}>Accesos directos</div>
          <div className="row g-3 mb-4">
            {shortcuts.map(sc => (
              <div key={sc.label} className="col-6 col-md-3">
                <div className="card h-100 border-0 shadow-sm text-center" style={{borderRadius: 12, cursor: "pointer"}}>
                  <div className="card-body d-flex flex-column align-items-center justify-content-center py-4">
                    <img src={sc.icon} alt={sc.label} style={{marginBottom: 10}} />
                    <span style={{fontWeight: 600, color: "#1a365d"}}>{sc.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-2" style={{fontWeight: 700, color: "#222"}}>Últimas noticias</div>
        <div className="d-flex flex-column gap-3">
          {news.map(item => (
            <div key={item.id} className="card border-0 shadow-sm" style={{borderRadius: 14}}>
              <div className="row g-0 align-items-center">
                <div className="col-4 col-md-2">
                  <img src={item.image} alt={item.title} className="img-fluid rounded-start" style={{height: 80, objectFit: "cover"}} />
                </div>
                <div className="col-8 col-md-10">
                  <div className="card-body py-3">
                    <div style={{color: "#2563eb", fontWeight: 600, fontSize: "0.95rem"}}>{item.category}</div>
                    <div style={{fontWeight: 700, fontSize: "1.1rem"}}>{item.title}</div>
                    <div style={{color: "#4a5568", fontSize: "0.98rem"}}>{item.summary}</div>
                  </div>
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

export default Home;