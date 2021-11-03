/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Noticias.css';
import AppContext from '../context/AppContext';

// eslint-disable-next-line arrow-body-style
const Noticias = () => {
  const { noti } = useContext(AppContext);

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
                to={`/noticias/${noti.id}`}
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
    </div>
  );
};

export default Noticias;
