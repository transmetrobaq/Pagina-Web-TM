/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Infra = () => (
  <>
    {/* Card Bloque Troncales  */}

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
              <h2 className="card-text text-center">Mapa Troncales</h2>
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
                    <iframe
                      src="https://www.google.com/maps/d/embed?mid=1pMSLCHvUZGZ0VYNxKPTSu0yQNKHFv7iI&ehbc=2E312F"
                      width="100%"
                      height="480"
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
                Los servicios troncales agilizan el traslado de los usuarios
                porque transitan por carriles excusivos (Solo Bus) de las
                troncales Murillo y Olaya Herrera para llevar a los ciudadanos a
                las diferentes estaciónes y portales con los que cuenta el
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
                  <h5>TRONCAL MURILLO</h5>
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
                      Estación <span>Pedro Ramayá Beltran</span> - Entre
                      carreras 23 y Av. Circunvalar (Soledad, Atl.).
                    </li>
                    <li>
                      Estación <span>Pacho Galán</span> - Entre carreras 16 y 17
                      (Soledad, Atl.).
                    </li>
                    <li>
                      Estación <span>Joaquín Barrios Polo</span> - Entre
                      carreras 1G y 2A.
                    </li>
                    <li>
                      Estación <span>Buenos Aires</span> - Entres carrera 7 y
                      7G.
                    </li>
                    <li>
                      Estación <span>LA Ocho</span> - Entre carreras 8 y 8C.
                    </li>
                    <li>
                      Estación <span>La Catorce</span> - Entre carreras 14 y 17.
                    </li>
                    <li>
                      Estación <span>La Veintiuna</span> - Entre carreras 20 y
                      21.
                    </li>
                    <li>
                      Estación <span>Atlántico</span> - Entre carreras 26 y 27.
                    </li>
                    <li>
                      Estación <span>Chiquinquirá</span> - Entre carreras 33 y
                      36.
                    </li>
                    <li>
                      Estación <span>La Arenosa</span> - Entre carreras 41 y 43.
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
                <div className="col-md-4  ">
                  <h5>TRONCAL OLAYA HERRERA</h5>
                  <div className="cars-ico ">
                    <img
                      src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                      alt="icono bus"
                    />
                  </div>
                </div>
                <div className="col-md-8 ">
                  <ol>
                    <li>
                      Estación retorno <span>Joe Arroyo</span> - Carrera 46 con
                      calle 74.
                    </li>
                    <li>
                      Estación <span>Esthercita Forero</span> - Entre calles 69
                      y 70.
                    </li>
                    <li>
                      Estación <span>Alfredo Correa De Andréis</span> - Entre
                      calles 60 y 62.
                    </li>
                    <li>
                      Estación <span>La Catedral</span> - Entre calles 50 y 53.
                    </li>
                    <li>
                      Estación <span>Barrio Abajo</span> - Entre calles 43 y 45.
                    </li>
                    <li>
                      Estación <span>Parque Cultural</span> - Entre calles 36 y
                      39.
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
                alejados de las troncales a través de las estaciónes del Sistema
                o de paraderos cercanos a estas con la posibilidad de hacer
                transbordos a los servicios troncales sin ningún costo adicional
                para el ciudadano
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
                <div className="col-md-4  ">
                  <a href="/sistema/rutas_alimentadoras/#rutas-alimentadoras">
                    <h5>RUTAS ALIMENTADORAS</h5>
                  </a>

                  <div className="cars-ico ">
                    <img
                      src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                      alt="icono bus"
                    />
                  </div>
                </div>
                <div className="col-md-4 ">
                  <ul>
                    <li>
                      A1-2 <span>Carrera Ocho </span>
                    </li>
                    <li>
                      A1-3 <span>Galán </span>
                    </li>
                    <li>
                      A1-4 <span>La Magdalena</span>
                    </li>
                    <li>
                      A2-1 <span>Hipódromo</span>
                    </li>
                    <li>
                      A3-1 <span>Villa Katanga</span>
                    </li>
                    <li>
                      A3-2 <span>Soledad 2000</span>
                    </li>
                    <li>
                      A3-3 <span>Manuela Beltran</span>
                    </li>
                    <li>
                      A3-40 <span>Villa Sol (SUSPENDIDA)</span>
                    </li>
                    <li>
                      A3-41 <span>Villa Karla</span>
                    </li>
                    <li>
                      A3-4 <span>Villa Sol </span>
                    </li>
                    <li>
                      A3-5 <span>Ciudadela Metropolitana (SUSPENDIDA)</span>
                    </li>
                    <li>
                      A5-1 <span>Los Robles</span>
                    </li>
                    <li>
                      A5-2 <span>Las Moras</span>
                    </li>
                    <li>
                      A5-3 <span>La Central</span>
                    </li>
                    <li>
                      A5-4 <span>San Antonio</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4" id="ali">
                  <ul>
                    <li>
                      A5-5 <span>Manantial</span>
                    </li>
                    <li>
                      A5-6 <span>Desde Granabastos</span>
                    </li>
                    <li>
                      A6-5 <span>Carrizal</span>
                    </li>
                    <li>
                      A6-6 <span>Manantial</span>
                    </li>
                    <li>
                      A7-1 <span>Miramar</span>
                    </li>
                    <li>
                      A7-3 <span>Carrera 38</span>
                    </li>
                    <li>
                      A7-4 <span>Los Andes</span>
                    </li>
                    <li>
                      A8-1 <span>Paraíso</span>
                    </li>
                    <li>
                      A8-2 <span>Vía 40</span>
                    </li>
                    <li>
                      A8-3 <span>Prado</span>
                    </li>
                    <li>
                      A9-3 <span>Buenavista</span>
                    </li>
                    <li>
                      A9-4 <span>Carrera 46</span>
                    </li>
                    <li>
                      U-30 <span>Universidades</span>
                    </li>
                    <li>
                      <span>Gran Malecón</span>
                    </li>
                    {/*  <li>
                <span>Ventana al Mundo</span>
                
                </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Infra;
