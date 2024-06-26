/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/button-has-type */

import React, { useState, useEffect } from 'react';
/* import { Link } from 'react-router-dom'; */
import axios from 'axios';
import Gallery from '../components/Gallery';
import '../styles/components/Noticias.css';
import '../styles/components/Gallery.css';

// eslint-disable-next-line arrow-body-style
const Noticias = () => {
  const [noti, setNoti] = useState([]);
  const [vide, setvide] = useState([]);
  const [start, setStart] = useState(0);
  const [start1, setStart1] = useState(0);
  const [limit] = useState(4);
  const [limit1] = useState(4);
  const AP = `https://apiwebtm.com/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`;
  const AP2 = `https://apiwebtm.com/informativos?_limit=${limit1}&_start=${start1}&_sort=fecha:desc`;
  const [gale, setGale] = useState([]);
  const [limitg] = useState(30);
  const AP1 = `https://apiwebtm.com/noticias?_limit=${limitg}&_start=${start}&_sort=date:DESC`;

  /* const AP1 = `https://apiwebtm.com/galeria`; */

  const [totalCount, setTotalCount] = useState([]);
  const [totalCount1, setTotalCountVideo] = useState([]);

  /* s */
  /* const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 768,
    .....
    +......................................................................
  }); */

  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resnoti = await axios.get(AP);
    const resgale = await axios.get(AP1);

    /* setNoti(resnoti.data.data.slice(start, limit)); */
    setNoti(resnoti.data);
    setGale(resgale.data);

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

  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */

    const resvide = await axios.get(AP2);
    /* setNoti(resnoti.data.data.slice(start, limit)); */

    setvide(resvide.data);
    /* Get Total de Arrays */

    const resCountVideo = await axios.get(
      `https://apiwebtm.com/informativos/count`
    );

    setTotalCountVideo(resCountVideo.data);
    /* console.log(resCount.data); */

    /* const resgal = await axios.get(AP1);
    setGaleria(resgal.data);
    console.log(resgal.data.img[0]); */
  }, [start1, limit1]);
  /* console.log(totalCount); */

  const nextPage1 = () => {
    setStart1(limit1 + start1);
  };

  const prevPage1 = () => {
    setStart1(start1 - limit1);
  };

  /* const imageIDs = Array(30) // the maximum is currently 149
    .fill(1)
    .map((_, i) => i + 1); */
  // eslint-disable-next-line arrow-body-style
  const images = gale.map((gales) => {
    return {
      src: `https://apiwebtm.com${gales.url}`,
      /* srcset: `https://placedog.net/400/240?id=${imageID} 400w, https://placedog.net/700/420?id=${imageID} 700w, https://placedog.net/1000/600?id=${imageID} 1000w`, */
      sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
      alt: `Dogs are domesticated mammals.`,
      thumbnail: `https://apiwebtm.com${gales.url}`,
    };
  });

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

      <div className="container card__noti" id="comunicados-prensa">
        <div className="row align-items-center ">
          <div className="col-md-6">
            <div className="card-body ">
              <h2 className=" card-title text-center ">
                Comunicados de prensa
              </h2>
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
                  className="nt__img img-fluid"
                  alt={notis.alt}
                />

                <div className="nt__text">
                  <h4 className="nt__title">{notis.title}</h4>
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
              alt="Siguiente  Noticia"
            >
              Siguiente noticia
            </button>
          </span>
          <span>
            <button
              className="btn btn-outline-primary"
              role="button"
              disabled={totalCount && start + limit >= totalCount}
              onClick={nextPage}
              alt="Anterior Noticia"
            >
              Anterior noticia
            </button>
          </span>
        </div>

        <div className="container linea-colores" />
        {/* Informativos */}

        <div className="container card__informativos" id="Videos">
          <h2>Videos</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4" >
            {vide
              ? vide.map((infor) => (
                  <div className="col" key={infor.id}>
                    <div className="card">
                      <iframe
                        src={infor.url}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))
              : 'Loading...'}
          </div>
        </div>

        <div className="navPage">
          <span>
            <button
              className="btn btn-outline-primary"
              disabled={limit1 > start1}
              onClick={prevPage1}
              alt="Siguiente Informativo"
            >
              Siguiente
            </button>
          </span>
          <span>
            <button
              className="btn btn-outline-primary"
              role="button"
              disabled={totalCount1 && start1 + limit1 >= totalCount1}
              onClick={nextPage1}
              alt="Anterior Informativo"
            >
              Anterior
            </button>
          </span>
        </div>
      </div>

      {/* <div className="container card__informativos" id="informativos">
          <h2>Videos</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
              <div className="card">
                <iframe
                  src="https://www.youtube.com/embed/w20sDo2IiMY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                <iframe
                  src="https://www.youtube.com/embed/wHlOm5iYhas"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <iframe
                  src="https://www.youtube.com/embed/yascGQLLaZ0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col" disabled>
              <div className="card">
                <iframe
                  src="https://www.youtube.com/embed/_aG_248QY24"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
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
      </div> */}
      {/* <!-- GALERIA --> */}
      <div
        className="container-xxl "
        style={{ backgroundColor: '#F5F5F5' }}
        id="galeria-de-imagenes"
      >
        <div className="card_gallery ">
          <div className="card mb-3 border border-0">
            <div className="row g-0 justify-content-end ">
              <div className="col-md-6">
                <div className="card-body">
                  <h2>Galería</h2>
                  <div className="linea-colores-movi" />
                </div>
              </div>
              <div className="col-md-5" />
            </div>
          </div>

          <div className="card mb-3 border border-0">
            <div className="row g-0 justify-content-center ">
              <div className="col-md-11">
                <div className="card-body">
                  <Gallery images={images} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noticias;
