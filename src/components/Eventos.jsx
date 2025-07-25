/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/Eventos.css';

const Eventos = () => {
  /* const [activeTab, setActiveTab] = useState('1'); */

  /* const AP = `https://apiwebtm.com/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`; */

  /*   const cambiarTab = (numeroTab) => {
    if (activeTab !== numeroTab) {
      setActiveTab(numeroTab);
    }
  }; */

  const [evento, setEvento] = useState([]);
  const [start, setStart] = useState('2022-01-01');
  const [limit, setLimit] = useState('2022-01-31');
  // const AP = `https://apiwebtm.com/eventos?fecha_gte=${start}&fecha_lte=${limit}`;
  const AP = `https://apiwebtm.com/eventos?fecha_gte=${start}&fecha_lte=${limit}&_sort=fecha:ASC`;
  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const reseve = await axios.get(AP);
    setEvento(reseve.data);

    /*  setNoti1(resnoti.data.data[0].attributes);
    setNoti2(resnoti.data.data[1].attributes);
    setNoti3(resnoti.data.data[2].attributes); */

    /* console.log(reseve.data); */
  }, [start, limit]);

  const handleSelectChange = (e) => {
    /* setStart('2022-12-01');
    setLimit('2022-12-31'); */
    const fch = e.target.value;
    if (fch === '0')
      {
        setStart('2022-01-01');
         setLimit('2022-01-31');
     }
       if (fch === '1') {
       setStart('2025-01-01');
       setLimit('2025-01-31');
       }
       if (fch === '2') {
         setStart('2025-02-01');
         setLimit('2025-02-28');
              }
        if (fch === '3') {
        setStart('2025-03-01');
        setLimit('2025-03-31');
        }
        if (fch === '4') {
          setStart('2025-04-01');
          setLimit('2025-04-30');
        }
        if (fch === '5') {
          setStart('2025-05-01');
          setLimit('2025-05-31');
        }
        if (fch === '6') {
          setStart('2025-06-01');
          setLimit('2025-06-30');
        }
          if (fch === '7') {
          setStart('2025-07-01');
          setLimit('2025-07-31');
        }
        
    // 2024
    // {
    //     setStart('2022-01-01');
    //      setLimit('2022-01-31');
    //  }
    //    if (fch === '1') {
    //    setStart('2024-01-01');
    //    setLimit('2024-01-31');
    //    }
    //    if (fch === '2') {
    //        setStart('2024-02-01');
    //       setLimit('2024-02-29');
    //      }
    //      if (fch === '3') {
    //       setStart('2024-03-01');
    //      setLimit('2024-03-31');
    //     }
    //     if (fch === '4') {
    //       setStart('2024-04-01');
    //      setLimit('2024-04-30');
    //     }
    //     if (fch === '5') {
    //       setStart('2024-05-01');
    //      setLimit('2024-05-31');
    //     }
    //     if (fch === '6') {
    //       setStart('2024-06-01');
    //      setLimit('2024-06-30');
    //     }
    //     if (fch === '7') {
    //       setStart('2024-07-01');
    //      setLimit('2024-07-31');
    //     }
    //     if (fch === '8') {
    //       setStart('2024-08-01');
    //      setLimit('2024-08-31');
    //     }
    //     if (fch === '9') {
    //       setStart('2024-09-01');
    //      setLimit('2024-09-30');
    //     }
    //     if (fch === '10') {
    //       setStart('2024-10-01');
    //      setLimit('2024-10-31');
    //     }
    //     if (fch === '11') {
    //       setStart('2024-11-01');
    //      setLimit('2024-11-30');
    //     }
    //     if (fch === '12') {
    //       setStart('2024-12-01');
    //      setLimit('2024-12-31');
    //     }
        
   // 2023
    // if (fch === '0') {
    //   setStart('2022-01-01');
    //   setLimit('2022-01-31');
    // }
    // if (fch === '1') {
    //   setStart('2023-01-01');
    //   setLimit('2023-01-31');
    // }
    // if (fch === '2') {
    //   setStart('2023-02-01');
    //   setLimit('2023-02-28');
    // }
    // if (fch === '3') {
    //   setStart('2023-03-01');
    //   setLimit('2023-03-31');
    // }
    // if (fch === '4') {
    //   setStart('2023-04-01');
    //   setLimit('2023-04-30');
    // }
    // // mayo
    // if (fch === '5') {
    //   setStart('2023-05-01');
    //   setLimit('2023-05-31');
    // }
    //  // junio
    //  if (fch === '6') {
    //   setStart('2023-06-01');
    //   setLimit('2023-06-30');
    // }
    // // julio
    // if (fch === '7') {
    //   setStart('2023-07-01');
    //   setLimit('2023-07-31');
    // }
    // // Agosto
    // if (fch === '8') {
    //   setStart('2023-08-01');
    //   setLimit('2023-08-31');
    // }
    // // septiembre
    // if (fch === '9') {
    //   setStart('2023-09-01');
    //   setLimit('2023-09-30');
    // }
    // // Octubre
    // if (fch === '10') {
    //   setStart('2023-10-01');
    //   setLimit('2023-10-31');
    // }
    // // Noviembre

    // if (fch === '11') {
    //   setStart('2023-11-01');
    //   setLimit('2023-11-30');
    // }
    //  // Diciembre
    // if (fch === '12') {
    //   setStart('2023-12-01');
    //   setLimit('2023-12-31');
    // }
    /* console.log(e.target.value);
    console.log(fch); */
  };
  return (
    <section className="container-xxl pb-5">
      <div className="container">
        <h2 className="section-title h1" id='Eventos'>Eventos</h2>
        <select
          className="form-select"
          aria-label="Default select example"
          style={{ marginBottom: '50px' }}
          onChange={handleSelectChange}
        >
          <option defaultValue value="0">
            Seleccionar Mes
          </option>
          {/* <option value="1">Enero</option>
          <option value="2">Febrero</option>
          <option value="3">Marzo</option> */}
          <option value="1">Enero</option>
          <option value="2">Febrero</option>
          <option value="3">Marzo</option>
          <option value="4">Abril</option>
          <option value="5">Mayo</option>
          <option value="6">Junio</option>
          <option value="7">Julio</option>
          {/* <option value="2">Febrero</option>
          <option value="3">Marzo</option>
          <option value="4">Abril</option>
          <option value="5">Mayo</option>
          <option value="6">Junio</option>
          <option value="7">Julio</option>
          <option value="8">Agosto</option>
          <option value="9">Septiembre</option>
          <option value="10">Octubre</option>
          <option value="11">Noviembre</option>
          <option value="12">Diciembre</option>
           */}
        </select>

        <div className="row " id="team">
          {evento
            ? evento.map((event) => (
                <div className="col-xs-12 col-sm-6 col-md-4" key={event.id}>
                  <div className="image-flip">
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body ">
                            <h5 className="card-title">{event.titulo}</h5>
                            <div className="linea-colores-evento" />
                            <p className="card-text">
                              <span>Lugar:</span> {event.lugar}
                            </p>
                            <p className="card-text">
                              <span>Fecha:</span> {event.fecha}
                            </p>
                            {/* <p className="card-text">
                              <span>Hora:</span> {event.hora}
                            </p> */}
                            <p className="card-text">
                              <span>Ruta/Ajuste:</span> {event.ruta}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body  ">
                            <h5 className="card-title">Descripción</h5>
                            <p className="card-text">{event.descripcion}</p>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a
                                  className="social-icon text-xs-center"
                                  target="_blank"
                                  href="https://www.facebook.com/transmetrobaq/"
                                  rel="noreferrer"
                                  aria-label="Facebook Transmetro"
                                >
                                  <i className="fa fa-facebook" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  className="social-icon text-xs-center"
                                  target="_blank"
                                  href="https://twitter.com/transmetrobaq"
                                  rel="noreferrer"
                                  aria-label="X Twitter Transmetro"
                                >
                                  <i className="fa-brands fa-x-twitter" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  className="social-icon text-xs-center"
                                  target="_blank"
                                  href="https://www.instagram.com/transmetrobaq/?hl=es"
                                  rel="noreferrer"
                                  aria-label="Instagram Transmetro"
                                >
                                  <i className="fa fa-instagram" />
                                </a>
                              </li>
                              {/* <li className="list-inline-item">
                                <a
                                  className="social-icon text-xs-center"
                                  target="_blank"
                                  href="/"
                                >
                                  <i className="fab fa-tiktok" />
                                </a>
                              </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </section>
  );
};

export default Eventos;
