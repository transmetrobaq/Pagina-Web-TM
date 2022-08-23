import React from 'react';
import '../styles/components/NotFound.css';

// eslint-disable-next-line arrow-body-style
const NotFound = () => {
  return (
    <div className="container">
      <div id="notfound">
        <div className="notfound-bg" />
        <div className="notfound">
          <div className="notfound-404">
            <h1 style={{ fontSize: '5vw' }}>Sitio en Construcción</h1>
          </div>
          <h2>Linko sentimos, disculpe las molestias</h2>
          <a href="/" className="home-btn">
            Inicio
          </a>
          <a href="/ciudadano" className="contact-btn">
            Contactenos
          </a>
          <div className="notfound-social">
            <a
              href="https://es-la.facebook.com/transmetrobaq/"
              target="_blanck"
            >
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a href="https://twitter.com/transmetrobaq" target="_blanck">
              <i className="fab fa-twitter" aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/user/transmetrotv"
              target="_blanck"
            >
              <i className="fab fa-youtube" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/transmetrobaq/?hl=es"
              target="_blanck"
            >
              <i className="fab fa-instagram" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
