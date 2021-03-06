/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';
import { Link } from 'react-router-dom';
import Buscar from './Buscar';
import '../styles/components/Navbar.css';

// eslint-disable-next-line arrow-body-style
const Navbar = () => {
  return (
    <div className="container-fliud">
      <nav
        id="navbar-Tm"
        className="navbar__card navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://apiwebtm.com/uploads/icosn_42_28bca68ce7.png"
              alt="Logo Transmetro"
              className="img-fluid mb-2"
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
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
                      href="/transmetro/#acerca"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Acerca de
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/transmetro/#mision-vision"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Misi??n/Visi??n
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/transmetro/#asamblea-socios"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Asamblea de Socios
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/transmetro/#objetivos-estrategicos"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Objetivos Estrat??gicos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/transmetro/#datos-infraestructura"
                      className="dropdown-item "
                      aria-current="page"
                    >
                      Datos de Infraestructura
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
                      href="/sistema/#datos-sistema"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Datos del Sistema
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/sistema/#personalizacion"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Personalizaci??n
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/#estaciones"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Estaciones
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
                      href="/sistema/#transbordos"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Transbordos
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
                      href="/sistema/#datos-operacion"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Datos de la Operaci??n
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/sistema/#accesibilidad"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Accesibilidad
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
                  Atenci??n al Ciudadano
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
                      href="/ciudadano/#estimulo-estudiantil"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Peticiones, quejas y reclamos
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.sitbarranquilla.com/index.php/personaliza-tu-tarjeta"
                      className="dropdown-item"
                      aria-current="page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Personaliza tu tarjeta
                    </a>
                  </li>

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
                      Est??mulo Social de Transporte Estudiantil
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSc_p_YrG710pOHyR8sg_3RQRZObZ2jf81D7aLzrG1ewoIZd3g/viewform"
                      className="dropdown-item"
                      aria-current="page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Encuesta Transparencia y Acceso a la Informaci??n
                    </a>
                  </li>
                </ul>
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
                      href="/noticias/#informativos"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Informativos (videos)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/noticias/#galeria-de-imagenes"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Galer??a
                    </a>
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

              <li className="nav-item">
                <a
                  className="nav-link  "
                  href="https://drive.google.com/drive/folders/14etZu-TBRFRy94QX8zcLdpBuE0blzLia?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Participa
                </a>
              </li>
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
