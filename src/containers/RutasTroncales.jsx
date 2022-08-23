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
      className="container rutali__cards "
      data-bs-spy="scroll"
      data-bs-target="#navbar-Tm"
      data-bs-offset="0"
      tabIndex="0"
    >
      {/* Droptown RutasAlimentadoras */}
      <div className="row">
        <h1 id="rutas-troncales" className="text-center azul-lt">
          RUTAS TRONCALES
        </h1>
        <p className="text-center azul-lt">
          Estos servicios transitan por el carril Solo Bus (exclusivo) de las
          troncales Murillo y Olaya Herrera. Estas rutas operan para llevar a
          los ciudadanos a las diferentes estaciones y portales con los que
          cuenta el Sistema Masivo. Actualmente, Transmetro tiene doce rutas
          (12) troncales, seis (6) corrientes y seis (6) expresas
        </p>
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
