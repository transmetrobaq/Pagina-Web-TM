/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
      <div className="container troncaldetail__cards" id="Rtroncal">
        <h2 className=" azul-lt justify-content-start">{rtron.name}</h2>
        <div className="linea-colores-movi" style={{ width: '100px' }} />
        <div className="map-alimentadora">
          <iframe
            src={`https://www.google.com/maps/d/embed?mid=${rtron.kml}`}
            width="100%"
            height="100%"
          />
        </div>

        <div className="horario-sitioTroncal  ">
          <div className="mb-3">
            <div className="row g-4">
              <div className="col-md-6">
                <div
                  className="card h-100"
                  style={{ border: '1px solid #002856' }}
                >
                  {' '}
                  <div className="card-body">
                    <i className="fa-solid fa-bus-simple fa-5x " />
                    <h5 className="card-title azul-lt">Recorrido</h5>
                    <p className="card-text azul-lt">{rtron.content}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="card h-100"
                  style={{ backgroundColor: '#F5F5F5' }}
                >
                  <div className="card-body">
                    <i className="fa-regular fa-clock fa-5x " />
                    <h5 className="card-title azul-lt">Horario de rutas</h5>
                    <ul
                      className="list-group "
                      style={{ listStyleType: 'none' }}
                    >
                      <li>
                        <span>Lunes a viernes:</span> {rtron.horario_lv}
                      </li>
                      <li>
                        <span>Sábados:</span> {rtron.horario_sab}
                      </li>
                      <li>
                        <span> Domingo y festivos:</span> {rtron.horario_dom}
                      </li>
                    </ul>

                    <p className="card-text">
                      <small>Actualizado {rtron.updated_at}</small>
                    </p>
                  </div>
                </div>
              </div>
              {/*  <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title azul-lt">SITIOS DE INTERÉS</h1>
                  <p className="card-text azul-lt">{rtron.sitios}</p>
                </div>
              </div> */}
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
          <a
            href="/sistema/rutas_troncales/#rutas-troncales"
            role="button"
            className="btn btn-outline-primary"
            alt="Regresar"
          >
            Ir a Rutas Troncales
          </a>
        </center>
      </div>
    </>
  );
};

export default TroncalesDetails;
