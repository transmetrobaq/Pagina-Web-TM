/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
/* import { Link } from 'react-router-dom'; */
import axios from 'axios';
import '../styles/components/RutasAlimentadoras.css';

// eslint-disable-next-line arrow-body-style
const RutasAlimentadoras = () => {
  const [rali, setRali] = useState([]);

  const AP = `https://apiwebtm.com/rutas-alimentadoras?_sort=name`;

  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resrali = await axios.get(AP);
    /* setNoti(resnoti.data.data.slice(start, limit)); */
    setRali(resrali.data);
  }, []);

  return (
    <div className="container rutali__cards">
      {/* Droptown RutasAlimentadoras */}
      <div className="row">
        <h1 id="rutas-alimentadoras" className="text-center azul-lt">
          Rutas Alimentadoras
        </h1>
        <p className="text-center azul-lt">
          La gran mayoría de los servicios alimentadores recorren vías
          diferentes a las troncales para integrar al Sistema a usuarios que
          tienen el comienzo de su viaje o su destino en sectores alejadas de
          ellas.{' '}
          <a
            className="fw-bold text-decoration-none"
            style={{ color: '#e30613' }}
            data-bs-toggle="collapse"
            href="#collapseAliment"
            role="button"
            aria-expanded="false"
            aria-controls="collapseAliment"
          >
            leer mas..
          </a>
        </p>
        <div
          className="collapse"
          id="collapseAliment"
          style={{ backgroundColor: '#f5f5f5' }}
        >
          <p className="card-text  text">
            Servicios que transitan por las Troncales:
          </p>
          <p className="card-text  text">
            Transmetro realizó el mejoramiento integral de las vías de zonas de
            precarga por donde transitan nuestras rutas alimentadoras. Este
            proceso permitió la intervención aproximada de 246.762 m² en el
            Distrito de Barranquilla y 131.280 m² de construcción de pavimento
            en el municipio de Soledad para un total de 378.042 m².
          </p>
          <p className="card-text  text">
            Los paraderos para las rutas alimentadoras están debidamente
            demarcados, ubicados cada 200 metros aproximadamente y son los
            únicos lugares donde los autobuses, tipo padrón y busetón, pueden
            recoger o dejar usuarios.
          </p>
          <p className="card-text  text">
            Estos servicios se integran a las rutas troncales a través de las
            estaciones del Sistema o de paraderos cercanos a estas, llevando a
            los ciudadanos desde los barrios más lejanos para que hagan el
            transbordo a los servicios troncales sin ningún costo.
          </p>
          <div className="col-md-1" />
        </div>
      </div>

      {/* <div className="row justify-content-center mx-auto d-block width-Troncal">
        <div className="col-md-11">
          <div className="tabs">
            <div className="tab">
              <input type="checkbox" id="chck1" />
              <label className="tab-label" for="chck1">
                Selecciona la ruta
              </label>
              <div className="tab-content1">
                <table className="table border-danger">
                  <tbody>
                    <tr>
                      {rali
                        ? rali.map((ralis) => (
                            <a
                              href={`/sistema/rutas_alimentadoras/${ralis.Slug}/#rutas`}
                              role="button"
                              className="text-decoration-none list-group-item list-group-item-action border border-white"
                              alt="Ver Ruta Alimentadora"
                            >
                              <div
                                className="tab-content-color list-group"
                                key={ralis.id}
                              >
                                <h5 className=" azul-lt ">{ralis.name}</h5>
                              </div>
                            </a>
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
              {rali
                ? rali.map((ralis) => (
                    <a
                      href={`/sistema/rutas_alimentadoras/${ralis.Slug}/#rutas`}
                      role="button"
                      className="text-decoration-none tab-content-color list-group-item list-group-item-action border border-white"
                      alt="Ver Ruta Alimentadora"
                    >
                      <div className=" list-group" key={ralis.id}>
                        <h5 className=" azul-lt ">{ralis.name}</h5>
                      </div>
                    </a>
                  ))
                : 'Loading...'}
            </div>
          </div>
        </div>
      </center>

      <img
        src="https://apiwebtm.com/uploads/bus_movilizados_836a10bb99.png"
        className="card-img-top mx-auto d-block"
        alt="icono"
      />
    </div>
  );
};

export default RutasAlimentadoras;
