/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/Directorio.css';

const Funcionario = () => {
  const [direct, setDirect] = useState([]);
  const [start, setStart] = useState(0);
  const [limit] = useState(10);
  /* const AP = `https://apiwebtm.com/directorio-funcionarios?_limit=${limit}&_start=${start}&_sort=date:DESC`; */
  const AP = `https://apiwebtm.com/directorio-funcionarios?_limit=${limit}&_start=${start}`;
  const [totalCount, setTotalCount] = useState([]);

  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resdirect = await axios.get(AP);
    /* setNoti(resnoti.data.data.slice(start, limit)); */
    setDirect(resdirect.data);
    /* console.log(resdirect.data); */
    /* Get Total de Arrays */
    const resCount = await axios.get(
      `https://apiwebtm.com/directorio-funcionarios/count`
    );
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
      <div className="container directorio_Fun">
        <h2 className="text-center">DIRECTORIO DE FUNCIONARIOS</h2>
        <div
          className="card border-light
        "
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">
                  <h5>Nombre</h5>
                </th>
                <th scope="col">
                  <h5>Cargo</h5>
                </th>
                <th scope="col">
                  <h5>Dependiencia</h5>
                </th>
                {/* <th scope="col">
                  <h5>H.V</h5>
                </th> */}
              </tr>
            </thead>
            <tbody>
              {direct
                ? direct.map((directs) => (
                    <tr key={directs.id}>
                      <th>
                        <a href="#segunda-seccion">
                          <p> {directs.name}</p>
                        </a>
                      </th>
                      <td>
                        <p>{directs.actividad}</p>
                      </td>
                      <td>
                        <p>{directs.dependencia}</p>
                      </td>
                      {/*  <th>
                        <a href="#segunda-seccion">
                          <p>H.V</p>
                        </a>
                      </th> */}
                    </tr>
                  ))
                : 'Loading...'(
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Buttom prev - Next */}
      <div className="navPage">
        <span>
          <button
            className="btn btn-outline-primary"
            style={{ fontWeight: 'bold' }}
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
            style={{ fontWeight: 'bold' }}
            role="button"
            disabled={totalCount && start + limit >= totalCount}
            onClick={nextPage}
            alt="Siguiente Noticia"
          >
            Siguiente
          </button>
        </span>
      </div>
    </>
  );
};

export default Funcionario;
