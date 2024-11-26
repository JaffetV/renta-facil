import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">RentFacil</h5>
            <p className="mb-0">Tu mejor opción para rentar vehículos de calidad.</p>
          </div>
          
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Contacto</h5>
            <p className="mb-1"><i className="bi bi-geo-alt"></i> Av. Principal #123</p>
            <p className="mb-1"><i className="bi bi-telephone"></i> +123 456 7890</p>
            <p className="mb-0"><i className="bi bi-envelope"></i> info@rentfacil.com</p>
          </div>
          
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Síguenos</h5>
            <div className="social-links">
              <a href="#" className="me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="me-3"><i className="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="text-center">
          <small>&copy; 2024 RentFacil. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
