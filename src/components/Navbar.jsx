import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css';

// eslint-disable-next-line arrow-body-style
const Navbar = () => {
  return (
    <div>
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
              style={{ width: '120px', marginLeft: '10px' }}
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/transmetro"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Transmetro
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                      Misión/Visión
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
                      Objetivos Estrategicos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/transmetro/#datos-infraestructura"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Datos de Infraestructura
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
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
                      Personalización
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
                      Datos de la Operación
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

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/ciudadano"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Atencion al Ciudadano
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
                      Estimulo Social de Transporte Estudiantil
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
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
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
                      href="/noticias/#galeria-de-imagenes"
                      className="dropdown-item"
                      aria-current="page"
                    >
                      Galería
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  href="/transparencia/#transparencia"
                  className="nav-link"
                  style={{ textDecoration: 'none' }}
                  aria-current="page"
                >
                  Transparecia
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Transparecia
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="/"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Participacion Ciudadana
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
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
