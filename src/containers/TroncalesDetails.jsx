/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
/* import { Link } from 'react-router-dom';
import axios from 'axios'; */
import '../styles/components/TroncalesDetails.css';

const TroncalesDetails = () => (
  <>
    <div className="container adetail__cards">
      <h1 className=" azul-lt justify-content-start">
        <span>S1 -</span> Soledad
      </h1>

      <div className="map-alimentadora">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1m-To6AEliceycWEAFSWVrr0SAhxrJwaq&hl=es-419&ehbc=2E312F"
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
                  La Ruta A1-2 Carrera Ocho recorre, a lo largo de un trayecto
                  de 8 kilómetros, algunas zonas de los barrios El Santuario, La
                  Alboraya, El Campito y Las Palmas.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title azul-lt">HORARIO DE RUTAS</h1>
                <ul className="list-group " style={{ listStyleType: 'none' }}>
                  <li className="azul-lt">
                    <span>Lunes a viernes:</span> de 5:30 am a 9:25 pm .
                  </li>
                  <li className="azul-lt">
                    <span>Sábados:</span> de 5:30 am. a 8:30 pm.
                  </li>
                  <li className="azul-lt">
                    <span> Domingo y festivos:</span> de 6:00 am. a 8:30 pm.
                  </li>
                </ul>

                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title azul-lt">SITIOS DE INTERES</h1>
                <p className="card-text azul-lt">
                  Parroquia Jesús Misericordioso Cll 52C No. 8G - 06, Jesús
                  Profeta Cll 52D No. 11 - 97, La Natividad de María Cll 35A con
                  Cra. 8D Esq. María Auxiliadora Calle 38B No. 7C - 08 Ruta A1-2
                  Carrera Ocho o A1-4 La Magdalena.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* / tabla / */}

      <div className="container">
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
      </div>
    </div>
  </>
);

export default TroncalesDetails;
