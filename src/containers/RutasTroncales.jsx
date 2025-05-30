/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
/* import { Link } from 'react-router-dom'; */
import axios from 'axios';
import '../styles/components/RutasTroncales.css';

// eslint-disable-next-line arrow-body-style
const RutasTroncales = () => {
  const [rtron, setRtron] = useState([]);

  const AP = `https://apiwebtm.com/rutas-troncales`;

  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resrtron = await axios.get(AP);
    /* setNoti(resnoti.data.data.slice(start, limit)); */
    setRtron(resrtron.data);
  }, []);

  return (
    <div
      className="container rutatron__cards "
      data-bs-spy="scroll"
      data-bs-target="#navbar-Tm"
      data-bs-offset="0"
      tabIndex="0"
    >
      {/* Droptown RutasAlimentadoras */}
      <div className="row">
        <h1 id="rutas-troncales" className="text-center azul-lt">
          Rutas Troncales
        </h1>
        <p className=" azul-lt">
          Son los servicios que solo recorren las troncales Murillo y Olaya
          Herrera. Los carriles por donde transitan los autobuses articulados y
          padrones, en la prestación de su servicio, son los carriles
          izquierdos, es decir los centrales del bulevard de las dos troncales;
          incluye en la troncal Murillo un carril extra a la altura de cada
          estación para facilitar el sobrepaso de los autobuses que prestan
          servicio expreso. En la Olaya Herrera, aunque no tiene carril de
          sobrepaso, los autobuses pueden adelantar , si es necesario, por el
          carril de tráfico mixto.{' '}
          <a
            className="fw-bold text-decoration-none"
            style={{ color: '#e30613' }}
            data-bs-toggle="collapse"
            href="#collapseFlota"
            role="button"
            aria-expanded="false"
            aria-controls="collapseFlota"
          >
            leer mas..
          </a>
        </p>
        <div
          className="collapse"
          id="collapseFlota"
          style={{ backgroundColor: '#f5f5f5' }}
        >
          <p className="card-text  text">
            Servicios que transitan por las Troncales:
            <ul>
              <li style={{ marginTop: '20px' }}>
                <span className="fw-bold">Servicios corrientes: </span> son
                aquellos que se detienen a dejar y recoger pasajeros en todas
                las estaciones. Ubicación de estaciones en la Olaya Herrera
                occidente/oriente: Estercitha Forero, Alfredo Correa De Andreís,
                La Catedral, Barrio Abajo, Parque Cultural; ubicación de
                estaciones en la troncal Murillo Norte/Sur: La Arenosa,
                Chiquinquirá, Atlantico, La Veintiuna, La Catorce, La Ocho,
                Buenos Aires, Joaquín Barrios Polo, Pedro ramayá y Pacho Galán.
              </li>
              <table className="table" style={{ color: '#002856' }}>
                <thead>
                  <tr>
                    <th scope="col">Servicio</th>
                    <th scope="col">Origen</th>
                    <th scope="col">Destino</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th scope="row">S1</th>
                    <td>Estación de Retorno Joe Arroyo </td>
                    <td>Portal de Soledad</td>
                  </tr>
                  <tr>
                    <th scope="row">S2</th>
                    <td>Estación Parque Cultural</td>
                    <td>Portal de Soledad</td>
                  </tr>
                  <tr>
                    <th scope="row">R1</th>
                    <td>Portal de Soledad</td>
                    <td>Estación de Retorno Joe Arroyo</td>
                  </tr>
                  <tr>
                    <th scope="row">R2</th>
                    <td>Estación Parque Cultural</td>
                    <td>Estación de Retorno Joe Arroyo</td>
                  </tr>
                  <tr>
                    <th scope="row">B1</th>
                    <td>Portal de Soledad</td>
                    <td>Estación Parque Cultural</td>
                  </tr>
                  <tr>
                    <th scope="row">B2</th>
                    <td>Estación de Retorno Joe Arroyo</td>
                    <td>Estación Parque Cultural</td>
                  </tr>
                </tbody>
              </table>
              <li>
                <span className="fw-bold">Servicios expresos: </span>sólo se
                detiene en estaciones predeterminadas, particularmente aquellas
                donde existe una mayor demanda.
              </li>
              <table className="table" style={{ color: '#002856' }}>
                <thead>
                  <tr>
                    <th scope="col">Servicio</th>
                    <th scope="col">Origen</th>
                    <th scope="col">Destino</th>
                    <th scope="col">Estaciones de Parada</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th scope="row">R10</th>
                    <td>Portal de Soledad</td>
                    <td>Estación de Retorno Joe Arroyo</td>
                    <td>
                      Joaquín Barrios Polo, La Ocho, La Catedral, Alfredo Correa
                      de Andreís, Estercita Forero
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">S10</th>
                    <td>Estación de Retorno Joe Arroyo</td>
                    <td>Portal de Soledad</td>
                    <td>
                      Estercita Forero, Alfredo correa de Andreís, La Catedral,
                      Joaquín Barrios Polo, Pedro Ramayá y Pacho Galán.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">R40</th>
                    <td>Portal de Soledad</td>
                    <td>Estación de Retorno Joe Arroyo</td>
                    <td>
                      Pacho Galán. Pedro Ramayá, Buenos Aires, La Catedral,
                      Alfredo Correa de Andreís, Estercita Forero
                    </td>
                  </tr>
                </tbody>
              </table>
            </ul>
          </p>

          <div className="col-md-1" />
        </div>
      </div>

      {/*    <div className="row justify-content-center mx-auto d-block width-Troncal">
        <div className="col-md-11">
          <div className="tabs">
            <div className="tab">
              <input type="checkbox" id="chck1" />
              <label className="tab-label" for="chck1">
                Selecciona la ruta
              </label>
              <div className="tab-content">
                <table className="table border-danger">
                  <tbody>
                    <tr>
                      {rtron
                        ? rtron.map((rtrons) => (
                            <div
                              className="tab-content-color list-group"
                              key={rtrons.id}
                            >
                              <a
                                href={`/sistema/rutas_troncales/${rtrons.Slug}/#Rtroncal`}
                                role="button"
                                className="text-decoration-none list-group-item list-group-item-action border border-white"
                                alt="Ver Ruta Troncal"
                              >
                                <h5 className=" azul-lt "> {rtrons.name}</h5>
                              </a>
                            </div>
                          ))
                        : 'Loading...'}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
 */}
      {/* Prueba de acordeon */}
      <center className="accordion" id="accordionExample">
        <div
          className="accordion-item"
          style={{
            border: '3px solid #c00d0d',
            borderRadius: '5px',
            maxWidth: '600px',
            marginTop: '50px',
          }}
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                borderRadius: '5px',
                color: '#c00d0d',
                fontWeight: 'bold',
              }}
            >
              Selecciona la ruta
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {rtron
                ? rtron.map((rtrons) => (
                    <div
                      className="tab-content-color list-group"
                      key={rtrons.id}
                    >
                      <a
                        href={`/sistema/rutas_troncales/${rtrons.Slug}/#Rtroncal`}
                        role="button"
                        className="text-decoration-none tab-content-color list-group-item list-group-item-action border border-white"
                        alt="Ver Ruta Troncal"
                      >
                        <h5 className=" azul-lt "> {rtrons.name}</h5>
                      </a>
                    </div>
                  ))
                : 'Loading...'}
            </div>
          </div>
        </div>
      </center>

      <img
        src="https://apiwebtm.com/uploads/Buspadron_d3d3bafa33.jpg"
        className="card-img-top mx-auto d-block"
        alt="icono"
      />
    </div>
  );
};

export default RutasTroncales;
