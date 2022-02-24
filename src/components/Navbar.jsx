import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://s3.amazonaws.com/media.django.transmetro/images/logo_transmetro.png"
              alt="..."
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/transmetro"
                  style={{ textDecoration: 'none' }}
                  aria-current="page"
                >
                  <p className="nav-link">Transmetro</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sistema"
                  style={{ textDecoration: 'none' }}
                  aria-current="page"
                >
                  <p className="nav-link">Mi Sistema</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ciudadano"
                  style={{ textDecoration: 'none' }}
                  aria-current="page"
                >
                  <p className="nav-link">Atencion al cliente</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/noticias"
                  style={{ textDecoration: 'none' }}
                  aria-current="page"
                >
                  <p className="nav-link">Comunicaciones</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/transparencia"
                  style={{ textDecoration: 'none' }}
                  aria-current="page"
                >
                  <p className="nav-link">Transparecia</p>
                </Link>
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
