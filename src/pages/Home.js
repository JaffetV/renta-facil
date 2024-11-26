import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="display-3 fw-bold">¡Reserva tu auto con nosotros!</h1>
          <p className="lead">Nunca antes fue tan FÁCIL rentar un auto</p>
          <div className="search-box p-4 bg-white rounded shadow">
            <form className="row g-3">
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="Ciudad destino" />
              </div>
              <div className="col-md-3">
                <input type="date" className="form-control" placeholder="Fecha recogida" />
              </div>
              <div className="col-md-3">
                <input type="date" className="form-control" placeholder="Fecha devolución" />
              </div>
              <div className="col-md-3">
                <button className="btn btn-primary w-100">Buscar Vehículos</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="container mt-5">
        <h2 className="text-center mb-4">Vehículos Destacados</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg" 
                className="card-img-top" 
                alt="Toyota Corolla Rojo"
              />
              <div className="card-body">
                <h5 className="card-title">Toyota Corolla 2024</h5>
                <p className="card-text">Sedán ejecutivo con el mejor rendimiento de combustible.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="price-tag">$72.99/día</h6>
                  <button className="btn btn-primary">Reservar</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg" 
                className="card-img-top" 
                alt="Honda CR-V"
              />
              <div className="card-body">
                <h5 className="card-title">Honda CR-V 2024</h5>
                <p className="card-text">SUV espaciosa ideal para viajes familiares.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="price-tag">$89.99/día</h6>
                  <button className="btn btn-primary">Reservar</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src="https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg" 
                className="card-img-top" 
                alt="BMW Serie 3"
              />
              <div className="card-body">
                <h5 className="card-title">BMW Serie 3 2024</h5>
                <p className="card-text">Lujo y deportividad en su máxima expresión.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="price-tag">$120.99/día</h6>
                  <button className="btn btn-primary">Reservar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="features-section text-center mt-5">
          <h2 className="mb-4">¿Por qué elegirnos?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-shield-check display-4"></i>
                <h4>Seguridad Garantizada</h4>
                <p>Vehículos con seguro de cobertura total</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-cash-coin display-4"></i>
                <h4>Mejores Tarifas</h4>
                <p>Precios competitivos sin cargos ocultos</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-geo-alt display-4"></i>
                <h4>Ubicaciones Convenientes</h4>
                <p>Recogida y entrega en múltiples puntos</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
