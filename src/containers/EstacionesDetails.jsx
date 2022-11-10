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
      <div className="container alidetail__cards " key={resta.id}>
        <h2 className=" azul-lt justify-content-start" id="rutas">
          {resta.title}
        </h2>
        <div className="linea-colores-movi" style={{ width: '150px' }} />

        <div
          className="card mb-3 border border-0 "
          style={{ marginTop: '50px' }}
        >
          <img
            src={`https://apiwebtm.com${resta.url}`}
            className="card-img-top mx-auto d-block  img-fluid"
            alt={resta.alt}
            style={{ maxHeight: '450px' }}
          />
        </div>

        <div className="horario-sitio  ">
          <div className="mb-3">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card" style={{ backgroundColor: '#f5f5f5' }}>
                  <div className="card-body">
                    <fa-5x className="fa-solid fa-map-location-dot fa-5x " />
                    <h5 className="card-title azul-lt">Ubicación</h5>
                    <p className="card-text azul-lt">{resta.ubicacion}</p>

                    <h5 className="card-title azul-lt">
                      Barrios de influencia
                    </h5>
                    <p className="card-text azul-lt">{resta.barrios}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Actualizado {resta.updated_at}
                      </small>
                    </p>
                  </div>
                </div>
                <div className="card" style={{ border: '1px solid #002856' }}>
                  <div className="card-body">
                    <h5 className="card-title ">Sitios de interés</h5>

                    <ReactMarkdown className="card-text ">
                      {resta.sitios}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushAlimentadora"
                >
                  <div className="accordion-item">
                    <h5
                      className="accordion-header fw-bold "
                      id="flush-headingOne"
                    >
                      <button
                        className="accordion-button collapsed "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                        style={{ border: '1px solid #002856' }}
                      >
                        Rutas
                      </button>
                    </h5>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushAlimentadora"
                    >
                      <div className="accordion-body">
                        <ReactMarkdown className="card-text" escapeHtml={false}>
                          {resta.rutas}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                        style={{ border: '1px solid #002856' }}
                      >
                        Especificaciones técnicas
                      </button>
                    </h5>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushAlimentadora"
                    >
                      <div className="accordion-body">
                        <ReactMarkdown className="card-text" escapeHtml={false}>
                          {resta.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                        style={{
                          border: '1px solid #002856',
                        }}
                      >
                        Reseña del nombre
                      </button>
                    </h5>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushAlimentadora"
                    >
                      <div className="accordion-body">
                        <ReactMarkdown className="card-text" escapeHtml={false}>
                          {resta.nombre}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boton Ir Rutas Alimentadoras */}
        {/*  <center className="backNoti">
          <a
            href="/sistema/rutas_alimentadoras/#rutas-alimentadoras"
            role="button"
            className="btn btn-outline-primary"
            alt="Regresar"
          >
            Ir a Rutas Alimentadoras
          </a>
        </center>
      </div>

      
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
        </div> */}

        {/* Boton Ir Rutas Estaciones */}
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
