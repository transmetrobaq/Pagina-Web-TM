/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Buscar from './Buscar';

import '../styles/components/Navbar.css';

// eslint-disable-next-line arrow-body-style
const Navbar = () => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const cls = visible ? 'visible fixed-top' : 'hidden';

  return (
    <div className={cls}>
      <nav
        id="navbar-Tm"
        className=" container-xxl navbar__card navbar  navbar-expand-lg navbar-light bg-white"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
             src="https://apiwebtm.com/uploads/TMO_eb4f4b7277.png"
              alt="Logo Transmetro"
              className="img-fluid"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginTop: '10px', marginLeft: '10px' }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle "
                  to="/transmetro"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Transmetro
                </Link>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <a
                      href="/transmetro/#reseña-historica"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Reseña histórica
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/transmetro/#transmetro-hoy"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Transmetro hoy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/transmetro/#mision-vision"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Misión/Visión
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/transmetro/#organigrama"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Organigrama
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/transmetro/#objetivos-estrategicos"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Objetivos Estratégicos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/transmetro/#que-es-tm"
                      className="dropdown-item "
                      aria-current="page"
                    >
                      Qué es Transmetro y cómo está conformado
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/transmetro/#datos-infraestructura"
                      className="dropdown-item "
                      aria-current="page"
                    >
                      Infraestructura
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/transmetro/#portafolio-comercial"
                      className="dropdown-item "
                      aria-current="page"
                    >
                      Portafolio Comercial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://apiwebtm.com/uploads/Formato_Informe_Control_Interno_Parametrizado_final_2do_Sem_2022_Conclusiones_c66a4f5b5d.pdf"
                      className="dropdown-item"
                      aria-current="page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Control Interno
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle "
                  to="/sistema"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mi Sistema
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <a
                      href="/sistema/#mapa-troncal"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Mapa del Sistema
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/sistema/#horarios"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Horario
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      href="http://www.sitbarranquilla.com/index.php/personaliza-tu-tarjeta"
                      className="dropdown-item"
                      aria-current="page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Personalización
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="/sistema/#estaciones"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Portales y Estaciones
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/rutas_troncales/#rutas-troncales"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Rutas Troncales
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/rutas_alimentadoras/#rutas-alimentadoras"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Rutas Alimentadoras
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      href="/sistema/#tarjeta-personalizacion"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Tarjeta Transmetro/Personalización
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://forms.office.com/pages/responsepage.aspx?id=SEG3lKY8wUejpoDbLhALDim3VBlIiyROn5TANJAFNDxUNEQ3U1ZEVFNWTURGSkJQTjYyTktTNURWVi4u&origin=lprLink&route=shorturl"
                      className="dropdown-item"
                      aria-current="page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Personaliza tu Tarjeta Transmetro
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://apiwebtm.com/uploads/Puntos_de_recarga_Tarjeta_Transmetro_65b577c9b2.pdf"
                      className="dropdown-item"
                      aria-current="page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Puntos de Venta y Recarga
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      href="/sistema/#transbordos"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Transbordos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/sistema/#centro-control"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Centro de Control
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/sistema/#flota"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Flota
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/sistema/#cultura-transmetro"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Cultura Transmetro
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/sistema/#beneficio-ventajas"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Beneficios y Ventajas del Sistema
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/sistema/#datos-operacion"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Datos de la Operación
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/sistema/#accesibilidad"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Transmetro incluyente
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/sistema/tarjetas/#tarjetas"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Galería de Tarjetas
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle "
                  to="/ciudadano"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Atención al Ciudadano
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <a
                      href="/ciudadano/#manual-del-usuario"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Manual del Usuario
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://apiwebtm.com/uploads/CA_MA_001_MANUAL_DE_ATENCION_AL_CIUDADANO_76533f9592.pdf"
                      className="dropdown-item"
                      aria-current="page"
                      target="_blank"
                      rel="noreferrer"
                    >
                     Manual de Atención al Ciudadano

                    </a>
                  </li>
               <li>
                    <a
                      href="https://apiwebtm.com/uploads/Instructivo_para_diligenciar_formulario_virtual_de_PQRSDF_3bf97cd9d2.pdf"
                      className="dropdown-item"
                      aria-current="page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ¿Cómo registrar y consultar PQRSDF?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://transmetro.netsaia.com/ws/pqr/index.html"
                      className="dropdown-item"
                      aria-current="page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Peticiones, quejas y reclamos
                    </a>
                  </li>
                  <li>
                    <a
                       href="/infantil/#infantil"
                      className="dropdown-item"
                      aria-current="page"
                      
                    >
                      Sección Infantil
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://apiwebtm.com/uploads/Resolucion_Costos_de_reproduccion_TM_1_d8c08f17db.pdf"
                      className="dropdown-item"
                      aria-current="page"
                      target="_blank"
                      rel="noreferrer"
                    >
                     Costos de Reproducción
                    </a>
                  </li>

                  <li>
                    <a
                      href="/ciudadano/pqrs_anonimos"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Respuestas a peticiones anónimas
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="http://www.sitbarranquilla.com/index.php/personaliza-tu-tarjeta"
                      className="dropdown-item"
                      aria-current="page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Personaliza tu tarjeta
                    </a>
                  </li> */}

                  <li>
                    <a
                      href="/ciudadano/#preguntas-frecuentes"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Preguntas Frecuentes
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ciudadano/#estimulo-estudiantil"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Estímulo Social de Transporte Estudiantil
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://forms.office.com/r/5xLFhJRrch?origin=lprLink"
                      className="dropdown-item"
                      aria-current="page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Encuesta Transparencia y Acceso a la Información
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="/Participacion/#Participacion"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                 Participación
                </a>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle "
                  to="/noticias"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Comunicaciones
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <a
                      href="/noticias/#comunicados-prensa"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Comunicados de Prensa
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/noticias/#Videos"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Informativo y Videos
                    </a>
                  </li>
                  
                  <li className="nav-item">
                    <a
                      href="/noticias/#galeria-de-imagenes"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Galería fotográfica
                    </a>
                     <li className="nav-item">
                    <a
                      href="/#Eventos"
                      className="dropdown-item"
                      aria-current="page"
                    >
                    Eventos
                    </a>
                  </li>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  href="/transparencia/#transparencia"
                  className="nav-link "
                  style={{ textDecoration: 'none' }}
                  aria-current="page"
                >
                  Transparencia
                </a>
              </li>

              {/*   <li className="nav-item">
                <a
                  className="nav-link  "
                  href="/participa"
                  target="_blank"
                  rel="noreferrer"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Participa
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="/accesibilidad/#accesibilidad"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Accesibilidad
                </a>
              </li>
            </ul>
            <Buscar />
            {/*  <form className="d-flex ">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
