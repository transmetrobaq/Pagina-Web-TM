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

  const [profileData, setprofileData] = useState([]);
  /* const AP = `https://apiwebtm.com/directorio-funcionarios?_limit=${limit}&_start=${start}&_sort=date:DESC`; */
  /* const AP = `https://apiwebtm.com/directorio-funcionarios?_limit=${limit}&_start=${start}`; */
  const AP = `https://apiwebtm.com/pqrs-anonimas?_limit=${limit}&_start=${start}&_sort=Fecha:DESC`;
  const [totalCount, setTotalCount] = useState([]);

  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resdirect = await axios.get(AP);
    /* setNoti(resnoti.data.data.slice(start, limit)); */
    setDirect(resdirect.data);
    setprofileData(resdirect.data);
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

  /*  const [profileData, setprofileData] = useState([
    {
      name: 'Brian Kernighan',
      email: 'brian@test.com',
      password: 'password1',
      skills: ['AWK', 'AMPL', 'Unix'],
    },
    {
      name: 'Max Kanat-Alexander',
      email: 'max@test.com',
      password: 'password1',
      skills: ['Java', 'Perl', 'Apache', 'Python'],
    },
    {
      name: 'Spruce Emmanuel',
      email: 'new@test.com',
      password: 'password1',
      skills: ['JavaScript', 'Perl', 'Apache', 'Node.js'],
    },
  ]); */
  const [q, setQ] = useState('');
  const [searchTerm] = useState(['radicado', 'asunto']);

  const search = (items) => {
    return items.filter((item) => {
      return searchTerm.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  /* Fin de busqueda */

  return (
    <>
      {/* Buscador */}
      <div className="container directorio_Fun">
        <div>
          <h2 className="text-center">
            Respuestas a peticiones anónimas o sin dirección
          </h2>
          <div className="card border-light">
            <div className="mb-3" style={{ width: '50%', color: '#002856' }}>
              <label className="form-label fw-bold">No. Radicado</label>
              <input
                type="text"
                className="form-control"
                placeholder="Example 20230101-001-PQ"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
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
                </tr>
              </thead>
              <tbody>
                {search(profileData).map((val) => (
                  <tr key={val.id}>
                    <th>
                      {val.documento.map((documento) => (
                        <a
                          href={`https://apiwebtm.com${documento.url}`}
                          target="_blank"
                          rel="noreferrer"
                          aria-hidden
                          key={documento.id}
                        >
                          <p>{val.radicado}</p>
                        </a>
                      ))}
                      {/*   <a
                        href={`https://apiwebtm.com/${val.documento.url}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p> {val.radicado}</p>
                      </a> */}
                    </th>
                    <td>
                      <p>{val.fecha}</p>
                    </td>
                    <td>
                      <p>{val.asunto}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Directorio */}
      {/*   <div className="container directorio_Fun">
        <h2 className="text-center">Respuestas a peticiones anónimas</h2>
        <div className="card border-light">
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
      </div> */}

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
