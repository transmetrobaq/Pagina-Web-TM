/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../styles/components/AlimentadorasDetails.css';

const AlimentadorasDetails = () => {
  const { alimentadorId } = useParams();

  const [rali, setRali] = useState([]);
  const AP = `https://apiwebtm.com/rutas-alimentadoras?Slug=${alimentadorId}`;

  /* console.log(AP); */
  useEffect(async () => {
    const resali = await axios(AP);
    setRali(resali.data[0]);
    /* console.log(resali.data); */
  }, [alimentadorId]);
  /* console.log(rali); */
  return (
    <>
      <div className="container alidetail__cards " key={rali.id}>
        <h2 className=" azul-lt justify-content-start" id="rutas">
          {rali.name}
        </h2>
        <div className="linea-colores-movi" style={{ width: '150px' }} />

        <div className="map-alimentadora ">
          <iframe
            src={`https://www.google.com/maps/d/embed?mid=${rali.kml}`}
            width="100%"
            height="100%"
          />
        </div>

        <div className="horario-sitio  ">
          <div className="mb-3">
            <div className="row g-0">
              <div className="col-md-11">
                <div className="card-body">
                  <p className="card-text azul-lt fw-bold">{rali.content}</p>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card" style={{ backgroundColor: '#f5f5f5' }}>
                  <div className="card-body">
                    <i className="fa-regular fa-clock fa-5x " />
                    <h5 className="card-title azul-lt">Horario de rutas</h5>
                    <ul
                      className="list-group "
                      style={{ listStyleType: 'none' }}
                    >
                      <li>
                        <span>Lunes a viernes:</span> {rali.horario_lv}
                      </li>
                      <li>
                        <span>Sábados:</span> {rali.horario_sab}
                      </li>
                      <li>
                        <span> Domingo y festivos:</span> {rali.horario_dom}
                      </li>
                    </ul>

                    <p className="card-text">
                      <small className="text-muted">
                        Actualizado {rali.updated_at}
                      </small>
                    </p>
                  </div>
                </div>
                <div className="card" style={{ border: '1px solid #002856' }}>
                  <div className="card-body">
                    <h5 className="card-title ">Sitios de interés</h5>

                    <ReactMarkdown className="card-text ">
                      {rali.sitios}
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
                        Paraderos
                      </button>
                    </h5>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushAlimentadora"
                    >
                      <div className="accordion-body">
                        <ReactMarkdown className="card-text">
                          {rali.paraderos}
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
                        Recargas
                      </button>
                    </h5>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushAlimentadora"
                    >
                      <div className="accordion-body">
                        <ReactMarkdown className="card-text">
                          {rali.venta}
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
                        Transbordos
                      </button>
                    </h5>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushAlimentadora"
                    >
                      <div className="accordion-body">
                        <ReactMarkdown className="card-text">
                          {rali.transbordos}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* / tabla / */}

        {/* <div className="container tabla-alimentadoras">
          <div className="card-group">
            <div className="card ">
              <div className="card-body ">
                <h2 className="card-title text-center">Paraderos</h2>
                <ReactMarkdown className="card-text">
                  {rali.paraderos}
                </ReactMarkdown>
              </div>
            </div>
            <div className="card ">
              <div className="card-body ">
                <h2 className="card-title text-center">Recargas</h2>
                <ReactMarkdown className="card-text">
                  {rali.venta}
                </ReactMarkdown>
              </div>
            </div>
            <div className="card">
              <div className="card-body ">
                <h2 className="card-title text-center">Transbordos</h2>
                <ReactMarkdown className="card-text">
                  {rali.transbordos}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div> */}
        {/* Boton Ir Rutas Alimentadoras */}
        <center className="backNoti">
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
    </>
  );
};

export default AlimentadorasDetails;
