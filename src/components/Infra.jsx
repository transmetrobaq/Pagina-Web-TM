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

      {/* Cards Estaciones */}
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
              <h2 className="card-text text-center">ESTACIONES</h2>
              <p className="card-text">
                Nuestras estaciones son cada uno de los puntos de abordaje de
                veh??culos ubicadas a lo largo de las dos troncales que componen
                nuestro Sistema: Troncal Murillo y Troncal Olaya Herrera. En
                ellas los usuarios pueden adquirir sus tarjetas, recargarlas,
                verificar sus saldos y validar sus pasajes, para poder acceder a
                las rutas troncales corrientes y expresas, o alimentadoras.
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
                        Estaci??n <span>Pedro Ramay?? Beltran</span> - Entre
                        carreras 23 y Av. Circunvalar (Soledad, Atl.).
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-pacho-galan/#estacion"
                        role="button"
                        alt="estacion pacho galan"
                      >
                        Estaci??n <span>Pacho Gal??n</span> - Entre carreras 16 y
                        17 (Soledad, Atl.).
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-joaquin-barrios-polo/#estacion"
                        role="button"
                        alt="estacion joaquin barrios polo"
                      >
                        Estaci??n <span>Joaqu??n Barrios Polo</span> - Entre
                        carreras 1G y 2A.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-buenos-aires/#estacion"
                        role="button"
                        alt="estacion buenos aires"
                      >
                        Estaci??n <span>Buenos Aires</span> - Entres carrera 7 y
                        7G.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-la-ocho/#estacion"
                        role="button"
                        alt="estacion la ocho"
                      >
                        Estaci??n <span>La Ocho</span> - Entre carreras 8 y 8C.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-la-catorce/#estacion"
                        role="button"
                        alt="estacion la catorce"
                      >
                        Estaci??n <span>La Catorce</span> - Entre carreras 14 y
                        17.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-la-veintiuna/#estacion"
                        role="button"
                        alt="estacion la veintiuna"
                      >
                        Estaci??n <span>La Veintiuna</span> - Entre carreras 20 y
                        21.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-atlantico/#estacion"
                        role="button"
                        alt="estacion atlantico"
                      >
                        Estaci??n <span>Atl??ntico</span> - Entre carreras 26 y
                        27.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-chiquinquira/#estacion"
                        role="button"
                        alt="estacion chiquinquira"
                      >
                        Estaci??n <span>Chiquinquir??</span> - Entre carreras 33 y
                        36.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-la-arenosa/#estacion"
                        role="button"
                        alt="estacion la arenosa"
                      >
                        Estaci??n <span>La Arenosa</span> - Entre carreras 41 y
                        43.
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
                <div className="col-md-4  ">
                  <h5>TRONCAL OLAYA HERRERA</h5>
                  <div className="cars-ico-1 ">
                    <img
                      src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
                      alt="icono bus"
                    />
                  </div>
                </div>
                <div className="col-md-8 ">
                  <ol>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-retorno-joe-arroyo/#estacion"
                        role="button"
                        alt="estacion retorno joe arroyo"
                      >
                        Estaci??n retorno <span>Joe Arroyo</span> - Carrera 46
                        con calle 74.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-esthercita-forero/#estacion"
                        role="button"
                        alt="estacion esthercita forero"
                      >
                        Estaci??n <span>Esthercita Forero</span> - Entre calles
                        69 y 70.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-alfredo-correa-de-andreis/#estacion"
                        role="button"
                        alt="estacion alfredo correa de andreis"
                      >
                        Estaci??n <span>Alfredo Correa De Andr??is</span> - Entre
                        calles 60 y 62.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-la-catedral/#estacion"
                        role="button"
                        alt="estacion la catedral"
                      >
                        Estaci??n <span>La Catedral</span> - Entre calles 50 y
                        53.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-barrio-abajo/#estacion"
                        role="button"
                        alt="estacion barrio abajo"
                      >
                        Estaci??n <span>Barrio Abajo</span> - Entre calles 43 y
                        45.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-parque-cultural-del-caribe/#estacion"
                        role="button"
                        alt="estacion parque cultural del caribe"
                      >
                        Estaci??n <span>Parque Cultural</span> - Entre calles 36
                        y 39.
                      </a>
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
              <h2 className="card-text text-center">RUTAS ALIMENTADORAS</h2>
              <p className="card-text">
                Los servicios alimentadores conectan a los usuarios ubicados en
                barrios alejados de las troncales a trav??s de las estaci??nes del
                Sistema o de paraderos cercanos a estas con la posibilidad de
                hacer transbordos a los servicios troncales sin ning??n costo
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
                        A1-3 <span>Gal??n </span>
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
                        A2-1 <span>Hip??dromo</span>
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
                        A3-3 <span>Manuela Beltran</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a3-40-villa-sol-suspendida/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A3-40 <span>Villa Sol (SUSPENDIDA)</span>
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
                        A5-6 <span>Desde Granabastos</span>
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
                        A8-1 <span>Para??so</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/rutas_alimentadoras/a8-2-via-40/#rutas"
                        role="button"
                        alt="estacion portal de soledad"
                      >
                        A8-2 <span>V??a 40</span>
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
                        <span>Gran Malec??n</span>
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
