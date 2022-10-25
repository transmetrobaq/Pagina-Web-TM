import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import '../styles/components/Transmetro.css';

// eslint-disable-next-line arrow-body-style
const Transmetro = () => {
  const [activeTab, setActiveTab] = useState('1');

  const cambiarTab = (numeroTab) => {
    if (activeTab !== numeroTab) {
      setActiveTab(numeroTab);
    }
  };
  return (
    <>
      {/* <!-- acerca de  --> */}

      <div
        className="container-xxl "
        style={{ backgroundColor: '#F5F5F5' }}
        id="acerca"
      >
        <div className="acerca__card ">
          <div className="card mb-3 border border-0">
            <div className="row g-0 justify-content-end ">
              <div className="col-md-6">
                <div className="card-body">
                  <h2 id="acerca">Acerca de</h2>
                </div>
              </div>
              <div className="col-md-5" />
            </div>
          </div>

          <div className="card mb-3 border border-0">
            <div className="row g-0 justify-content-end ">
              <div className="col-md-6">
                <div className="card-body">
                  <p
                    className="card-text  fw-semibold"
                    style={{ marginTop: '-20px' }}
                  >
                    En agosto del año 2000, el Sistema de Transporte Masivo de
                    Barranquilla y su área metropolitana, Transmetro, comienza a
                    gestarse cuando un grupo de profesionales especialistas en
                    urbanismo y planificación de transporte deciden formular un
                    proyecto basado en el modelo brasileño de transporte masivo
                    y el proyecto Transmilenio, en ese entonces en construcción
                    en la ciudad de Bogotá D.C.
                  </p>
                  <p className="card-text fw-bold ">
                    Este trabajo fue desarrollado por Planeación Distrital,
                    Tránsito Distrital, Dadima, Edubar, Ministerio de Ambiente,
                    Universidad del Norte, liderado y coordinado además por la
                    Cámara de Comercio de Barranquilla.
                  </p>
                </div>
              </div>
              <div className="col-md-5" id="acerca_img">
                {/*  <img
                  src="https://apiwebtm.com/uploads/Acerca_de_4f7942ad24.jpg"
                  className="img-fluid rounded-start"
                  alt="Foto Aerea Buses TM "
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl" style={{ backgroundColor: '#fff' }}>
        <div className="acerca__card ">
          <div
            className="card mb-3 border border-0"
            style={{ backgroundColor: '#fff' }}
          >
            <div className="row g-0 justify-content-end ">
              <div className="col-md-10">
                <div className="card-body">
                  <p className="card-text  text">
                    Después de realizados los estudios de transporte público y
                    <span className="fw-bold">
                      el diseño conceptual de Transmetro llevados a cabo por el
                      consorcio colombo-español Bocarejo-ETT, mediante acuerdo
                      Nº 003 de febrero 14 de 2003
                    </span>{' '}
                    del Concejo de Barranquilla se autoriza al alcalde
                    metropolitano para que el Distrito participe en la
                    conformación de la empresa Transmetro SAS, cuyo objeto
                    principal es ser titular del Sistema Integrado de Transporte
                    Masivo de pasajeros de Barranquilla y su área metropolitana.
                  </p>
                  <p className="card-text fw-bold text">
                    Transmetro se constituye en la Notaría Novena de
                    Barranquilla mediante escritura pública suscrita el 2 de
                    julio de 2003, como una sociedad por acciones entre
                    entidades públicas de la especie de Sociedad Anónima
                    Simplificada.
                  </p>
                </div>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
        </div>
      </div>
      {/* Mision -Vision */}
      <div className="container-xxl">
        <div className="card__mision">
          <div className="card mb-3 border border-0">
            <div className="row g-0 justify-content-end ">
              <div className="col-md-5" id="mision_img">
                {/*  <img
                  src="https://apiwebtm.com/uploads/Acerca_de_4f7942ad24.jpg"
                  className="img-fluid rounded-start"
                  alt="Foto Aerea Buses TM "
                /> */}
              </div>
              <div className="col-md-6 ">
                <div className="card-body" style={{ marginLeft: '50px' }}>
                  <Nav tabs style={{ border: 'none' }}>
                    <NavItem>
                      <NavLink
                        className={
                          activeTab === '1' ? 'activeTab baseTab' : 'baseTab'
                        }
                        onClick={() => cambiarTab('1')}
                      >
                        Misión
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={
                          activeTab === '2' ? 'activeTab baseTab' : 'baseTab'
                        }
                        onClick={() => cambiarTab('2')}
                      >
                        Visión
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <br />
                      <p>
                        Ser la primera opción para llegar a tu destino de manera
                        confiable, oportuna y agradable,{' '}
                        <span>en un escenario incluyente y sostenible,</span>{' '}
                        generando calidad de vida para Barranquilla y su área
                        metropolitana.
                      </p>
                    </TabPane>

                    <TabPane tabId="2">
                      <br />
                      <p>
                        <span>
                          Transmetro será a 2025 el eje de movilidad urbana
                          sostenible de Barranquilla
                        </span>{' '}
                        y su área metropolitana, integrando los modos de
                        transporte público masivo, teniendo como principio
                        fundamental la satisfacción de nuestros usuarios y
                        públicos de interés.
                      </p>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Asamblea de Socios */}
      <div id="asamblea-socios" className="container asamblea">
        <div className="card mb-3 border border-0">
          <div className="row g-0 justify-content-end ">
            <div className="col-md-6">
              <div className="card-body">
                <h2>Organigrama</h2>
              </div>
            </div>
            <div className="col-md-5" />
          </div>
        </div>
        <div className="row">
          <figure>
            <img
              src="https://apiwebtm.com/uploads/Asamblea_V2_30a7029fd8.png"
              alt="Asamblea"
              className="card-img"
            />
          </figure>
        </div>
      </div>

      {/* Objetivos */}

      <div className="container-xxl " style={{ backgroundColor: '#F5F5F5' }}>
        <div className="obje__Estra">
          <div
            className="card mb-3 border border-0"
            id="objetivos-estrategicos"
          >
            <div className="row g-0 justify-content-end ">
              <div className="col-md-6">
                <div className="card-body">
                  <h2>Objetivos Estratégicos</h2>
                </div>
              </div>
              <div className="col-md-5" />
            </div>
          </div>

          {/* ----------------- */}
          <div className="card mb-3 border border-0">
            <div className="row g-0 justify-content-end ">
              <div className="col-md-6 ">
                <div className="card-body">
                  {/* ------------  Navtab  --------------*/}

                  <Nav tabs style={{ border: 'none' }}>
                    <NavItem>
                      <NavLink
                        className={
                          activeTab === '1' ? 'activeTab baseTab' : 'baseTab'
                        }
                        onClick={() => cambiarTab('1')}
                      >
                        <i
                          className="far fa-chart-bar fa-4x "
                          style={{ color: '#004f9f' }}
                        />
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={
                          activeTab === '2' ? 'activeTab baseTab' : 'baseTab'
                        }
                        onClick={() => cambiarTab('2')}
                      >
                        <i
                          className="fas fa-users fa-4x"
                          style={{ color: '#00a13a' }}
                        />
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={
                          activeTab === '3' ? 'activeTab baseTab' : 'baseTab'
                        }
                        onClick={() => cambiarTab('3')}
                      >
                        <i
                          className="fas fa-cogs fa-4x"
                          style={{ color: '#e30613' }}
                        />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          activeTab === '4' ? 'activeTab baseTab' : 'baseTab'
                        }
                        onClick={() => cambiarTab('4')}
                      >
                        <i
                          className="far fa-id-badge fa-4x >"
                          style={{ color: '#ffdd00' }}
                        />
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <ol className="lis-group">
                        <li>Optimizar el uso de los recursos disponibles.</li>
                        <li>
                          Gestionar para propender por la sostenibilidad
                          financiera.
                        </li>
                      </ol>
                    </TabPane>

                    <TabPane tabId="2">
                      <ol className="lis-group">
                        <li>
                          Incrementar el nivel de satisfacción de usuarios y
                          ciudadanos.
                        </li>
                        <li>
                          Trabajar bajo el principio de la responsabilidad
                          social.
                        </li>
                        <li>
                          Gestionar una comunicación adecuada con nuestro
                          público y generar valor agregado.
                        </li>
                        <li>
                          Contribuir sustancialmente al mejoramiento en la
                          movilidad.
                        </li>
                      </ol>
                    </TabPane>

                    <TabPane tabId="3">
                      <div className="content">
                        <ol className="lis-group">
                          <li>
                            Optimizar los procesos internos de acuerdo a
                            exigencias de MIPG.
                          </li>

                          <li>
                            Gestionar la integración del Transporte Masivo con
                            el complementario.
                          </li>
                          <li>Mejorar en los indicadores del Sistema.</li>
                          <li>Construir banco de proyectos.</li>
                          <li>Incrementar la demanda.</li>
                        </ol>
                      </div>
                    </TabPane>
                    <TabPane tabId="4">
                      <div className="content">
                        <ol className="lis-group">
                          <li>
                            Fortalecer las competencias del talento humano y el
                            ambiente laboral.
                          </li>
                          <li>
                            Desarrollar una cultura organizacional de trabajo en
                            equipo y orientacion a los logros.
                          </li>
                          <li>
                            Proporcionar ambientes laborales seguros y
                            armoniosos que redunden en el mejoramiento de la
                            calidad de vida de los servidores públicos.
                          </li>
                        </ol>
                      </div>
                    </TabPane>
                  </TabContent>

                  {/* --------------------- */}
                </div>
              </div>
              <div className="col-md-4" id="estra_img">
                <img
                  src="https://apiwebtm.com/uploads/Obj_Estra_743c30512f.png"
                  className="img-fluid "
                  alt="Foto Aerea Buses TM "
                />
              </div>
              <div className="col-md-1" />
            </div>
          </div>
        </div>
      </div>

      {/* que es transmetro */}
      <div className="container-xxl conformado">
        <div className="card mb-3 border border-0" id="que-es-transmetro">
          <div className="row g-0 justify-content-end ">
            <div className="col-md-10">
              <div className="card-body">
                <h2>Qué es Transmetro y cómo está conformado</h2>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>

        <div className="card mb-3 border border-0" id="que-es-transmetro">
          <div className="row g-0 justify-content-end ">
            <div className="col-md-6">
              <div
                className="card-body"
                style={{ marginTop: '-20px', marginRight: '30px' }}
              >
                <p className="card-text">
                  El Sistema de Transporte Masivo Transmetro es el sistema de
                  Buses de Tránsito Rápido - BTR que opera comercialmente en
                  Barranquilla y su área metropolitana desde el 10 de julio de
                  2010, convirtiéndola en la quinta ciudad del país en
                  implementar e inaugurar este tipo de sistema de transporte
                  después de Bogotá, Pereira, Cali y Bucaramanga.
                </p>
                <p className="card-text">
                  <span>
                    {' '}
                    Tras una etapa de pedagogía y pruebas de más de 2 meses,
                    Transmetro inició su operación comercial el 10 de julio de
                    2010 con un pasaje de $1.400 a través de un sistema de
                    tarjetas electrónicas recargables.
                  </span>{' '}
                  El Sistema funciona con vehículos tipo articulado y padrón que
                  circulan por las troncales Murillo (calle 45) y Olaya Herrera
                  (carrera 46), además de las rutas alimentadoras (vehículos
                  tipo busetón) que recorren barrios de Barranquilla, Soledad y
                  un pequeño sector de Puerto Colombia.{' '}
                </p>
              </div>
            </div>
            <div className="col-md-5" id="queTm_img" />
          </div>
        </div>

        <div
          className="card mb-3 border border-0"
          style={{ marginTop: '50px' }}
        >
          <div className="row g-0 justify-content-center ">
            <div className="col-md-10">
              <div className="card-body" style={{ marginTop: '-20px' }}>
                {/* Organizaciones */}
                <div className="card mb-3">
                  <div className="row g-0 cardbox">
                    <div className="col-md-2">
                      <img
                        src="https://apiwebtm.com/uploads/icosn_42_28bca68ce7.png"
                        className="img-fluid rounded-start"
                        alt="logo transmetro"
                        style={{
                          width: '150px',
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body " id="organiTM">
                        <p
                          className="card-text"
                          style={{
                            marginLeft: '20px',
                          }}
                        >
                          <span>TRANSMETRO S.A.S.</span> es una sociedad por
                          acciones constituida entre entidades públicas ubicada
                          dentro de las sociedades por acciones simplificadas
                          regulada por la ley 1258 de diciembre 5 de 2008,
                          vinculada al Área Metropolitana de Barranquilla,
                          regida por las disposiciones legales aplicables a las
                          empresas industriales y comerciales del Estado y en
                          particular a lo dispuesto en el artículo 85 y
                          siguientes de la ley 489 y sus decretos
                          reglamentarios, que tiene como objeto social principal
                          el ejercicio de la titularidad sobre el Sistema
                          Integrado de Transporte Masivo de Pasajeros del
                          Distrito de Barranquilla y su área metropolitana, así
                          como la construcción, operación, mantenimiento y
                          puesta en funcionamiento del mismo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="row g-0 cardbox">
                    <div className="col-md-2">
                      <img
                        src="https://apiwebtm.com/uploads/icosn_39_b38f16dfab.png"
                        className="img-fluid rounded-start"
                        alt="logo recaudos sit barranquilla"
                        style={{
                          width: '150px',
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body" id="organiTM">
                        <p
                          className="card-text"
                          style={{
                            marginLeft: '20px',
                          }}
                        >
                          El Sistema emplea un método de recaudo único a cargo
                          de la empresa <span>Recaudos SIT Barranquilla</span>,
                          concesionario encargado de proveer y distribuir las
                          tarjetas inteligentes y suministro de la comunicación
                          y tecnología que permite la utilización de validadores
                          y barreras de acceso electrónicos. Asimismo, es la
                          empresa encargada de proveer al personal idóneo para
                          taquillas y mantenimiento de los equipos
                          correspondientes al recaudo del Sistema, que incluye
                          la alianza con otras organizaciones para ubicar una
                          red de recarga en Barranquilla y Soledad.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="row g-0 cardbox">
                    <div className="col-md-2">
                      <center>
                        <ul
                          style={{
                            listStyle: 'none',

                            marginTop: '10px',
                          }}
                          id="sistur"
                        >
                          <li>
                            <img
                              src="https://apiwebtm.com/uploads/icosn_40_a4f85ba55c.png"
                              className="img-fluid rounded-start  "
                              alt="logo sistur"
                              style={{
                                width: '120px',
                                marginBottom: '15px',
                              }}
                            />
                            <img
                              src="https://apiwebtm.com/uploads/LOGO_Metrocaribe_2363c756b2.jpg"
                              className="img-fluid rounded-start "
                              style={{
                                width: '200px',
                              }}
                              alt="logo metrocaribe"
                            />
                          </li>
                        </ul>
                      </center>
                    </div>

                    <div className="col-md-10">
                      <div className="card-body" id="organiTM">
                        <p
                          className="card-text"
                          style={{
                            marginLeft: '20px',
                          }}
                        >
                          El Ente Gestor mediante proceso de licitación
                          LP-Tm300-001-09, adjudicó la operación del Sistema de
                          Transporte Masivo para Barranquilla y su área
                          Metropolitana.{' '}
                          <span> La Unión Temporal Sistur-Transurbanos</span>
                          obtuvo el 60 % de la operación del Sistema y el{' '}
                          <span> Grupo Empresarial Metrocaribe S.A.</span> el 40
                          %. Estas empresas son las encargadas de prestar el
                          servicio de transporte masivo, suministrar la flota de
                          autobuses, máquinas y equipos necesarios para dotar
                          los talleres y parqueos, así como el mantenimiento de
                          las instalaciones y flota.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fin Organizaciones */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- DATOS DE INFRAESTRUCTURA --> */}

      <div id="datos-infraestructura" className="container-xxl cont-infr">
        <div className="card mb-3 border border-0">
          <div className="row g-0 justify-content-end ">
            <div className="col-md-6">
              <div className="card-body">
                <h2>Datos de infraestructura</h2>
              </div>
            </div>
            <div className="col-md-5" />
          </div>
        </div>
        {/* Card Infra */}

        <div className="card mb-3 border border-0">
          <div className="row g-0 justify-content-center ">
            <div className="col-md-10">
              <div className="row  justify-content-center">
                <div className="col-md-4 text-center cardbox_infra ">
                  <img
                    src="https://apiwebtm.com/uploads/icosn_49_e68842dd46.png"
                    alt="icono"
                    className="img-fluid"
                  />
                  <p>14 kilómetros lineales en rutas troncales </p>
                  <div
                    className="container linea-colores-peque"
                    style={{ marginTop: '75px' }}
                  />
                </div>
                <div className="col-md-4 text-center cardbox_infra ">
                  <img
                    src="https://apiwebtm.com/uploads/icosn_43_faf8d5db31.png"
                    alt="icono"
                    className="img-fluid"
                  />

                  <p>204 mil kilómetros cuadrados de espacio público</p>
                  <div
                    className="container linea-colores-peque"
                    style={{ marginTop: '51px' }}
                  />
                </div>
                <div className="col-md-4  text-center cardbox_infra ">
                  <img
                    src="https://apiwebtm.com/uploads/icosn_46_e433788e52.png"
                    alt="icono"
                    className="img-fluid"
                  />

                  <p>198 kilómetros en rutas alimentadoras</p>
                  <div
                    className="container linea-colores-peque"
                    style={{ marginTop: '75px' }}
                  />
                </div>
              </div>
              <div className="row cont-infr justify-content-center">
                <div className="col-md-4 text-center cardbox_infra ">
                  <img
                    src="https://apiwebtm.com/uploads/icosn_48_7194edb295.png"
                    alt="icono"
                    className="img-fluid"
                  />

                  <p>85.000 mil m2 de área en Portal de Soledad</p>
                  <div
                    className="container linea-colores-peque"
                    style={{ marginTop: '75px' }}
                  />
                </div>
                <div className="col-md-4  text-center cardbox_infra ">
                  <img
                    src="https://apiwebtm.com/uploads/icosn_44_d03171c121.png"
                    alt="icono"
                    className="img-fluid"
                  />

                  <p>
                    45.000 mil m2 de área en Barranquillita: capacidad para 120
                    vehículos
                  </p>
                  <div
                    className="container linea-colores-peque"
                    style={{ marginTop: '51px' }}
                  />
                </div>
                <div className="col-md-4  text-center cardbox_infra ">
                  <img
                    src="https://apiwebtm.com/uploads/icosn_47_7b564c98a2.png"
                    alt="icono"
                    className="img-fluid"
                  />

                  <p>Par Vial: 2 km de vía de andenes</p>
                  <div
                    className="container linea-colores-peque d-block"
                    style={{ marginTop: '75px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------- */}
      <div />
    </>
  );
};

export default Transmetro;
