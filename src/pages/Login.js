import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    dni: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const validarFormulario = () => {
    if (!formData.email || !formData.password) {
      setError('Todos los campos son obligatorios');
      return false;
    }

    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        setError('Las contraseñas no coinciden');
        return false;
      }
      if (!formData.nombres || !formData.apellidos || !formData.telefono || !formData.dni) {
        setError('Todos los campos son obligatorios');
        return false;
      }
      if (formData.dni.length !== 8) {
        setError('El DNI debe tener 8 dígitos');
        return false;
      }
      if (!/^\d{9}$/.test(formData.telefono)) {
        setError('El teléfono debe tener 9 dígitos');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    setLoading(true);
    try {
      // TODO: Integrar con backend
      console.log('Datos del formulario:', formData);
      
      // Simulación de respuesta exitosa
      setTimeout(() => {
        setLoading(false);
        navigate('/');
      }, 1500);
    } catch (err) {
      setError('Error en la autenticación');
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="text-center mb-4">
          <i className="bi bi-car-front-fill me-2"></i>
          RentFacil
        </h2>
        
        <div className="text-center mb-4">
          <div className="btn-group" role="group">
            <button
              className={`btn ${isLogin ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setIsLogin(true)}
            >
              Iniciar Sesión
            </button>
            <button
              className={`btn ${!isLogin ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setIsLogin(false)}
            >
              Registrarse
            </button>
          </div>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleInputChange}
                    placeholder="Tus nombres"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                    placeholder="Tus apellidos"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">DNI</label>
                  <input
                    type="text"
                    className="form-control"
                    name="dni"
                    value={formData.dni}
                    onChange={handleInputChange}
                    maxLength="8"
                    placeholder="12345678"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    maxLength="9"
                    placeholder="987654321"
                  />
                </div>
              </div>
            </>
          )}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Tu contraseña"
            />
          </div>

          {!isLogin && (
            <div className="mb-3">
              <label className="form-label">Confirmar Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirma tu contraseña"
              />
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            ) : null}
            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </button>
        </form>

        {isLogin && (
          <div className="text-center mt-3">
            <Link to="/recuperar-password" className="text-muted">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login; 