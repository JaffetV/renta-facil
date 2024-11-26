import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import QRCode from 'react-qr-code';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import ReservaPDF from '../components/ReservaPDF';
import successSound from '../assets/sounds/success.mp3';
import './Confirmacion.css';

const Confirmacion = () => {
  const location = useLocation();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = useState(true);
  const [playSuccess] = useSound(successSound);

  const reservaData = location.state?.datosCompletos || {
    nombres: "Usuario",
    apellidos: "Ejemplo",
    vehiculo: "Toyota Corolla 2024",
    fechaInicio: "2024-03-20",
    fechaFin: "2024-03-25",
    ubicacionCompleta: {
      departamento: "Lima",
      provincia: "Lima",
      distrito: "Miraflores"
    }
  };

  useEffect(() => {
    playSuccess();
    const timer = setTimeout(() => setShowConfetti(false), 5000);

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [playSuccess]);

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-PE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const enviarWhatsApp = () => {
    const mensaje = encodeURIComponent(
      `¡Hola! He realizado una reserva para el vehículo ${reservaData.vehiculo} ` +
      `del ${formatearFecha(reservaData.fechaInicio)} al ${formatearFecha(reservaData.fechaFin)}. ` +
      `Mi nombre es ${reservaData.nombres} ${reservaData.apellidos}. ` +
      `¿Podrían confirmarme la reserva?`
    );
    window.open(`https://wa.me/51993908905?text=${mensaje}`, '_blank');
  };

  const generarQRData = () => {
    return JSON.stringify({
      reserva: {
        cliente: `${reservaData.nombres} ${reservaData.apellidos}`,
        vehiculo: reservaData.vehiculo,
        fechas: `${formatearFecha(reservaData.fechaInicio)} - ${formatearFecha(reservaData.fechaFin)}`,
        ubicacion: `${reservaData.ubicacionCompleta.distrito}, ${reservaData.ubicacionCompleta.provincia}`
      }
    });
  };

  return (
    <div className="confirmacion-container">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      
      <div className="container py-5">
        <div className="confirmacion-card">
          <div className="success-animation">
            <i className="bi bi-check-lg"></i>
          </div>
          
          <h1 className="text-center mb-4">¡Reserva Exitosa!</h1>
          
          <div className="reserva-detalles">
            <h3>Detalles de la Reserva</h3>
            <div className="detalles-grid">
              <div className="detalle-item">
                <i className="bi bi-person"></i>
                <span>Cliente:</span>
                <strong>{`${reservaData.nombres} ${reservaData.apellidos}`}</strong>
              </div>
              
              <div className="detalle-item">
                <i className="bi bi-car-front"></i>
                <span>Vehículo:</span>
                <strong>{reservaData.vehiculo}</strong>
              </div>
              
              <div className="detalle-item">
                <i className="bi bi-calendar-range"></i>
                <span>Período:</span>
                <strong>
                  {`${formatearFecha(reservaData.fechaInicio)} - ${formatearFecha(reservaData.fechaFin)}`}
                </strong>
              </div>
              
              <div className="detalle-item">
                <i className="bi bi-geo-alt"></i>
                <span>Ubicación:</span>
                <strong>
                  {`${reservaData.ubicacionCompleta.distrito}, ${reservaData.ubicacionCompleta.provincia}`}
                </strong>
              </div>
            </div>
          </div>

          <div className="acciones-container mt-4">
            <PDFDownloadLink 
              document={<ReservaPDF reservaData={reservaData} />}
              fileName={`reserva-${reservaData.nombres}-${reservaData.apellidos}.pdf`}
              className="btn btn-primary btn-lg"
            >
              <i className="bi bi-file-pdf me-2"></i>
              Descargar PDF
            </PDFDownloadLink>

            <button 
              className="btn btn-success btn-lg"
              onClick={enviarWhatsApp}
            >
              <i className="bi bi-whatsapp me-2"></i>
              Contactar por WhatsApp
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link to="/" className="btn btn-outline-primary">
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmacion; 