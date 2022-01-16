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
  const AP = `http://localhost:1337/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`;

  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resnoti = await axios.get(AP);

    setNoti1(resnoti.data[0]);
    setNoti2(resnoti.data[1]);
    setNoti3(resnoti.data[2]);
  }, [start, limit]);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/*  <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div> */}

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={`http://localhost:1337${noti1.url}`}
            className="d-block w-100"
            alt="{noti1.alt}"
          />

          <div className="card carrusel__cards carousel-control-prev">
            <div className="cards__body ">
              <h1 className="carrusel__title ">{noti1.title}</h1>

              <Link to={`/noticias/${noti1.slug}`} role="button">
                Ver Noticia
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={`http://localhost:1337${noti2.url}`}
            className="d-block w-100"
            alt="{noti2.alt}"
          />
          <div className="card carrusel__cards carousel-control-prev">
            <div className="cards__body">
              <h1 className="carrusel__title">{noti2.title}</h1>

              <Link
                to={`/noticias/${noti2.slug}`}
                role="button"
                alt="Ver Noticia"
              >
                Ver Noticia
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={`http://localhost:1337${noti3.url}`}
            className="d-block w-100"
            alt="{noti3.alt}"
          />
          <div className="card carrusel__cards carousel-control-prev">
            <div className="cards__body">
              <h1 className="carrusel__title">{noti3.title}</h1>

              <Link
                to={`/noticias/${noti3.slug}`}
                role="button"
                alt="Ver Noticia"
              >
                Ver Noticia
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Header;
