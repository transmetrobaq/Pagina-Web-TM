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

  const [filterData, setFilterData] = useState([]);
  const [wordEnter, setWordEnter] = useState('');

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

  /* Busqueda */

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEnter(searchWord);
    /* const newFilter = direct.filter((value) =>
      value.title.toLowerCase().includes(searchWord.toLowerCase())
    ); */
    console.log(searchWord);
    if (searchWord === '') {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  /* Fin de busqueda */

  return (
    <>
      {/* Buscador */}
      <div className="mb-3" style={{ width: '50%', marginLeft: '100px' }}>
        <label htmlFor="formGroupExampleInput" className="form-label">
          No. Radicado
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Ejemplo TM-20230210"
          value={wordEnter}
          onChange={handleFilter}
        />
      </div>
      {filterData.length === 0 && (
        <div className="dataResult">
          {filterData.slice(0, 15).map((value) => (
            <a
              className="dataItem"
              href={`/noticias/${value.slug}/#noti`}
              target="_blank"
              rel="noreferrer"
              key={direct.id}
            >
              <p>{value.name}... </p>
            </a>
          ))}
        </div>
      )}

      {/* Directorio */}
      <div className="container directorio_Fun">
        <h2 className="text-center">Respuestas a peticiones anónimas</h2>
        <div
          className="card border-light
        "
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">
                  <h5>No. Radicado</h5>
                </th>
                <th scope="col">
                  <h5>Fecha de Radicación</h5>
                </th>
                <th scope="col">
                  <h5>Asunto</h5>
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
