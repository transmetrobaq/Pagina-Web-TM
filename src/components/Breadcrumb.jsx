/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/components/Breadcrumb.css';

function Breadcrumb() {
  const location = useLocation();
  const { pathname } = location;
  const crumbs = pathname.split('/').filter((item) => item);

  const capatilize = (s) =>
    s.charAt(0).toUpperCase() + s.replaceAll('-', ' ').slice(1);

  return (
    <nav className="container" aria-label="breadcrumb">
      <ul className="breadcrumb">
        {crumbs.length > 0 ? (
          <li className="breadcrumb-item">
            <Link
              to="/"
              style={{
                fontWeight: 'bold',
              }}
              className="link"
            >
              <i className="fas fa-home" /> Inicio
            </Link>
          </li>
        ) : (
          <li className="breadcrumb-item active" alt="Inicio">
            <span className="fas fa-home" style={{ color: '#fff' }}>
              {' '}
            </span>
          </li>
        )}
        {crumbs.map((name, index) => {
          const routeTo = `/${crumbs.slice(0, index + 1).join('/')}`;
          const isLast = index === crumbs.length - 1;

          return isLast ? (
            <li
              className="breadcrumb-item active"
              aria-current="page"
              key={index}
            >
              {capatilize(name)}
            </li>
          ) : (
            <li className="breadcrumb-item" key={index}>
              <Link
                to={`${routeTo}`}
                style={{
                  fontWeight: 'bold',
                }}
                className="link"
              >
                {capatilize(name)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumb;
