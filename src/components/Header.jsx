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
        className="carousel slide  "
        data-bs-ride="carousel"
      >
        {/* start carusel items */}
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
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
          <div className="carousel-item" data-bs-interval="2000">
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
