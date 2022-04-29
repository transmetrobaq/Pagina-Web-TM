/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/components/RutasAlimentadoras.css';

// eslint-disable-next-line arrow-body-style
const RutasAlimentadoras = () => {
  const [rali, setRali] = useState([]);

  const AP = `https://apiwebtm.com/rutas-alimentadoras`;

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
          RUTAS ALIMENTADORAS
        </h1>
        <p className="text-center azul-lt">
          Las rutas alimentadoras operan con buses tipo padrón y busetón. Estos
          servicios se integran a las rutas troncales a través de las estaciones
          del Sistema o de paraderos cercanos a estas, llevando a los ciudadanos
          desde los barrios más lejanos para que hagan el transbordo a los
          servicios troncales sin ningún costo.
        </p>
      </div>

      <div className="row justify-content-center mx-auto d-block width-Troncal">
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
                      {rali
                        ? rali.map((ralis) => (
                            <div className="tab-content-color" key={ralis.id}>
                              <th rowspan="9">
                                <Link
                                  to={`/sistema/rutas_alimentadoras/${ralis.Slug}`}
                                  role="button"
                                  className="text-decoration-none"
                                  alt="Ver Ruta Alimentadora"
                                >
                                  <h5 className=" azul-lt ">{ralis.name}</h5>
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

export default RutasAlimentadoras;
