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
      <div className="container adetail__cards " key={rali.id}>
        <h2 className=" azul-lt justify-content-start" id="rutas">
          {rali.name}
        </h2>

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
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-text azul-lt">{rali.content}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title azul-lt">Horario de rutas</h2>
                  <ul className="list-group " style={{ listStyleType: 'none' }}>
                    <li className="azul-lt">
                      <span>Lunes a viernes:</span> {rali.horario_lv}
                    </li>
                    <li className="azul-lt">
                      <span>Sábados:</span> {rali.horario_sab}
                    </li>
                    <li className="azul-lt">
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
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title azul-lt">Sitios de interés</h2>

                  <ReactMarkdown className="card-text azul-lt">
                    {rali.sitios}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* / tabla / */}

        <div className="container tabla-alimentadoras">
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
        </div>
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
