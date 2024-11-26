import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import locationData from '../assets/location.json';
import './Reserva.css';

const Reserva = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Estados para las ubicaciones
  const [departamentos] = useState(locationData.departamentos);
  const [provincias, setProvincias] = useState([]);
  const [distritos, setDistritos] = useState([]);
  
  // Estado para nombres completos de ubicación
  const [ubicacionNombres, setUbicacionNombres] = useState({
    departamento: '',
    provincia: '',
    distrito: ''
  });

  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    dni: '',
    licencia: '',
    fechaInicio: '',
    fechaFin: '',
    departamento: '',
    provincia: '',
    distrito: '',
    direccion: ''
  });

  // Manejar cambios en inputs generales
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Actualizar provincias cuando cambia el departamento
  const handleDepartamentoChange = (e) => {
    const depId = e.target.value;
    const departamentoSeleccionado = departamentos.find(dep => dep.id === depId);
    
    if (departamentoSeleccionado) {
      setProvincias(departamentoSeleccionado.provincias);
      setUbicacionNombres({
        ...ubicacionNombres,
        departamento: departamentoSeleccionado.nombre,
        provincia: '',
        distrito: ''
      });
      
      setFormData({
        ...formData,
        departamento: depId,
        provincia: '',
        distrito: ''
      });
    } else {
      setProvincias([]);
      setDistritos([]);
    }
  };

  // Actualizar distritos cuando cambia la provincia
  const handleProvinciaChange = (e) => {
    const provId = e.target.value;
    const provinciaSeleccionada = provincias.find(prov => prov.id === provId);
    
    if (provinciaSeleccionada) {
      setDistritos(provinciaSeleccionada.distritos);
      setUbicacionNombres({
        ...ubicacionNombres,
        provincia: provinciaSeleccionada.nombre,
        distrito: ''
      });
      
      setFormData({
        ...formData,
        provincia: provId,
        distrito: ''
      });
    } else {
      setDistritos([]);
    }
  };

  // Manejar cambio de distrito
  const handleDistritoChange = (e) => {
    const distId = e.target.value;
    const distritoSeleccionado = distritos.find(dist => dist.id === distId);
    
    if (distritoSeleccionado) {
      setUbicacionNombres({
        ...ubicacionNombres,
        distrito: distritoSeleccionado.nombre
      });
      
      setFormData({
        ...formData,
        distrito: distId
      });
    }
  };

  // Validar que las fechas sean correctas
  const validarFechas = (fechaInicio, fechaFin) => {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);
    const hoy = new Date();
    
    return inicio >= hoy && fin >= inicio;
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validarFechas(formData.fechaInicio, formData.fechaFin)) {
      alert('Por favor, verifica las fechas seleccionadas');
      return;
    }

    // Crear objeto con nombres completos para enviar
    const datosCompletos = {
      ...formData,
      ubicacionCompleta: {
        departamento: ubicacionNombres.departamento,
        provincia: ubicacionNombres.provincia,
        distrito: ubicacionNombres.distrito
      }
    };

    console.log('Datos de reserva:', datosCompletos);
    // TODO: Enviar datos al backend
    navigate('/confirmacion');
  };

  return (
    <div className="reserva-container">
      <div className="container py-5">
        <h2 className="text-center mb-4">Formulario de Reserva</h2>
        
        <form onSubmit={handleSubmit} className="reserva-form">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4">Datos Personales</h4>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">DNI</label>
                  <input
                    type="text"
                    className="form-control"
                    name="dni"
                    value={formData.dni}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Número de Licencia</label>
                  <input
                    type="text"
                    className="form-control"
                    name="licencia"
                    value={formData.licencia}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title mb-4">Fechas de Alquiler</h4>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Fecha de Inicio</label>
                  <input
                    type="date"
                    className="form-control"
                    name="fechaInicio"
                    value={formData.fechaInicio}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Fecha de Fin</label>
                  <input
                    type="date"
                    className="form-control"
                    name="fechaFin"
                    value={formData.fechaFin}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title mb-4">Dirección de Recogida</h4>
              
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Departamento</label>
                  <select
                    className="form-select"
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleDepartamentoChange}
                    required
                  >
                    <option value="">Seleccione departamento...</option>
                    {departamentos.map(dep => (
                      <option key={dep.id} value={dep.id}>
                        {dep.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label">Provincia</label>
                  <select
                    className="form-select"
                    name="provincia"
                    value={formData.provincia}
                    onChange={handleProvinciaChange}
                    required
                    disabled={!formData.departamento}
                  >
                    <option value="">Seleccione provincia...</option>
                    {provincias.map(prov => (
                      <option key={prov.id} value={prov.id}>
                        {prov.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label">Distrito</label>
                  <select
                    className="form-select"
                    name="distrito"
                    value={formData.distrito}
                    onChange={handleDistritoChange}
                    required
                    disabled={!formData.provincia}
                  >
                    <option value="">Seleccione distrito...</option>
                    {distritos.map(dist => (
                      <option key={dist.id} value={dist.id}>
                        {dist.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label">Dirección Específica</label>
                  <input
                    type="text"
                    className="form-control"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="d-grid gap-2 mt-4">
            <button type="submit" className="btn btn-primary btn-lg">
              Confirmar Reserva
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reserva; 