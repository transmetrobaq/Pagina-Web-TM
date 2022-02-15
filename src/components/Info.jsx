import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/components/Info.css';

// eslint-disable-next-line arrow-body-style
const Info = () => {
  const [noti, setNoti] = useState([]);
  const [start] = useState(0);
  const [limit] = useState(3);
  /* const AP = `http://localhost:1337/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`; */
  const AP = `https://apiwebtm.com/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`;
  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resnoti = await axios.get(AP);
    setNoti(resnoti.data);
  }, [start, limit]);
  console.log(noti.url);
  return (
    <>
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#004f9f"
            d="M0,160L15,176C30,192,60,224,90,218.7C120,213,150,171,180,149.3C210,128,240,128,270,154.7C300,181,330,235,360,245.3C390,256,420,224,450,229.3C480,235,510,277,540,293.3C570,309,600,299,630,266.7C660,235,690,181,720,181.3C750,181,780,235,810,240C840,245,870,203,900,165.3C930,128,960,96,990,69.3C1020,43,1050,21,1080,48C1110,75,1140,149,1170,181.3C1200,213,1230,203,1260,165.3C1290,128,1320,64,1350,58.7C1380,53,1410,107,1425,133.3L1440,160L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"
          />
        </svg>
      </div>

      {/*  <div className="container content1">
        <div className="row g-4 ">
          <div className="col">
            <div className="card border-light mb-3 nav__infe-1">
              <div className="card-body text-primary ">
                <h5 className="card-title">Rutas Troncales</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-light mb-3 nav__infe-1">
              <div className="card-body text-primary">
                <h5 className="card-title">Rutas Alimentadoras</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-light mb-3 nav__infe-1">
              <div className="card-body text-primary">
                <h5 className="card-title">Transbordos</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-light mb-3 nav__infe-1">
              <div className="card-body text-primary">
                <h5 className="card-title">Mi Tarjeta</h5>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container">
        {/*  <!--INFO BLOQUE 4 Mapa---> */}
        {/* Mapa Troncal Bootstap */}
        <div className="container ">
          <div
            className="mapa__Troncal"
            style={{
              border: '2px solid #004f9f',
              borderRadius: '0px 30px 30px 30px',
            }}
          >
            <div
              className="card "
              style={{
                border: '2px solid #004f9f',
                borderRadius: '0px 0px 30px 30px',
                borderLeft: 'none',
                borderTop: 'none',
                width: '40%',
                backgroundColor: '#004f9f',
              }}
            >
              <div className="card-body">
                <h1 className="card-text text-center">Mapa Troncales</h1>
              </div>
            </div>

            <div
              className="card "
              style={{
                border: '2px solid #004f9f',
                borderRadius: '20px 20px 0 0',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
              }}
            >
              <div className="card-body">
                <div className="row g-0">
                  <div className="col-md-12 ">
                    <div className="card-text text-center">
                      <img
                        className="mapa__Troncal-img"
                        src="https://i.postimg.cc/4dbVfXgp/m1.jpg"
                        alt="mapa troncales"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card"
              style={{
                border: '2px solid #004f9f',
                borderRadius: '20px',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                marginBottom: '20px',
              }}
            >
              <div className="card-body">
                <div className="row  g-0 align-items-center">
                  <div className="col-md-6  ">
                    <h3>TRONCALES</h3>
                  </div>
                  <div className="col-md-6  ">
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i
                            className="far fa-square"
                            style={{ color: '#e30613' }}
                          />
                        </span>
                        Troncal Murillo
                      </li>
                      <li>
                        <span className="fa-li">
                          <i
                            className="far fa-square"
                            style={{ color: '#00a13a' }}
                          />
                        </span>
                        Troncal Olaya Herrera
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Todos contra el Covida */}
        <div className="container ">
          <div
            className="mapa__Troncal"
            style={{
              border: '2px solid #004f9f',
              borderRadius: '30px 30px 30px 30px',
            }}
          >
            <div
              className="card "
              style={{
                border: '2px solid #004f9f',
                borderRadius: '30px 30px 30px 30px',
                borderLeft: 'none',
                borderTop: 'none',
                borderRight: 'none',
                borderBottom: 'none',
              }}
            >
              <div className="card-body">
                <h3 className="card-text text-center">
                  TODOS CONTRA EL COVID-19
                </h3>
                <p className="card-text text-center">
                  Como protegerse y proteger a los demas
                </p>
              </div>
            </div>

            <div
              className="card"
              style={{
                border: '2px solid #004f9f',
                borderRadius: '20px',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                marginBottom: '20px',
              }}
            >
              <div className="card-body">
                <div className="row  g-0 ">
                  <center className="col-md-3 ">
                    <img
                      src="https://apiwebtm.com/uploads/Lavado_de_manos_7a58441131.png"
                      alt="icono lavado de manos"
                      style={{ width: '40%' }}
                    />
                    <p> Lavarse las manos </p>
                  </center>
                  <center className="col-md-3  ">
                    <img
                      src="https://apiwebtm.com/uploads/Mascarilla_ee3b44234e.png"
                      alt="icnono Uso mascarilla"
                      style={{ width: '40%' }}
                    />
                    <p>Uso mascarilla </p>
                  </center>
                  <center className="col-md-3  ">
                    <img
                      src="https://apiwebtm.com/uploads/Desinfeccion_846d77751e.png"
                      alt="icono Limpie y desinfecte"
                      style={{ width: '40%' }}
                    />
                    <p>Limpie y desinfecte </p>
                  </center>
                  <center className="col-md-3  ">
                    <img
                      src="https://apiwebtm.com/uploads/Destancia_d9347dfa76.png"
                      alt="icono Mantenga sana distancia"
                      style={{ width: '40%' }}
                    />
                    <p>Mantenga sana distancia </p>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--INFO BLOQUE 3---> */}
        {/*  <div className=" container-fluid bio">
          <div className="row borTerm1 text-center">
            <h3 className="  "> TODOS CONTRA EL COVID-19</h3>
            <p className="">Como protegerse y proteger a los demas</p>
          </div>
          <div className="container icono__Cv">
            <div className="row text-center">
              <div className=" card-body">
                <ul className="list-group  flex-row  ">
                  <li className="col-md-3 list-group-item border-0  ">
                    <img
                      src="http://34.125.209.125/uploads/Lavado_de_manos_8c57c76e31.png"
                      alt="icono lavado de manos"
                    />
                    <p> Lavarse las manos </p>
                  </li>
                  <li className=" col-md-3 list-group-item  border-0 ">
                    <img
                      src="http://34.125.209.125/uploads/Mascarilla_f99c0ef375.png"
                      alt="icnono Uso mascarilla"
                    />
                    <p>Uso mascarilla </p>
                  </li>
                  <li className=" list-group-item border-0  ">
                    <img
                      src="http://34.125.209.125/uploads/Desinfeccion_99d7ebbe74.png"
                      alt="icono Limpie y desinfecte"
                    />
                    <p>Limpie y desinfecte </p>
                  </li>
                  <li className=" list-group-item border-0  ">
                    <img
                      src="http://34.125.209.125/uploads/Destancia_745837c724.png"
                      alt="icono Mantenga sana distancia"
                    />
                    <p>Mantenga sana distancia </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>  */}
        {/* Card Bloque Troncales  */}

        {/* Cards Troncales */}
        <div className="container">
          <div
            className="containerr"
            style={{
              border: '2px solid #004f9f',
              borderRadius: '20px',
            }}
          >
            <div
              className="card"
              style={{
                border: '2px solid #004f9f',
                borderRadius: '20px 20px 0 0',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
              }}
            >
              <div className="card-body">
                <p className="card-text">
                  Los servicios Troncales agilizan el traslado de los usuarios
                  porque transitan por carriles excusivos (Solo Bus) de las
                  troncales Murillo y Olaya Herrera para llevar a los ciudadanos
                  a las diferentes estaciones y portales con los que cuenta el
                  Sistema Masivo.
                </p>
              </div>
            </div>

            <div
              className="card "
              style={{
                border: '2px solid #004f9f',
                borderRadius: '20px 20px 0 0',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
              }}
            >
              <div className="card-body">
                <div className="row g-0">
                  <div className="col-md-3 ">
                    <h3>TRONCAL MURILLO</h3>
                    <div className="cars-ico">
                      <img
                        src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                        alt="icono bus"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <ol>
                      <li>
                        Portal <span>de Soledad</span> - Calle 65 # 13 - 455
                        (Soledad, Atl.).
                      </li>
                      <li>
                        Estacion <span>Pedro Ramayá Beltran</span> - Entre
                        carreras 23 y Av. Circunvalar (Soledad, Atl.).
                      </li>
                      <li>
                        Estacion <span>Pacho Galán</span> - Entre carreras 16 y
                        17 (Soledad, Atl.).
                      </li>
                      <li>
                        Estacion <span>Joaquin Barrios Polo</span> - Entre
                        carreras 1G y 2A.
                      </li>
                      <li>
                        Estacion <span>Buenos Aires</span> - Entres carrera 7 y
                        7G.
                      </li>
                      <li>
                        Estacion <span>LA Ocho</span> - Entre carreras 8 y 8C.
                      </li>
                      <li>
                        Estacion <span>La Catorce</span> - Entre carreras 14 y
                        17.
                      </li>
                      <li>
                        Estacion <span>La Veintiuna</span> - Entre carreras 20 y
                        21.
                      </li>
                      <li>
                        Estacion <span>Atlántico</span> - Entre carreras 26 y
                        27.
                      </li>
                      <li>
                        Estacion <span>Chiquinquirá</span> - Entre carreras 33 y
                        36.
                      </li>
                      <li>
                        Estacion <span>La Arenosa</span> - Entre carreras 41 y
                        43.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card"
              style={{
                border: '2px solid #004f9f',
                borderRadius: '20px',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                marginBottom: '20px',
              }}
            >
              <div className="card-body">
                <div className="row  g-0">
                  <div className="col-md-6  ">
                    <h3>TRONCAL OLAYA HERRERA</h3>
                    <div className="cars-ico ">
                      <img
                        src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                        alt="icono bus"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <ol>
                      <li>
                        Estacion retorno <span>Joe Arroyo</span> - Carrera 46
                        con calle 74.
                      </li>
                      <li>
                        Estacion <span>Esthercita Forero</span> - Entre calles
                        69 y 70.
                      </li>
                      <li>
                        Estacion <span>Alfredo Correa De Andréis</span> - Entre
                        calles 60 y 62.
                      </li>
                      <li>
                        Estacion <span>La Catedral</span> - Entre calles 50 y
                        53.
                      </li>
                      <li>
                        Estacion <span>Barrio Abajo</span> - Entre calles 43 y
                        45.
                      </li>
                      <li>
                        Estacion <span>Parque Cultural</span> - Entre calles 36
                        y 39.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Alimentadoras */}
        <div className="container">
          <div
            className="containerr"
            style={{
              border: '2px solid #004f9f',
              borderRadius: '20px',
            }}
          >
            <div
              className="card"
              style={{
                border: '2px solid #004f9f',
                borderRadius: '20px 20px 0 0',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
              }}
            >
              <div className="card-body">
                <p className="card-text">
                  Estos servicios conectan a los usuarios ubicados en barrios
                  alejados de las troncales a través de las estaciones del
                  Sistema o de paraderos cercanos a estas con la posibilidad de
                  hacer transbordos a los servicios troncales sin ningún costo
                  adicional para el ciudadano
                </p>
              </div>
            </div>

            <div
              className="card"
              style={{
                border: '2px solid #004f9f',
                borderRadius: '20px',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                marginBottom: '20px',
              }}
            >
              <div className="card-body">
                <div className="row  g-0">
                  <div className="col-md-6  ">
                    <h3>RUTAS ALIMENTADORAS</h3>
                    <div className="cars-ico ">
                      <img
                        src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                        alt="icono bus"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <ol>
                      <li>
                        Estacion retorno <span>Joe Arroyo</span> - Carrera 46
                        con calle 74.
                      </li>
                      <li>
                        Estacion <span>Esthercita Forero</span> - Entre calles
                        69 y 70.
                      </li>
                      <li>
                        Estacion <span>Alfredo Correa De Andréis</span> - Entre
                        calles 60 y 62.
                      </li>
                      <li>
                        Estacion <span>La Catedral</span> - Entre calles 50 y
                        53.
                      </li>
                      <li>
                        Estacion <span>Barrio Abajo</span> - Entre calles 43 y
                        45.
                      </li>
                      <li>
                        Estacion <span>Parque Cultural</span> - Entre calles 36
                        y 39.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="title-cards">
          <Link
            to="/noticias"
            alt="Ver Noticias"
            style={{ textDecoration: 'none' }}
          >
            <h2>NOTICIAS</h2>
          </Link>
        </div>
        <div className="container__card-noti">
          {noti.map((notis) => (
            <div className="cards" key={notis.id}>
              <figure>
                <img src={`https://apiwebtm.com${notis.url}`} alt={notis.alt} />
                <div className="linea-colores1" />
              </figure>

              <div className="contenido-card-noti">
                <small className="text-muted">Fecha: {notis.date}</small>
                <h3>{notis.title}</h3>
                {/* <p>{noti.content}</p> */}
                <Link
                  to={`/noticias/${notis.slug}`}
                  role="button"
                  className="btn btn-outline-primary"
                  alt="Ver Noticia"
                >
                  Ver Noticia
                </Link>
              </div>
            </div>
          ))}

          {/* <!--FIN DE INFO BLOQUE 3---> */}
        </div>
      </div>

      {/* Movilizados */}
      <div className="container-fluid card__Movi">
        <div className="row justify-content-center ">
          <div className="card mb-3 movilizado ">
            <div className="row g-0 ">
              <div className="col-md-6">
                <div className="card-body  usu-movilizados">
                  <h2 className="card-text text-center">
                    Usuarios
                    <strong className="text-danger"> movilizados</strong>
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <img
                    src="https://apiwebtm.com/uploads/bus_movilizados_836a10bb99.png"
                    alt="Bus Transmetro"
                  />
                  <h2 className="card-title text">
                    <strong className="text-danger">350.718.296</strong>{' '}
                  </h2>
                  <p className="card-text">
                    Desde el 10 de Julio de 2010 hasta el 2 de Enero de 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fin Movilizados */}
    </>
  );
};

export default Info;
