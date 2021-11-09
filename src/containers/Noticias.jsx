/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/components/Noticias.css';

// eslint-disable-next-line arrow-body-style
const Noticias = () => {
  const [noti, setNoti] = useState([]);
  const [start, setStart] = useState(0);
  const [limit] = useState(2);
  const AP = `http://localhost:1337/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`;
  const [totalCount, setTotalCount] = useState([]);

  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resnoti = await axios.get(AP);
    setNoti(resnoti.data);

    /* Get Total de Arrays */
    const resCount = await axios.get(`http://localhost:1337/noticias/count`);
    setTotalCount(resCount.data);
  }, [start, limit]);

  const nextPage = () => {
    setStart(limit + start);
  };

  const prevPage = () => {
    setStart(start - limit);
  };

  return (
    <div className="container py-2">
      {noti.map((noti) => (
        <article className="nt ligth blue" key={noti.id}>
          <img
            src={`http://localhost:1337${noti.image.url}`}
            className="nt__img"
            alt={noti.alt}
          />

          <div className="nt__text">
            <h3 className="nt__title">{noti.title}</h3>
            <div>
              <time>
                <p className="card-text">
                  <small className="text-muted">Fecha: {noti.date}</small>
                </p>
              </time>
            </div>
            <div className="nt__bar" />
            <div className="nt__preview-txt">
              <p>{noti.content}</p>
            </div>
            <div>
              <Link
                to={`/noticias/${noti.slug}`}
                role="button"
                className="btn btn-outline-primary"
                alt="Ver Noticia"
              >
                Ver Noticia
              </Link>
            </div>
          </div>
        </article>
      ))}
      <div className="navPage">
        <span>
          <button
            className="btn btn-outline-primary"
            disabled={limit > start}
            onClick={prevPage}
            alt="Anterior Noticia"
          >
            Anterior Noticia
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
            Siguiente Noticia
          </button>
        </span>
      </div>
    </div>
  );
};

export default Noticias;
