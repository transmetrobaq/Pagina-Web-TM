import React from 'react';
import '../styles/components/Transmetro.css';

// eslint-disable-next-line arrow-body-style
const Transmetro = () => {
  return (
    <>
      {/* <!-- acerca de  --> */}

      <div className="container acerca__card">
        <div className="row">
          <h1 id="acerca">Acerca de </h1>
          <div className="clearfix">
            <p>
              En agosto del año 2000, el Sistema de Transporte Masivo de
              Barranquilla y su área metropolitana, Transmetro, comienza a
              gestarse cuando un grupo de profesionales especialistas en
              urbanismo y planificación de transporte deciden formular un
              proyecto basado en el modelo brasileño de transporte masivo y el
              proyecto Transmilenio, en ese entonces en construcción en la
              ciudad de Bogotá D.C. Este trabajo fue desarrollado por Planeación
              Distrital, Tránsito Distrital, Dadima, Edubar, Ministerio de
              Ambiente, Universidad del Norte, liderado y coordinado además por
              la Cámara de Comercio de Barranquilla.
            </p>
            <img
              src="https://apiwebtm.com/uploads/Acerca_de_4f7942ad24.jpg"
              className="col-md-3 float-md-end mb-3 ms-md-3 rounded-start img-fluid"
              alt="Buses Transmetro"
            />
            <p>
              Después de realizados los estudios de transporte público y el
              diseño conceptual de Transmetro llevados a cabo por el consorcio
              colombo-español Bocarejo-ETT, mediante acuerdo Nº 003 de febrero
              14 de 2003 del Concejo de Barranquilla se autoriza al alcalde
              metropolitano para que el Distrito participe en la conformación de
              la empresa Transmetro SAS, cuyo objeto principal es ser titular
              del Sistema Integrado de Transporte Masivo de pasajeros de
              Barranquilla y su área metropolitana.
            </p>

            <p>
              Transmetro se constituye en la Notaría Novena de Barranquilla
              mediante escritura pública suscrita el 2 de julio de 2003, como
              una sociedad por acciones entre entidades públicas de la especie
              de Sociedad Anónima Simplificada.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- linea con colores rojo, amarillo, verde  --> */}
      <div className="container linea-colores" />

      {/* Mision -Vision */}
      <div className="container-cardTM">
        <div id="mision-vision" className="card-tm">
          <figure>
            <img
              alt=""
              src="https://apiwebtm.com/uploads/Mision_9b60965b6a.JPG"
            />
          </figure>

          <div className="contenido-card">
            <h3>Misión</h3>
            <p>
              Ser la primera opción para llegar a tu destino de manera
              confiable, oportuna y agradable, en un escenario incluyente y
              sostenible, generando calidad de vida para Barranquilla y su área
              metropolitana.
            </p>
          </div>
        </div>

        <div className="card-tm" style={{ backgroundColor: '#004f9f' }}>
          <figure>
            <img
              alt=""
              src="https://apiwebtm.com/uploads/small_Vision_b79475c4d1.jpg"
            />
          </figure>

          <div className="contenido-card">
            <h3>Visión</h3>
            <p>
              Transmetro será a 2025 el eje de movilidad urbana sostenible de
              Barranquilla y su área metropolitana, integrando los modos de
              transporte público masivo, teniendo como principio fundamental la
              satisfacción de nuestros usuarios y públicos de interés.
            </p>
          </div>
        </div>
      </div>
      <div className="container linea-colores" />
      {/* Asamblea de Socios */}
      <div id="asamblea-socios" className="container asamblea">
        <div className="row">
          <h2 className="text-center">Organigrama</h2>
          <figure>
            <img
              src="https://apiwebtm.com/uploads/Asamblea_V2_30a7029fd8.png"
              alt="Asamblea"
              className="card-img"
            />
          </figure>
        </div>
      </div>
      {/* <!-- linea con colores rojo, amarillo, verde  --> */}
      <div className="container linea-colores" />

      {/* Objetivos */}

      <div className="container">
        <div
          className="card mb-3 mx-auto d-block border border-white obje__Estra"
          id="objetivos-estrategicos"
        >
          <div className="row g-0">
            <div className="col-md-7">
              <div className="card-body">
                <h2 className="card-title text-center">
                  Objetivos Estratégicos
                </h2>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="https://apiwebtm.com/uploads/Obj_Estra_743c30512f.png"
                className="img-fluid rounded-start"
                alt="hombre señalando titulo"
              />
            </div>
          </div>
        </div>
        {/* Objetivo 1 */}
        <div
          className="card mb-3 mx-auto d-block card__obje-e1"
          style={{ maxWidth: '100%' }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <i className="far fa-chart-bar fa-5x" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <ol>
                  <li>Optimizar el uso de los recursos disponibles.</li>
                  <li>
                    Gestionar para propender por la sostenibilidad financiera.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* Objetivo 2 */}
        <div className="card mb-3 mx-auto d-block card__obje-e1">
          <div className="row g-0">
            <div className="col-md-4">
              <i className="fas fa-users fa-5x" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <ol>
                  <li>
                    Incrementar el nivel de satisfacción de usuarios y
                    ciudadanos.
                  </li>
                  <li>
                    Trabajar bajo el principio de la responsabilidad social.
                  </li>
                  <li>
                    Gestionar una comunicación adecuada con nuestro público y
                    generar valor agregado.
                  </li>
                  <li>
                    Contribuir sustancialmente al mejoramiento en la movilidad.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* Objetivos 3 y 4 */}
        {/* Objetivo 3 */}
        <div
          className="card mb-3 mx-auto d-block card__Obje-e2"
          style={{ maxWidth: '100%' }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <i className="fas fa-cogs fa-5x" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <ol>
                  <li>
                    Optimizar los procesos internos de acuerdo a exigencias de
                    MIPG.
                  </li>
                  <li>Mejorar en los indicadores del Sistema.</li>
                  <li>
                    Gestionar la integración del Transporte Masivo con el
                    complementario.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* Objetivo 4 */}
        <div className="card mb-3 mx-auto d-block card__Obje-e2">
          <div className="row g-0">
            <div className="col-md-4">
              <i className="far fa-id-badge fa-5x >" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <ol>
                  <li>
                    Incrementar el nivel de satisfacción de usuarios y
                    ciudadanos.
                  </li>
                  <li>
                    Trabajar bajo el principio de la responsabilidad social.
                  </li>
                  <li>
                    Gestionar una comunicación adecuada con nuestro público y
                    generar valor agregado.
                  </li>
                  <li>
                    Contribuir sustancialmente al mejoramiento en la movilidad.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- linea con colores rojo, amarillo, verde  --> */}
      <div className="container linea-colores" />

      {/* que es transmetro */}
      <div className="container">
        <div className="row">
          <div className="conformado">
            <h2 className="text-center">
              Qué es Transmetro y cómo está conformado
            </h2>

            <div className="card  mb-3">
              <div className="card-body">
                <p className="card-text">
                  El Sistema de Transporte Masivo Transmetro es el sistema de
                  Buses de Tránsito Rápido - BTR que opera comercialmente en
                  Barranquilla y su área metropolitana desde el 10 de julio de
                  2010, convirtiéndola en la quinta ciudad del país en
                  implementar e inaugurar este tipo de sistema de transporte
                  después de Bogotá, Pereira, Cali y Bucaramanga.
                </p>
                <p className="card-text">
                  Tras una etapa de pedagogía y pruebas de más de 2 meses,
                  Transmetro inició su operación comercial el 10 de julio de
                  2010 con un pasaje de $1.400 a través de un sistema de
                  tarjetas electrónicas recargables. El Sistema funciona con
                  vehículos tipo articulado y padrón que circulan por las
                  troncales Murillo (calle 45) y Olaya Herrera (carrera 46),
                  además de las rutas alimentadoras (vehículos tipo busetón) que
                  recorren barrios de Barranquilla, Soledad y un pequeño sector
                  de Puerto Colombia.{' '}
                </p>
              </div>

              {/* Organizaciones */}
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img
                      src="https://apiwebtm.com/uploads/icosn_42_28bca68ce7.png"
                      className="img-fluid rounded-start"
                      alt="logo transmetro"
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="card-text">
                        <span>TRANSMETRO S.A.S.</span> es una sociedad por
                        acciones constituida entre entidades públicas ubicada
                        dentro de las sociedades por acciones simplificadas
                        regulada por la ley 1258 de diciembre 5 de 2008,
                        vinculada al Área Metropolitana de Barranquilla, regida
                        por las disposiciones legales aplicables a las empresas
                        industriales y comerciales del Estado y en particular a
                        lo dispuesto en el artículo 85 y siguientes de la ley
                        489 y sus decretos reglamentarios, que tiene como objeto
                        social principal el ejercicio de la titularidad sobre el
                        Sistema Integrado de Transporte Masivo de Pasajeros del
                        Distrito de Barranquilla y su área metropolitana, así
                        como la construcción, operación, mantenimiento y puesta
                        en funcionamiento del mismo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img
                      src="https://apiwebtm.com/uploads/icosn_39_b38f16dfab.png"
                      className="img-fluid rounded-start"
                      alt="logo recaudos sit barranquilla"
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="card-text">
                        El Sistema emplea un método de recaudo único a cargo de
                        la empresa <span>Recaudos SIT Barranquilla</span>,
                        concesionario encargado de proveer y distribuir las
                        tarjetas inteligentes y suministro de la comunicación y
                        tecnología que permite la utilización de validadores y
                        barreras de acceso electrónicos. Asimismo, es la empresa
                        encargada de proveer al personal idóneo para taquillas y
                        mantenimiento de los equipos correspondientes al recaudo
                        del Sistema, que incluye la alianza con otras
                        organizaciones para ubicar una red de recarga en
                        Barranquilla y Soledad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="https://apiwebtm.com/uploads/icosn_40_a4f85ba55c.png"
                      className="img-fluid rounded-start  "
                      style={{ width: '200px' }}
                      alt="logo sistur"
                    />
                    <img
                      src="https://apiwebtm.com/uploads/LOGO_Metrocaribe_2363c756b2.jpg"
                      className="img-fluid rounded-start "
                      alt="logo metrocaribe"
                    />
                  </div>

                  <div className="col-md-9">
                    <div className="card-body">
                      <p className="card-text">
                        El Ente Gestor mediante proceso de licitación
                        LP-Tm300-001-09, adjudicó la operación del Sistema de
                        Transporte Masivo para Barranquilla y su área
                        Metropolitana.{' '}
                        <span> La Unión Temporal Sistur-Transurbanos</span>
                        obtuvo el 60 % de la operación del Sistema y el{' '}
                        <span> Grupo Empresarial Metrocaribe S.A.</span> el 40
                        %. Estas empresas son las encargadas de prestar el
                        servicio de transporte masivo, suministrar la flota de
                        autobuses, máquinas y equipos necesarios para dotar los
                        talleres y parqueos, así como el mantenimiento de las
                        instalaciones y flota.
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

      {/* <!-- linea con colores rojo, amarillo, verde  --> */}
      <div className="container linea-colores" />

      {/* <!-- DATOS DE INFRAESTRUCTURA --> */}

      {/* Cards Troncales */}
      <div id="datos-infraestructura" className="container">
        <div className="color-tex-da-infra">
          <h1 className="text-center">DATOS DE INFRAESTRUCTURA</h1>
        </div>
        {/* Cards Troncales */}

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
                Las estaciones son los puntos de abordaje de vehículos ubicadas
                a lo largo de las dos troncales que componen nuestro Sistema:
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
                        Estación <span>Pacho Galán</span> - Entre carreras 16 y
                        17 (Soledad, Atl.).
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
                        Estación <span>La Catorce</span> - Entre carreras 14 y
                        17.
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
                        Estación <span>Atlántico</span> - Entre carreras 26 y
                        27.
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
                        Estación <span>La Arenosa</span> - Entre carreras 41 y
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
                        Estación retorno <span>Joe Arroyo</span> - Carrera 46
                        con calle 74.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-esthercita-forero/#estacion"
                        role="button"
                        alt="estacion esthercita forero"
                      >
                        Estación <span>Esthercita Forero</span> - Entre calles
                        69 y 70.
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
                        Estación <span>La Catedral</span> - Entre calles 50 y
                        53.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-barrio-abajo/#estacion"
                        role="button"
                        alt="estacion barrio abajo"
                      >
                        Estación <span>Barrio Abajo</span> - Entre calles 43 y
                        45.
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sistema/estaciones/estacion-parque-cultural-del-caribe/#estacion"
                        role="button"
                        alt="estacion parque cultural del caribe"
                      >
                        Estación <span>Parque Cultural</span> - Entre calles 36
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

      {/*  <!-- DATOS DE INFRSESTRUCTURA bloque 2 --> */}
      <div className="container car__port">
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          <div className="col ">
            <div className="card car__port-infra  h-100">
              <div className="card-body">
                <a
                  href="/sistema/estaciones/estacion-portal-de-soledad/#estacion"
                  className=""
                >
                  <h5 className="card-title">PORTAL DE SOLEDAD</h5>
                </a>
              </div>
              <img
                src="https://apiwebtm.com/uploads/icon_portal_rojo_a77a466c0b.png"
                alt="icono"
              />
            </div>
          </div>
          <div className="col">
            <div className="card car__port-infra  h-100">
              <div className="card-body">
                <h5 className="card-title">PORTAL BARRANQUILLITA</h5>
              </div>
              <img
                src="https://apiwebtm.com/uploads/icon_portal_A_f0df37cb97.png"
                alt="icono"
              />
            </div>
          </div>
          <div className="col">
            <div className="card car__port-infra  h-100">
              <div className="card-body">
                <a
                  href="/sistema/estaciones/estacion-retorno-joe-arroyo/#estacion"
                  className=""
                >
                  <h5 className="card-title">ESTACIÓN RETORNO JOE ARROYO</h5>
                </a>
              </div>
              <img
                src="https://apiwebtm.com/uploads/icon_estacion_V_c6b7ce1a82.png"
                alt="icono"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- DATOS DE INFRAESTRUCTURA bloque 3 --> */}

      <div className="container ">
        <div className="row cont-infr">
          <div className="col-md-4 text-center">
            <img
              src="https://apiwebtm.com/uploads/icosn_49_e68842dd46.png"
              alt="icono"
              className="img-fluid"
            />
            <div className="container linea-colores-peque" />

            <p className="">14 kilómetros lineales en rutas troncales </p>
          </div>
          <div className="col-sm-4  text-center">
            <img
              src="https://apiwebtm.com/uploads/icosn_43_faf8d5db31.png"
              alt="icono"
            />
            <div className="container linea-colores-peque" />
            <p className="">204 mil kilómetros cuadrados de espacio público</p>
          </div>
          <div className="col-sm-4  text-center">
            <img
              src="https://apiwebtm.com/uploads/icosn_46_e433788e52.png"
              alt="icono"
            />
            <div className="container linea-colores-peque" />
            <p className="">198 kilómetros en rutas alimentadoras</p>
          </div>
        </div>

        <div className="row cont-infr">
          <div className="col-sm-4 text-center">
            <img
              src="https://apiwebtm.com/uploads/icosn_48_7194edb295.png"
              alt="icono"
            />
            <div className="container linea-colores-peque" />

            <p className="icono">85.000 mil m2 de área en Portal de Soledad</p>
          </div>
          <div className="col-sm-4  text-center">
            <img
              src="https://apiwebtm.com/uploads/icosn_44_d03171c121.png"
              alt="icono"
            />
            <div className="container linea-colores-peque" />
            <p className="">
              45.000 mil m2 de área en Barranquillita: capacidad para 120
              vehículos
            </p>
          </div>
          <div className="col-sm-4  text-center">
            <img
              src="https://apiwebtm.com/uploads/icosn_47_7b564c98a2.png"
              alt="icono"
            />
            <div className="container linea-colores-peque" />
            <p className="">Par Vial: 2 km de vía de andenes</p>
          </div>
        </div>
      </div>

      {/* Movilizados */}
      <div className="container" style={{ marginTop: '65px' }}>
        <div className="row justify-content-center ">
          <div className="card mb-3 movilizado ">
            <div className="row g-0 ">
              <div className="col-md-6">
                <div className="card-body  usu-movilizados">
                  <h2 className="card-text text-center">
                    Usuarios
                    <strong className="text-danger"> movilizados</strong>
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <img
                    src="https://apiwebtm.com/uploads/bus_movilizados_836a10bb99.png"
                    alt="Bus Transmetro"
                  />
                  <h2 className="card-title text">
                    <strong className="text-danger">350.718.296</strong>{' '}
                  </h2>
                  <p className="card-text">
                    Desde el 10 de julio de 2010 hasta el 2 de enero de 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fin Movilizados */}

      {/* Encuestas Ciudadano */}
      <center className="container">
        <div className="row card__Encuesta">
          <div className="card">
            <div className="card-body ">
              <h2 className="card-title">
                Encuesta de participacion ciudadana
              </h2>

              <figure className="col-md-12 ">
                <center>
                  <img
                    src="https://apiwebtm.com/uploads/Encuesta_7366385556.png"
                    className="img-fluid rounded-start center-block"
                    alt="imagen de encuesta"
                    style={{ width: '30%' }}
                  />
                </center>
              </figure>

              <div className="container">
                {/* <!-- Button trigger modal --> */}
                <center>
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    style={{
                      marginTop: '20px',
                      fontSize: '18px',
                      width: '150px',
                    }}
                  >
                    Ver encuesta
                  </button>
                </center>
                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Encuestas Transmetro
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body ">
                        {/*  <iframe
                  src="https://us20.list-manage.com/survey?u=82026dcd7051db356ac870607&id=305155383f&attribution=false"
                  style={{ width: '100%', height: '600px ' }}
                />  */}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Transmetro;
