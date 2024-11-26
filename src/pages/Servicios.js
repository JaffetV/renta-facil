import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Servicios.css';

const Servicios = () => {
  const [ref1, inView1] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [ref2, inView2] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const servicios = [
    {
      id: 1,
      titulo: "Reparación de Vehículos",
      descripcion: "Servicio técnico especializado con los mejores mecánicos certificados.",
      imagen: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg",
      caracteristicas: [
        "Diagnóstico computarizado",
        "Mantenimiento preventivo",
        "Reparación de motor",
        "Sistema eléctrico"
      ],
      mensajeWhatsApp: "¡Hola! Me interesa el servicio de reparación de vehículos. Necesito información sobre "
    },
    {
      id: 2,
      titulo: "Seguimiento GPS",
      descripcion: "Monitoreo en tiempo real de tu vehículo las 24/7.",
      imagen: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      caracteristicas: [
        "Ubicación en tiempo real",
        "Historial de rutas",
        "Alertas de velocidad",
        "Geocercas personalizadas"
      ],
      mensajeWhatsApp: "¡Hola! Me interesa el servicio de seguimiento GPS. Quisiera información sobre "
    },
    {
      id: 3,
      titulo: "Entrega a Domicilio",
      descripcion: "Te llevamos el vehículo donde lo necesites.",
      imagen: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg",
      caracteristicas: [
        "Entrega programada",
        "Cobertura en toda la ciudad",
        "Conductor profesional",
        "Sanitización incluida"
      ],
      mensajeWhatsApp: "¡Hola! Me interesa el servicio de entrega a domicilio. Necesito información sobre "
    }
  ];

  const enviarWhatsApp = (servicio) => {
    const mensaje = encodeURIComponent(
      `${servicio.mensajeWhatsApp}${servicio.caracteristicas.join(", ")}`
    );
    window.open(`https://wa.me/51972400255?text=${mensaje}`, '_blank');
  };

  return (
    <div className="servicios-container">
      <div className="hero-servicios">
        <h1 className="text-center mb-4">Nuestros Servicios</h1>
        <p className="text-center lead">
          Soluciones integrales para tu experiencia de alquiler
        </p>
      </div>

      <div className="container py-5">
        {servicios.map((servicio, index) => (
          <div
            key={servicio.id}
            className={`servicio-card ${index % 2 === 0 ? 'derecha' : 'izquierda'}`}
            ref={index < 2 ? ref1 : ref2}
            style={{
              opacity: (index < 2 ? inView1 : inView2) ? 1 : 0,
              transform: (index < 2 ? inView1 : inView2) 
                ? 'translateX(0)' 
                : `translateX(${index % 2 === 0 ? '100px' : '-100px'})`
            }}
          >
            <div className="row align-items-center">
              <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-2' : ''}`}>
                <div className="servicio-imagen">
                  <img 
                    src={servicio.imagen} 
                    alt={servicio.titulo}
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
              <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-1' : ''}`}>
                <div className="servicio-contenido">
                  <h2>{servicio.titulo}</h2>
                  <p className="lead">{servicio.descripcion}</p>
                  <ul className="caracteristicas-list">
                    {servicio.caracteristicas.map((caracteristica, idx) => (
                      <li key={idx}>
                        <i className="bi bi-check-circle-fill"></i>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="btn btn-primary btn-lg"
                    onClick={() => enviarWhatsApp(servicio)}
                  >
                    <i className="bi bi-whatsapp me-2"></i>
                    Solicitar Servicio
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios; 