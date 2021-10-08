/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import '../styles/components/Ciudadano.css';
import AppContext from '../context/AppContext';

// eslint-disable-next-line arrow-body-style
const Ciudadano = () => {
  const { manual, quest } = useContext(AppContext);
  const quests = quest;
  return (
    <div className="container__cd ">
      <div className="row cd">
        <div className="card ">
          <div className="card-body text-center" key={manual.id}>
            <h3 className="card-title">{manual.title}</h3>
            <h4 className="card-text">{manual.subtitle}</h4>
            <p className="card-text">{manual.content}</p>

            <a
              href="http://bit.ly/2nQO0TD"
              className="card-link"
              target="_blanck"
              alt="Manual de Usuario"
            >
              Manual de Usuario
            </a>
          </div>
        </div>
      </div>
      <div className="row cd">
        <div className="card">
          <div className="card-body text-center" key={quest.id}>
            <h3 className="card-title">Preguntas y Respuestas Frecuentes</h3>
            <div className="card-group">
              <div className="col-md-6">
                <ul className="list-group">
                  {quests.map((quest) => (
                    <li key={quest.id} className="list-group-item">
                      <h4>{quest.title}</h4>
                      <p>{quest.content}</p>
                    </li>
                  ))}
                </ul>
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
          <div className="card-body">
            <h3 className="card-title">Encuesta</h3>
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
              <img src="/" className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ciudadano;
