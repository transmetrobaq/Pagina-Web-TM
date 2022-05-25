/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navinfe from './Navinfe';
import Infra from './Infra';
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
      setLimit(4);
    } else {
      setLimit(2);
    }

    mediaQuery.addEventListener('change', setMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener('change', setMQuery);
  }, [mQuery]);

  return (
    <>
      <Navinfe />

      {/* Datos de Infraestructura */}
      <Infra />

      {/* Noticias */}

      {/* Bloque Noticias Home */}
      <div className="container">
        <div className="title-cards">
          <Link
            to="/noticias"
            alt="Ver Noticias"
            style={{ textDecoration: 'none' }}
          >
            <h1>NOTICIAS</h1>
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
                <h5>{notis.title}</h5>
                {/* <p>{noti.content}</p> */}
                <a
                  href={`/noticias/${notis.slug}/#noti`}
                  role="button"
                  className="btn btn-outline-primary"
                  alt="Ver Noticia"
                >
                  Ver Noticia
                </a>
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
            Ver más noticia...
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
                <center className="col-md-3 ">
                  <img
                    src="https://apiwebtm.com/uploads/Lavado_de_manos_7a58441131.png"
                    alt="icono lavado de manos"
                    style={{ width: '40%' }}
                  />
                  <p> Lávese las manos </p>
                </center>
                <center className="col-md-3  ">
                  <img
                    src="https://apiwebtm.com/uploads/Mascarilla_ee3b44234e.png"
                    alt="icnono Uso mascarilla"
                    style={{ width: '40%' }}
                  />
                  <p>Use mascarilla </p>
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
    </>
  );
};

export default Info;
