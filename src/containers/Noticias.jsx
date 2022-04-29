/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/button-has-type */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/components/Noticias.css';

// eslint-disable-next-line arrow-body-style
const Noticias = () => {
  const [noti, setNoti] = useState([]);
  const [start, setStart] = useState(0);
  const [limit] = useState(6);
  const AP = `https://apiwebtm.com/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`;

  const [totalCount, setTotalCount] = useState([]);

  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resnoti = await axios.get(AP);
    /* setNoti(resnoti.data.data.slice(start, limit)); */
    setNoti(resnoti.data);
    /* Get Total de Arrays */
    const resCount = await axios.get(`https://apiwebtm.com/noticias/count`);
    setTotalCount(resCount.data);
    /* console.log(resCount.data); */
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
                className="mx-auto d-block"
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
                    <Link
                      to={`/noticias/${notis.slug}`}
                      role="button"
                      className="btn btn-outline-primary"
                      alt="Ver Noticia"
                    >
                      Ver noticia
                    </Link>
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
        <div className="container card__informativos">
          <h2>INFORMATIVOS</h2>
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
            <div className="col">
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
        {/* <!-- GALERIA --> */}
        <div className="container contianer__galeria text-center rounded-bottom">
          <h2 id="galeria-de-imagenes" className="card-title">
            GALERÍA
          </h2>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide mx-auto d-block "
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
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://apiwebtm.com/uploads/PSX_20190514_180111_c36eccfaf8.jpg"
                className="d-block w-100"
                style={{ maxHeight: '500px' }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://apiwebtm.com/uploads/PSX_20190403_180752_5b356aaa65.jpg"
                className="d-block w-100"
                style={{ maxHeight: '500px' }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://apiwebtm.com/uploads/PSX_20190403_063253_8bd25532d9.jpg"
                className="d-block w-100"
                style={{ maxHeight: '500px' }}
                alt="..."
              />
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
