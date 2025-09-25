import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

const Blog = () => {
  // Datos de ejemplo para las noticias
  const featuredNews = {
    title: 'Anuncio Importante de la Gerencia',
    summary: 'La gerencia general se complace en anunciar el lanzamiento de nuestra nueva plataforma de comunicación interna, diseñada para mejorar la colaboración y el acceso a la información en toda la empresa.',
    author: 'Gerencia General',
    date: '24 de Septiembre, 2025',
    imageUrl: 'https://via.placeholder.com/800x400.png?text=Noticia+Destacada'
  };

  const currentNews = [
    {
      id: 1,
      title: 'Nuevas Políticas de Sostenibilidad',
      summary: 'Presentamos nuestras nuevas políticas de sostenibilidad, reafirmando nuestro compromiso con el medio ambiente.',
      category: 'Corporativo',
      date: '22 de Septiembre, 2025',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Sostenibilidad'
    },
    {
      id: 2,
      title: 'Resultados del Trimestre',
      summary: 'Análisis de los resultados financieros y de producción del último trimestre.',
      category: 'Finanzas',
      date: '21 de Septiembre, 2025',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Resultados'
    },
    {
      id: 3,
      title: 'Próximos Eventos de Integración',
      summary: 'No te pierdas los próximos eventos de integración para fomentar el compañerismo.',
      category: 'Recursos Humanos',
      date: '20 de Septiembre, 2025',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Eventos'
    }
  ];

  const newsByArea = [
    { area: 'Producción', count: 15 },
    { area: 'Control de Calidad', count: 8 },
    { area: 'Gestión Humana', count: 12 },
    { area: 'Riego', count: 5 },
    { area: 'Sanidad', count: 7 },
    { area: 'Finanzas', count: 10 }
  ];

  return (
    <div>
      <Header />
      <main className="container mt-5 mb-5">
        <header className="text-center mb-5">
          <h1>Nuestro Blog de Noticias</h1>
          <p className="lead">Manténgase informado con las últimas novedades y anuncios de la empresa.</p>
        </header>

        {/* Noticia Destacada */}
        <section className="card mb-5 shadow-sm">
          <div className="row g-0">
            <div className="col-md-6">
              <img src={featuredNews.imageUrl} className="img-fluid rounded-start" alt="Noticia destacada" />
            </div>
            <div className="col-md-6 d-flex flex-column p-4">
              <h2 className="card-title">{featuredNews.title}</h2>
              <p className="card-text flex-grow-1">{featuredNews.summary}</p>
              <div className="text-muted">
                <small>Por: {featuredNews.author}</small>
                <br />
                <small>Fecha: {featuredNews.date}</small>
              </div>
            </div>
          </div>
        </section>

        <div className="row">
          {/* Noticias Actuales */}
          <div className="col-lg-9">
            <h3 className="mb-4">Noticias Actuales</h3>
            <div className="row">
              {currentNews.map(news => (
                <div key={news.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img src={news.imageUrl} className="card-img-top" alt={news.title} />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{news.title}</h5>
                      <p className="card-text flex-grow-1">{news.summary}</p>
                      <span className="badge bg-primary align-self-start mb-2">{news.category}</span>
                      <small className="text-muted">{news.date}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Barra de Noticias por Áreas */}
          <div className="col-lg-3">
            <div className="card shadow-sm">
              <div className="card-header bg-secondary text-white">
                <h4 className="mb-0">Noticias por Área</h4>
              </div>
              <ul className="list-group list-group-flush">
                {newsByArea.map(item => (
                  <li key={item.area} className="list-group-item d-flex justify-content-between align-items-center">
                    {item.area}
                    <span className="badge bg-dark rounded-pill">{item.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;