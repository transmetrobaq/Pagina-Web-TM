/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../styles/components/EstacionesDetails.css';

const EstacionesDetails = () => {
  const { estacionesId } = useParams();

  const [resta, setResta] = useState([]);
  const AP = `https://apiwebtm.com/estaciones?Slug=${estacionesId}`;

  /* console.log(AP); */
  useEffect(async () => {
    const resesta = await axios(AP);
    setResta(resesta.data[0]);
    /* console.log(resesta.data); */
  }, [estacionesId]);
  /* console.log(resta.image); */
  return (
    <>
      <div className="container card__Estaciones " key={resta.id}>
        <div className="card mb-3 " id="estacion">
          <img
            src={`https://apiwebtm.com${resta.url}`}
            className="card-img-top mx-auto d-block nt ligth img-fluid"
            alt={resta.alt}
          />
          <div className="card-body">
            <h2 className="card-title">{resta.title}</h2>
            <ReactMarkdown className="card-text" escapeHtml={false}>
              {resta.content}
            </ReactMarkdown>
            <h2 className="card-title">Rutas</h2>
            <ReactMarkdown className="card-text" escapeHtml={false}>
              {resta.rutas}
            </ReactMarkdown>
            <p className="card-text">
              <small className="text-muted">Last updated octubre 2022</small>
            </p>
          </div>
        </div>

        {/* Boton Ir Rutas Alimentadoras */}
        <center className="backNoti">
          <a
            href="/sistema/estaciones/#estaciones"
            role="button"
            className="btn btn-outline-primary"
            alt="Regresar"
          >
            Ir a Estaciones
          </a>
        </center>
      </div>
    </>
  );
};

export default EstacionesDetails;
