import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Filler } from 'chart.js';
import { Doughnut, Pie, Bar, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Filler);

const Dashboard = () => {

  // Datos de ejemplo existentes
  const processData = { labels: ['Completado', 'En Progreso', 'Pendiente'], datasets: [{ data: [120, 190, 30], backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'] }] };
  const activeAreasData = { labels: ['Recursos Humanos', 'Finanzas', 'TI', 'Marketing'], datasets: [{ data: [300, 50, 100, 75], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'] }] };
  const docsByAreaData = { labels: ['Recursos Humanos', 'Finanzas', 'TI', 'Marketing', 'Ventas', 'Operaciones'], datasets: [{ label: 'Nº de Documentos', data: [350, 280, 800, 550, 400, 950], backgroundColor: 'rgba(54, 162, 235, 0.6)' }] };
  const trackingData = { labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'], datasets: [{ label: 'Trámites Completados', data: [20, 35, 40, 30, 45, 55, 60], fill: true, backgroundColor: 'rgba(75,192,192,0.2)', borderColor: 'rgba(75,192,192,1)' }, { label: 'Trámites Pendientes', data: [10, 15, 12, 18, 20, 15, 10], fill: false, borderColor: '#742774' }] };

  // Nuevos datos de ejemplo
  const personnelStatusData = {
    labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6', 'Día 7'],
    datasets: [
      { label: 'Activo', data: [250, 255, 252, 258, 260, 257, 262], backgroundColor: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(75, 192, 192, 1)' },
      { label: 'Inactivo', data: [10, 8, 9, 5, 7, 6, 4], backgroundColor: 'rgba(255, 99, 132, 0.6)', borderColor: 'rgba(255, 99, 132, 1)' }
    ]
  };

  const dailyHiresData = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    datasets: [{ label: 'Nuevas Contrataciones', data: [250, 450, 300, 600, 700], backgroundColor: 'rgba(153, 102, 255, 0.6)' }]
  };

  const genderByLocationData = {
    labels: ['Piura', 'Ica', 'Trujillo'],
    datasets: [
      { label: 'Hombres', data: [120, 90, 150], backgroundColor: 'rgba(54, 162, 235, 0.6)' },
      { label: 'Mujeres', data: [110, 80, 130], backgroundColor: 'rgba(255, 99, 132, 0.6)' }
    ]
  };

  const contractRenewalData = {
    labels: ['Contrato A (3 días)', 'Contrato B (10 días)', 'Contrato C (15 días)', 'Contrato D (25 días)'],
    datasets: [{ label: 'Días para Renovación', data: [3, 10, 15, 25], backgroundColor: ['#FF6384', '#FF9F40', '#FFCD56', '#4BC0C0'] }]
  };

  return (
    <div>
      <Header />
      <main className="container-fluid mt-5 mb-5">
        <h1 className="mb-4 text-center">Dashboard de Seguimiento</h1>
        <div className="row p-4">
          {/* Fila 1 */}
          <div className="col-md-6 col-lg-3 mb-4"><div className="card h-100"><div className="card-body"><h5 className="card-title text-center">Seguimiento de Procesos</h5><Doughnut data={processData} /></div></div></div>
          <div className="col-md-6 col-lg-3 mb-4"><div className="card h-100"><div className="card-body"><h5 className="card-title text-center">Áreas Activas</h5><Pie data={activeAreasData} /></div></div></div>
          <div className="col-md-6 col-lg-3 mb-4"><div className="card h-100"><div className="card-body"><h5 className="card-title text-center">Documentos por Área</h5><Bar data={docsByAreaData} /></div></div></div>
          <div className="col-md-6 col-lg-3 mb-4"><div className="card h-100"><div className="card-body"><h5 className="card-title text-center">Contrataciones Diarias</h5><Bar data={dailyHiresData} /></div></div></div>
          
          {/* Fila 2 */}
          <div className="col-lg-6 mb-4"><div className="card h-100"><div className="card-body"><h5 className="card-title text-center">Personal Activo/Inactivo (Últimos 7 días)</h5><Line data={personnelStatusData} /></div></div></div>
          <div className="col-lg-6 mb-4"><div className="card h-100"><div className="card-body"><h5 className="card-title text-center">Género por Sede</h5><Bar data={genderByLocationData} /></div></div></div>

          {/* Fila 3 */}
          <div className="col-lg-6 mb-4"><div className="card h-100"><div className="card-body"><h5 className="card-title text-center">Seguimiento de Trámites</h5><Line data={trackingData} /></div></div></div>
          <div className="col-lg-6 mb-4"><div className="card h-100"><div className="card-body"><h5 className="card-title text-center">Próximas Renovaciones de Contrato</h5><Bar data={contractRenewalData} options={{ indexAxis: 'y' }} /></div></div></div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
