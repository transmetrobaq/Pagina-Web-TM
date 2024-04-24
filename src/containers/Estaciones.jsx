/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import '../styles/components/Estaciones.css';

function Estaciones() {
  const [activeTab, setActiveTab] = useState('1');

  const cambiarTab = (numeroTab) => {
    if (activeTab !== numeroTab) {
      setActiveTab(numeroTab);
    }
  };
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
          <div
            className="row g-0 justify-content-end "
            style={{ backgroundColor: '#F5F5F5' }}
          >
            <div className="col-md-10">
              <div className="card-body ">
                <p>
                  Transmetro tiene quince (15) estaciones intermedias, diez (10)
                  en la Troncal Murillo y cinco (5) en la Troncal Olaya Herrera,
                  ubicadas a 500 metros en promedio{' '}
                  <a
                    className="fw-bold"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    leer mas..
                  </a>
                </p>
                <div className="collapse" id="collapseExample">
                  <p>
                    Su diseño fue determinado a través de un concurso nacional
                    que llevó a cabo la Sociedad Colombiana de Arquitectos. Para
                    determinar los materiales se tuvo en cuenta las condiciones
                    del medio ambiente, su calidad, proyección de mantenimiento
                    y experiencias previas en Barranquilla y otras ciudades. Los
                    materiales utilizados son acero con sistema de protección
                    anticorrosiva especializado, aluminio, madera teka y
                    baldosas de granito pulido, fabricadas con altas
                    especificaciones técnicas. Estas plataformas son las únicas
                    paradas para los buses que se movilizan en las troncales.
                    Cada módulo de la estación está dotado de:
                  </p>
                  <ul>
                    <li>
                      Rampa de acceso, único espacio dispuesto para ingreso de
                      los usuarios a la estación.
                    </li>
                    <li>
                      Taquilla para comprar y recargar la tarjeta sin contacto
                      (única forma de pago del sistema).
                    </li>
                    <li>
                      Validadores o dispositivos que descuentan el valor del
                      pasaje y que permiten activar la barrera para el acceso
                      del usuario.
                    </li>
                    <li>
                      Barreras para el ingreso y salida de usuarios con
                      movilidad reducida.{' '}
                    </li>
                    <li>
                      Pantallas informativas que suministran datos de la
                      operación como frecuencia de los servicios y horarios.{' '}
                    </li>
                    <li>Señaletica para guiar claramente a los usuarios </li>
                  </ul>
                </div>
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
              <div className="card-body">
                <Nav tabs style={{ border: 'none' }}>
                  <NavItem>
                    <NavLink
                      className={
                        activeTab === '1' ? 'activeTab baseTab ' : 'baseTab '
                      }
                      onClick={() => cambiarTab('1')}
                    >
                      Portal o Estación de cabecera
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className={
                        activeTab === '2' ? 'activeTab baseTab' : 'baseTab'
                      }
                      onClick={() => cambiarTab('2')}
                    >
                      Estación de pasajeros o Estación sencilla
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={
                        activeTab === '3' ? 'activeTab baseTab' : 'baseTab'
                      }
                      onClick={() => cambiarTab('3')}
                    >
                      Patio de Operación
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <br />
                    <p>
                      Son estaciones ubicadas en los puntos de inicio, y
                      finalización de las rutas troncales. En estas estaciones
                      se realizan transbordos entre rutas troncales y rutas
                      alimentadoras e intermunicipales. Las estaciones de
                      cabecera incluyen una estación de pasajeros con sus
                      respectivas plataformas de abordaje, dependencias
                      operativas y de servicio al usuario; además cuenta con un
                      patio de operación con espacio para estacionamientos de
                      buses, áreas de mantenimiento y de abastecimiento, vías de
                      maniobras y edificios administrativos.
                    </p>
                  </TabPane>

                  <TabPane tabId="2">
                    <br />
                    <p>
                      Es un espacio cerrado y cubierto, con pago a la entrada,
                      lugar de tránsito, entrada o salida del sistema para que
                      los usuarios acedan a servicios troncales o alimentadores
                      en algunos casos. Son 15 estaciones las que componen el
                      Ssitema Transmetro, ubicadas a lo largo de las dos
                      troncales: 10 en la Murillo (calle 45) y 5 sobre la
                      Troncal Olaya Herrera (carrera 46). En ellas los usuarios
                      pueden adquirir sus tarjetas, recargarlas, verificar sus
                      saldos y validar sus pasajes para poder acceder a las
                      rutas troncales corrientes y expresas, así como a las
                      rutas alimentadoras.
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <br />
                    <p>
                      El patio de operación es el conjunto de infraestructura
                      física de una estación de cabecera que incluye las áreas
                      de parqueo de buses, las vías de maniobras y las áreas y
                      edificios administrativos, de mantenimiento y de
                      abastecimiento. No tiene pasarela de intercambio de
                      pasajeros.
                    </p>
                  </TabPane>
                </TabContent>
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
                            href="/sistema/estaciones/estacion-pacho-galan/#estacion"
                            role="button"
                            alt="estacion pacho galan"
                          >
                            Estación <span>Pacho Galán</span> - entre carreras
                            16 y 17 (Soledad, Atl.).
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-pedro-ramaya/#estacion"
                            role="button"
                            alt="estacion pedro ramaya"
                          >
                            Estación <span>Pedro Ramayá Beltrán</span> - entre
                            carreras 23 y Av. Circunvalar (Soledad, Atl.).
                          </a>
                        </li>
                       
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-joaquin-barrios-polo/#estacion"
                            role="button"
                            alt="estacion joaquin barrios polo"
                          >
                            Estación <span>Joaquín Barrios Polo</span> - entre
                            carreras 1G y 2A.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-buenos-aires/#estacion"
                            role="button"
                            alt="estacion buenos aires"
                          >
                            Estación <span>Buenos Aires</span> - entre carrera 7
                            y 7G.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-ocho/#estacion"
                            role="button"
                            alt="estacion la ocho"
                          >
                            Estación <span>La Ocho</span> - entre carreras 8 y
                            8C.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-catorce/#estacion"
                            role="button"
                            alt="estacion la catorce"
                          >
                            Estación <span>La Catorce</span> - entre carreras 14
                            y 17.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-veintiuna/#estacion"
                            role="button"
                            alt="estacion la veintiuna"
                          >
                            Estación <span>La Veintiuna</span> - entre carreras
                            20 y 21.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-atlantico/#estacion"
                            role="button"
                            alt="estacion atlantico"
                          >
                            Estación <span>Atlántico</span> - entre carreras 26
                            y 27.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-chiquinquira/#estacion"
                            role="button"
                            alt="estacion chiquinquira"
                          >
                            Estación <span>Chiquinquirá</span> - entre carreras
                            33 y 36.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-arenosa/#estacion"
                            role="button"
                            alt="estacion la arenosa"
                          >
                            Estación <span>La Arenosa</span> - entre carreras 41
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
                            Estación <span>Esthercita Forero</span> - entre
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
                            entre calles 60 y 62.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-la-catedral/#estacion"
                            role="button"
                            alt="estacion la catedral"
                          >
                            Estación <span>La Catedral</span> - entre calles 50
                            y 53.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-barrio-abajo/#estacion"
                            role="button"
                            alt="estacion barrio abajo"
                          >
                            Estación <span>Barrio Abajo</span> - entre calles 43
                            y 45.
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sistema/estaciones/estacion-parque-cultural-del-caribe/#estacion"
                            role="button"
                            alt="estacion parque cultural del caribe"
                          >
                            Estación <span>Parque Cultural</span> - entre calles
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
