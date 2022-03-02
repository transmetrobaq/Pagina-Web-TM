/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/components/RutasTroncales.css';

// eslint-disable-next-line arrow-body-style
const RutasTroncales = () => {
  const [noti, setNoti] = useState([]);

  const AP = `https://apiwebtm.com/noticias`;

  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resnoti = await axios.get(AP);
    /* setNoti(resnoti.data.data.slice(start, limit)); */
    setNoti(resnoti.data);
  }, []);

  return (
    <div className="container rutali__cards">
      {/* Droptown RutasAlimentadoras */}
      <div className="row">
        <h1 className="text-center azul-lt">RUTAS TRONCALES</h1>
        <p className="text-center azul-lt">
          Estos servicios transitan por el carril Solo Bus (exclusivo) de las
          troncales Murillo y Olaya Herrera. Estas rutas operan para llevar a
          los ciudadanos a las diferentes estaciones y portales con los que
          cuenta el Sistema Masivo. Actualmente, Transmetro tiene doce rutas
          (12) troncales, seis (6) corrientes y seis (6) expresas
        </p>
      </div>

      <div className="row justify-content-center">
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
                      {noti
                        ? noti.map((notis) => (
                            <div className="" key={notis.id}>
                              <th className=" azul-lt " rowspan="9">
                                <Link
                                  to={`/sistema/rutas_troncales/${notis.slug}`}
                                  role="button"
                                  className="text-decoration-none"
                                  alt="Ver Noticia"
                                >
                                  {notis.title}
                                </Link>
                              </th>
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

      <img
        src="https://apiwebtm.com/uploads/bus_movilizados_836a10bb99.png"
        style={{ width: '30vw', marginTop: '50px' }}
        className="card-img-top mx-auto d-block"
        alt="icono"
      />
    </div>
  );
};

export default RutasTroncales;
