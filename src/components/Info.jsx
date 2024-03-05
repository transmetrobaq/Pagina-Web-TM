/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Navinfe from './Navinfe';
import Infra from './Infra';
/* import Horario from './Horario'; */
import Header from './Header';
import Eventos from './Eventos';
import '../styles/components/Info.css';

// eslint-disable-next-line arrow-body-style
const Info = () => {
  const [noti, setNoti] = useState([]);
  const [start] = useState(0);
  const [limit, setLimit] = useState(0);

  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 768,
  });

  const AP = `https://apiwebtm.com/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`;
  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resnoti = await axios.get(AP);
    setNoti(resnoti.data);
  }, [start, limit]);
  /* console.log(noti.url); */

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 821px)');
    if (mediaQuery.matches) {
      setLimit(3);
    } else {
      setLimit(2);
    }

    mediaQuery.addEventListener('change', setMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener('change', setMQuery);
  }, [mQuery]);

  return (
    <>
      <Header />
      <Navinfe />

      {/* Datos de Infraestructura */}
      <Infra />
      {/* Horario */}
      {/* <Horario /> */}

      {/* Noticias */}

      {/* Bloque Noticias Home */}
      <div className="container-xxl">
        <div className="card mb-3 border border-0 title-noti">
          <div className="row g-0 justify-content-end ">
            <div className="col-md-10">
              <div className="card-body">
                <div className="title-noti justify-content-between">
                  <h2>Noticias</h2>{' '}
                  <a
                    href="noticias/#comunicados-prensa"
                    alt="Ver Noticias"
                    style={{ textDecoration: 'none' }}
                  >
                    <p>
                      Ver todas las noticias{' '}
                      <i className="fa-solid fa-arrow-right" />
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
        <div className="card mb-3 border border-0">
          <div className="row g-0 justify-content-end ">
            <div className="col-md-10">
              <div className="card-body ">
                <div className="container__card-noti ">
                  {noti.map((notis) => (
                    <div className="card cards h-100" key={notis.id}>
                      <figure>
                        <img
                          src={`https://apiwebtm.com${notis.url}`}
                          alt={notis.alt}
                          className="card-img-top img-fluid"
                        />
                        <div className="linea-colores1" />
                      </figure>

                      <div className="contenido-card-noti">
                        <small className="text-muted">
                          Fecha: {notis.date}
                        </small>
                        <h5>{notis.title}</h5>
                        {/* <p>{noti.content}</p> */}
                        <a
                          href={`/noticias/${notis.slug}/#noti`}
                          role="button"
                          className="btn btn-outline-primary"
                          alt="Ver Noticia"
                        >
                          Ver noticia
                        </a>
                      </div>
                    </div>
                  ))}

                  {/* <!--FIN DE INFO BLOQUE 3---> */}
                </div>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </div>

      {/* Movilizados */}
      <div className="container-xxl" style={{ padding: '0px' }}>
        <video id="videoHome" autoPlay loop muted className=" ratio ratio-16x9">
          <source
            src="https://apiwebtm.com/uploads/Transmetro_baad68f747.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container" style={{ marginBottom: '50px' }}>
        <div className="row justify-content-center ">
          <div className="card mb-3 movilizado ">
            <div className="row g-0 align-items-center">
              <div className="col-md-7">
                <div className="card-body usu-movilizados ">
                  <h2 className="card-text ">Usuarios Movilizados</h2>
                  <p className="card-text">
                    Desde el 10 de julio de 2010 hasta <br /> 25 de febrero de 2024
                    <button
                      type="button"
                      className="btn text-white "
                      data-bs-toggle="modal"
                      data-bs-target="#participaModal"
                    >
                      Ver más...
                    </button>
                  </p>
                </div>
              </div>
              <div className="col-md-5 ">
                <div className="card-body card_bus ">
                  <img
                    src="https://apiwebtm.com/uploads/bus_movilizados_836a10bb99.png"
                    alt="Bus Transmetro"
                  />
                  <h1 className="card-title fw-bold">402.654.185</h1>
                  <div className="linea-colores-movi" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DE NUMEROS MOVILIZADOS  */}

      <div
        className="modal fade azul-lt"
        id="participaModal"
        aria-labelledby="participaModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold " id="participaModalLabel">
                Número de movilizados por periodos
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              className="modal-body "
              // style={{ width: '150wh', height: '3518px' }}
            >
              <table className="table table-bordered azul-lt ">
                <thead>
                  <tr>
                    <th scope="col">Periodos</th>
                    <th scope="col">Número de movilizados</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>ENERO 2024</td>
                    <td>1.450.725</td>
                  </tr>
                  </tbody>
              </table>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneTwo"
                >
                  <button 
                    className="accordion-button collapsed azul-lt"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseperiodo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseperiodo"
                  >
                    Año 2023
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseperiodo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingperiodo"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                    <table className="table table-bordered azul-lt ">
                <thead>
                  <tr>
                    <th scope="col">Periodos</th>
                    <th scope="col">Número de movilizados</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ENERO 2023</td>
                    <td>1.715.024</td>
                  </tr>
                  <tr>
                    <td>FEBRERO 2023</td>
                    <td>1.762.217</td>
                  </tr>
                  <tr>
                    <td>MARZO 2023</td>
                    <td>2.038.823</td>
                  </tr>
                  <tr>
                    <td>ABRIL 2023</td>
                    <td>1.865.807</td>
                  </tr>
                  <tr>
                    <td>MAYO 2023</td>
                     <td>2.030.323</td>
                  </tr>
                  <tr>
                    <td>JUNIO 2023</td>
                     <td>1.801.871</td>
                  </tr>
                  <tr>
                    <td>JULIO 2023</td>
                     <td>1.827.832</td>
                  </tr>
                  <tr>
                    <td>AGOSTO 2023</td>
                     <td>2.047.876</td>
                  </tr>
                  <tr>
                    <td>SEPTIEMBRE 2023 </td>
                     <td>2.023.041</td>
                  </tr>
                  <tr>
                    <td>OCTUBRE 2023 </td>
                     <td>1.850.642</td>
                  </tr>
                  <tr>
                    <td> NOVIEMBRE 2023 </td>
                     <td>1.724.582</td>
                  </tr>
                  <tr>
                    <td> DICIEMBRE 2023 </td>
                     <td>1.593.214</td>
                  </tr>

                </tbody>
              </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{ color: 'white' }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fin Movilizados */}

      {/* Todos contra el Covida */}
      {/*   <div className="container ">
        <div
          className="mapa__Troncal"
          style={{
            border: '2px solid #004f9f',
            borderRadius: '30px 30px 30px 30px',
          }}
        >
          <div
            className="card "
            style={{
              border: '2px solid #004f9f',
              borderRadius: '30px 30px 30px 30px',
              borderLeft: 'none',
              borderTop: 'none',
              borderRight: 'none',
              borderBottom: 'none',
            }}
          >
            <div className="card-body">
              <h3 className="card-text text-center">
                TODOS CONTRA EL COVID-19
              </h3>
              <p className="card-text text-center">
                Cómo protegerse y proteger a los demás
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              border: '2px solid #004f9f',
              borderRadius: '20px',
              borderBottom: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              marginBottom: '20px',
            }}
          >
            <div className="card-body">
              <div className="row  g-0 ">
                <center className="col-md-4 ">
                  <img
                    src="https://apiwebtm.com/uploads/Lavado_de_manos_7a58441131.png"
                    alt="icono lavado de manos"
                    style={{ width: '40%' }}
                  />
                  <p> Lávese las manos </p>
                </center>
                <center className="col-md-4  ">
                  <img
                    src="https://apiwebtm.com/uploads/Mascarilla_ee3b44234e.png"
                    alt="icnono Uso mascarilla"
                    style={{ width: '40%' }}
                  />
                  <p>Use mascarilla </p>
                </center>
                <center className="col-md-4  ">
                  <img
                    src="https://apiwebtm.com/uploads/Desinfeccion_846d77751e.png"
                    alt="icono Limpie y desinfecte"
                    style={{ width: '40%' }}
                  />
                  <p>Limpie y desinfecte </p>
                </center>
                {/* <center className="col-md-3  ">
                  <img
                    src="https://apiwebtm.com/uploads/Destancia_d9347dfa76.png"
                    alt="icono Mantenga sana distancia"
                    style={{ width: '40%' }}
                  />
                  <p>Mantenga sana distancia </p>
                </center> 
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Arriendo Locales */}
      {/* <div className="container arriendo ">
        <div className="card mb-3 border-light ">
          <img
            src="https://apiwebtm.com/uploads/publicidad1_9b984ef087.png"
            className="card-img-top mx-auto d-block cd"
            alt="..."
          />
        </div>
      </div> */}
      <Eventos />
    </>
  );
};

export default Info;
