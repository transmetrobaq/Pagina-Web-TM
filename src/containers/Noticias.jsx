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
  /* const AP = `http://34.125.209.125/api/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`; */
  const AP = `http://34.125.209.125/api/noticias`;

  const [totalCount, setTotalCount] = useState([]);
  const nextPage = () => {
    setStart(limit + start);
  };

  const prevPage = () => {
    setStart(start - limit);
  };
  /* const _start = nextPage;
  const _limit = prevPage; */
  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resnoti = await axios.get(AP);
    setNoti(resnoti.data.data.slice(start, limit));

    /* Get Total de Arrays */
    const resCount = await axios.get(`http://34.125.209.125/api/noticias`);
    setTotalCount(resCount.data.meta.pagination.total);
    /*  console.log(resCount.data.meta); */
  }, [start, limit]);
  console.log(totalCount);

  console.log(AP);

  /*  const nextPage = () => {
    setStart(limit + start);
  };

  const prevPage = () => {
    setStart(start - limit);
  }; */

  console.log(noti);

  return (
    <div className="container py-2">
      {noti
        ? noti.map((notis) => (
            <article className="nt ligth blue" key={notis.id}>
              <img
                src={`http://34.125.209.125${notis.attributes.url}`}
                className="nt__img"
                alt={notis.attributes.alt}
              />

              <div className="nt__text">
                <h3 className="nt__title">{notis.attributes.title}</h3>
                <div>
                  <time>
                    <p className="card-text">
                      <small className="text-muted">
                        Fecha: {notis.attributes.date}
                      </small>
                    </p>
                  </time>
                </div>
                <div className="nt__bar" />
                <div className="nt__preview-txt">
                  <p>{notis.attributes.content.slice(0, 200)}...</p>
                </div>
                <div>
                  <Link
                    to={`/noticias/${notis.attributes.slug}`}
                    role="button"
                    className="btn btn-outline-primary"
                    alt="Ver Noticia"
                  >
                    Ver Noticia
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
