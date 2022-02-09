import React from 'react';
import '../styles/components/Transmetro.css';

// eslint-disable-next-line arrow-body-style
const Transmetro = () => {
  return (
    <>
      {/* <!-- acerca de  --> */}

      <div className="container acerca__card">
        <div className="row">
          <h2>Acerca de </h2>

          <div className="clearfix">
            <p>
              En agosto del año 2000, el proyecto Transmetro comienza a gestarse
              cuando un grupo de profesionales especialistas en urbanismo y
              planificación de transporte decidieron formular un proyecto basado
              en el modelo brasileño de transporte masivo y el proyecto
              Transmilenio, en ese entonces en construcción, este trabajo
              desarrollado por Planeación Distrital, Tránsito Distrital, Dadima,
              Edubar, Ministerio de Ambiente, Universidad del Norte liderado y
              coordinado por la Cámara de Comercio de Barranquilla.
            </p>
            <img
              src="http://34.125.209.125/uploads/Acerca_de_6d78f28a2f.jpg"
              className="col-md-6 float-md-end mb-3 ms-md-3 rounded-start "
              alt="Buses Transmetro"
            />
            <p>
              Después de realizados los estudios de transporte público y del
              diseño conceptual de Transmetro llevados a cabo por el consorcio
              colombo-español Bocarejo-ETT, mediante acuerdo Nº 003 de febrero
              14 de 2003 del Concejo de Barranquilla se autoriza al Alcalde
              Metropolitano para que el Distrito participe en la conformación de
              la empresa Transmetro cuyo objeto principal es ser titular del
              sistema integrado de transporte masivo de pasajeros de
              Barranquilla y su área metropolitana.
            </p>

            <p>
              Transmetro se constituye en la Notaría Novena de Barranquilla,
              mediante escritura Pública suscrita el 2 de julio de 2003 como una
              sociedad por acciones entre entidades públicas de la especie de
              Sociedad Anónima Simplificada.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- linea con colores rojo, amarillo, verde  --> */}
      <div className="container linea-colores" />

      {/* Mision -Vision */}
      <div className="container-cardTM">
        <div className="card-tm">
          <figure>
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058"
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
              src="https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg"
            />
          </figure>

          <div className="contenido-card">
            <h3>Visión</h3>
            <p>
              Transmetro será a 2025 el eje de movilidad urbana sostenible de
              Barranquilla y su área metropolitana, integrando los modos de
              transportepúblico masivo, teniendo como principio fundamental la
              satisfacción de nuestros usuarios y públicos de interés
            </p>
          </div>
        </div>
      </div>
      <div className="container linea-colores" />
      {/* Asamblea de Socios */}
      <div className="container asamblea">
        <div className="row">
          <h2 className="text-center"> Asamblea de Socios</h2>
          <figure>
            <img
              src="http://34.125.209.125/uploads/Asamblea_a7e6810fc1.png"
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
        <div className="container obje__Estra">
          <div className="row text-center obj__Estra-ali">
            <div className="col-sm-4 obj__Estra-ali1 ">
              <div className="card-body ">
                <div className="obje__Estra-title">
                  <h2 className="text-center ">OBJETIVO ESTRATEGICO</h2>
                </div>
              </div>
            </div>
            <div className="col obj__Estra-ali2">
              <div className="card-body ">
                <img
                  alt="hombre señalando titulo"
                  src="http://34.125.209.125/uploads/Obj_Estra_6de89c973d.png"
                />
              </div>
            </div>
          </div>
          <div className="row text-center obj-ali">
            <div className="col-sm-4 obj-ali1 ">
              <div className="card-body ">
                <i className="far fa-chart-bar fa-5x" />
              </div>
            </div>
            <div className="col obj-ali2 align-self-center">
              <div className="card-body ">
                <ol className="list-group list-group-horizontal-md">
                  <li>1. Optimizar el uso de los recursos disponibles</li>
                  <li>
                    2. Gestionar para propender por la sostenibilidad financiera
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="row text-center obj-ali">
            <div className="col-sm-4 obj-ali1 ">
              <div className="card-body ">
                <i className="fas fa-users fa-5x" />
              </div>
            </div>
            <div className="col obj-ali2 align-self-center">
              <div className="card-body ">
                <ul className="list-group list-group-horizontal-md">
                  <li>
                    1. Incrementar el nivel de satisfaccion de ususarios y
                    ciudadanos.
                  </li>
                  <li>
                    2. Trabajar bajo el principio de la responsabilidad social.
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal-md">
                  <li>
                    3. Gestionar una comunicacion adecuada con nuestro pcublico
                    y generar valor agregado.
                  </li>
                  <li>
                    4. Contribuir sustancialmente al mejoramiento en la
                    movilidad.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row text-center obj_ali">
            <div className="col-sm-4 obj-ali3 ">
              <div className="card-body ">
                <i className="fas fa-cogs fa-5x" />
              </div>
            </div>
            <div className="col obj-ali4 align-self-center">
              <div className="card-body ">
                <ul className="list-group list-group-horizontal-md">
                  <li>
                    1. Optimizar los procesos internos de acuerdo a exigencias
                    de MIPG.
                  </li>
                  <li>2. Mejorar en los indicadores del sistema.</li>
                  <li>
                    3. Gestionar la integracion del Transporte Masivo con el
                    complementario..
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal-md">
                  <li>4. Constituir Banco de Proyectos.</li>
                  <li>5. Incrementar la demanda.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row text-center obj_ali">
            <div className="col-sm-4 obj-ali3 ">
              <div className="card-body ">
                <i className="far fa-id-badge fa-5x >" />
              </div>
            </div>
            <div className="col obj-ali4 align-self-center">
              <div className="card-body ">
                <ul className="list-group list-group-horizontal-md">
                  <li>
                    1. Fortalecer las competecias del talento humano y el
                    ambiente laboral.
                  </li>
                  <li>
                    2. Desarrollar una cultura organizacional de trabajo en
                    equipo y orientacion a los logros.
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal-md">
                  <li>
                    3. Propiciar ambientes laborales seguros y armoniosos que
                    redunden en el mejoramiento de la calidad de vida de los
                    servidores publicos.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cubo__Info">
        <div className="card mb-3 cubo text-white ">
          <div className="row g-0">
            <div className="col-md-10">
              <div className="card-body text-cubo">
                <h5 className="card-title">
                  MEJORAR LA CALIDAD DE VIDA DE LOS USUARIOS QUE USAN EL
                  SISTEMA, CON CADA EXPERIENCIA DE VIAJE
                </h5>
                <p className="card-text">
                  <span>Qué:</span> Hacer que la experiencia de viaje de los
                  usuarios en Transmetro sea un diferencial positivo frente a
                  otras opciones de transporte público.
                </p>
                <p className="card-text">
                  <span>Cómo:</span> <span>1)</span> Midiendo el cumplimiento de
                  la oferta de servicio dada <span>2)</span> Garantizando al
                  usuario diferentes medios de contacto con Transmetro S.A.S.{' '}
                  <span>3)</span> midiendo la disponibilidad de la flota
                  ofertada.
                </p>
                <p className="card-text">
                  <span>Para:</span> <span>1)</span> Cautivar al usuario con
                  elementos diferenciadores del servicio. <span>2)</span> Dar al
                  usuario la calidad de cliente <span>3)</span> Para que el
                  usuario pueda destinar mas tiempo para actividades diferentes
                  al desplazamiento y/o para que pueda destinar mas recursos a
                  necesidades básicas diferentes al transporte
                </p>
              </div>
            </div>

            <div className="col-md-2 align-self-center">
              <img
                alt="icono lupa"
                src="http://34.125.209.125/uploads/Lupa_f032848b95.png"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className=" row justify-content-end ">
            <div className="card cubo-2 azul-lt ">
              <div className="row">
                <div className="col-md-2 align-self-center">
                  <img
                    src="http://34.125.209.125/uploads/Recurso_3_e9d3e90064.png"
                    alt="icono planilla"
                  />
                </div>
                <div className="col-md-10">
                  <div className="card-body text-cubo-2">
                    <h5 className="card-title">
                      CONSERVAR LA PREFERENCIA DE LOS USUARIOS POR EL SITM SOBRE
                      EL TPC
                    </h5>
                    <p className="card-text">
                      <span>Qué:</span>Regular la operación del servicio, para
                      que la ejecución de los planes de servicio (viajes) se
                      ajusten a lo programado, procurando garantizar la
                      regularidad del servicio al usuario.
                    </p>
                    <p className="card-text">
                      <span>Cómo:</span>
                      <span> 1)</span> Contar con un grupo de personas que
                      censen periódicamente los ciclos de viaje de cada ruta del
                      sistema <span>2)</span> Mantener un tablero de indicadores
                      de cumplimiento de la operación y demanda alcanzada por
                      ruta
                      <span>3)</span> Hacer planes de servicio para cada
                      estacionalidad del año <span>4)</span> hacer planes de
                      desvío por cada evento de ciudad del que se tenga
                      información <span>5)</span> Contar con presencia en los
                      comités organizados por las autoridades para aprobar
                      actividades que afectan la movilidad <span>6)</span> Tener
                      comunicación permanente con la subgerencia de
                      comunicaciones.
                    </p>
                    <p className="card-text">
                      <span>Para:</span> Satisfacer las necesidades de viaje de
                      nuestros usuarios, cumpliendo con las características de
                      servicio ofrecidas, en especial las relacionadas con la
                      regularidad del servicio y el tiempo de viaje programado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 cubo-3 text-white ">
          <div className="row g-0">
            <div className="col-md-10">
              <div className="card-body text-cubo">
                <h5 className="card-title">
                  DISMINUIR LA ACCIDENTALIDAD DEL SISTEMA
                </h5>
                <p className="card-text">
                  <span>Qué:</span> <span>1)</span> Exigir capacitación
                  permanente a los operadores <span>2)</span> hacer evaluaciones
                  periódicas a operadores <span>3)</span>
                  gestionar con autoridades la señalización y adecuación de la
                  infraestructura vial <span>4)</span> Contar con buses en buen
                  estado de operación <span>5)</span> Mejorar la conciencia de
                  usuarios de las vías sobre los conceptos de seguridad
                </p>
                <p className="card-text">
                  <span>Cómo:</span> <span>1)</span> llevando un control sobre
                  las capacitaciones dadas a los operadores <span>2)</span>{' '}
                  haciendo reportes del estado de la infraestructura{' '}
                  <span>3)</span> haciendo inspección sobre el estado de los
                  buses <span>4)</span> monitoreando las rutinas de
                  mantenimiento <span>5)</span> Gestionando campañas con
                  autoridades y fondo de prevención vial.
                </p>
                <p className="card-text">
                  <span>Para:</span> Contribuir a una ciudad de movilidad
                  segura, permitiendo a la comunidad de Barranquilla y su área
                  metropolitana moverse tranquilamente por sus calles
                </p>
              </div>
            </div>

            <div className="col-md-2 align-self-center">
              <img
                src="http://34.125.209.125/uploads/Recurso_4_4034a1a359.png"
                alt="icono corazon"
              />
            </div>
          </div>
        </div>

        {/* <!-- cubo 4 --> */}

        <div className="container-fluid">
          <div className=" row justify-content-end">
            <div className="card cubo-4 azul-lt ">
              <div className="row">
                <div className="col-md-2 align-self-center">
                  <img
                    src="http://34.125.209.125/uploads/Recurso_5_358f163079.png"
                    alt="icono planilla"
                  />
                </div>
                <div className="col-md-10">
                  <div className="card-body text-cubo-4">
                    <h5 className="card-title">
                      PRESTAR UN SERVICIO CON ALTOS NIVELES DE EFICIENCIA
                    </h5>
                    <p className="card-text">
                      <span>Qué:</span> Planear programas de servicio que
                      ajusten la oferta a la demanda de las zonas de influencia
                      del sistema.
                    </p>
                    <p className="card-text">
                      <span>Cómo:</span> <span>1)</span> Manteniendo bases de
                      datos detalladas y consolidadas de la demanda del sistema
                      por zonas, horarios, sentidos, entre otros.{' '}
                      <span>2)</span> haciendo aforos de ocupación visual en
                      zonas estratégicas de las rutas <span>3)</span>
                      consolidando información operativa de campo{' '}
                      <span>4)</span> Manteniendo las bitácoras de operación del
                      centro de control <span>5)</span>
                      haciendo comités de seguimiento y programación donde se
                      consolide la información de la operación desde las
                      diferentes fuentes
                    </p>
                    <p className="card-text">
                      <span>Para:</span> Mantener un alto nivel de eficiencia en
                      la disponibilidad y uso de los recursos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 cubo-5 text-white ">
          <div className="row g-0">
            <div className="col-md-10">
              <div className="card-body text-cubo">
                <h5 className="card-title">
                  PROPICIAR AMBIENTES LABORALES SEGUROS Y ARMONIOSOS QUE
                  REDUNDEN EN EL MEJORAMIENTO DE LA CALIDAD DE VIDA DE LOS
                  SERVIDORES PÚBLICOS
                </h5>
                <p className="card-text text-justify">
                  <span>Qué:</span> <span>1)</span> Desarrollar actividades de
                  Salud Ocupacional que permitan minimizar los riesgos laborales
                  y brinden al personal ambientes seguros de trabajo.{' '}
                  <span>2)</span>) Crear programas de bienestar laboral.{' '}
                  <span>3)</span> Realizar actividades de recreación e
                  integración.
                  <span>4)</span> Implementar el plan institucional de
                  capacitación
                </p>
                <p className="card-text">
                  <span>Cómo:</span> <span>1)</span> Contando con el auspicio de
                  las prestadoras de salud, pensión, ARL , caja de compensación
                  y demás proveedores; y 2) Contando con la asignación
                  presupuestal para desarrollar las actividades de capacitación,
                  recreación, integración y salud ocupacional
                </p>
              </div>
            </div>

            <div className="col-md-2 align-self-center">
              <img
                src="http://34.125.209.125/uploads/Recurso_6_36506838db.png"
                alt="icono planilla"
              />
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
            <div className="col-8">
              <h2>QUE ES TRANSMETRO Y COMO ESTA CONFORMADO</h2>
            </div>

            <div className="col-12">
              <div>
                <p>
                  El Sistema de Transporte Masivo Transmetro es el sistema de
                  buses de tránsito rápido (BTR) que opera comercialmente en
                  Barranquilla y su área metropolitana desde el 10 de julio de
                  2010, convirtiéndola en la quinta ciudad del país en
                  implementar e inaugurar este tipo de sistema de transporte
                  (después de Bogotá, Pereira, Cali y Bucaramanga).
                </p>
                <p>
                  Tras una etapa de pedagogía y pruebas de más de 2 meses,
                  Transmetro inició su operación comercial el 10 de julio de
                  2010 con un pasaje de $ 1.400 pesos mediante un sistema de
                  tarjetas electrónicas recargables. El sistema funciona con
                  buses padrones y articulados que circulan por las troncales
                  Murillo y Olaya Herrera, además de las rutas alimentadoras,
                  que recorren barrios de Barranquilla, Soledad y un pequeño
                  sector de Puerto Colombia.{' '}
                  <span>
                    Organizaciones que conforman el Sistema de Transporte masivo
                    en Barranquilla y su área Metropolitana:
                  </span>
                </p>
              </div>
              <div>
                <p className="text-derecha ">
                  <img
                    alt="logo recaudos sit"
                    src="http://34.125.209.125/uploads/icosn_39_339f318377.png"
                  />
                  El Sistema emplea un método de recaudo único a cargo de la
                  empresa Recaudos SIT Barranquilla, concesionario del Sistema
                  encargado de proveer y distribuir las tarjetas inteligentes,
                  suministro de la comunicación y la tecnología que permite la
                  utilización de validadores y barreras de acceso electonicos.
                  Asi mismo es la empresa encargada de proveer al personal
                  idoneo para taquillas y mantenimiento de los equipos
                  correspondientes al recaudo del Sistema, que incluyen la
                  alianza con otras Organizaciones para ubicar una red de
                  recarga en Barranquilla y Soledad.
                </p>
              </div>
              <div>
                <p className="text-derecha ">
                  <img
                    alt="logo sistur"
                    src="http://34.125.209.125/uploads/icosn_40_3c06404744.png"
                  />
                  la cantidad de 10 o más hijos deseados para mantener la
                  herencia. Por otra parte la moda de la época, marcada por el
                  uso de corsettes que achataban los pechos y causaban pezones
                  invertidos, impedía muchas veces que las propias madres
                  alimentaran a sus hijos. En contra de las recomendaciones de
                  religiosos y médicos la mayoría de las mujeres que tenían
                  posibilidades económicas de contratar amas de leche lo hacían.{' '}
                </p>
              </div>
              <div>
                <p className="text-derecha ">
                  <img
                    alt="logo transmetro"
                    src="http://34.125.209.125/uploads/icosn_42_bf33a6a883.png"
                  />
                  TRANSMETRO S.A.S. es una sociedad por acciones constituida
                  entre entidades públicas, ubicada dentro de las sociedades por
                  acciones simplificadas regulada por la ley 1258 de diciembre 5
                  de 2008, vinculada al Área Metropolitana de Barranquilla,
                  regida por las disposiciones legales aplicables a las empresas
                  industriales y comerciales del estado y en particular a lo
                  dispuesto en el artículo 85 y siguientes de la ley 489 y sus
                  decretos reglamentarios, que tiene como objeto social
                  principal el ejercicio de la titularidad sobre el Sistema
                  Integrado de Transporte Masivo de Pasajeros del Distrito de
                  Barranquilla y su Área Metropolitana, así como la
                  construcción, operación, mantenimiento y puesta en
                  funcionamiento del mismo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- linea con colores rojo, amarillo, verde  --> */}
      <div className="container linea-colores" />

      {/* <!-- DATOS DE INFRAESTRUCTURA --> */}

      {/* Cards Troncales */}
      <div className="container">
        <div className="color-tex-da-infra">
          <h1 className="text-center">DATOS DE INFRAESTRUCTURA</h1>
        </div>
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
                Los servicios Troncales agilizan el traslado de los usuarios
                porque transitan por carriles excusivos (Solo Bus) de las
                troncales Murillo y Olaya Herrera para llevar a los ciudadanos a
                las diferentes estaciones y portales con los que cuenta el
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
                  <h3>TRONCAL MURILLO</h3>
                  <div className="cars-ico">
                    <img
                      src="http://34.125.209.125/uploads/icosn_05_a1503b3051.png"
                      alt=""
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
                      Estacion <span>Pedro Ramayá Beltran</span> - Entre
                      carreras 23 y Av. Circunvalar (Soledad, Atl.).
                    </li>
                    <li>
                      Estacion <span>Pacho Galán</span> - Entre carreras 16 y 17
                      (Soledad, Atl.).
                    </li>
                    <li>
                      Estacion <span>Joaquin Barrios Polo</span> - Entre
                      carreras 1G y 2A.
                    </li>
                    <li>
                      Estacion <span>Buenos Aires</span> - Entres carrera 7 y
                      7G.
                    </li>
                    <li>
                      Estacion <span>LA Ocho</span> - Entre carreras 8 y 8C.
                    </li>
                    <li>
                      Estacion <span>La Catorce</span> - Entre carreras 14 y 17.
                    </li>
                    <li>
                      Estacion <span>La Veintiuna</span> - Entre carreras 20 y
                      21.
                    </li>
                    <li>
                      Estacion <span>Atlántico</span> - Entre carreras 26 y 27.
                    </li>
                    <li>
                      Estacion <span>Chiquinquirá</span> - Entre carreras 33 y
                      36.
                    </li>
                    <li>
                      Estacion <span>La Arenosa</span> - Entre carreras 41 y 43.
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
                <div className="col-md-6  ">
                  <h3>TRONCAL OLAYA HERRERA</h3>
                  <div className="cars-ico ">
                    <img
                      src="http://34.125.209.125/uploads/icosn_05_a1503b3051.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <ol>
                    <li>
                      Estacion retorno <span>Joe Arroyo</span> - Carrera 46 con
                      calle 74.
                    </li>
                    <li>
                      Estacion <span>Esthercita Forero</span> - Entre calles 69
                      y 70.
                    </li>
                    <li>
                      Estacion <span>Alfredo Correa De Andréis</span> - Entre
                      calles 60 y 62.
                    </li>
                    <li>
                      Estacion <span>La Catedral</span> - Entre calles 50 y 53.
                    </li>
                    <li>
                      Estacion <span>Barrio Abajo</span> - Entre calles 43 y 45.
                    </li>
                    <li>
                      Estacion <span>Parque Cultural</span> - Entre calles 36 y
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
                alejados de las troncales a través de las estaciones del Sistema
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
                <div className="col-md-6  ">
                  <h3>RUTAS ALIMENTADORAS</h3>
                  <div className="cars-ico ">
                    <img
                      src="http://34.125.209.125/uploads/icosn_05_a1503b3051.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <ol>
                    <li>
                      Estacion retorno <span>Joe Arroyo</span> - Carrera 46 con
                      calle 74.
                    </li>
                    <li>
                      Estacion <span>Esthercita Forero</span> - Entre calles 69
                      y 70.
                    </li>
                    <li>
                      Estacion <span>Alfredo Correa De Andréis</span> - Entre
                      calles 60 y 62.
                    </li>
                    <li>
                      Estacion <span>La Catedral</span> - Entre calles 50 y 53.
                    </li>
                    <li>
                      Estacion <span>Barrio Abajo</span> - Entre calles 43 y 45.
                    </li>
                    <li>
                      Estacion <span>Parque Cultural</span> - Entre calles 36 y
                      39.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- DATOS DE INFRSESTRUCTURA bloque 2 --> */}

      <div className="container">
        <div className="row cont-a justify-content-evenly">
          <div className="col-4 portal1 text-center">
            <h3>PORTAL DE SOLEDAD</h3>
            <i className="fas fa-directions fa-3x dato-ico" alt="" />
          </div>
          <div className="col-4 portal1 text-center">
            <h3>PORTAL DE BARRANQUILLITA</h3>
            <i className="fas fa-directions fa-3x dato-ico2" alt="" />
          </div>
          <div className="col-4 portal1 text-center">
            <h3>ESTACION JOE ARROYO</h3>
            <i className="fas fa-directions fa-3x dato-ico3" alt="" />
          </div>
        </div>
      </div>

      {/* <!-- DATOS DE INFRAESTRUCTURA bloque 3 --> */}

      <div className="container ">
        <div className="row cont-infr">
          <div className="col-sm-4 text-center">
            <img
              src="http://34.125.209.125/uploads/icosn_49_b063e37dbf.png"
              alt="icono"
            />
            <div className="container linea-colores-peque" />

            <p className="">14 kilómetros lineales en rutas troncales </p>
          </div>
          <div className="col-sm-4  text-center">
            <img
              src="http://34.125.209.125/uploads/icosn_43_9a1b2c7a37.png"
              alt="icono"
            />
            <div className="container linea-colores-peque" />
            <p className="">204 mil kilómetros cuadrados de espacio público</p>
          </div>
          <div className="col-sm-4  text-center">
            <img
              src="http://34.125.209.125/uploads/icosn_46_e24038f25d.png"
              alt="icono"
            />
            <div className="container linea-colores-peque" />
            <p className="">198 kilómetros en Rutas Alimentadoras</p>
          </div>
        </div>

        <div className="row cont-infr">
          <div className="col-sm-4 text-center">
            <img
              src="http://34.125.209.125/uploads/icosn_48_d013e219fb.png"
              alt="icono"
            />
            <div className="container linea-colores-peque" />

            <p className="icono">85.000 mil mt2 de área en Portal de Soledad</p>
          </div>
          <div className="col-sm-4  text-center">
            <img
              src="http://34.125.209.125/uploads/icosn_44_03deee75d1.png"
              alt="icono"
            />
            <div className="container linea-colores-peque" />
            <p className="">
              45.000 mil mts2 de área en Barranquillita: Capacidad para 120
              vehículos
            </p>
          </div>
          <div className="col-sm-4  text-center">
            <img
              src="http://34.125.209.125/uploads/icosn_47_01ab65445b.png"
              alt="icono"
            />
            <div className="container linea-colores-peque" />
            <p className="">Par Vial: 2 kms. de vía de andenes</p>
          </div>
        </div>
      </div>

      {/* Movilizados */}

      <div className="container">
        <div className="card mb-3 movilizado">
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
                  src="http://34.125.209.125/uploads/bus_movilizados_98caf0019d.png"
                  alt="Bus Transmetro"
                />
                <h2 className="card-title text">
                  <strong className="text-danger">350.718.296</strong>{' '}
                </h2>
                <p className="card-text">
                  Desde el 10 de Julio de 2010 hasta el 2 de Enero de 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-primary "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Encuesta
        </button>

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
    </>
  );
};

export default Transmetro;
