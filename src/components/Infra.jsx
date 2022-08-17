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
              width: '50%',
              backgroundColor: '#004f9f',
            }}
          >
            <div className="card-body">
              <h2 className="card-text text-center">Mapa Troncal</h2>
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
                      src="https://www.google.com/maps/d/embed?mid=1-c9ocD-8OqizQY5XLo2Pd1lZ-Rz-EoQ&ehbc=2E312F"
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
                          className="fa fa-square"
                          style={{ color: '#e30613' }}
                        />
                      </span>
                      Troncal Murillo
                    </li>
                    <li>
                      <span className="fa-li">
                        <i
                          className="fa fa-square"
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
              borderRadius: '20px 20px 0 0',
              border: 'none',
            }}
          >
            <div className="card-body">
              <h2 className="card-text text-center">RUTAS ALIMENTADORAS</h2>
              <p className="card-text">
                Los servicios alimentadores conectan a los usuarios ubicados en
                barrios alejados de las troncales a través de las estaciones del
                Sistema o de paraderos cercanos a estas con la posibilidad de
                hacer transbordos a los servicios troncales sin ningún costo
                adicional para el ciudadano.
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
                <div className="col-md-4 icobus align-self-center ">
                  <a href="/sistema/rutas_alimentadoras/#rutas-alimentadoras">
                    <h5 className="text-center ">RUTAS ALIMENTADORAS</h5>
                  </a>
                  <img
                    src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                    alt="icono bus"
                    className="img-fluid  mx-auto d-block ico__Bus-rojo"
                  />
                </div>
                <div className="col-md-4 ">
                  <ul>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a1-2-carrera-ocho/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A1-2 <span>Carrera Ocho </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a1-3-galan/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A1-3 <span>Galán </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a1-4-la-magdalena/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A1-4 <span>La Magdalena</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a2-1-hipodromo/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A2-1 <span>Hipódromo</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a3-1-villa-katanga/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A3-1 <span>Villa Katanga</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a3-2-soledad-2000/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A3-2 <span>Soledad 2000</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a3-3-manuela-beltran/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A3-3 <span>Manuela Beltrán</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a3-40-villa-sol-suspendida/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A3-40 <span>Villa Sol</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a3-41-villa-karla/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A3-41 <span>Villa Karla</span>
                      </a>
                    </li>
                    {/*  <li>
                    <a
                        href="/sistema/rutas_alimentadoras/a3-40-villa-sol-suspendida/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A3-40 <span>Villa Sol (SUSPENDIDA)</span>
                      </a>
                      A3-4 <span>Villa Sol </span>
                    </li> */}
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a3-5-ciudadela-metropolitana-suspendida/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A3-5 <span>Ciudadela Metropolitana (SUSPENDIDA)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a5-1-los-robles/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A5-1 <span>Los Robles</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a5-2-las-moras/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A5-2 <span>Las Moras</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a5-3-la-central/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A5-3 <span>La Central</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a5-4-san-antonio/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A5-4 <span>San Antonio</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4" id="ali">
                  <ul>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a5-5-manantial/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A5-5 <span>Manantial</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a5-6-desde-granabastos/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A5-6 <span>Granabastos</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a6-5-carrizal/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A6-5 <span>Carrizal</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a6-6-ciudadela/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A6-6 <span>Ciudadela</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a7-1-m-iramar/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A7-1 <span>Miramar</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a7-3-carrera-38/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A7-3 <span>Carrera 38</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a7-4-los-andes/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A7-4 <span>Los Andes</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a8-1-paraiso/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A8-1 <span>Paraíso</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a8-2-via-40/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A8-2 <span>Vía 40</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a8-3-prado/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A8-3 <span>Prado</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a9-3-buenavista/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A9-3 <span>Buenavista</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a9-4-carrera-46/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A9-4 <span>Carrera 46</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/u-30-universidades/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        U-30 <span>Universidades</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/gran-malecon/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        <span>Gran Malecón</span>
                      </a>
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
