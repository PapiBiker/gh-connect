import React, { useRef, useState } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

const PDF_URL = `${import.meta.env.BASE_URL}pdf/Manual_BP_Certificaciones.pdf`;

function EditorArchivo() {
  const [mostrarPDF, setMostrarPDF] = useState(false);
  const iframeRef = useRef();

  const handleVerPDF = () => {
    setMostrarPDF(true);
  };

  const handlePrint = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.focus();
      iframeRef.current.contentWindow.print();
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PDF_URL; // Make sure this PDF is in your /public folder
    link.download = 'Manual_BP_Certificaciones.pdf';
    link.click();
  };

  const handleEdit = () => {
    alert('Funcionalidad de edición no implementada.');
  };

  const handleShare = () => {
    alert('Funcionalidad de compartir no implementada.');
  };

  const handleHistory = () => {
    alert('Funcionalidad de ver historial no implementada.');
  };

  return (
    <div>
      <Header />
      <main className="container py-5" style={{ background: "#f6f7f9", minHeight: "90vh" }}>
        <h1 className="mb-4" style={{ fontWeight: 800, fontSize: "2.2rem", color: "#1a365d" }}>Procedimiento de Control de Cambios</h1>
        {!mostrarPDF ? (
          <div className="text-center p-5">
            <p>El documento no está visible. Haz clic para mostrar el PDF.</p>
            <button onClick={handleVerPDF} className="btn btn-primary">Ver PDF</button>
          </div>
        ) : (
          <div className="d-flex" style={{ height: 'calc(100vh - 250px)' }}>
            <iframe
              ref={iframeRef}
              src={`${PDF_URL}#toolbar=0`}
              title="Manual de Buenas Prácticas"
              style={{ flex: 1, border: '1px solid #ccc', height: '100%' }}
            />
            <div className="d-flex flex-column ps-3" style={{ gap: '12px' }}>
              <button className="btn btn-outline-secondary" onClick={handleEdit}>Editar</button>
              <button className="btn btn-outline-secondary" onClick={handleShare}>Compartir</button>
              <button className="btn btn-outline-secondary" onClick={handleHistory}>Ver Historial</button>
              <hr />
              <button className="btn btn-outline-primary" onClick={handlePrint}>Imprimir</button>
              <button className="btn btn-outline-success" onClick={handleDownload}>Descargar</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default EditorArchivo;