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
      {/* <!-- Reseña Historica  --> */}

      <div
        className="container-xxl "
        style={{ backgroundColor: '#F5F5F5' }}
        id="reseña-historica"
      >
        <div className="acerca__card ">
          <div className="card mb-3 border border-0">
            <div className="row g-0 justify-content-end ">
              <div className="col-md-6">
                <div className="card-body">
                  <h2>Reseña histórica</h2>
                  <div className="linea-colores-movi" />
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
                      {' '}
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

                  <p>
                    Transmetro es el sistema de transporte masivo que cambió la
                    forma de movernos por Barranquilla y parte del área
                    metropolitana, que marca un antes y un después en el
                    transporte público local y que inserta la capital del
                    Atlántico en escenarios de modernidad, competitividad y
                    sostenibilidad.{' '}
                    <a
                      className="fw-bold text-decoration-none"
                      style={{ color: '#002856' }}
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
                      Desde su puesta en funcionamiento, Transmetro ha sido un
                      escenario incluyente y un nivelador social que trabaja
                      bajo principios éticos y que hace equipo con otros
                      sistemas de transporte para traer calidad de vida a sus
                      usuarios.
                    </p>{' '}
                    <p>
                      Su sistema de pago mediante tarjetas inteligentes, sus
                      buses climatizados, su carril exclusivo, su red de
                      estaciones y paraderos y su centro de control de
                      operaciones, entre otros aspectos, garantizan a sus
                      usuarios una movilización segura, ordenada, económica,
                      ágil y confortable.{' '}
                    </p>
                    <p>
                      Con un solo pasaje es posible recorrer buena parte del
                      área metropolitana, saliendo de Soledad, atravesando
                      Barranquilla y llegando al Corredor Universitario de
                      Puerto Colombia. Además, los fines de semana Transmetro
                      nos lleva a la nueva Barranquilla, la que le da la cara al
                      río Magdalena, a través de ese bello escenario turístico
                      que es el Gran Malecón.
                    </p>
                    <p>
                      El Sistema cuenta con 284 buses vinculados a la flota, los
                      cuales recorren 14 kilómetros de rutas troncales (Murillo
                      y Olaya Herrera) y 198 kilómetros de rutas alimentadoras.
                    </p>
                    <p>
                      Tiene dos portales: Soledad y Barranquillita; una estación
                      de retorno (Joe Arroyo) y 15 estaciones intermedias, de
                      las cuales 13 están en Barranquilla y 2 en Soledad. Además
                      cuenta con más de 600 paraderos y 116 puntos autorizados
                      de recarga.
                    </p>
                    <p>
                      En un año atípico como lo fue 2020, el Sistema de
                      Transporte Masivo de Barranquilla y su área metropolitana,
                      Transmetro, movilizó a 19,324.483 usuarios, la cifra más
                      baja en los últimos cinco años, causada por la pandemia y
                      las restricciones derivadas de la emergencia sanitaria por
                      el Covid19.{' '}
                    </p>
                    <p>
                      Cabe recordar que, por disposición del Gobierno nacional
                      (Ministerios de Salud y del Interior), a partir del mes de
                      abril de ese año en los Sistemas Masivos se fijó en un 35
                      % la ocupación en los buses, lo que implicó una
                      disminución de la capacidad transportadora, que unida a
                      las medidas sanitarias incidió en la demanda y pasajeros
                      transportados. La empresa intervino de forma eficaz y
                      responsable con el fin de que el servicio fuera prestado
                      en las condiciones de seguridad y continuidad establecidos
                      por el Gobierno Nacional para mitigar la emergencia
                      sanitaria y evitar la propagación del virus.
                    </p>
                    <p>
                      Transmetro, que en temporada normal movilizaba a más de 3
                      millones 400 mil usuarios, llegó a transportar a un poco
                      más de 600.000 usuarios durante los meses de abril y mayo
                      de 2020.
                    </p>
                    <p>
                      Un vez el Ministerio de Salud autorizó un aumento del 50 %
                      en la ocupación de los buses y en Barranquilla se fijaron
                      medidas acordes a los nuevos lineamientos para la
                      movilidad y el distanciamiento social, Transmetro inició
                      un repunte en el número de validaciones que, al día de
                      hoy, continúa en ascenso registrando un promedio diario de
                      92.000 validaciones.{' '}
                    </p>
                    <p>
                      Transmetro es un sistema de transporte incluyente en la
                      medida en que tanto su infraestructura como su flota
                      brindan facilidades para que usuarios con movilidad
                      reducida puedan acceder al servicio. Tiene 75 buses con
                      ascensor; tarjetas inteligentes y accesos especiales y
                      ofrece la posibilidad de programar los viajes llamando a
                      la línea de atención al cliente (605-3712222).{' '}
                    </p>
                    <p>
                      Además, cuenta con 88,24 km de espacio peatonal y 242,340
                      m2 de espacio público con rampas y baldosas podotáctiles
                      para facilitar los desplazamientos en andenes y
                      estaciones, esto último pensando en usuarios con
                      limitación visual.
                    </p>
                    <p>
                      Otra característica del SITM es que un centenar de
                      facilitadores acompañan la operación en todas las
                      estaciones, para orientar a los usuarios, fomentar el buen
                      uso del Sistema y controlar la evasión de pasajeros, entre
                      otros aspectos.
                    </p>
                    <p>
                      Desde el año 2010, el Sistema ha logrado implementar un
                      programa de cultura ciudadana conocido como ‘Cultura
                      Transmetro’, que se basa en el respeto al otro y en el
                      cuidado del sistema de transporte masivo. Transmetro se
                      mueve para mejorar la calidad de vida de sus usuarios, al
                      tiempo que aporta para que Barranquilla sea una ciudad
                      mejor conectada, moderna, eficiente y competitiva.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
        </div>
      </div>
      {/* Mision -Vision */}
      <div className="container-xxl" id="#mision-vision">
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
      <div id="organigrama" className="container asamblea">
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
                            equipo y orientación a los logros.
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
      <div className="container-xxl conformado" id="que-es-tm">
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
                          <span> La Unión Temporal Sistur-Transurbanos </span>
                          obtuvo el 60% de la operación del Sistema y el{' '}
                          <span> Grupo Empresarial Metrocaribe S.A.</span> el
                          40%. Estas empresas son las encargadas de prestar el
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
                <h2>Infraestructura del Sistema</h2>
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

                  <p>85.000 m2 de área en Portal de Soledad</p>
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

      {/* <!-- Portafolio Comercial  --> */}

      <div
        className="container-xxl "
        style={{ backgroundColor: '#F5F5F5' }}
        id="reseña-historica"
      >
        <div className="comercial__card " id="portafolio-comercial">
          <div className="card mb-3 border border-0">
            <div className="row g-0 justify-content-end ">
              <div className="col-md-6">
                <div className="card-body">
                  <h2>Portafolio comercial</h2>
                </div>
              </div>
              <div className="col-md-5" />
            </div>
            <div className="row g-0 justify-content-end ">
              <div className="col-md-9">
                <div className="card-body">
                  <ul>
                    <li className="card-title fw-bold ">
                      Publicidad en infraestructura y buses de Transmetro:
                    </li>
                    <p className="card-text  fw-semibold">
                      Actualmente contamos con un amplio portafolio de elementos
                      disponibles, para ser intervenidos con brandeo comercial.
                      Estos elementos incluyen billboards en estaciones, brandeo
                      de buses en exterior e interior, actividades de marca,
                      torniquetes, entre una amplia variedad para escoger.
                    </p>
                    <p className="card-text fw-bold">
                      Agencias comercializadoras
                    </p>
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div
                          className="card"
                          style={{
                            backgroundColor: '#002856',
                            color: '#FFFFFF',
                          }}
                        >
                          <div className="card-body">
                            <p className="card-title fw-bold">
                              Publicidad Barranquilla S.A.S
                            </p>
                            <p className="card-text">
                              Contacto: 3175052734 - 3002820002
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div
                          className="card"
                          style={{
                            backgroundColor: '#F5F5F5',
                            border: '1px solid #002856',
                          }}
                        >
                          <div className="card-body">
                            <p className="card-title fw-bold">
                              Efectimedios S.A.
                            </p>
                            <p className="card-text">
                              Contacto: 3166182466 - 3208558149
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <li className="card-title fw-bold ">
                      Arriendo de locales comerciales
                    </li>
                    <p className="card-text">
                      Transmetro ofrece 8 locales comerciales ubicados en el
                      Portal de Soledad, con un área de 11.2 m² c/u. Un promedio
                      de 94.000 usuarios transita diariamente por este portal.
                      Para mas información:{' '}
                      <span className=" fw-bold ">
                        comercial1@transmetro.gov.co
                      </span>
                    </p>
                  </ul>
                </div>
              </div>
              <div className="col-md-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transmetro;
