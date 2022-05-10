/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
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
        <h1 className=" azul-lt justify-content-start">
          {/* <span>A1-2</span> Carrera Ocho */}
          {rali.name}
        </h1>

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
                  <p className="card-text azul-lt">
                    {/*  La Ruta A1-2 Carrera Ocho recorre, a lo largo de un trayecto
                    de 8 kilómetros, algunas zonas de los barrios El Santuario,
                    La Alboraya, El Campito y Las Palmas. */}
                    {rali.content}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title azul-lt">HORARIO DE RUTAS</h2>
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
                      Actializado {rali.updated_at}
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title azul-lt">SITIOS DE INTERÉS</h2>
                  <p className="card-text azul-lt">
                    {/* Parroquia Jesús Misericordioso Cll 52C No. 8G - 06, Jesús
                    Profeta Cll 52D No. 11 - 97, La Natividad de María Cll 35A
                    con Cra. 8D Esq. María Auxiliadora Calle 38B No. 7C - 08
                    Ruta A1-2 Carrera Ocho o A1-4 La Magdalena. */}
                    {rali.sitios}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* / tabla / */}

        <div className="container tabla-alimentadoras">
          <div className="card-group">
            <div className="card border-danger">
              <div className="card-body ">
                <h2 className="card-title text-center">Paraderos</h2>
                <ReactMarkdown className="card-text" escapeHtml={false}>
                  {rali.paraderos}
                </ReactMarkdown>
              </div>
            </div>
            <div className="card border-danger">
              <div className="card-body ">
                <h2 className="card-title text-center">Venta</h2>
                <ReactMarkdown className="card-text" escapeHtml={false}>
                  {rali.venta}
                </ReactMarkdown>
              </div>
            </div>
            <div className="card border-danger">
              <div className="card-body ">
                <h2 className="card-title text-center">Transbordos</h2>
                <ReactMarkdown className="card-text" escapeHtml={false}>
                  {rali.transbordos}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
        {/* Boton Ir Rutas Alimentadoras */}
        <center className="backNoti">
          <Link
            to="/sistema/rutas_alimentadoras"
            role="button"
            className="btn btn-outline-primary"
            alt="Regresar"
          >
            Ir a Rutas Alimentadoras
          </Link>
        </center>
      </div>
    </>
  );
};

export default AlimentadorasDetails;
