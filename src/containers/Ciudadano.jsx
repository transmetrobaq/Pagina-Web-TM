/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../styles/components/Ciudadano.css';
/* import AppContext from '../context/AppContext'; */

// eslint-disable-next-line arrow-body-style
const Ciudadano = () => {
  /* const { manual } = useContext(AppContext); */
  /* const { manual, quest } = useContext(AppContext); */
  /* const quests = quest; */
  return (
    <>
      <div
        className="container scrollspy-example"
        data-bs-spy="scroll"
        data-bs-target="#navbar-Tm"
        data-bs-offset="0"
        tabindex="0"
      >
        <div className="container ">
          <div className="row cd">
            <div className="card ">
              <div className="card-body ">
                <h2 id="manual-del-usuario" className="card-title text-center">
                  MANUAL DEL USUARIO
                </h2>
                <h5 className="card-text text-center">
                  Este Manual describe objetos, generalidades, derechos y
                  deberes del usuario, restricciones y canales de comunicacion
                  con el sistema
                </h5>
                <p className="card-text">
                  Esta información se debe tener en cuenta al momento de
                  utilizar el Sistema Integrado de Transporte Masivo de la
                  ciudad de Barranquilla y su Área Metropolitana –Transmetro-,
                  ya que representa para los usuarios/ciudadanos una guía sobre
                  el buen uso y el comportamiento que se debe tener al interior
                  de los escenarios que componen el SITM -Transmetro- con el fin
                  de procurar una mejor convivencia entre todos los actores del
                  Sistema. Puede descargarlo y conocer todos los detalles de
                  este importante documento, haciendo clic en el siguiente
                  enlace:
                </p>
                <center>
                  <a
                    href="http://bit.ly/2nQO0TD"
                    className="btn btn-outline-success "
                    target="_blanck"
                    alt="Manual de Usuario"
                  >
                    Manual de Usuario
                  </a>
                </center>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- linea con colores rojo, amarillo, verde  --> */}
        <div className="container linea-colores" />

        {/* Preguntas Frecuentes */}
        <div className="titulo-preguntas">
          <h2 className="text-center azul-lt" id="preguntas-frecuentes">
            PREGUNTAS Y RESPUESTAS FRECUENTES
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="preguntas-tm">
                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg1" />
                  <label className="preguntas-label" for="preg1">
                    ¿Cuáles son los canales de atención que existen para
                    interponer peticiones, quejas, reclamos, sugerencias,
                    denuncias y felicitaciones (PQRSDF)?
                  </label>
                  <div className="respuestas-content">
                    <p>
                      A continuación ponemos a su disposición los siguientes
                      canales o medios, mediante los cuales podrá comunicarse
                      con nosotros de forma efectiva:{' '}
                      <ul className="fa-ul">
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-check-square" />
                          </span>
                          <span>Línea de atención</span>{' '}
                          <span style={{ color: '#e30613' }}>6053712222:</span>{' '}
                          En la línea de atención al cliente se puede interponer
                          PQRSDF de manera sencilla. Aquí también se puede
                          indagar sobre el estado de la operación y reportar
                          objetos perdidos. En las estaciones del Sistema el
                          usuario cuenta con un teléfono que te comunica
                          directamente con esta línea.
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-check-square" />
                          </span>{' '}
                          <span>Punto de atención al cliente (PAC):</span> En la
                          Estación Joe Arroyo (Carrera 46 con calle 72 esquina)
                          está ubicado el punto de atención al cliente. Allí el
                          usuario puede, de manera presencial, interponer su
                          PQRSDF; reportar objetos perdidos, personalizar y
                          marcar la tarjeta inteligente. <br />
                          De igual forma, en nuestra{' '}
                          <span>
                            oficina administrativa de Transmetro, (Carrera 57 99
                            A 65 Piso 15, Torres del Atlántico, Torre Sur)
                          </span>{' '}
                          puede usted radicar o presentar su PQRSDF.
                          <br />
                          Solo si el ciudadano no posee la petición de forma
                          escrita el funcionario del punto de información
                          procede a diligenciar el formulario de PQRSDF,
                          dispuesto para tal fin.
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-check-square" />
                          </span>
                          <span>Correo electrónico: </span> Por medio del correo{' '}
                          <span style={{ color: '#e30613' }}>
                            atencionalcliente@transmetro.gov.co{' '}
                          </span>{' '}
                          el usuario puede presentar PQRSDF rápidamente. Es
                          importante informar la fecha, lugar y hora de los
                          hechos; ruta, número del bus (TM) y de la tarjeta
                          inteligente.
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-check-square" />
                          </span>
                          <span>Página web:</span> En{' '}
                          <span style={{ color: '#e30613' }}>
                            www.transmetro.gov.co
                          </span>
                          , Transmetro publica toda la información del Sistema
                          de Transporte Masivo, noticias, horarios, novedades,
                          detalles de rutas y estaciones. También a través de
                          este canal se puede personalizar la tarjeta
                          inteligente, conocer el manual del usuario y presentar
                          PQRSDF.
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-check-square" />
                          </span>
                          <span>A través de Twitter,</span>{' '}
                          <span style={{ color: '#e30613' }}>
                            @transmetrobaq,{' '}
                          </span>{' '}
                          Transmetro informa en tiempo real sobre el estado de
                          la operación, novedades del Sistema y noticias en
                          general. Se orienta a los usuarios sobre las rutas que
                          debe tomar y se recibe retroalimentación sobre el
                          servicio.
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-check-square" />
                          </span>{' '}
                          <span>Notificaciones judiciales: </span>
                          <span style={{ color: '#e30613' }}>
                            info@transmetro.gov.co
                          </span>
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg2" />
                  <label className="preguntas-label " for="preg2">
                    ¿Qué debo hacer en caso de accidentes en las estaciones, con
                    o en buses de Transmetro?
                  </label>
                  <div className="respuestas-content">
                    En caso de accidentes y/o incidentes, ocurridos en los buses
                    y estaciones del Sistema, reportados de manera inmediata
                    (Ver numeral 2.1) los usuarios tienen derecho a la atención
                    correspondiente incluida en las pólizas de seguro, ajustadas
                    a las exigencias contractuales y de la ley. En todo caso, el
                    usuario tiene derecho también a renunciar a la atención y a
                    reclamaciones.
                    <br /> En caso de ser necesario el servicio de una
                    ambulancia, el Sistema Masivo lo solicitará a la red de
                    apoyo, competencia de la Secretaría de Salud Distrital; la
                    atención quedará sujeta a la disponibilidad y respuesta de
                    la red. Manual del usuario 2.10. En caso de emergencia en
                    estaciones o buses, el usuario debe seguir las instrucciones
                    de operadores, funcionarios o contratistas de Transmetro,
                    así como de autoridades presentes en el Sistema.
                    <br /> Quien resulte afectado en un accidente debe
                    informárselo inmediatamente al operador del bus de
                    Transmetro, o a personal del Sistema, para que se hagan con
                    prontitud los trámites necesarios, y se aporten los
                    documentos que se requieran para una efectiva atención del
                    afectado. 3.11 Emergencias. La persona que tenga un
                    accidente al ingresar al Sistema evadiendo el pago del
                    pasaje, en las estaciones y buses, asume la responsabilidad
                    de todas las consecuencias que se deriven de su actuación u
                    omisión. 3.12 Accidentes al evadir el pago.
                  </div>
                </div>
                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg5" />
                  <label className="preguntas-label " for="preg5">
                    ¿Cómo puedo presentar una queja sobre un operador
                    (conductor) de bus o personal de Transmetro?
                  </label>
                  <div className="respuestas-content">
                    Lo puede hacer por los canales mencionados en el punto
                    anterior. Para ello deberá consignar la mayor de datos
                    posibles, como por ejemplo: Operador: placa y/o número del
                    bus, empresa, fecha, hora de los hechos, ruta, y en lo
                    posible cualquier otro dato adicional que facilite la
                    identificación del operador. Otro personal: Fecha, hora de
                    los hechos, lugar, nombre, número del chaleco, color del
                    uniforme o nombre de la empresa operadora en la que trabaja.
                  </div>
                </div>
                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg8" />
                  <label className="preguntas-label " for="preg8">
                    ¿Cómo puedo acceder al Estímulo Social de Transporte
                    Estudiantil (ESTE) ?
                  </label>
                  <div className="respuestas-content">
                    El Estímulo Social de Transporte es un programa de la
                    Secretaría de Gestión Social Distrital, para estudiantes de
                    instituciones de educación superior, técnicas y tecnólogas
                    del Distrito de Barranquilla es un subsidio indirecto a los
                    estudiantes de educación superior de la ciudad
                    (profesionales, técnicos y tecnólogos), que cumplan con los
                    requisitos del programa. El estímulo consiste en entregar un
                    incentivo de 40% de descuento en el valor del pasaje, el
                    cual no implica la entrega de dinero material. Los
                    estudiantes que deseen recibir atención presencial para
                    radicar los documentos, deberán apartar una cita llamando, o
                    escribiendo al whatsapp 313 807 0970. El personal dispuesto
                    por la Secretaría de Gestión Social, les asignará fecha y
                    hora de la cita en el Punto de Atención al Ciudadano,
                    ubicado al lado de la Alcaldía. Se puede utilizar de lunes a
                    sábados. Con este estímulo, el Distrito busca proporcionar
                    el acceso y la permanencia de los estudiantes que residen en
                    la ciudad de Barranquilla al servicio educativo, reduciendo
                    así la deserción estudiantil en las instituciones de
                    educación superior. Más información: <br />
                    <span>
                      https://www.barranquilla.gov.co/gestionsocial/subsidios
                      /estimulo-social-de-transporte/ultimas-noticias
                    </span>
                  </div>
                </div>

                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg9" />
                  <label className="preguntas-label " for="preg9">
                    ¿Qué debo hacer en caso de tener conflictos con la tarjeta,
                    problemas con el saldo o transbordo?
                  </label>
                  <div className="respuestas-content">
                    El usuario debe comunicarse a la línea de atención
                    6053712222 para que podamos realizar la verificación de las
                    novedades presentadas con la tarjeta. En caso de presentarse
                    alguna inconsistencia con la recarga, el usuario tiene hasta
                    60 minutos para poner su queja o reclamo en el PAC, en
                    cualquier taquilla, o en la línea de atención al cliente
                    6053712222. El trámite tendrá la respuesta oportuna en los
                    términos legales. Artículo 3.4 del manual de usuario, el
                    cual puede descargar en nuestra página web (Atención al
                    ciudadano)
                  </div>
                </div>

                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg10" />
                  <label className="preguntas-label " for="preg10">
                    ¿Cómo puedo personalizar mi tarjeta del Sistema?
                  </label>
                  <div className="respuestas-content">
                    Se entiende como personalización de la tarjeta, a la acción
                    de registrar gratuitamente en la base de datos del sistema
                    los datos personales del (de la) propietario (a) de la
                    tarjeta Transmetro. Este procedimiento se hace a través de
                    la línea de atención al cliente, el PAC y de la página web
                    www.transmetro.gov.co. En caso de pérdida, daño o hurto, la
                    personalización permite bloquear la tarjeta llamando al
                    6053712222 o en el PAC. Así, luego de comprar una nueva
                    tarjeta, puede recuperar el saldo, siempre y cuando haya
                    personalizado la anterior. El usuario solo podrá registrar
                    una tarjeta personalizada en el sistema por lo que, al
                    momento de personalizar una nueva, la anterior se anulará.
                    El saldo existente, positivo o negativo, se trasladará a la
                    nueva tarjeta. Manual del usuario 2.2.
                  </div>
                </div>

                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg11" />
                  <label className="preguntas-label " for="preg11">
                    ¿Cómo puedo solicitar la entrega de un video grabado por las
                    cámaras del Sistema?
                  </label>
                  <div className="respuestas-content">
                    Conforme al Capítulo 1 de nuestro Manual del Usuario “En
                    caso de ser requerido, Transmetro podrá facilitar a las
                    autoridades, como elemento probatorio, imágenes captadas por
                    las cámaras de seguridad que se encuentran en las estaciones
                    del Sistema. 1.1. Circuito cerrado de televisión: es un
                    recurso de disuasión que redunda en la seguridad del Sistema
                    y sus usuarios. Las cámaras están ubicadas en los ingresos,
                    salidas y pasarela de intercambio de pasajeros para vigilar
                    las entradas y recorridos de usuarios y colaboradores de
                    Transmetro. Los videos grabados por las cámaras de seguridad
                    ubicados en el Portal de Soledad, las estaciones sencillas y
                    la estación Retorno, aunque sean solicitadas por usuarios,
                    no se entregarán a personas naturales ni jurídicas. Las
                    grabaciones solo podrán ser entregadas a la autoridad
                    competente (Policía y Fiscalía) previa solicitud formal.
                    Para tal fin se debe proporcionar todos los datos
                    necesarios: Estación, fecha, horario, detalles del incidente
                    o accidente, involucrados y No. de tarjeta Transmetro (si
                    aplica). La revisión del material será realizada por
                    personal de Transmetro. Las imágenes que se puedan obtener
                    después de la revisión están sujetas al funcionamiento de
                    los equipos. El archivo del circuito cerrado de televisión
                    es custodiado en el Centro de Control de Transmetro, por un
                    término no mayor a siete (7) días; pasado este tiempo, los
                    videos son borrados automáticamente”{' '}
                  </div>
                </div>
                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg12" />
                  <label className="preguntas-label " for="preg12">
                    ¿Cuál es el término de vigencia del saldo en mi tarjeta?
                  </label>
                  <div className="respuestas-content">
                    Conforme al manual del usuario 2.3 “El usuario tiene derecho
                    a mantener en su tarjeta el saldo que deposite en ella
                    durante un periodo de dos (2) años, desde la última recarga
                    o validación, así esta no esté en uso (sin validación o
                    recarga). Después de ese término, la tarjeta se desactivará
                    y los saldos se depositarán en el Fondo de Mantenimiento y
                    Expansión del Sistema, de igual manera la reclamación por
                    pasajes validados y no utilizados caducará después del mismo
                    periodo de dos (2) años de no uso de la tarjeta”{' '}
                  </div>
                </div>

                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg13" />
                  <label className="preguntas-label " for="preg13">
                    ¿Por qué los videos solicitados solo pueden ser entregados a
                    la autoridad competente?
                  </label>
                  <div className="respuestas-content">
                    Se entregan solamente a la autoridad competente (Policía,
                    Fiscalía, Procuraduría, Personería, Juez de la República)
                    bajo el ejercicio de sus funciones, considerando lo
                    dispuesto en la Ley 1581 de 2012 (protección de datos
                    personales) en su artículo 13, literal b.{' '}
                  </div>
                </div>

                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg14" />
                  <label className="preguntas-label " for="preg14">
                    ¿Tengo derecho a hacer transbordo sin que me cobren
                    nuevamente?
                  </label>
                  <div className="respuestas-content">
                    Los usuarios del Sistema Transmetro tienen derecho a
                    realizar transbordo sin costo adicional en las diferentes
                    rutas y servicios de operación, de acuerdo con las
                    siguientes especificaciones: 1. Cada usuario debe tener su
                    tarjeta para que su transbordo no tenga costo adicional.
                    Solo se acepta un transbordo por tarjeta sin importar que se
                    valide más de un pasaje. 2. El tiempo de transbordo será
                    dentro de los 105 minutos siguientes a la primera
                    validación, sin embargo, este tiempo puede variar por la
                    dinámica vial de Barranquilla y su área metropolitana, en
                    atención a las variables que lo afectan, y que se
                    comunicarán por los medios disponibles, y en las taquillas
                    de las estaciones y portales. 3. Los transbordos se pueden
                    hacer en los puntos autorizados entre diferentes rutas
                    alimentadoras, entre rutas alimentadoras y troncales y
                    viceversa. 4. Los transbordos serán efectivos siempre que el
                    usuario se traslade en un solo sentido, nunca de ida y
                    regreso. Solo se puede hacer transbordo en los paraderos o
                    estaciones autorizadas, según la matriz de transbordo que
                    los usuarios pueden consultar en el portal web o a través de
                    los diferentes medios de comunicación con los que cuenta el
                    Sistema de Transporte Masivo (Ver numeral 2.1 del presente
                    documento). 5. El Sistema Masivo permite hacer hasta dos (2)
                    transbordos (usar 3 servicios).{' '}
                  </div>
                </div>

                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg16" />
                  <label className="preguntas-label " for="preg16">
                    ¿Puedo ingresar mascotas en el Sistema?
                  </label>
                  <div className="respuestas-content">
                    Manual del usuario 2.8 Transporte de mascotas y perros
                    lazarillos: El usuario puede viajar con su mascota que debe
                    ir en guacal, contenedor o jaula adecuada para el animal y
                    portando los certificados de vacunación. Las personas ciegas
                    pueden viajar con su perro lazarillo y deberán portar los
                    documentos que certifiquen su condición de lazarillo, ya que
                    estos pueden ser solicitados por representantes de
                    Transmetro.
                  </div>
                </div>

                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg17" />
                  <label className="preguntas-label " for="preg17">
                    {' '}
                    ¿Puedo viajar sin saldo en mi tarjeta?
                  </label>
                  <div className="respuestas-content">
                    Sí. Cuando tenga saldo en cero (0) o esté incompleto el
                    pasaje, nunca con saldo negativo, es decir, que ya se le
                    haya prestado anteriormente. Conforme a nuestro manual del
                    usuario, 2.5 Crédito: El usuario tiene la opción de utilizar
                    un crédito en las rutas alimentadoras de Transmetro hasta
                    por el valor de un pasaje. Para hacer transbordo en
                    servicios troncales, el usuario deberá pagar el crédito
                    cuando llegue a una estación del Sistema. Si el usuario no
                    realiza transbordo a servicio troncal, en la siguiente
                    recarga que haga, será cobrado el pasaje a crédito.
                  </div>
                </div>
                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg15" />
                  <label className="preguntas-label " for="preg15">
                    Glosario
                  </label>
                  <div className="respuestas-content">
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Habeas Data:</span> El derecho de hábeas data es
                        el derecho constitucional que tienen todas las personas
                        a conocer, actualizar y rectificar las informaciones que
                        se hayan recogido sobre ellas en bases de datos o
                        archivos, y los demás derechos, libertades y garantías
                        constitucionales a que se refiere el artículo 15 de la
                        Constitución Política; así como el derecho a la
                        información consagrado en el artículo 20 de la misma.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Temporalidad:</span> Tiempo de permanencia de un
                        video en nuestro sietema.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>{' '}
                        <span>Autoridad competente:</span> Hace referencia a la
                        entidad pública o administrativa en el ejercicio de sus
                        funciones legales o por orden Judicial. Ejemplo: cuando
                        la Policía Nacional o la Fiscalía General solicita los
                        videos para el desarrollo de una investigación a su
                        cargo.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fin preguntas frecuentes */}
        <div className="container linea-colores" />
        {/* Encuestas Ciudadano */}
        <center className="container">
          <div className="row card__Encuesta">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Encuesta al ciudadano</h2>
                <figure className="col-md-12 ">
                  <center>
                    <img
                      src="https://apiwebtm.com/uploads/Encuesta_7366385556.png"
                      className="img-fluid rounded-start center-block"
                      alt="imagen de encuesta"
                      style={{ width: '20%' }}
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
                        width: '200px',
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
        <div className="container linea-colores" />

        {/* Estimulo Estudiantil */}
        <div className="container ">
          <div
            className="card mb-3 car__cul border-light"
            style={{ maxWidth: '100%' }}
            id="estimulo-estudiantil"
          >
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">
                    ESTÍMULO SOCIAL DE TRANSPORTE ESTUDIANTIL
                  </h2>
                  <p className="card-text" style={{ fontWeight: 'bold' }}>
                    El Estímulo Social de Transporte es un programa de la
                    Secretaría de Gestión Social Distrital, para estudiantes de
                    instituciones de educación superior, técnicas y tecnólogas
                    del Distrito de Barranquilla es un subsidio indirecto a los
                    estudiantes de educación superior de la ciudad
                    (profesionales, técnicos y tecnólogos), que cumplan con los
                    requisitos del programa. Con este estímulo, el Distrito
                    busca proporcionar el acceso y la permanencia de los
                    estudiantes que residen en la ciudad de Barranquilla al
                    servicio educativo, reduciendo así la deserción estudiantil
                    en las instituciones de educación superior
                  </p>
                  <p>
                    {' '}
                    <span style={{ fontWeight: 'bold' }}>Beneficio:</span> 40%
                    de descuento en el valor del pasaje, el cual no implica la
                    entrega de dinero material, porque se hace mediante la
                    tarjeta Transmetro.
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>
                      Puntos de atención:{' '}
                    </span>
                    Alcaldía Distrital de Barranquilla, Piso 1 Ventanillas 19,20
                    y 21.
                  </p>
                  <p>
                    <sapn style={{ fontWeight: 'bold' }}>
                      Horario de atención:{' '}
                    </sapn>
                    Lunes a viernes 8:00 a.m a 12:00 m. y 1:30 p.m a 5:00 p.m
                    Teléfono:6053399438
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Email: </span>
                    estimulodetransporte@barranquilla.gov.co
                  </p>
                  <p className="card-text">
                    <span style={{ fontWeight: 'bold' }}>Link: </span>
                    <a
                      href="https://www.barranquilla.gov.co/gestionsocial/subsidios/estimulo-social-de-transporte/el-programa"
                      alt="Estimulo Estudiantil"
                      target="_blanck"
                    >
                      Estimulo Social de Transporte
                    </a>
                  </p>
                  {/*    <a
                    href="http://bit.ly/2nQO0TD"
                    className="btn btn-outline-success"
                    target="_blanck"
                    alt="Manual de Usuario"
                    style={{
                      height: '50px',
                      fontSize: '18px',
                      border: '3px solid',
                      fontWeight: 'bold',
                      marginTop: '10px',
                    }}
                  >
                    Manual de Usuario
                  </a> */}
                </div>
              </div>
              <figure className="col-md-4 ">
                <img
                  src="https://apiwebtm.com/uploads/Estudiante_4743d0456d.png"
                  className="img-fluid rounded-start center-block"
                  alt="..."
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Objetivos */}
        {/* <div className="container">
          <div className="row text-center obj-ali">
            <div className="col-sm-4 obj-ali1 ">
              <div className="card-body ">
                <i className="far fa-chart-bar fa-5x" />
              </div>
            </div>
            <div className="col obj-ali2">
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
            <div className="col obj-ali2">
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
            <div className="col obj-ali4">
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
            <div className="col obj-ali4">
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
        </div> */}
      </div>
      <div className="todos">
        {/* <div className="card mb-3 cubo text-white ">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body text-cubo">
                <h5 className="card-title">
                  MEJORAR LA CALIDAD DE VIDA DE LOS USUARIOS QUE USAN EL
                  SISTEMA, CON CADA EXPERIENCIA DE VIAJE
                </h5>
                <p className="card-text text-justify">
                  Qué: Hacer que la experiencia de viaje de los usuarios en
                  Transmetro sea un diferencial positivo frente a otras opciones
                  de transporte público Cómo: 1) Midiendo el cumplimiento de la
                  oferta de servicio dada 2) Garantizando al usuario diferentes
                  medios de contacto con Transmetro S.A.S. 3) midiendo la
                  disponibilidad de la flota ofertada. Para: 1) Cautivar al
                  usuario con elementos diferenciadores del servicio. 2) Dar al
                  usuario la calidad de cliente 3) Para que el usuario pueda
                  destinar mas tiempo para actividades diferentes al
                  desplazamiento y/o para que pueda destinar mas recursos a
                  necesidades básicas diferentes al transporte
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <i className="fas fa-search  fa-7x " />
            </div>
          </div>
        </div> */}

        {/* <div className="container-fluid">
          <div className=" row justify-content-end ">
            <div className="card cubo-2 azul-lt ">
              <div className="row">
                <div className="col-md-4 text-center">
                  <i className="fas fa-search  fa-7x " />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-cubo-2">
                    <h5 className="card-title">
                      MEJORAR LA CALIDAD DE VIDA DE LOS USUARIOS QUE USAN EL
                      SISTEMA, CON CADA EXPERIENCIA DE VIAJE
                    </h5>
                    <p className="card-text text-justify">
                      Qué: Hacer que la experiencia de viaje de los usuarios en
                      Transmetro sea un diferencial positivo frente a otras
                      opciones de transporte público Cómo: 1) Midiendo el
                      cumplimiento de la oferta de servicio dada 2) Garantizando
                      al usuario diferentes medios de contacto con Transmetro
                      S.A.S. 3) midiendo la disponibilidad de la flota ofertada.
                      Para: 1) Cautivar al usuario con elementos diferenciadores
                      del servicio. 2) Dar al usuario la calidad de cliente 3)
                      Para que el usuario pueda destinar mas tiempo para
                      actividades diferentes al desplazamiento y/o para que
                      pueda destinar mas recursos a necesidades básicas
                      diferentes al transporte
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="card mb-3 cubo-3 text-white ">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body text-cubo">
                <h5 className="card-title">
                  MEJORAR LA CALIDAD DE VIDA DE LOS USUARIOS QUE USAN EL
                  SISTEMA, CON CADA EXPERIENCIA DE VIAJE
                </h5>
                <p className="card-text text-justify">
                  Qué: Hacer que la experiencia de viaje de los usuarios en
                  Transmetro sea un diferencial positivo frente a otras opciones
                  de transporte público Cómo: 1) Midiendo el cumplimiento de la
                  oferta de servicio dada 2) Garantizando al usuario diferentes
                  medios de contacto con Transmetro S.A.S. 3) midiendo la
                  disponibilidad de la flota ofertada. Para: 1) Cautivar al
                  usuario con elementos diferenciadores del servicio. 2) Dar al
                  usuario la calidad de cliente 3) Para que el usuario pueda
                  destinar mas tiempo para actividades diferentes al
                  desplazamiento y/o para que pueda destinar mas recursos a
                  necesidades básicas diferentes al transporte
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <i className="fas fa-search  fa-7x " />
            </div>
          </div>
        </div> */}

        {/* <!-- cubo 4 --> */}

        {/* <div className="container-fluid">
          <div className=" row justify-content-end">
            <div className="card cubo-4 azul-lt ">
              <div className="row">
                <div className="col-md-4 text-center">
                  <i className="fas fa-search  fa-7x " />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-cubo-2">
                    <h5 className="card-title">
                      MEJORAR LA CALIDAD DE VIDA DE LOS USUARIOS QUE USAN EL
                      SISTEMA, CON CADA EXPERIENCIA DE VIAJE
                    </h5>
                    <p className="card-text text-justify">
                      Qué: Hacer que la experiencia de viaje de los usuarios en
                      Transmetro sea un diferencial positivo frente a otras
                      opciones de transporte público Cómo: 1) Midiendo el
                      cumplimiento de la oferta de servicio dada 2) Garantizando
                      al usuario diferentes medios de contacto con Transmetro
                      S.A.S. 3) midiendo la disponibilidad de la flota ofertada.
                      Para: 1) Cautivar al usuario con elementos diferenciadores
                      del servicio. 2) Dar al usuario la calidad de cliente 3)
                      Para que el usuario pueda destinar mas tiempo para
                      actividades diferentes al desplazamiento y/o para que
                      pueda destinar mas recursos a necesidades básicas
                      diferentes al transporte
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="card mb-3 cubo-5 text-white ">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body text-cubo">
                <h5 className="card-title">
                  MEJORAR LA CALIDAD DE VIDA DE LOS USUARIOS QUE USAN EL
                  SISTEMA, CON CADA EXPERIENCIA DE VIAJE
                </h5>
                <p className="card-text text-justify">
                  Qué: Hacer que la experiencia de viaje de los usuarios en
                  Transmetro sea un diferencial positivo frente a otras opciones
                  de transporte público Cómo: 1) Midiendo el cumplimiento de la
                  oferta de servicio dada 2) Garantizando al usuario diferentes
                  medios de contacto con Transmetro S.A.S. 3) midiendo la
                  disponibilidad de la flota ofertada. Para: 1) Cautivar al
                  usuario con elementos diferenciadores del servicio. 2) Dar al
                  usuario la calidad de cliente 3) Para que el usuario pueda
                  destinar mas tiempo para actividades diferentes al
                  desplazamiento y/o para que pueda destinar mas recursos a
                  necesidades básicas diferentes al transporte
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <i className="fas fa-search  fa-7x " />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Ciudadano;
