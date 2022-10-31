/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import '../styles/components/Estaciones.css';

function Estaciones() {
  return (
    <>
      {/* Estaciones Transmetro Murillo */}
      <div className="container-xxl estaciones" id="estaciones">
        <div className="card mb-3 border border-0">
          <div className="row g-0 justify-content-end ">
            <div className="col-md-10">
              <div className="card-body text-center ">
                <h2>Estaciones</h2>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
          <div className="row g-0 justify-content-end ">
            <div className="col-md-10">
              <div className="card-body text-center">
                <p>
                  Las estaciones son los puntos de abordaje de vehículos
                  ubicadas a lo largo de las dos troncales que componen nuestro
                  Sistema: Troncal Murillo (calle 45) y Troncal Olaya Herrera
                  (carrera 46). En ellas los usuarios pueden adquirir sus
                  tarjetas, recargarlas, verificar sus saldos y validar sus
                  pasajes para poder acceder a las rutas troncales corrientes y
                  expresas, así como a las rutas alimentadoras.
                </p>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
          <div className="row g-0 justify-content-end ">
            <div className="col-md-10">
              <div className="card-body">
                <div className="row g-0">
                  <div className="col-md-2 icon_troncal align-self-center ">
                    <p className="text-center">Troncal Murillo</p>

                    <img
                      src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                      className="img-fluid  mx-auto d-block"
                      alt="icono bus"
                    />
                  </div>
                  <div className="col-md-6 align-self-center">
                    <div className="card-body">
                      <ol>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-portal-de-soledad/#estacion"
                            role="button"
                            alt="estacion portal de soledad"
                          >
                            <span>Portal de Soledad</span> - Calle 65 # 13 - 455
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
                            Estación <span>Pacho Galán</span> - Entre carreras
                            16 y 17 (Soledad, Atl.).
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
                            Estación <span>Buenos Aires</span> - Entres carrera
                            7 y 7G.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-ocho/#estacion"
                            role="button"
                            alt="estacion la ocho"
                          >
                            Estación <span>La Ocho</span> - Entre carreras 8 y
                            8C.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-catorce/#estacion"
                            role="button"
                            alt="estacion la catorce"
                          >
                            Estación <span>La Catorce</span> - Entre carreras 14
                            y 17.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-veintiuna/#estacion"
                            role="button"
                            alt="estacion la veintiuna"
                          >
                            Estación <span>La Veintiuna</span> - Entre carreras
                            20 y 21.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-atlantico/#estacion"
                            role="button"
                            alt="estacion atlantico"
                          >
                            Estación <span>Atlántico</span> - Entre carreras 26
                            y 27.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-chiquinquira/#estacion"
                            role="button"
                            alt="estacion chiquinquira"
                          >
                            Estación <span>Chiquinquirá</span> - Entre carreras
                            33 y 36.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-arenosa/#estacion"
                            role="button"
                            alt="estacion la arenosa"
                          >
                            Estación <span>La Arenosa</span> - Entre carreras 41
                            y 43.
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                  {/* Card Personaliza */}
                  <div className="col-md-4">
                    <div
                      className="card card_personalizacion"
                      style={{ width: '19rem' }}
                    >
                      <img
                        src="https://apiwebtm.com/uploads/personalizacion_f07a455788.png"
                        className="card-img-top img-fluid"
                        alt="Joven sonteniendo tarjeta de transmetro"
                      />
                      <div className="linea-colores-perso" />
                      <div className="card-body">
                        <p className="card-title fw-bold">
                          Personaliza tu tarjeta
                        </p>
                        <p className="card-text">
                          Vincula los datos personales del usuario con el número
                          de la tarjeta, para proteger el saldo en caso de
                          perdida, daño o hurto.
                        </p>
                        <a
                          href="/"
                          className="btn btn-primary"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ir a personalización
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* ------------- */}
                </div>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </div>
      {/* Estaciones TM Olaya */}
      <div className="container-xxl estaciones_olaya">
        <div className="card mb-3 border border-0">
          <div className="row g-0 justify-content-end ">
            <div className="col-md-10">
              <div className="card-body">
                <div className="row g-0">
                  <div className="col-md-2 icon_troncal-olaya align-self-center ">
                    <p className="text-center  ">Troncal Olaya Herrera</p>

                    <img
                      src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                      className="img-fluid  mx-auto d-block"
                      alt="icono bus"
                    />
                  </div>
                  <div className="col-md-6 align-self-center">
                    <div className="card-body">
                      <ol>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-retorno-joe-arroyo/#estacion"
                            role="button"
                            alt="estacion retorno joe arroyo"
                          >
                            Estación retorno <span>Joe Arroyo</span> - Carrera
                            46 con calle 74.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-esthercita-forero/#estacion"
                            role="button"
                            alt="estacion esthercita forero"
                          >
                            Estación <span>Esthercita Forero</span> - Entre
                            calles 69 y 70.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-alfredo-correa-de-andreis/#estacion"
                            role="button"
                            alt="estacion alfredo correa de andreis"
                          >
                            Estación <span>Alfredo Correa De Andréis</span> -
                            Entre calles 60 y 62.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-catedral/#estacion"
                            role="button"
                            alt="estacion la catedral"
                          >
                            Estación <span>La Catedral</span> - Entre calles 50
                            y 53.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-barrio-abajo/#estacion"
                            role="button"
                            alt="estacion barrio abajo"
                          >
                            Estación <span>Barrio Abajo</span> - Entre calles 43
                            y 45.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-parque-cultural-del-caribe/#estacion"
                            role="button"
                            alt="estacion parque cultural del caribe"
                          >
                            Estación <span>Parque Cultural</span> - Entre calles
                            36 y 39.
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                  {/* Card Personaliza */}
                  <div className="col-md-4">
                    <div
                      className="card card_pqrs-olaya"
                      style={{ width: '19rem' }}
                    >
                      <img
                        src="https://apiwebtm.com/uploads/pqrs_0d5e4604f7.svg"
                        className="card-img-top img-fluid"
                        alt="Joven sonteniendo una tablet"
                      />

                      <div className="card-body">
                        <a
                          href="/"
                          className="btn btn-primary"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Realiza tu PQRS aquí
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* ------------- */}
                </div>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Estaciones;
