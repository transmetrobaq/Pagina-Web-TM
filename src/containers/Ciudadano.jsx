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
      {/* <!-- manual del usuario  --> */}

      <div
        className="container-xxl "
        style={{ backgroundColor: '#F5F5F5' }}
        id="acerca"
      >
        <div className="manual__card ">
          <div className="card mb-3 border border-0">
            <div className="row g-0 justify-content-center ">
              <div className="col-md-6">
                <div className="card-body">
                  <h2 id="acerca">Manual del usuario</h2>
                  <div className="linea-colores" />
                  <p
                    className="card-text  fw-bold"
                    style={{ marginTop: '-20px' }}
                  >
                    El Manual de Usuarios describe objetos, generalidades,
                    derechos y deberes del usuario, restricciones y canales de
                    comunicación con el Sistema.
                  </p>
                  <p className="card-text">
                    Esta información se debe tener en cuenta al momento de
                    utilizar el Sistema de Transporte Masivo de la ciudad de
                    Barranquilla y su área metropolitana, Transmetro, ya que
                    representa para los usuarios/ciudadanos una guía sobre el
                    buen uso y el comportamiento que se debe tener al interior
                    de los escenarios que componen el Sistema de Transporte
                    Masivo, Transmetro, a fin de procurar una mejor convivencia
                    entre todos los actores del Sistema.
                  </p>
                  <p className="card-text">
                    *Puede descargarlo y conocer todos los detalles de este
                    importante documento haciendo clic en el siguiente enlace:
                  </p>
                  <div className="d-flex">
                    <a
                      href="https://apiwebtm.com/uploads/Manual_del_Usuario_Vigente_Diciembre_23_2016_bc7d9a1965.pdf"
                      className="btn btn-outline-success "
                      target="_blanck"
                      alt="Manual de Usuario"
                    >
                      Manual de Usuario
                    </a>
                    {/*   <a
                      href="https://apiwebtm.com/uploads/Manual_del_Usuario_Vigente_Diciembre_23_2016_bc7d9a1965.pdf"
                      className="btn btn-outline-success "
                      target="_blanck"
                      alt="Manual de Usuario"
                      style={{ marginLeft: '20px' }}
                    >
                      Instructivo PQRS
                    </a> */}
                  </div>
                </div>
              </div>

              <div className="col-md-4" id="manual_img">
                <img
                  src="https://apiwebtm.com/uploads/cultura_ef186cfcf6.png"
                  className="img-fluid mx-auto d-block"
                  alt="Usuario leyendo "
                />
              </div>
              {/* <div className="col-md-1" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* Preguntas y respuestas */}
      <div
        className="container "
        data-bs-spy="scroll"
        data-bs-target="#navbar-Tm"
        data-bs-offset="0"
        tabIndex="0"
      >
        {/* Preguntas Frecuentes */}
        <div className="titulo-preguntas">
          <h2 className="text-center azul-lt" id="preguntas-frecuentes">
            Preguntas y respuestas frecuentes
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="preguntas-tm">
                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg1" />
                  <label className="preguntas-label" htmlFor="preg1">
                    ¿Cuáles son los canales de atención que existen para
                    interponer peticiones, quejas, reclamos, sugerencias,
                    denuncias y felicitaciones (PQRSDF)?
                  </label>
                  <div className="respuestas-content">
                    <div>
                      <p>
                        A continuación ponemos a su disposición los siguientes
                        canales o medios, mediante los cuales podrá comunicarse
                        con nosotros de forma efectiva:{' '}
                      </p>

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
                    </div>
                  </div>
                </div>
                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg2" />
                  <label className="preguntas-label " htmlFor="preg2">
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
                  <label className="preguntas-label " htmlFor="preg5">
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
                  <label className="preguntas-label " htmlFor="preg8">
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
                  <label className="preguntas-label " htmlFor="preg9">
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
                  <label className="preguntas-label " htmlFor="preg10">
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
                  <label className="preguntas-label " htmlFor="preg11">
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
                  <label className="preguntas-label " htmlFor="preg12">
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
                  <label className="preguntas-label " htmlFor="preg13">
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
                  <label className="preguntas-label " htmlFor="preg14">
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
                  <label className="preguntas-label " htmlFor="preg16">
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
                  <label className="preguntas-label " htmlFor="preg17">
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
                  <input type="checkbox" id="preg18" />
                  <label className="preguntas-label " htmlFor="preg18">
                    {' '}
                    ¿Qué debo hacer si deseo recuperar y trasladar el saldo de una tarjeta, cuyo titular falleció, a un nuevo plástico inteligente? 
                  </label>
                  <div className="respuestas-content">
                  El usuario puede solicitar el traslado
                   de saldo de manera presencial acercándose al Punto de Atención al Cliente PAC,
                    ubicado en la estación Joe Arroyo, o comunicarse de manera virtual a
                     través del correo electrónico <span> correo@sitbarranquilla.com </span>, aportando 
                     copia del certificado de defunción del anterior dueño de la tarjeta
                      y fotocopia de la cédula de quien solicita el traslado, así como
                       una comunicación con sus datos en la que detalle, además, el 
                       vínculo familiar, para así poder realizarle la transferencia de saldo.
                  </div>
                </div>
                <div className="preguntas-grupo">
                  <input type="checkbox" id="preg15" />
                  <label
                    className="preguntas-label  "
                    id="glosario"
                    htmlFor="preg15"
                  >
                    Glosario
                  </label>
                  <div className="respuestas-content">
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Canales de atención al cliente:</span> Herramienta
                        utilizada por la entidad para establecer una relación
                        con los usuarios, conocer sus necesidades, resolver
                        inquietudes y ofrecer soluciones que contribuyan a
                        mejorar el servicio. Los canales dispuestos son: línea
                        de atención telefónica, Punto de Atención al Cliente
                        (PAC), correo electrónico, página web y redes sociales.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>
                          Cargador Automático de Tarjetas Inteligentes (CATI):
                        </span>{' '}
                        Sistema de recarga ubicado en las diferentes estaciones
                        del Sistema para uso de los usuarios.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Centro de Control y Operaciones: </span>
                        Lugar desde donde se realiza el monitoreo de la
                        operación del Sistema, recorrido de vehículos, novedades
                        en las estaciones, entre otros. Está integrado por los
                        líderes de operación, controladores y supervisores de
                        cámaras.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Circuito cerrado de televisión: </span>
                        Cámaras de seguridad ubicadas en puntos estratégicos de
                        las estaciones del Sistema de Transporte Masivo a fin de
                        vigilar las entradas y recorridos de usuarios y
                        colaboradores de Transmetro. El archivo de videos es
                        custodiado en el Centro de Control de Transmetro por un
                        término no mayor a siete (7) días y solo podrán ser
                        entregadas a la autoridad competente (Policía y
                        Fiscalía) previa solicitud formal.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Concesionario: </span>
                        Empresa que presta el servicio para el Sistema de
                        Transporte Masivo. En el caso particular de Transmetro,
                        son dos empresas, Sistur y Metrocaribe, las que prestan
                        el servicio operativo; mientras que un tercer
                        concesionario, Recaudo SIT, es el que presta el servicio
                        de recaudo y lo inherente a taquillas y validadores en
                        vehículos y estaciones.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Correo electrónico: </span>
                        Canal de comunicación a través del cual el usuario puede
                        presentar PQRSDF (peticiones, quejas, reclamos,
                        solicitudes, denuncias y felicitaciones) rápidamente,
                        suministrando fecha, lugar y hora de los hechos, ruta y
                        número interno del vehículo y de la tarjeta inteligente.
                        (atencionalcliente@transmetro.gov.co).
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Crédito: </span>
                        El usuario tiene la opción de utilizar un crédito en las
                        rutas alimentadoras de Transmetro hasta por el valor de
                        un pasaje cuando se tenga saldo en cero (0) o esté
                        incompleto el pasaje, nunca con saldo negativo, es
                        decir, que ya se le haya prestado anteriormente. Para
                        hacer transbordo en servicios troncales, el usuario
                        deberá pagar el crédito cuando llegue a una estación del
                        Sistema. Si el usuario no realiza transbordo a servicio
                        troncal, en la siguiente recarga que haga, será cobrado
                        el pasaje a crédito.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Estaciones: </span>
                        Plataformas de ascenso y descenso de usuarios ubicadas a
                        lo largo de las troncales Olaya Herrera y Murillo. A las
                        mismas llegan los servicios troncales y en algunas los
                        servicios alimentadores con las que se tiene conexión.
                        La mayoría de estaciones intermedias cuentan con dos
                        módulos para el abordaje de servicios corrientes y
                        expresos.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Facilitadores: </span>
                        Personal de apoyo ubicado en las diferentes estaciones
                        del Sistema a fin de brindar orientación o guía a los
                        usuarios que así lo requieran.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Flota: </span>
                        Vehículos dispuestos para la operación del Sistema y que
                        se programan de acuerdo a su tipología. Se encuentran
                        los buses articulados los cuales son los más grandes del
                        sistema y transitan por las vías troncales; los buses
                        padrones de tamaño mediano son utilizados también para
                        el tránsito por vías troncales y vías alimentadoras, y
                        finalmente los vehículos tipo busetón de menor tamaño
                        los cuales son programados para cubrir los servicios
                        alimentadores.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Línea amarilla: </span>
                        Señalización en piso de las plataformas en las
                        estaciones del Sistema que previene a los usuarios del
                        punto en que deben esperar el servicio con el fin de
                        evitar de incidentes si se sobrepasa.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Línea de atención: </span>
                        Canal de atención telefónico (605-3712222) en la que los
                        usuarios pueden interponer PQRSDF. Además, se puede
                        indagar sobre el estado de la operación y reportar
                        objetos perdidos. En las estaciones del Sistema el
                        usuario cuenta con un teléfono que te comunica
                        directamente con esta línea.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Losetas podotáctiles: </span>
                        Baldosas ubicadas en la entrada y plataforma de las
                        diferentes estaciones del Sistema las cuales le permiten
                        a los Usuarios con Movilidad Reducida movilizarse de
                        manera segura y ágil.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Operador: </span>
                        Conductor del vehículo del Sistema de Transporte Masivo.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Página web: </span>A través de la página web
                        www.transmetro.gov.co, el Sistema de Transporte Masivo
                        Transmetro publica toda la información inherente a su
                        operación, noticias, horarios, novedades, detalles de
                        rutas y estaciones. Así mismo, por medio de este canal
                        se puede personalizar la tarjeta inteligente, conocer el
                        manual del usuario y presentar PQRSDF.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Paradero: </span>Señal de tránsito que indica el
                        lugar específico en que los vehículos programados para
                        la operación alimentadora realizarán el ascenso y
                        descenso de pasajeros.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Personal de campo: </span>Talento humano del
                        Sistema encargado del despacho de los vehículos de
                        acuerdo a la operación programada.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Personalización de la tarjeta: </span> Acción de
                        registrar gratuitamente en la base de datos del Sistema
                        los datos personales del usuario. Este procedimiento se
                        hace a través de la línea de atención al cliente, el
                        Punto de Atención al Ciudadano (PAC) y de la página web
                        www.transmetro.gov.co. En caso de pérdida, daño o hurto,
                        la personalización permite bloquear la tarjeta y
                        recuperar el saldo existente. Solo se podrá registrar
                        una tarjeta personalizada en el sistema por lo que, al
                        momento de personalizar una nueva, la anterior se
                        anulará.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Punto de Atención al Cliente (PAC): </span>
                        Se encuentra ubicado en la estación Joe Arroyo (carrera
                        46 con calle 74 esquina) y en este el usuario puede
                        interponer su PQRSDF, reportar objetos perdidos,
                        personalizar y marcar la tarjeta inteligente, entre
                        otros trámites inherentes a la atención del cliente.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Redes Sociales: </span> A través de las redes
                        sociales como Twitter (@transmetrobaq), Instragram
                        (@transmetrobaq), Facebook (Transmetro Barranquilla) y
                        Tiktok (@transmetrobaq), Transmetro informa en tiempo
                        real sobre el estado de la operación, novedades del
                        Sistema y noticias en general. Se orienta a los usuarios
                        sobre las rutas que debe tomar y se recibe
                        retroalimentación sobre el servicio.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Rutas alimentadoras: </span>
                        Son los servicios que transitan por los diferentes
                        barrios de Barranquilla, Soledad y parte de Puerto
                        Colombia (Corredor Universitario). Los usuarios abordan
                        y descienden de las mismas en los paraderos habilitados
                        por el Sistema para tal fin.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Rutas troncales: </span>
                        Son los servicios que transitan a través de las
                        troncales Olaya Herrera y Murillo y movilizan a los
                        usuarios desde el Portal de Soledad y estaciones Joe
                        Arroyo y Parque Cultural del Caribe, a las diferentes
                        estaciones que conforman el Sistema de Transporte
                        Masivo.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Servicios corrientes: </span>
                        Son las rutas troncales que realizan el ascenso y
                        descenso de pasajeros en todas las estaciones del
                        Sistema.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Servicios expresos: </span>
                        Son las rutas troncales que realizan el asenso y
                        descenso de pasajeros en estaciones especificas del
                        Sistema a fin de brindar un recorrido rápido a los
                        usuarios.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Sillas azules: </span>
                        Son las sillas de los vehículos de uso preferencial para
                        personas en condición de discapacidad, adultos mayores y
                        mujeres embarazadas o con niños en brazos.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Sistema PQRSDF: </span>
                        El Sistema de peticiones, quejas, reclamos, sugerencias,
                        denuncias y felicitaciones es una herramienta que
                        permite a la entidad conocer las inquietudes y
                        manifestaciones que tienen los grupos de interés, en el
                        caso particular de Transmetro los usuarios, a fin de
                        fortalecer el servicio prestado.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Solo bus: </span>
                        carriles en las troncales Olaya Herrera y Murillo que
                        son para uso exclusivo del Sistema de Transporte Masivo.
                        Los vehículos particulares deben transitar por el carril
                        mixto ubicado contiguo al carril exclusivo. Invadirlo
                        podría acarrear sanciones, incluso ocasionar incidentes.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Taquilla: </span>
                        Punto físico con el que cuenta el usuario para realizar
                        el proceso de compra y recarga de la tarjeta
                        inteligente.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Tarjeta: </span>
                        Es el plástico inteligente a través del cual el usuario
                        tiene acceso al Sistema de Transporte Masivo. La misma
                        es recargable en las taquillas y puntos autorizados,
                        además de brindar la opción de ser personalizada por el
                        usuario.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Transbordo: </span>
                        Los usuarios del Sistema Transmetro tienen derecho a
                        realizar transbordo sin costo adicional en las
                        diferentes rutas y servicios de operación de acuerdo con
                        las especificaciones establecidas en un tiempo no
                        superior a los 105 minutos siguientes a la primera
                        validación y para ellos cada usuario debe tener su
                        tarjeta para que su transbordo no tenga costo adicional.
                        El mismo se realiza en los paraderos o estaciones
                        autorizadas, según la matriz de transbordo que los
                        usuarios pueden consultar en el portal web o a través de
                        los diferentes medios de comunicación con los que cuenta
                        el Sistema de Transporte Masivo.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Troncales: </span>
                        Son las avenidas principales por las cuales transitan
                        los vehículos del Sistema de Transporte Masivo. Estas
                        son la carrera 46 entre calle 34 y calle 74, en
                        Barranquilla, llamada Troncal Olaya Herrera; entre tanto
                        la Troncal Murillo comprende la Avenida Murillo entre
                        carrera 46 en Barranquilla y carrera 14 en el municipio
                        de Soledad.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Usuario con Movilidad Reducida (UMR): </span>
                        Usuarios del Sistema con alguna condición de
                        discapacidad física o visual. Cuentan con beneficios
                        para su movilidad en el Sistema como sillas
                        preferenciales, losetas podotáctiles, validadores
                        especiales y tarjetas personalizadas.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Validador: </span>
                        Herramienta tecnológica a través de la cual el usuario
                        valida su pasaje para entrar a las diferentes estaciones
                        del Sistema o los vehículos que cubren las rutas
                        alimentadoras.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Derecho de petición: </span>
                        Es la facultad que tiene todo ciudadano de presentar
                        solicitudes respetuosas a las autoridades, verbalmente o
                        por escrito, con el fin de requerir su intervención en
                        un asunto de interés general y/o particular.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Petición de información: </span>
                        Solicitud que se realiza para obtener información y
                        orientación sobre los servicios, procesos, proyectos o
                        planes del Sistema o en los que este participa.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Petición de Documento: </span>
                        Solicitud que se realiza para obtener copias de
                        documentos o archivos que reposen en la Entidad.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Queja: </span>
                        Manifestación de protesta o inconformidad, formulada en
                        relación al desempeño o actuar indebido de algún miembro
                        del Sistema (funcionario, empleado, contratista, o
                        personal de los concesionarios) en el desarrollo de sus
                        funciones.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Reclamo: </span>
                        Requerimiento para exigir la solución o el cumplimiento
                        de un derecho, ante la prestación deficiente o
                        suspensión injustificada de alguna de las
                        características de los servicios ofrecidos.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Sugerencia: </span>
                        Es la expresión de una idea o propuesta presentada para
                        mejorar la atención o servicios del Sistema.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Consulta: </span>
                        Solicitud que busca someter a consideración de la
                        Entidad, aspectos relacionados con las materias a su
                        cargo. La respuesta es un concepto que no es de
                        obligatorio cumplimiento o ejecución.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Denuncia: </span>
                        Manifestación sobre posibles delitos o actos de
                        corrupción realizados por personal de la Entidad con el
                        fin de que se inicie la correspondiente investigación
                        administrativa sancionatoria, penal, disciplinaria o
                        fiscal. (Se deben indicar las circunstancias de tiempo,
                        modo y lugar, personas y pruebas si las hay).
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Felicitación: </span>
                        Es la expresión de satisfacción o agradecimiento, en la
                        que se destaca una acción o calidad del servicio y se
                        estimula su continuidad.
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>Solicitud de acceso a información pública: </span>
                        La Ley 1712 de 2014 definió el acceso a la información
                        pública como el derecho fundamental que tienen todas las
                        personas de “conocer sobre la existencia y acceder a la
                        información pública en posesión o bajo control de los
                        sujetos obligados”. Los siguientes son algunos ejemplos
                        de lo que se puede solicitar u obtener con solicitudes
                        de acceso a la información pública: Conocer cómo es la
                        gestión de la entidad, vigilar y controlar lo público
                        (presupuesto, plan de compras y ejecución presupuestal,
                        derechos del usuario, procedimientos, programas,
                        incentivos, subsidios, entre otros).
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check-square" />
                        </span>
                        <span>
                          Solicitud de información con identificación reservada:
                        </span>
                        Cuando el usuario considere que la solicitud de la
                        información pone en riesgo su integridad o la de su
                        familia, podrá solicitar ante el Ministerio Público el
                        procedimiento especial de solicitud con identificación
                        reservada. Artículo 4°, Ley 1712 de 2014
                        https://www.procuraduria.gov.co/portal/pqrsdf_Solicitud_de_informacion_con_identificacion_reservada.page
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fin preguntas frecuentes */}

        {/* Encuestas Ciudadano */}
        <center className="container ">
          <div className="card mb-3 card__Encuesta">
            <div className="row g-0">
              <div className="col-md-7">
                <div className="card-body">
                  <h2 className="card-title">
                    Encuesta de participación ciudadano
                  </h2>
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
                      <div className="modal-dialog modal-dialog-centered">
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
                          <div
                            className="modal-body "
                            style={{ width: '150wh', height: '3209px' }}
                          >
                            <iframe
                              title="Encuesta Participa "
                              src="https://docs.google.com/forms/d/e/1FAIpQLSdMUfd6rLLjP4KIMxZFQIM__PvadwEy4YsMUHPt2ctocc0xfg/viewform?embedded=true"
                              style={{ width: '100%', height: '3209px' }}
                              frameBorder="0"
                              marginHeight="0"
                              marginWidth="0"
                            />
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
              <div className="col-md-4 " id="encuensta_img">
                {/*  <img
                  src="https://apiwebtm.com/uploads/Encuesta_7366385556.png"
                  className="img-fluid mx-auto d-block"
                  alt="imagen de encuesta"
                /> */}
              </div>
            </div>
          </div>
        </center>
      </div>

      {/* Estimulo Estudiantil */}

      <div
        className="container-xxl "
        style={{
          backgroundColor: '#00519E',

          marginTop: '50px',
        }}
        id="estimulo-estudiantil"
      >
        <div className="estuden__card ">
          <div className="card mb-3 border border-0">
            <div className="row g-0 justify-content-center align-items-center ">
              <div className="col-md-4" id="estuden_img">
                <img
                  src="https://apiwebtm.com/uploads/image_1_1067d5605a.png"
                  className="img-fluid "
                  alt="Foto Aerea Buses TM "
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h2 id="acerca">Estímulo Social de Transporte Estudiantil</h2>
                  <div className="linea-colores" />
                  <p
                    className="card-text  fw-bold"
                    style={{ marginTop: '-20px' }}
                  >
                    * El beneficio estudiantil solo se gestiona ante el Distrito
                    de Barranquilla.
                  </p>
                  <p className="card-text">
                    El Estímulo Social de Transporte es un programa de la
                    Secretaría de Gestión Social Distrital para estudiantes de
                    instituciones de educación superior, técnicas y tecnólogas
                    del Distrito de Barranquilla que se traduce en un subsidio
                    indirecto a los estudiantes que cumplan con los requisitos
                    del programa. Con este estímulo, el Distrito busca
                    proporcionar el acceso y la permanencia de los estudiantes
                    que residen en la ciudad de Barranquilla al servicio
                    educativo, reduciendo así la deserción estudiantil en las
                    instituciones de educación superior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl" style={{ backgroundColor: '#002856' }}>
        <div className="row g-0 justify-content-center estuden__card-benef">
          <div className="col-md-8">
            <div className="card-body">
              <p className="text-center">
                Beneficio: 40 % de descuento en el valor del pasaje. No implica
                la entrega de dinero material pues se hace mediante la tarjeta
                Transmetro.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl" style={{ backgroundColor: '#c00d0d' }}>
        <div className="row g-0 justify-content-center align-items-center estuden__card-info ">
          <div className="col-md-3">
            <div className="card-body">
              <p>
                <span>Puntos de atención: </span>
                Alcaldía Distrital de Barranquilla, piso 1 - ventanillas 19, 20
                y 21.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-body">
              <p>
                <span>Horario de atención: </span>
                lunes a viernes 8:00 a.m. a 12:00 m. y 1:30 p.m. a 5:00 p.m.
              </p>
            </div>
          </div>
          <div className="col-md-4" style={{ lineHeight: '1em' }}>
            <div className="card-body">
              <p>
                <span>Teléfono: </span>
                605-3399438
              </p>
              <p>
                <span>Email: </span>
                estimulodetransporte@barranquilla.gov.co
              </p>
              <p>
                {' '}
                <span>Link: </span>
                <a
                  href="https://www.barranquilla.gov.co/gestionsocial/subsidios/estimulo-social-de-transporte/el-programa"
                  alt="Estimulo Estudiantil"
                  target="_blanck"
                >
                  Estimulo Social de Transporte.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ciudadano;
