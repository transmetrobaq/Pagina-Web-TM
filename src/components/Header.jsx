/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/components/Header.css';

// eslint-disable-next-line arrow-body-style
const Header = () => {
  const [noti1, setNoti1] = useState([]);
  const [noti2, setNoti2] = useState([]);
  const [noti3, setNoti3] = useState([]);
  const [start] = useState(0);
  const [limit] = useState(3);
  const AP = `https://apiwebtm.com/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`;

  /* const AP = `http://34.125.209.125/api/noticias`; */
  /* const AP = `http://34.125.92.175/api/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`; */
  /* console.log(AP); */
  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resnoti = await axios.get(AP);
    setNoti1(resnoti.data[0]);
    setNoti2(resnoti.data[1]);
    setNoti3(resnoti.data[2]);
    /*  setNoti1(resnoti.data.data[0].attributes);
    setNoti2(resnoti.data.data[1].attributes);
    setNoti3(resnoti.data.data[2].attributes); */

    /* console.log(resnoti.data.data[1].attributes); */
  }, [start, limit]);

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide container-xxl "
        style={{ padding: '0px' }}
        data-bs-ride="carousel"
      >
        {/* start carusel items */}
        <div className="carousel-inner">
          

          {/* <div className="carousel-item " data-bs-interval="2000">
            <img
              src="https://apiwebtm.com/uploads/IMG_9512_76b844202b.JPG"
              className="w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption  d-block">
               <a
                    href="ciudadano/#preguntas-frecuentes">
                <h2 className="mb-3">Lo que debes saber sobre la migración de información para ingresar al Sistema.
                </h2>
                </a>
              <div className="linea-coloresHeader" />
            </div>
          </div> */}
          {/* CUANDO SE QUITE LA IMAGEN DE ARRIBA COLOCAR EL ACTIVE AL de abaj */}

          <div className="carousel-item active " data-bs-interval="10000">
            <img
              src={`https://apiwebtm.com${noti1.url}`}
              className="w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption  d-block">
              <Link to={`/noticias/${noti1.slug}`}>
                <h2 className="mb-3">{noti1.title}</h2>
              </Link>
              <div className="linea-coloresHeader" />
            </div>
          </div>

          {/* <div className="carousel-item  " data-bs-interval="7000">
            <a
              href="https://forms.office.com/r/KSRgsVVsLg?origin=lprLink"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="https://apiwebtm.com/uploads/Banner_con_codigo_QR_d314273b10.png"
                className="w-100 img-fluid"
                alt="Ir a otra web"
                style={{ cursor: 'pointer' }}
              />
            </a>
          </div> */}
          
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={`https://apiwebtm.com${noti2.url}`}
              className="w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption  d-block">
              <Link to={`/noticias/${noti2.slug}`}>
                <h2 className="mb-3">{noti2.title}</h2>
              </Link>
              <div className="linea-coloresHeader" />
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={`https://apiwebtm.com${noti3.url}`}
              className="w-100 img-fluid "
              alt="..."
            />
            <div className="carousel-caption  d-block">
              <Link to={`/noticias/${noti3.slug}`}>
                <h2 className="mb-3">{noti3.title}</h2>
              </Link>
              <div className="linea-coloresHeader" />
            </div>
          </div>
           <div className="carousel-item " data-bs-interval="7000">
            <a
              href="https://forms.office.com/pages/responsepage.aspx?id=SEG3lKY8wUejpoDbLhALDim3VBlIiyROn5TANJAFNDxUNEQ3U1ZEVFNWTURGSkJQTjYyTktTNURWVi4u&origin=lprLink&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="https://apiwebtm.com/uploads/Personaliza_tu_Tarjeta_Transmetro_1_4d9ce4bcad.jpeg"
                className="w-100 img-fluid"
                alt="Ir a otra web"
                style={{ cursor: 'pointer' }}
              />
            </a>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Header;
