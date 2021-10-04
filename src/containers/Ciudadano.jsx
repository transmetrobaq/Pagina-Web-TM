import React from 'react';

import '../styles/components/Ciudadano.css';

// eslint-disable-next-line arrow-body-style
const Ciudadano = () => {
  return (
    <div className="container__cd ">
      <div className="row cd">
        <div className="card">
          <div className="card-body text-center">
            <h3 className="card-title">Manual del usuario</h3>
            <p className="card-text">
              Este Manual describe objetos, generalidades, derechos y deberes
              del usuario.
            </p>

            <a href="/" className="card-link">
              Card link
            </a>
            <a href="/" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
      <div className="row cd">
        <div className="card">
          <div className="card-body text-center">
            <h3 className="card-title">Preguntas Frecuentes</h3>
            <div className="card-group">
              <div className="col-md-6">
                <p className="card-text">
                  Este Manual describe objetos, generalidades, derechos y
                  deberes del usuario.
                </p>
                <a href="/" className="card-link">
                  Card link
                </a>
                <a href="/" className="card-link">
                  Another link
                </a>
              </div>
              <div className="col-md-6">
                <p className="card-text">
                  Este Manual describe objetos, generalidades, derechos y
                  deberes del usuario.
                </p>
                <a href="/" className="card-link">
                  Card link
                </a>
                <a href="/" className="card-link">
                  Another link
                </a>
              </div>
            </div>
            <div className="card-group">
              <div className="col-md-6">
                <p className="card-text">
                  Este Manual describe objetos, generalidades, derechos y
                  deberes del usuario.
                </p>
                <a href="/" className="card-link">
                  Card link
                </a>
                <a href="/" className="card-link">
                  Another link
                </a>
              </div>
              <div className="col-md-6">
                <p className="card-text">
                  Este Manual describe objetos, generalidades, derechos y
                  deberes del usuario.
                </p>
                <a href="/" className="card-link">
                  Card link
                </a>
                <a href="/" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row cd">
        <div className="card">
          <div className="card-body text-center">
            <h3 className="card-title">Encuesta</h3>
            <p className="card-text">
              Este Manual describe objetos, generalidades, derechos y deberes
              del usuario.
            </p>
            <a href="/" className="card-link">
              Card link
            </a>
          </div>
        </div>
      </div>
      <div className="row cd">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ciudadano;
