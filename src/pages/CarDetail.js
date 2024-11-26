import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CarDetail.css';

const CarDetail = () => {
  const { id } = useParams();

  // Simulación de datos (después se conectará a una API/BD)
  const vehiculos = {
    3: {
      id: 3,
      nombre: "Nissan Versa 2024",
      tipo: "COMPACTO",
      precio: 65.99,
      imagen: "https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg",
      caracteristicas: [
        "Transmisión Automática",
        "5 Pasajeros",
        "2 Maletas",
        "Aire Acondicionado",
        "Bluetooth",
        "Cámara de Retroceso",
        "Control de Crucero"
      ],
      especificaciones: {
        motor: "1.6L 4-cilindros",
        potencia: "118 hp",
        consumo: "16.8 km/l",
        tanque: "41L",
        maletero: "416L"
      }
    }
  };

  const vehiculo = vehiculos[id];

  if (!vehiculo) {
    return (
      <div className="container text-center py-5">
        <h2>Vehículo no encontrado</h2>
        <Link to="/vehiculos" className="btn btn-primary mt-3">Volver a Vehículos</Link>
      </div>
    );
  }

  return (
    <div className="car-detail-container">
      <div className="container py-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
            <li className="breadcrumb-item"><Link to="/vehiculos">Vehículos</Link></li>
            <li className="breadcrumb-item active">{vehiculo.nombre}</li>
          </ol>
        </nav>

        <div className="car-detail-content">
          <div className="row">
            <div className="col-lg-6">
              <div className="car-image-container">
                <img src={vehiculo.imagen} alt={vehiculo.nombre} className="img-fluid rounded" />
                <span className="badge bg-info tipo-badge">{vehiculo.tipo}</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="car-info">
                <h1>{vehiculo.nombre}</h1>
                <div className="precio-dia">
                  <span className="precio">${vehiculo.precio}</span>
                  <span className="periodo">/día</span>
                </div>

                <div className="caracteristicas mt-4">
                  <h3>Características</h3>
                  <ul className="caracteristicas-list">
                    {vehiculo.caracteristicas.map((caracteristica, index) => (
                      <li key={index}><i className="bi bi-check-circle-fill"></i> {caracteristica}</li>
                    ))}
                  </ul>
                </div>

                <div className="especificaciones mt-4">
                  <h3>Especificaciones Técnicas</h3>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <i className="bi bi-gear"></i>
                      <span>Motor: {vehiculo.especificaciones.motor}</span>
                    </div>
                    <div className="spec-item">
                      <i className="bi bi-lightning"></i>
                      <span>Potencia: {vehiculo.especificaciones.potencia}</span>
                    </div>
                    <div className="spec-item">
                      <i className="bi bi-fuel-pump"></i>
                      <span>Consumo: {vehiculo.especificaciones.consumo}</span>
                    </div>
                    <div className="spec-item">
                      <i className="bi bi-water"></i>
                      <span>Tanque: {vehiculo.especificaciones.tanque}</span>
                    </div>
                  </div>
                </div>

                <div className="reserva-section mt-4">
                  <Link to={`/reserva/${id}`} className="btn btn-primary btn-lg w-100">
                    Reservar Ahora
                  </Link>
                  <p className="mt-2 text-muted">
                    <i className="bi bi-info-circle"></i> 
                    Cancelación gratuita hasta 24h antes de la recogida
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail; 