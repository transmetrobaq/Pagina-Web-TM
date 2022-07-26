/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/button-has-type */

import React, { useState, useEffect } from 'react';
/* import { Link } from 'react-router-dom'; */
import axios from 'axios';
import '../styles/components/Noticias.css';

// eslint-disable-next-line arrow-body-style
const Noticias = () => {
  const [noti, setNoti] = useState([]);
  const [start, setStart] = useState(0);
  const [limit] = useState(3);
  const AP = `https://apiwebtm.com/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`;
  /* const AP1 = `https://apiwebtm.com/galeria`; */

  const [totalCount, setTotalCount] = useState([]);

  /* s */
  /* const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 768,
  }); */

  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resnoti = await axios.get(AP);
    /* setNoti(resnoti.data.data.slice(start, limit)); */
    setNoti(resnoti.data);
    /* Get Total de Arrays */
    const resCount = await axios.get(`https://apiwebtm.com/noticias/count`);
    setTotalCount(resCount.data);
    /* console.log(resCount.data); */

    /* const resgal = await axios.get(AP1);
    setGaleria(resgal.data);
    console.log(resgal.data.img[0]); */
  }, [start, limit]);
  /* console.log(totalCount); */

  const nextPage = () => {
    setStart(limit + start);
  };

  const prevPage = () => {
    setStart(start - limit);
  };

  return (
    <>
      {/*  <div>
        {' '}
        <img
          src={`https://apiwebtm.com${galeria.img}`}
          className="nt__img"
          alt={galeria.alt}
        />
      </div> */}

      <div className="container card__noti">
        <div className="row align-items-center ">
          <div className="col-md-6">
            <div className="card-body ">
              <h1 id="comunicados-prensa" className=" card-title text-center ">
                COMUNICADOS DE PRENSA
              </h1>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="card-body ">
              <img
                alt="hombre con megafono"
                src="https://apiwebtm.com/uploads/Prensa_a8fa881943.png"
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-2">
        {noti
          ? noti.map((notis) => (
              <article className="nt ligth blue" key={notis.id}>
                <img
                  src={`https://apiwebtm.com${notis.url}`}
                  className="nt__img"
                  alt={notis.alt}
                />

                <div className="nt__text">
                  <h3 className="nt__title">{notis.title}</h3>
                  <div>
                    <time>
                      <p className="card-text">
                        <small className="text-muted">
                          Fecha: {notis.date}
                        </small>
                      </p>
                    </time>
                  </div>
                  <div className="nt__bar" />
                  <div className="nt__preview-txt">
                    <p>{notis.Content.slice(0, 200)}...</p>
                  </div>
                  <div>
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
              </article>
            ))
          : 'Loading...'}

        <div className="navPage">
          <span>
            <button
              className="btn btn-outline-primary"
              disabled={limit > start}
              onClick={prevPage}
              alt="Anterior Noticia"
            >
              Anterior noticia
            </button>
          </span>
          <span>
            <button
              className="btn btn-outline-primary"
              role="button"
              disabled={totalCount && start + limit >= totalCount}
              onClick={nextPage}
              alt="Siguiente Noticia"
            >
              Siguiente noticia
            </button>
          </span>
        </div>

        <div className="container linea-colores" />
        {/* Informativos */}
        <div className="container card__informativos" id="informativos">
          <h2>VIDEOS</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card ">
                <iframe
                  src="https://www.youtube.com/embed/PpC6SUgMpvQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <iframe
                  src="https://www.youtube.com/embed/tR09Vs0LLto"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <iframe
                  src="https://www.youtube.com/embed/yascGQLLaZ0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col" disabled>
              <div className="card">
                <iframe
                  src="https://www.youtube.com/embed/_aG_248QY24"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="navPage">
          <span>
            <button
              className="btn btn-outline-primary"
              disabled={limit > start}
              onClick={prevPage}
              alt="Anterior Noticia"
            >
              Anterior
            </button>
          </span>
          <span>
            <button
              className="btn btn-outline-primary"
              role="button"
              disabled={totalCount && start + limit >= totalCount}
              onClick={nextPage}
              alt="Siguiente Noticia"
            >
              Siguiente
            </button>
          </span>
        </div>
        <div className="container linea-colores" />

        {/* <!-- GALERIA --> */}
        <div
          className="container contianer__galeria text-center rounded-bottom"
          id="galeria-de-imagenes"
        >
          <h2 className="card-title">GALERÍA</h2>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide mx-auto d-block card__galeria"
          data-bs-ride="carousel"
          style={{
            border: '3px solid #002856',
            width: '90%',
            borderTop: 'none',
            marginBottom: '50px',
          }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://apiwebtm.com/uploads/DSC_02052_cf8d58e6d0.JPG"
                className="d-block w-100"
                alt="Imagen de Galeria"
              />
              <div className="carousel-caption d-none d-md-block text-white">
                <h5 className="card-title">
                  Usuarios esperando servicio en plataforma de estación Joe
                  Arroyo
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://apiwebtm.com/uploads/DSC_02043_a7ea16c696.JPG"
                className="d-block w-100"
                alt="Imagen de Galeria"
              />
              <div className="carousel-caption d-none d-md-block text-white">
                <h5 className="card-title">
                  Plataforma de servicio estación Joe Arroyo
                </h5>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://apiwebtm.com/uploads/DSC_02028_68ff9f6288.JPG"
                className="d-block w-100"
                alt="Imagen de Galeria"
              />
              <div className="carousel-caption d-none d-md-block text-white">
                <h5 className="card-title">
                  Usuarios al interior de un servicio articulado
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://apiwebtm.com/uploads/DSC_02004_3304f2a884.JPG"
                className="d-block w-100"
                alt="Imagen de Galeria"
              />
              <div className="carousel-caption d-none d-md-block text-white">
                <h5 className="card-title">
                  Usuario validando su entrada a Portal de Soledad
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://apiwebtm.com/uploads/DSC_02001_d3c7f9f0a0.JPG"
                className="d-block w-100"
                alt="Imagen de Galeria"
              />
              <div className="carousel-caption d-none d-md-block text-white">
                <h5 className="card-title">
                  Usuario abordando servicio alimentador
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://apiwebtm.com/uploads/DSC_01984_66959cb169.JPG"
                className="d-block w-100"
                alt="Imagen de Galeria"
              />
              <div className="carousel-caption d-none d-md-block text-white">
                <h5 className="card-title">
                  Usuario consultando señalética informativa de ruta
                  alimentadora
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://apiwebtm.com/uploads/DSC_01973_5a8b2a6204.JPG"
                className="d-block w-100"
                alt="Imagen de Galeria"
              />
              <div className="carousel-caption d-none d-md-block text-white">
                <h5 className="card-title">
                  Servicio alimentador en Portal de Soledad
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://apiwebtm.com/uploads/DSC_01952_2ceaaafec7.JPG"
                className="d-block w-100"
                alt="Imagen de Galeria"
              />
              <div className="carousel-caption d-none d-md-block text-white">
                <h5 className="card-title">
                  Servicio troncal en plataforma de Portal de Soledad
                </h5>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Noticias;
