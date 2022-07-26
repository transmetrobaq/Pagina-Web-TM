/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import '../styles/components/Estaciones.css';

function Estaciones() {
  return (
    <div className="container" id="estaciones">
      {/* Cards Troncales */}

      {/* <h1 className="text-center">ESTACIONES</h1> */}
      {/* Cards Estaciones */}
      {/* Cards Estaciones */}

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
            border: '0px none #fff',
            borderRadius: '20px 20px 0px 0px',
          }}
        >
          <div className="card-body">
            <h2 className="card-text text-center">ESTACIONES</h2>
            <p className="card-text">
              Las estaciones son los puntos de abordaje de vehículos ubicadas a
              lo largo de las dos troncales que componen nuestro Sistema:
              Troncal Murillo (calle 45) y Troncal Olaya Herrera (carrera 46).
              En ellas los usuarios pueden adquirir sus tarjetas, recargarlas,
              verificar sus saldos y validar sus pasajes para poder acceder a
              las rutas troncales corrientes y expresas, así como a las rutas
              alimentadoras.
            </p>
          </div>
        </div>

        <div
          className="card mb-3"
          style={{
            borderTop: '2px solid #004F9F',
            borderRadius: '20px 20px 0px 0px',
            borderBottom: 'none',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        >
          <div className="row g-0">
            <div
              className="col-md-3 icobus align-self-center
                 "
            >
              <h5 className="text-center">TRONCAL MURILLO</h5>

              <img
                src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                className="img-fluid  mx-auto d-block ico__Bus-rojo"
                alt="icono bus"
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <ol>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-portal-de-soledad/#estacion"
                      role="button"
                      alt="estacion portal de soledad"
                    >
                      Portal <span>de Soledad</span> - Calle 65 # 13 - 455
                      (Soledad, Atl.).
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-pedro-ramaya/#estacion"
                      role="button"
                      alt="estacion pedro ramaya"
                    >
                      Estación <span>Pedro Ramayá Beltrán</span> - Entre
                      carreras 23 y Av. Circunvalar (Soledad, Atl.).
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-pacho-galan/#estacion"
                      role="button"
                      alt="estacion pacho galan"
                    >
                      Estación <span>Pacho Galán</span> - Entre carreras 16 y 17
                      (Soledad, Atl.).
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-joaquin-barrios-polo/#estacion"
                      role="button"
                      alt="estacion joaquin barrios polo"
                    >
                      Estación <span>Joaquín Barrios Polo</span> - Entre
                      carreras 1G y 2A.
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-buenos-aires/#estacion"
                      role="button"
                      alt="estacion buenos aires"
                    >
                      Estación <span>Buenos Aires</span> - Entres carrera 7 y
                      7G.
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-la-ocho/#estacion"
                      role="button"
                      alt="estacion la ocho"
                    >
                      Estación <span>La Ocho</span> - Entre carreras 8 y 8C.
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-la-catorce/#estacion"
                      role="button"
                      alt="estacion la catorce"
                    >
                      Estación <span>La Catorce</span> - Entre carreras 14 y 17.
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-la-veintiuna/#estacion"
                      role="button"
                      alt="estacion la veintiuna"
                    >
                      Estación <span>La Veintiuna</span> - Entre carreras 20 y
                      21.
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-atlantico/#estacion"
                      role="button"
                      alt="estacion atlantico"
                    >
                      Estación <span>Atlántico</span> - Entre carreras 26 y 27.
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-chiquinquira/#estacion"
                      role="button"
                      alt="estacion chiquinquira"
                    >
                      Estación <span>Chiquinquirá</span> - Entre carreras 33 y
                      36.
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-la-arenosa/#estacion"
                      role="button"
                      alt="estacion la arenosa"
                    >
                      Estación <span>La Arenosa</span> - Entre carreras 41 y 43.
                    </a>
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
              <div className="col-md-4 icobus align-self-center">
                <h5 className="text-center ">TRONCAL OLAYA HERRERA</h5>
                <img
                  src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                  className="img-fluid  mx-auto d-block ico__Bus-verde"
                  alt="icono bus"
                />
              </div>
              <div className="col-md-8 ">
                <ol>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-retorno-joe-arroyo/#estacion"
                      role="button"
                      alt="estacion retorno joe arroyo"
                    >
                      Estación retorno <span>Joe Arroyo</span> - Carrera 46 con
                      calle 74.
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-esthercita-forero/#estacion"
                      role="button"
                      alt="estacion esthercita forero"
                    >
                      Estación <span>Esthercita Forero</span> - Entre calles 69
                      y 70.
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-alfredo-correa-de-andreis/#estacion"
                      role="button"
                      alt="estacion alfredo correa de andreis"
                    >
                      Estación <span>Alfredo Correa De Andréis</span> - Entre
                      calles 60 y 62.
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-la-catedral/#estacion"
                      role="button"
                      alt="estacion la catedral"
                    >
                      Estación <span>La Catedral</span> - Entre calles 50 y 53.
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-barrio-abajo/#estacion"
                      role="button"
                      alt="estacion barrio abajo"
                    >
                      Estación <span>Barrio Abajo</span> - Entre calles 43 y 45.
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sistema/estaciones/estacion-parque-cultural-del-caribe/#estacion"
                      role="button"
                      alt="estacion parque cultural del caribe"
                    >
                      Estación <span>Parque Cultural</span> - Entre calles 36 y
                      39.
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estaciones;
