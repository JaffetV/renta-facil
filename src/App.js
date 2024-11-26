import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Vehiculos from './pages/Vehiculos';
import CarDetail from './pages/CarDetail';
import Reserva from './pages/Reserva';
import Confirmacion from './pages/Confirmacion';
import Servicios from './pages/Servicios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/vehiculo/:id" element={<CarDetail />} />
          <Route path="/reserva/:id" element={<Reserva />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
