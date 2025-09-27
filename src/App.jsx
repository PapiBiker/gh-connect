import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './login';
import Dashboard from './Dashboard';
import Home from './home';
import Almacen from './Almacen';
import Blog from './Blog';
import Organigrama from './Organigrama';
import Profile from './Profile';
import PdfViewer from './EditorArchivo';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/almacen" element={<Almacen />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/organigrama" element={<Organigrama />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/procedimiento/control-de-cambios" element={<PdfViewer />} />
      </Routes>
    </Router>
  );
}

export default App;