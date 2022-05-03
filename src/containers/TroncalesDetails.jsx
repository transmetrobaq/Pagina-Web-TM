/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../styles/components/TroncalesDetails.css';

const TroncalesDetails = () => {
  const { troncalId } = useParams();

  const [rtron, setRtron] = useState([]);
  const AP = `https://apiwebtm.com/rutas-troncales?Slug=${troncalId}`;

  /* console.log(AP); */
  useEffect(async () => {
    const restron = await axios(AP);
    setRtron(restron.data[0]);
    /* console.log(resali.data); */
  }, [troncalId]);
  /* console.log(rali); */
  return (
    <>
      <div className="container adetail__cards">
        <h1 className=" azul-lt justify-content-start">
          {/* <span>S1 -</span> */} {rtron.name}
        </h1>

        <div className="map-alimentadora">
          <iframe
            src={`https://www.google.com/maps/d/embed?mid=${rtron.kml}`}
            width="100%"
            height="100%"
          />
        </div>

        <div className="horario-sitio  ">
          <div className="mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-text azul-lt">{rtron.content}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title azul-lt">HORARIO DE RUTAS</h1>
                  <ul className="list-group " style={{ listStyleType: 'none' }}>
                    <li className="azul-lt">
                      <span>Lunes a viernes:</span> {rtron.horario_lv}
                    </li>
                    <li className="azul-lt">
                      <span>Sábados:</span> {rtron.horario_sab}
                    </li>
                    <li className="azul-lt">
                      <span> Domingo y festivos:</span> {rtron.horario_dom}
                    </li>
                  </ul>

                  <p className="card-text">
                    <small className="text-muted">
                      Actializado {rtron.updated_at}
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title azul-lt">SITIOS DE INTERÉS</h1>
                  <p className="card-text azul-lt">{rtron.sitios}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* / tabla / */}

        {/* <div className="container">
        <table className="table border-danger">
          <tbody>
            <tr>
              <th className="rojo-lt" scope="col">
                PARADEROS
              </th>
              <th className="rojo-lt" scope="col">
                PUNTOS DE VENTA / RECARGA
              </th>
            </tr>

            <tr>
              <td className=" azul-lt ">
                {' '}
                1 - Carrera 8 con Calle 31 Lado Sur
              </td>
              <td className="azul-lt ">Carrera 8 con Calle 31 Lado Sur</td>
            </tr>
            <tr>
              <td className=" azul-lt ">
                {' '}
                2 - Calle 30 con Carrera 4B Home Center
              </td>
              <td className="azul-lt ">Calle 30 con Carrera 4B Home Center</td>
            </tr>
          </tbody>
        </table>
      </div> */}

        <center className="backNoti">
          <Link
            to="/sistema/rutas_troncales"
            role="button"
            className="btn btn-outline-primary"
            alt="Regresar"
          >
            Ir a Rutas Troncales
          </Link>
        </center>
      </div>
    </>
  );
};

export default TroncalesDetails;
