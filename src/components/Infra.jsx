/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

const Infra = () => {
  const [activeTab, setActiveTab] = useState('1');

  const cambiarTab = (numeroTab) => {
    if (activeTab !== numeroTab) {
      setActiveTab(numeroTab);
    }
  };
  return (
    <>
      {/* Card Bloque Troncales  */}
      <div className="container-xxl mapa_troncal">
        <div className="card mb-3 border border-0">
          <div className="row g-0 justify-content-end ">
            <div className="col-md-10">
              <div className="card-body">
                <h2>Mapa Troncal</h2>
                <div className="mapa_troncal-linea" />
              </div>
            </div>
            <div className="col-md-1" />
          </div>
          <div className="row g-0 justify-content-end mapa_troncal-gmap">
            <div className="col-md-10 ">
              <div className="card-body">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <br />
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1cXmz-2S99X07oSGEdMj3ZP5E6D2c5yw&ehbc=2E312F" />
                  </TabPane>

                  <TabPane tabId="2">
                    <br />
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1NB-58nOUp3atTHm_6PfEiK2Vz52LDi8&ehbc=2E312F" />
                  </TabPane>
                </TabContent>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
          <div className="row g-0 justify-content-center">
            <div className="col-md-10">
              <div className="card-body mapa_troncal-btn ">
                <Nav tabs style={{ border: 'none' }}>
                  <NavItem>
                    <NavLink
                      className={
                        activeTab === '1' ? 'activeTab baseTab' : 'baseTab'
                      }
                      onClick={() => cambiarTab('1')}
                      style={{
                        backgroundColor: '#e30613',

                        cursor: 'pointer',
                      }}
                    >
                      Troncal Murillo
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className={
                        activeTab === '2' ? 'activeTab baseTab' : 'baseTab'
                      }
                      onClick={() => cambiarTab('2')}
                      style={{
                        backgroundColor: '#00a13a',
                        borderRadius: '20px',
                        color: '#fff',
                        cursor: 'pointer',
                        marginLeft: '10px',
                      }}
                    >
                      Troncal Olaya Herrera
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Estaciones Transmetro Murillo */}
      <div className="container-xxl estaciones">
        <div className="card mb-3 border border-0">
          <div className="row g-0 justify-content-end ">
            <div className="col-md-10">
              <div className="card-body text-center " id="estaciones">
                <h2>Estaciones</h2>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
          <div className="row g-0 justify-content-end ">
            <div className="col-md-10">
              <div className="card-body ">
                {/*   <p>
                  Las estaciones son los puntos de abordaje de vehículos
                  ubicadas a lo largo de las dos troncales que componen nuestro
                  Sistema: Troncal Murillo (calle 45) y Troncal Olaya Herrera
                  (carrera 46). En ellas los usuarios pueden adquirir sus
                  tarjetas, recargarlas, verificar sus saldos y validar sus
                  pasajes para poder acceder a las rutas troncales corrientes y
                  expresas, así como a las rutas alimentadoras.
                </p> */}
                <p className="fw-bold">Las estaciones son de dos tipos:</p>
                <ul>
                  <li>
                    Tipo A: con un solo módulo de sesenta (60) metros de
                    longitud y acceso por uno de los costados. Estaciones Pacho
                    Galán y Pedro Ramayá en el municipio de Soledad, sobre la
                    troncal Murillo.
                  </li>
                  <li>
                    Tipo B: con dos (2) módulos,uno para servicios corrientes de
                    sesenta (60) metros de longitud y otro para servicios
                    expresos de cuarenta (40) metros de largo; en total este
                    tipo de estaciones tiene cien (100) metros de longitud y
                    acceso por ambos costados.
                  </li>
                </ul>
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
                            Estación <span>Pedro Ramayá Beltrán</span> - Entré
                            carreras 23 y Av. Circunvalar (Soledad, Atl.).
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-pacho-galan/#estacion"
                            role="button"
                            alt="estacion pacho galan"
                          >
                            Estación <span>Pacho Galán</span> - Entré carreras
                            16 y 17 (Soledad, Atl.).
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-joaquin-barrios-polo/#estacion"
                            role="button"
                            alt="estacion joaquin barrios polo"
                          >
                            Estación <span>Joaquín Barrios Polo</span> - Entré
                            carreras 1G y 2A.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-buenos-aires/#estacion"
                            role="button"
                            alt="estacion buenos aires"
                          >
                            Estación <span>Buenos Aires</span> - Entrés carrera
                            7 y 7G.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-ocho/#estacion"
                            role="button"
                            alt="estacion la ocho"
                          >
                            Estación <span>La Ocho</span> - Entré carreras 8 y
                            8C.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-catorce/#estacion"
                            role="button"
                            alt="estacion la catorce"
                          >
                            Estación <span>La Catorce</span> - Entré carreras 14
                            y 17.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-veintiuna/#estacion"
                            role="button"
                            alt="estacion la veintiuna"
                          >
                            Estación <span>La Veintiuna</span> - Entré carreras
                            20 y 21.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-atlantico/#estacion"
                            role="button"
                            alt="estacion atlantico"
                          >
                            Estación <span>Atlántico</span> - Entré carreras 26
                            y 27.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-chiquinquira/#estacion"
                            role="button"
                            alt="estacion chiquinquira"
                          >
                            Estación <span>Chiquinquirá</span> - Entré carreras
                            33 y 36.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-arenosa/#estacion"
                            role="button"
                            alt="estacion la arenosa"
                          >
                            Estación <span>La Arenosa</span> - Entré carreras 41
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
                          href="http://www.sitbarranquilla.com/index.php/personaliza-tu-tarjeta"
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
                            Estación <span>Esthercita Forero</span> - Entré
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
                            Entré calles 60 y 62.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-catedral/#estacion"
                            role="button"
                            alt="estacion la catedral"
                          >
                            Estación <span>La Catedral</span> - Entré calles 50
                            y 53.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-barrio-abajo/#estacion"
                            role="button"
                            alt="estacion barrio abajo"
                          >
                            Estación <span>Barrio Abajo</span> - Entré calles 43
                            y 45.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-parque-cultural-del-caribe/#estacion"
                            role="button"
                            alt="estacion parque cultural del caribe"
                          >
                            Estación <span>Parque Cultural</span> - Entré calles
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
                          href="https://transmetro.netsaia.com/ws/pqr/index.html"
                          className="btn btn-primary"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Gestiona tu PQRS{' '}
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
      {/* ------Rutas alimentadoras */}
      <div
        className="container-xxl "
        style={{ backgroundColor: '#F5F5F5' }}
        id="acerca"
      >
        <div className="alimentadora__card ">
          <div className="card mb-3 border border-0">
            <div className="row g-0 justify-content-end ">
              <div className="col-md-6" id="alimentadora_img">
                {/*  <img
                  src="https://apiwebtm.com/uploads/img_rutas_alimentadoras_c8fa5f7de0.png"
                  className="img-fluid "
                  alt="Foto Aerea Buses TM "
                /> */}
              </div>
              <div className="col-md-6 align-self-end">
                <div className="card-body">
                  <h2>Rutas alimentadoras</h2>
                  <div className="linea-colores-ali" />
                  <p className="card-text align-text-bottom fw-semibold">
                    Los servicios alimentadores conectan a los usuarios ubicados
                    en barrios alejados de las troncales a través de las
                    estaciones del Sistema o de paraderos cercanos a estas con
                    la posibilidad de hacer transbordos a los servicios
                    troncales sin ningún costo adicional para el ciudadano.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl">
        <div className="row g-0 justify-content-center rutas_alimentadoras">
          <div className="col-md-2 icon_alimentadoras align-self-center ">
            <p className="text-center  ">Rutas alimentadoras</p>

            <img
              src="https://apiwebtm.com/uploads/icosn_bus_070505e055.png"
              className="img-fluid  mx-auto d-block"
              alt="icono bus"
            />
          </div>
          <div className="col-md-6 align-self-center">
            <div className="card-body">
              <div className="row  g-4">
                <div className="col-md-6 ">
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
                <div className="col-md-6" id="ali">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Infra;
