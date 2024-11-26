import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Vehiculos.css';

const Vehiculos = () => {
  const [viewMode, setViewMode] = useState('grid');

  const vehiculos = [
    {
      id: 1,
      nombre: "Toyota Corolla 2024",
      tipo: "FULL SIZE",
      precio: 72.99,
      imagen: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg",
      caracteristicas: ["Automático", "5 Pasajeros", "4 Maletas", "Aire Acondicionado"]
    },
    {
      id: 2,
      nombre: "Honda CR-V 2024",
      tipo: "SUV",
      precio: 89.99,
      imagen: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
      caracteristicas: ["Automático", "5 Pasajeros", "6 Maletas", "Aire Acondicionado"]
    },
    {
      id: 3,
      nombre: "Nissan Versa 2024",
      tipo: "COMPACTO",
      precio: 65.99,
      imagen: "https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg",
      caracteristicas: ["Automático", "5 Pasajeros", "2 Maletas", "Aire Acondicionado"]
    }
  ];

  return (
    <div className="vehiculos-container">
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Nuestros Vehículos</h2>
          <div className="view-toggles">
            <button 
              className={`btn btn-outline-primary me-2 ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <i className="bi bi-grid"></i>
            </button>
            <button 
              className={`btn btn-outline-primary ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>

        <div className={`vehiculos-view ${viewMode}`}>
          {vehiculos.map(vehiculo => (
            <div key={vehiculo.id} className="vehiculo-card">
              <img src={vehiculo.imagen} alt={vehiculo.nombre} className="vehiculo-imagen" />
              <div className="vehiculo-info">
                <h3>{vehiculo.nombre}</h3>
                <span className="badge bg-info mb-2">{vehiculo.tipo}</span>
                <ul className="caracteristicas-list">
                  {vehiculo.caracteristicas.map((caracteristica, index) => (
                    <li key={index}><i className="bi bi-check2"></i> {caracteristica}</li>
                  ))}
                </ul>
                <div className="precio-alquiler">
                  <span className="precio">${vehiculo.precio}/día</span>
                  <Link to={`/vehiculo/${vehiculo.id}`} className="btn btn-primary">
                    ¡Alquilar!
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehiculos; 