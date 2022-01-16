import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/components/Info.css';

// eslint-disable-next-line arrow-body-style
const Info = () => {
  const [noti, setNoti] = useState([]);
  const [start] = useState(0);
  const [limit] = useState(3);
  const AP = `http://localhost:1337/noticias?_limit=${limit}&_start=${start}&_sort=date:DESC`;

  useEffect(async () => {
    /* Get Api Filtrada inicio-limite-Descendente */
    const resnoti = await axios.get(AP);
    setNoti(resnoti.data);
  }, [start, limit]);

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

        <div className="container mapa ">
          <div className="row map ">
            <h4 className="text-center">MAPA TRONCALES</h4>
          </div>

          <div className="card-body">
            <div className="card-text text-center">
              <span>
                {' '}
                <img
                  className="img-mapa"
                  src="https://i.postimg.cc/4dbVfXgp/m1.jpg"
                  alt="troncales"
                />
              </span>
            </div>
          </div>

          <div className="row borTerm">
            <div className="col-4 col-md-4  col-sm-6 text-center">
              <h5>TRONCALES</h5>
            </div>
            <div className=" col-8 col-sm-6 col-md-8 ">
              <div className="text-center">
                <i className="fas fa-square icono-map1 fa-1x">
                  <span className="text-map">Troncal Murrillo</span>
                </i>
                <i className="fas fa-square icono-map2 fa-1x">
                  <span className="text-map text-center">
                    Troncal Olaya Herrera
                  </span>
                </i>
              </div>
            </div>
          </div>
        </div>
        {/* <!--INFO BLOQUE 3---> */}
        <div className=" container-fluid bio">
          <div className="row borTerm1 text-center">
            <h3 className="  "> TODOS CONTRA EL COVID-19</h3>
            <p className="">Como protegerse y proteger a los demas</p>
          </div>
          <div className="container icono__Cv">
            <div className="row text-center">
              <ul className="list-group  flex-row  ">
                <li className=" list-group-item border-0  ">
                  <img
                    src="http://localhost:1337/uploads/Lavado_de_manos_67a04dad81.png"
                    alt=""
                  />
                  <p> Lavarse las manos </p>
                </li>
                <li className=" list-group-item  border-0 ">
                  <img
                    src="http://localhost:1337/uploads/Mascarilla_2b65140801.png"
                    alt=""
                  />
                  <p>Uso mascarilla </p>
                </li>
                <li className=" list-group-item border-0  ">
                  <img
                    src="http://localhost:1337/uploads/Desinfeccion_312bb6f1bd.png"
                    alt=""
                  />
                  <p>Limpie y desinfecte </p>
                </li>
                <li className=" list-group-item border-0  ">
                  <img
                    src="http://localhost:1337/uploads/Destancia_cb36bc889e.png"
                    alt=""
                  />
                  <p>Mantenga sana distancia </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Card Bloque Troncales  */}
        <div className="container card__Troncales">
          <div className="row">
            <div className="col-3 ">
              <h3>TRONCAL MURILLO</h3>
              <div className="cars-ico">
                <img
                  src="http://localhost:1337/uploads/icosn_05_5f87539d14.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col order-1">
              <ol>
                <li>
                  Portal <span>de Soledad</span> - Calle 65 # 13 - 455 (Soledad,
                  Atl.).
                </li>
                <li>
                  Estacion <span>Pedro Ramayá Beltran</span> - Entre carreras 23
                  y Av. Circunvalar (Soledad, Atl.).
                </li>
                <li>
                  Estacion <span>Pacho Galán</span> - Entre carreras 16 y 17
                  (Soledad, Atl.).
                </li>
                <li>
                  Estacion <span>Joaquin Barrios Polo</span> - Entre carreras 1G
                  y 2A.
                </li>
                <li>
                  Estacion <span>Buenos Aires</span> - Entres carrera 7 y 7G.
                </li>
                <li>
                  Estacion <span>LA Ocho</span> - Entre carreras 8 y 8C.
                </li>
                <li>
                  Estacion <span>La Catorce</span> - Entre carreras 14 y 17.
                </li>
                <li>
                  Estacion <span>La Veintiuna</span> - Entre carreras 20 y 21.
                </li>
                <li>
                  Estacion <span>Atlántico</span> - Entre carreras 26 y 27.
                </li>
                <li>
                  Estacion <span>Chiquinquirá</span> - Entre carreras 33 y 36.
                </li>
                <li>
                  Estacion <span>La Arenosa</span> - Entre carreras 41 y 43.
                </li>
              </ol>
            </div>
            {/*  <div className="col-5 order-2">
              <ol></ol>
            </div> */}
          </div>
        </div>
        <div className="container card__Troncales">
          <div className="row">
            <div className="col-4 ">
              <h3>TRONCAL OLAYA HERRERA</h3>
              <div className="cars-ico">
                <img
                  src="http://localhost:1337/uploads/icosn_05_5f87539d14.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 order-1">
              <ol>
                <li>
                  Estacion retorno <span>Joe Arroyo</span> - Carrera 46 con
                  calle 74.
                </li>
                <li>
                  Estacion <span>Esthercita Forero</span> - Entre calles 69 y
                  70.
                </li>
                <li>
                  Estacion <span>Alfredo Correa De Andréis</span> - Entre calles
                  60 y 62.
                </li>
                <li>
                  Estacion <span>La Catedral</span> - Entre calles 50 y 53.
                </li>
                <li>
                  Estacion <span>Barrio Abajo</span> - Entre calles 43 y 45.
                </li>
                <li>
                  Estacion <span>Parque Cultural</span> - Entre calles 36 y 39.
                </li>
              </ol>
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
          {noti.map((noti) => (
            <div className="cards" key={noti.id}>
              <figure>
                <img
                  src={`http://localhost:1337${noti.image.url}`}
                  alt={noti.alt}
                />
                <div className="linea-colores1" />
              </figure>

              <div className="contenido-card-noti">
                <small className="text-muted">Fecha: {noti.date}</small>
                <h3>{noti.title}</h3>
                {/* <p>{noti.content}</p> */}
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
          ))}

          {/* <!--FIN DE INFO BLOQUE 3---> */}
        </div>
      </div>

      {/* Movilizados */}
      <div className="container-fluid card__Movi">
        {/*  <img
          src="http://localhost:1337/uploads/Recurso_2_4424b1663a.png"
          className="card-img"
          alt="usuaria con tarjeta transmetro"
        /> */}
      </div>
      <div className="container-fluid">
        <div className="row card__Movil">
          <img
            src="http://localhost:1337/uploads/icosn_06_c2501f2cb4.png"
            className="col-10 "
            alt="usuaria con tarjeta transmetro"
          />
        </div>
        <div className="row justify-content-end">
          <div className="col-10 car__Movi-1">
            <h4> Usuarios Movilizados</h4>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-6 car__Movi-2">
            <h4>123.321</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
