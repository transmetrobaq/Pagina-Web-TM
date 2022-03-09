/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navinfe from './Navinfe';
import '../styles/components/Info.css';

// eslint-disable-next-line arrow-body-style
const Info = () => {
  const [noti, setNoti] = useState([]);
  const [start] = useState(0);
  const [limit] = useState(3);
  /* const AP = `http://localhost:1337/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`; */
  const AP = `https://apiwebtm.com/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`;
  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resnoti = await axios.get(AP);
    setNoti(resnoti.data);
  }, [start, limit]);
  /* console.log(noti.url); */
  return (
    <>
      <Navinfe />

      <div className="container">
        {/*  <!--INFO BLOQUE 4 Mapa---> */}
        {/* Mapa Troncal Bootstap */}
        <div className="container ">
          <div
            className="mapa__Troncal"
            style={{
              border: '2px solid #004f9f',
              borderRadius: '0px 30px 30px 30px',
            }}
          >
            <div
              className="card "
              style={{
                border: '2px solid #004f9f',
                borderRadius: '0px 0px 30px 30px',
                borderLeft: 'none',
                borderTop: 'none',
                width: '40%',
                backgroundColor: '#004f9f',
              }}
            >
              <div className="card-body">
                <h1 className="card-text text-center">Mapa Troncales</h1>
              </div>
            </div>

            <div
              className="card "
              style={{
                border: '2px solid #004f9f',
                borderRadius: '20px 20px 0 0',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
              }}
            >
              <div className="card-body">
                <div className="row g-0">
                  <div className="col-md-12 ">
                    <div className="card-text text-center">
                      <iframe
                        src="https://www.google.com/maps/d/embed?mid=1pMSLCHvUZGZ0VYNxKPTSu0yQNKHFv7iI&ehbc=2E312F"
                        width="100%"
                        height="480"
                      />
                    </div>
                  </div>
                </div>
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
                <div className="row  g-0 align-items-center">
                  <div className="col-md-6  ">
                    <h3>TRONCALES</h3>
                  </div>
                  <div className="col-md-6  ">
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i
                            className="far fa-square"
                            style={{ color: '#e30613' }}
                          />
                        </span>
                        Troncal Murillo
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            className="far fa-square"
                            style={{ color: '#00a13a' }}
                          />
                        </span>
                        Troncal Olaya Herrera
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Todos contra el Covida */}
        <div className="container ">
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
                  Como protegerse y proteger a los demas
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
                  <center className="col-md-3 ">
                    <img
                      src="https://apiwebtm.com/uploads/Lavado_de_manos_7a58441131.png"
                      alt="icono lavado de manos"
                      style={{ width: '40%' }}
                    />
                    <p> Lavarse las manos </p>
                  </center>
                  <center className="col-md-3  ">
                    <img
                      src="https://apiwebtm.com/uploads/Mascarilla_ee3b44234e.png"
                      alt="icnono Uso mascarilla"
                      style={{ width: '40%' }}
                    />
                    <p>Uso mascarilla </p>
                  </center>
                  <center className="col-md-3  ">
                    <img
                      src="https://apiwebtm.com/uploads/Desinfeccion_846d77751e.png"
                      alt="icono Limpie y desinfecte"
                      style={{ width: '40%' }}
                    />
                    <p>Limpie y desinfecte </p>
                  </center>
                  <center className="col-md-3  ">
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
        </div>

        {/* Card Bloque Troncales  */}

        {/* Cards Troncales */}
        <div className="container">
          <div
            className="containerr"
            style={{
              border: '2px solid #004f9f',
              borderRadius: '20px',
            }}
          >
            <div
              className="card"
              style={{
                border: '2px solid #004f9f',
                borderRadius: '20px 20px 0 0',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
              }}
            >
              <div className="card-body">
                <p className="card-text">
                  Los servicios Troncales agilizan el traslado de los usuarios
                  porque transitan por carriles excusivos (Solo Bus) de las
                  troncales Murillo y Olaya Herrera para llevar a los ciudadanos
                  a las diferentes estaciones y portales con los que cuenta el
                  Sistema Masivo.
                </p>
              </div>
            </div>

            <div
              className="card "
              style={{
                border: '2px solid #004f9f',
                borderRadius: '20px 20px 0 0',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
              }}
            >
              <div className="card-body">
                <div className="row g-0">
                  <div className="col-md-3 ">
                    <h3>TRONCAL MURILLO</h3>
                    <div className="cars-ico">
                      <img
                        src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                        alt="icono bus"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <ol>
                      <li>
                        Portal <span>de Soledad</span> - Calle 65 # 13 - 455
                        (Soledad, Atl.).
                      </li>
                      <li>
                        Estacion <span>Pedro Ramayá Beltran</span> - Entre
                        carreras 23 y Av. Circunvalar (Soledad, Atl.).
                      </li>
                      <li>
                        Estacion <span>Pacho Galán</span> - Entre carreras 16 y
                        17 (Soledad, Atl.).
                      </li>
                      <li>
                        Estacion <span>Joaquin Barrios Polo</span> - Entre
                        carreras 1G y 2A.
                      </li>
                      <li>
                        Estacion <span>Buenos Aires</span> - Entres carrera 7 y
                        7G.
                      </li>
                      <li>
                        Estacion <span>LA Ocho</span> - Entre carreras 8 y 8C.
                      </li>
                      <li>
                        Estacion <span>La Catorce</span> - Entre carreras 14 y
                        17.
                      </li>
                      <li>
                        Estacion <span>La Veintiuna</span> - Entre carreras 20 y
                        21.
                      </li>
                      <li>
                        Estacion <span>Atlántico</span> - Entre carreras 26 y
                        27.
                      </li>
                      <li>
                        Estacion <span>Chiquinquirá</span> - Entre carreras 33 y
                        36.
                      </li>
                      <li>
                        Estacion <span>La Arenosa</span> - Entre carreras 41 y
                        43.
                      </li>
                    </ol>
                  </div>
                </div>
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
                <div className="row  g-0">
                  <div className="col-md-6  ">
                    <h3>TRONCAL OLAYA HERRERA</h3>
                    <div className="cars-ico ">
                      <img
                        src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                        alt="icono bus"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <ol>
                      <li>
                        Estacion retorno <span>Joe Arroyo</span> - Carrera 46
                        con calle 74.
                      </li>
                      <li>
                        Estacion <span>Esthercita Forero</span> - Entre calles
                        69 y 70.
                      </li>
                      <li>
                        Estacion <span>Alfredo Correa De Andréis</span> - Entre
                        calles 60 y 62.
                      </li>
                      <li>
                        Estacion <span>La Catedral</span> - Entre calles 50 y
                        53.
                      </li>
                      <li>
                        Estacion <span>Barrio Abajo</span> - Entre calles 43 y
                        45.
                      </li>
                      <li>
                        Estacion <span>Parque Cultural</span> - Entre calles 36
                        y 39.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Alimentadoras */}
        <div className="container">
          <div
            className="containerr"
            style={{
              border: '2px solid #004f9f',
              borderRadius: '20px',
            }}
          >
            <div
              className="card"
              style={{
                border: '2px solid #004f9f',
                borderRadius: '20px 20px 0 0',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
              }}
            >
              <div className="card-body">
                <p className="card-text">
                  Estos servicios conectan a los usuarios ubicados en barrios
                  alejados de las troncales a través de las estaciones del
                  Sistema o de paraderos cercanos a estas con la posibilidad de
                  hacer transbordos a los servicios troncales sin ningún costo
                  adicional para el ciudadano
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
                <div className="row  g-0">
                  <div className="col-md-6  ">
                    <h3>RUTAS ALIMENTADORAS</h3>
                    <div className="cars-ico ">
                      <img
                        src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                        alt="icono bus"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <ol>
                      <li>
                        Estacion retorno <span>Joe Arroyo</span> - Carrera 46
                        con calle 74.
                      </li>
                      <li>
                        Estacion <span>Esthercita Forero</span> - Entre calles
                        69 y 70.
                      </li>
                      <li>
                        Estacion <span>Alfredo Correa De Andréis</span> - Entre
                        calles 60 y 62.
                      </li>
                      <li>
                        Estacion <span>La Catedral</span> - Entre calles 50 y
                        53.
                      </li>
                      <li>
                        Estacion <span>Barrio Abajo</span> - Entre calles 43 y
                        45.
                      </li>
                      <li>
                        Estacion <span>Parque Cultural</span> - Entre calles 36
                        y 39.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bloque Noticias Home */}
      <div className="container">
        <div className="title-cards">
          <Link
            to="/noticias"
            alt="Ver Noticias"
            style={{ textDecoration: 'none' }}
          >
            <h2>NOTICIAS</h2>
          </Link>
        </div>
        <div className="container__card-noti">
          {noti.map((notis) => (
            <div className="cards" key={notis.id}>
              <figure>
                <img src={`https://apiwebtm.com${notis.url}`} alt={notis.alt} />
                <div className="linea-colores1" />
              </figure>

              <div className="contenido-card-noti">
                <small className="text-muted">Fecha: {notis.date}</small>
                <h3>{notis.title}</h3>
                {/* <p>{noti.content}</p> */}
                <Link
                  to={`/noticias/${notis.slug}`}
                  role="button"
                  className="btn btn-outline-primary"
                  alt="Ver Noticia"
                >
                  Ver Noticia
                </Link>
              </div>
            </div>
          ))}

          {/* <!--FIN DE INFO BLOQUE 3---> */}
        </div>
        <center>
          <Link
            to="/noticias"
            role="button"
            className="btn btn-primary"
            style={{ marginBottom: '50px' }}
            alt="Ver Noticia"
          >
            Ver Mas Noticia...
          </Link>
        </center>
      </div>

      {/* Movilizados */}

      <div className="container-fluid card bg-dark text-white">
        <div className="row align-items-end">
          <img
            src="https://apiwebtm.com/uploads/Recurso_Movilizados_6bc73b974f.png"
            className="card-img"
            alt="foto tarjeta transmetro"
          />

          <div className="card-img-overlay" />
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center ">
          <div className="card mb-3 movilizado ">
            <div className="row g-0 ">
              <div className="col-md-6">
                <div className="card-body  usu-movilizados">
                  <h2 className="card-text text-center">
                    Usuarios
                    <strong className="text-danger"> Movilizados</strong>
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <img
                    src="https://apiwebtm.com/uploads/bus_movilizados_836a10bb99.png"
                    alt="Bus Transmetro"
                  />
                  <h2 className="card-title text">
                    <strong className="text-danger">350.718.296</strong>{' '}
                  </h2>
                  <p className="card-text">
                    Desde el 10 de Julio de 2010 hasta el 2 de Enero de 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fin Movilizados */}
    </>
  );
};

export default Info;
