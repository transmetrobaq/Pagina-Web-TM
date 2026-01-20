/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
/* import { Link } from 'react-router-dom'; */
import Infra from '../components/Infra';
import '../styles/components/Sistema.css';

const Sistema = () => (
  <>
    {/*  <!--INFO BLOQUE  Mapa---> */}

    <Infra />

    {/* Buscado de Horario */}
    {/*  <div className="container">
      <nav className="navbar navbar-light  hora">
        <div className="container-fluid">
          <p className="navbar-text-ligth">Horarios</p>
          <form className="d-flex ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Ingresar Ruta"
              aria-label="Buscar"
            />
            <button className="btn btn-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </div> */}

    {/* Tarjeta TM */}

    <div className="container-xxl tarj" id="tarjeta-personalizacion">
      <div className="row">
        <h2 className="text-center">Tarjeta Transmetro / Forma de pago</h2>
      </div>
      <div className="card mb-3 border border-0">
        <div className="row g-0 justify-content-center">
          <div className="col-md-5 align-self-center">
            <div className="card-body">
              <p className="card-text">
             

      El servicio tiene un costo de <span>  $3.700 en días hábiles (lunes a sábado)
     y $3.800 para los días domingos y festivos (vigente desde 19 de enero de 2026) </span>
     El mismo es descontado de la tarjeta inteligente al pasar por los validadores en 
     los portales, estaciones o servicios alimentadores. <span> El costo de la Tarjeta Inteligente
     Sin Contacto es de $7.000  </span>, se puede adquirir en las taquillas de las estaciones del Sistema.
      Además, <span>  se puede personalizar en los Puntos de Atención al Cliente ubicados en la estación Joe Arroyo y el Portal de Soledad. </span> 
      Con el valor de un pasaje se puede utilizar el servicio cuantas veces se requiera siempre y
       cuando el usuario permanezca en las estaciones. <span>
                  <a
                    className="fw-bold text-decoration-none"
                    style={{ color: '#e30613' }}
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    leer mas..
                  </a>
                </span>
                {/* <div className="card-body  Btn-Precarga " style={{ backgroundColor : '#ffffff' }}>
                  <a
                    href="https://apiwebtm.com/uploads/PVE_20230719_dc346d7f43.pdf"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                   >
                     Puntos de Venta y Recarga (venta en Olímpica, Súper Efectivo y E. Jiménez)
                  </a>
                  
                 </div> */}
              </p>
            </div>
          </div>
          <div className="col-md-4 " id="tarj_img">
            {/*  <img
              src="https://apiwebtm.com/uploads/tarjeta_la_novia_de_Barranquilla_3c5f0b139c.jpg"
              className="img-fluid"
              alt="Estacion de Transmetro"
            /> */}
          </div>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="container-xxl" style={{ backgroundColor: '#f5f5f5' }}>
            <div className="acerca__card ">
              <div
                className="card mb-3 border border-0"
                style={{ backgroundColor: '#f5f5f5' }}
              >
                <div className="row g-0 justify-content-end ">
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="card-text  text">
                        <span className="fw-bold"> Formas de pago</span>{' '}
                        <ul>
                          <li>
                            <span className="fw-bold">Tarjeta Transmetro:</span>{' '}
                            La Tarjeta Inteligente sin Contacto es la
                            herramienta tecnológica que permite el acceso al
                            Sistema como forma de pago
                          </li>
                          <li>
                            <span className="fw-bold">
                              Tarjeta de Movilidad Reducida (TMR):
                            </span>{' '}
                            Para las personas con discapacidad motriz Transmetro
                            dispone de este medio de pago que facilita el
                            ingreso y salida mediante una barrera especialmente
                            dispuesta para ello.{' '}
                          </li>
                          <li>
                            <span className="fw-bold">
                              Tarjetas de entidades financieras:
                            </span>{' '}
                            el Sistema tiene alianza con Bancolombia, la cual facilita al usuario el pago de hasta 4
                            pasajes diarios para ser debitado al final de cada día. 
                            Para activar esta posibilidad, el usuario deberá solicitarlo a 
                            la entidad bancaria.{' '}
                          </li>
                        </ul>
                      </p>
                      <p className="card-text  text">
                        <span className="fw-bold">Compra y recarga: </span> 
                        El usuario puede comprar y recargar la tarjeta de acceso en las taquillas
                         de las estaciones del Sistema. Las tarjetas en convenio con entidades
                          bancarias las entregan, previa solicitud del cliente, en la sucursal 
                          donde tenga la cuenta.
                      </p>
                      <p className="card-text  text">
                        <span className="fw-bold">Recarga de saldo: </span> Se
                        puede recargar desde $100 hasta $100.000 Cuando el
                        usuario deja de utilizar la tarjeta por dos (2) años
                        perderá su vigencia como lo prevee el Manual del Usuario
                        de Transmetro en el punto 2.3 Término de Vigencia del
                        Saldo.
                      </p>
                     
                     
                      <p className="card-text  text">
                        <i className="fa-solid fa-link" />
                        <span className="fw-bold">
                          <a
                            className="text-decoration-none fs-6"
                            style={{ color: '#002856' }}
                            href="/sistema/tarjetas/#tarjetas"
                            role="button"
                            alt="Galería de Tarjetas conmemorativas"
                          >
                            Galería de Tarjetas conmemorativas{' '}
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Credito y Personlaizacion */}

    {/* Credito */}
    <div className="container-xxl">
      <div className="card__credito">
        <div className="card mb-3 border border-0">
          <div className="row g-0 justify-content-end align-items-center ">
            <div className="col-md-5" id="credito_img">
              {/*  <img
                  src="https://apiwebtm.com/uploads/Acerca_de_4f7942ad24.jpg"
                  className="img-fluid rounded-start"
                  alt="Foto Aerea Buses TM "
                /> */}
            </div>
            <div className="col-md-6 ">
              <div className="card-body" style={{ marginLeft: '50px' }}>
                <h2>Crédito</h2>
                <div className="linea-colores-cred" />
                <p>
                  La tecnología de las tarjetas brinda la oportunidad de tener
                  crédito hasta por valor de un pasaje para facilitar al usuario
                  su traslado en caso de no tener saldo en la tarjeta para
                  utilizar solo en rutas alimentadoras.
                </p>
                <ul className="card-text fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-circle" />
                    </span>
                    Al hacer transbordo a una estación debe cancelar el crédito
                    para seguir su recorrido. En este caso no se cobrará un
                    nuevo pasaje, se validará el transbordo.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-circle" />
                    </span>
                    Si la tarjeta tiene un saldo negativo, aunque sea un valor
                    mínimo, se tiene que cancelar el primer crédito para activar
                    uno nuevo.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-circle" />
                    </span>
                    En las rutas troncales no puede hacer uso de crédito.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-circle" />
                    </span>
                   Para acceder al crédito, la Tarjeta Transmetro debe estar personalizada. 
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </div>
    </div>

    {/* Personalizacion */}
    <div className="container-xxl">
      <div className="card__credito">
        <div className="card mb-3 border border-0">
          <div className="row g-0 justify-content-end align-items-center ">
            <div className="col-md-6 ">
              <div className="card-body" style={{ marginLeft: '50px' }}>
                <h2>Personalización</h2>
                <div className="linea-colores-cred" />
                <p>
                Personalizar la Tarjeta Transmetro es vincular los datos personales del usuario con el número del plástico inteligente. 
                El Sistema recomienda personalizar la tarjeta para que en caso de daño, pérdida o hurto se pueda bloquear su uso y posteriormente
                 recobrar el saldo trasladándolo a una nueva tarjeta que deberá adquirir el usuario. Si la tarjeta no se encuentra personalizada, 
                 este proceso no se podrá realizar ya que no se pueden verificar los datos de su propietario. 
                </p>
                <p className="fw-bold">¿Cómo personalizas?</p>
                <ul className="card-text fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-circle" />
                    </span>
                    Línea de atención al cliente 320 635 9257
                  </li>
                  
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-circle" />
                    </span>
                    Puntos de Atención al Cliente / Estación Joe Arroyo y Portal de Soledad
                  </li>
                </ul>
                <p>*A través de estos medios también se puede bloquear.</p>
                {/* <div className="card-body">
                  <a
                    href="http://www.sitbarranquilla.com/index.php/personaliza-tu-tarjeta"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ir a personalización
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-md-5" id="personalizacion_img">
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

    {/* Video */}
    <div className="container" id="transbordos">
      <div className="mb-3 border border-0 video-contenedor">
        <div className="card-body">
          <div className="title-noti justify-content-between">
            <h2>Transbordos</h2>{' '}
            <p>
              <a
                href="/sistema/transbordos/#info_transbordos"
                alt="Transbordos"
                aria-current="page"
              >
                Mas información
              </a>

              <i className="fa-solid fa-arrow-right" />
            </p>
          </div>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/R0sOgE-oc8k"
              title="Transmetro paso a paso"
              alt="YouTube video como funciona"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Centro de control */}
    <div className="container-xxl">
      <div className="card__control">
        <div className="card mb-3 border border-0">
          <div
            className="row g-0 justify-content-end align-items-center "
            id="centro-control"
          >
            <div className="col-md-5" id="control_img">
              {/*  <img
                  src="https://apiwebtm.com/uploads/Acerca_de_4f7942ad24.jpg"
                  className="img-fluid rounded-start"
                  alt="Foto Aerea Buses TM "
                /> */}
            </div>
            <div className="col-md-6 ">
              <div className="card-body" style={{ marginLeft: '50px' }}>
                <h2>Centro de control</h2>
                <div className="linea-colores-cred" />
                <p>
                  Es el área que realiza el control de la operación del Sistema
                  permitiendo regular la puntualidad del servicio y proporcionar
                  información en estaciones y buses acerca de los servicios y
                  hora de llegada en tiempo real. Permite además monitorear la
                  velocidad de los vehículos, las paradas realizadas, la
                  cantidad de pasajeros que hay en una estación y tomar acciones
                  inmediatas ante novedades en el sistema, marcando la
                  diferencia entre el transporte convencional y el organizado.
                </p>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </div>
    </div>

    {/* Flota */}
    <div className="container-xxl">
      <div className="card__flota">
        <div className="card mb-3 border border-0">
          <div
            className="row g-0 justify-content-end align-items-center "
            id="flota"
          >
            <div className="col-md-6 ">
              <div className="card-body" style={{ marginLeft: '50px' }}>
                <h2>Flota</h2>
                <div className="linea-colores-cred" />
                <p>
                  Todos los autobuses del Sistema cuentan con altos estándares
                  de calidad de la industria automotriz. Entre los elementos que
                  lo conforman se destacan las sillas preferenciales (azules)
                  para personas que presentan discapacidad, adulto mayor,
                  mujeres embarazadas y personas con niños en brazos; además de
                  espacio para silla de rueda, que cuenta con cinturón de
                  seguridad para el usuario. También disponen de localizador
                  satelital, utilizan combustible que permite reducir la emisión
                  de gases contaminantes y cuentan con aire acondicionado.{' '}
                  <a
                    className="fw-bold text-decoration-none"
                    style={{ color: '#e30613' }}
                    data-bs-toggle="collapse"
                    href="#collapseFlota"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseFlota"
                  >
                    leer mas..
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-5" id="flota_img" />
          </div>
          <div className="collapse" id="collapseFlota">
            <div
              className="container-xxl"
              style={{ backgroundColor: '#f5f5f5' }}
            >
              <div className="acerca__card ">
                <div
                  className="card mb-3 border border-0"
                  style={{ backgroundColor: '#f5f5f5' }}
                >
                  <div className="row g-0 justify-content-end ">
                    <div className="col-md-10">
                      <div className="card-body">
                        <p className="card-text  text">
                          La flota disponible para la operación del Sistema
                          varía de acuerdo a las necesidades de la demanda y
                          situación ténica de los vehículos.
                          <br />
                          Por su tipología, los autobuses son:
                          <ul>
                            <li style={{ marginTop: '20px' }}>
                              <span className="fw-bold">Articulado:</span> Cada
                              uno con capacidad aproximada para 160 pasajeros,
                              cuentan con sillas preferenciales demarcadas y
                              espacio reservado para silla de ruedas. Los 85
                              buses de esta tipología solo prestan su servicio
                              en las Troncales Olaya Herrera y Murillo.
                            </li>
                            <li>
                              <span className="fw-bold">Padrón:</span> Son 85
                              autobuses de este tipo con capacidad para 80
                              usuarios cada uno. Un alto porcentaje de estos
                              buses tienen elevadores para facilitar el acceso a
                              personas con movilidad reducida. Su estructura
                              permite recoger usuarios tanto rutas
                              alimentadoras, como en Troncales.
                            </li>
                            <li>
                              <span className="fw-bold">Busetón:</span> Son 107
                              y cada uno de ellos tiene capacidad para 45
                              pasajeros. Solo se movilizan, en servicio, por las
                              rutas alimentadoras.
                            </li>
                          </ul>
                        </p>
                        <p className="card-text  text">
                          La operación del sistema Transmetro requiere de
                          conductores capacitados técnicamente para realizar las
                          maniobras de autobuses de alta capacidad; en normas de
                          tránsito que deben respetar y cumplir y en servicio al
                          cliente para desarrollar su labor brindando a los
                          usuarios del transporte masivo seguridad y
                          tranquilidad en sus desplazamientos.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Dato de operacion --> */}

    <div id="datos-operacion" className="container-xxl cont-infr">
      <div className="card mb-3 border border-0">
        <div className="row g-0 justify-content-end ">
          <div className="col-md-5">
            <div className="card-body">
              <h2 style={{ marginTop: '100px' }}>Datos de la operación</h2>
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
              <div className="col-md-4 text-center card_infra-dato ">
                <img
                  src="https://apiwebtm.com/uploads/icosn_26_a906f6271a.png"
                  alt="icono"
                  className="img-fluid"
                  style={{ width: '166px' }}
                />
                <p className="fw-bold">92 articulados </p>
                <div
                  className="container linea-colores-peque"
                  style={{ marginTop: '40px' }}
                />
              </div>
              <div className="col-md-4 text-center card_infra-dato ">
                <img
                  src="https://apiwebtm.com/uploads/icosn_27_f82dcd614d.png"
                  alt="icono"
                  className="img-fluid"
                />

                <p className="fw-bold">85 padrones</p>
                <div
                  className="container linea-colores-peque"
                  style={{ marginTop: '40px' }}
                />
              </div>
              <div className="col-md-4  text-center card_infra-dato ">
                <img
                  src="https://apiwebtm.com/uploads/icosn_25_3af655a391.png"
                  alt="icono"
                  className="img-fluid"
                />

                <p className="fw-bold">107 busetones</p>
                <div
                  className="container linea-colores-peque"
                  style={{ marginTop: '40px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container tm">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-3  seisTM  text-center">
                  <h2>6</h2>
                  <div
                    className="container linea-colores-peque"
                    style={{ marginTop: '-10px' }}
                  />
                </div>
                <div className="col-8 seisTM1   text-start">
                  <p className="corrientesTM">
                    <strong>Rutas troncales corrientes</strong>
                  </p>
                  <hr style={{ maxWidth: '300px' }} />
                  <p>
                    <strong>Rutas troncales expresas</strong>{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container tm1">
      <div
        className="row h-100 justify-content-center align-items-center"
        style={{ height: '800px' }}
      >
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-3   DosCuatroTM1  text-center">
                  <h2>24</h2>
                  <div
                    className="container linea-colores-peque"
                    style={{ marginTop: '-10px' }}
                  />
                </div>
                <div className="col-8 DosCuatroTex1  text-start">
                  <p className="RutasAlimenTex">
                    <strong>RUTAS ALIMENTADORAS</strong>
                  </p>

                  <p className="SoleBarran">
                    {' '}
                    - En Soledad 14 - en Barranquilla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* card informacion sistemas */}
    <div className="container" style={{ maxWidth: '850px' }}>
      <center className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
        <div className="col ">
          <div className="card h-100 car__info ">
            <img
              src="https://apiwebtm.com/uploads/icosn_50_a66554c381.png"
              className="card-img-top mx-auto img-fluid"
              alt="icono bus"
            />

            <div className="contenido-card">
              <p>4 rutas alimentadoras de refuerzo</p>
            </div>
          </div>
        </div>
        {/* <div className="col">
          <div className="card h-100 car__info">
            <img
              src="https://apiwebtm.com/uploads/icosn_31_5f13bb7208.png"
              className="card-img-top mx-auto img-fluid"
              alt="icono punto de recarga"
            />

            <div className="contenido-card  ">
              <p>Contamos con 118 puntos de recarga disponibles</p>
            </div>
          </div>
        </div> */}
        <div className="col">
          <div className="card h-100 car__info">
            <img
              src="https://apiwebtm.com/uploads/icosn_30_8209b17d3c.png"
              className="card-img-top mx-auto d-block img-fluid"
              alt="icono paradero"
            />

            <div className="contenido-card">
              <p>Más de 600 paraderos de rutas alimentadoras</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 car__info">
            <img
              src="https://apiwebtm.com/uploads/icosn_32_e85865ae5d.png"
              className="card-img-top mx-auto img-fluid"
              alt="..."
            />

            <div className="contenido-card">
              <p>105 minutos para hacer Transbordos</p>
            </div>
          </div>
        </div>
        {/* <div className="col">
          <div className="card h-100 car__info">
            <img
              src="https://apiwebtm.com/uploads/icosn_32_e85865ae5d.png"
              className="card-img-top mx-auto img-fluid"
              alt="..."
            />

            <div className="contenido-card">
              <p>Contamos con 33 CATIS</p>
            </div>
          </div>
        </div> */}
      </center>
    </div>

    <div className="container-xxl car-movilizados">
      <div className="card mb-3 border border-0 ">
        <div className="row g-0 justify-content-center align-items-center">
          <div className="col-md-2 " />
          <div className="col-md-2 align-self-center">
            <img
              className="img-fluid mx-auto d-block"
              src="https://apiwebtm.com/uploads/bus_movilizados_836a10bb99.png"
              alt="Bus Transmetro"
            />
          </div>
          <div className="col-md-6 align-self-center">
            <div className="card-body ">
              <h2>
                <span>67.000  Usuarios Movilizados</span> diariamente en promedio
              </h2>
              <p className="text-white">última actualización 18 de noviembre de 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Cultura */}
    <div className="container-xxl">
      <div className="card__cultura">
        <div className="card mb-3 border border-0">
          <div className="row g-0 justify-content-end align-items-center ">
            <div className="col-md-6 " id="cultura-transmetro">
              <div className="card-body" style={{ marginLeft: '50px' }}>
                <h2>Cultura Transmetro</h2>
                <div className="linea-colores-cred" />
                <p>
                  Los Sistemas de Transporte Masivo han representado en las
                  ciudades un cambio significativo en la movilidad y en el
                  comportamiento de sus ciudadanos. Desde el SITM-Transmetro
                  construimos al propósito de cambio social en la ciudad, hacia
                  lo que conocemos como civilidad y cultura ciudadana.
                </p>
                <p>
                  La ´Cultura Transmetro´ está basada en el Manual del Usuario
                  de Transmetro que suministra información sobre cómo utilizar
                  el Sistema correctamente. Es una guía de cómo relacionarse con
                  otros usuarios y funcionarios, aportando, además, claridad
                  sobre los derechos y deberes de los usuarios, restricciones y
                  sanciones.
                </p>
                <p className="fw-bold">
                  Esta estandarización de comportamientos y sus consecuencias
                  son una herramienta útil para que Transmetro agilice la
                  respuesta ante diferentes situaciones que se presentan en la
                  operación diaria del Sistema.
                </p>

                <p>
                  En la medida que los usuarios conozcan, entiendan y acaten las
                  normas de Transmetro, basadas en el respeto mutuo, tolerancia
                  y responsabilidad, hacemos de nuestro Sistema Masivo un
                  espacio de buena convivencia.
                </p>

                <a
                  href="https://apiwebtm.com/uploads/Manual_del_Usuario_Vigente_Diciembre_23_2016_bc7d9a1965.pdf"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Manual del usuario
                </a>
              </div>
            </div>
            <div className="col-md-5" id="cultura_img">
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

    {/* Beneficios y Ventajas */}
    <div className="container-xxl">
      <div className="card__beneficios">
        <div className="card mb-3 border border-0">
          <div
            className="row g-0 justify-content-end align-items-center "
            id="beneficio-ventajas"
          >
            <div className="col-md-1" />
            <div className="col-md-5">
              <div className="card-body">
                <h2>Beneficios y ventajas </h2>
                <div className="linea-colores-cred" />
                <p>Beneficios para los usuarios:</p>
                <ul className="card-text fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Mejora la calidad de vida.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Desplazamientos más rápidos.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Ahorro de dinero por la posibilidad de hacer transbordos.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Reducción del ruido.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Sistema de transporte con menos riesgo vial.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Disminución de la contaminación por el uso de tecnología y
                    combustible limpio.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Mayor percepción de seguridad.
                  </li>
                </ul>
                <p>Ventajas del Sistema Transmetro:</p>
                <ul className="card-text fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Posibilita el transbordos lo que permite hacer cambio entre
                    diferentes rutas fácilmente con un solo pago de pasaje.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    El Carril SOLO BUS para uso exclusivo de los buses del
                    sistema para los servicios Troncales agiliza la movilidad.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="card-body" style={{ marginLeft: '50px' }}>
                <ul className="card-text fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Paraderos debidamente señalizados para mejor guía del
                    usuario y menor impacto en el tránsito de la ciudad debido a
                    que evitan numerosas frenadas de los vehículos del Sistema.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Disminución del número buses de transporte colectivo, así se
                    reduce el impacto negativo en el medio ambiente.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Infraestructura y alto porcentaje de la flota accesibles
                    para personas con discapacidad.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Disponibilidad de datos que permiten tomar decisiones en
                    tiempo real.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Se promueve el respeto por los valores de la cultura
                    ciudadana.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Positivo impacto del paisajismo urbano.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Existencia de normas que permiten una mejor convivencia al
                    interior del Sistema.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-check" />
                    </span>
                    Conductores capacitados con énfasis en servicio al cliente.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </div>
    </div>

    {/* SIstemas 2 */}
    <div className="container-xxl acce ">
      <div className="card mb-3 border border-0 card-title" id="accesibilidad">
        <div className="row g-0 justify-content-end ">
          <div className="col-md-11">
            <div className="card-body">
              <h2>Transmetro incluyente</h2>
            </div>
          </div>
        </div>
        <div className="col-md-1" />
      </div>

      {/* Accesibilidad Bootstrap */}
      <div className="container car__Acce">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col ">
            <div className="card car__Acce-card h-100  align-items-center">
              <img
                src="https://apiwebtm.com/uploads/icosn_33_959cd9c678.png"
                alt="icono accesibilidad "
                className="img-fluid"
              />
              <div className="card-body">
                <p className="card-text text-center">
                  La población en condición de discapacidad cuenta con
                  señalización en estaciones para su ubicación en filas. Tienen
                  preferencia al abordar los buses del Sistema.
                </p>
              </div>
              <div
                className=" linea-accesible"
                style={{ marginBottom: '-2px' }}
              />
            </div>
          </div>
          <div className="col">
            <div className="card  car__Acce-card h-100 align-items-center">
              <img
                src="https://apiwebtm.com/uploads/icosn_35_70844bdef4.png"
                alt="icono accesibilidad "
                className="img-fluid"
              />
              <div className="card-body">
                <p className="card-text text-center">
                  {' '}
                  La infraestructura del Sistema es accesible. Las troncales
                  cuentan con andenes con placas podotáctiles para personas con
                  baja visión y/o discapacidad visual y rampas de acceso en cada
                  cuadra.
                </p>
              </div>
              <div
                className=" linea-accesible"
                style={{ marginBottom: '-2px' }}
              />
            </div>
          </div>
          <div className="col">
            <div className="card  car__Acce-card h-100 align-items-center">
              <img
                src="https://apiwebtm.com/uploads/icosn_37_5ce3c5bb37.png"
                alt="icono accesibilidad "
                className="img-fluid"
              />
              <div className="card-body">
                <p className="card-text text-center">
                  Las personas con discapacidad motriz tienen la asistencia del
                  operador para manipular el ascensor del vehículo. Cuentan con
                  la Tarjeta de Movilidad Reducida que facilita la accesibilidad
                  a las estaciones.
                </p>
              </div>
              <div
                className=" linea-accesible"
                style={{ marginBottom: '-2px' }}
              />
            </div>
          </div>
          <div className="col">
            <div className="card  car__Acce-card  h-100 align-items-center">
              <img
                src="https://apiwebtm.com/uploads/icosn_34_8b71171ea5.png"
                alt="icono accesibilidad "
                className="img-fluid"
              />
              <div className="card-body">
                <p className="card-text text-center">
                Los usuarios con movilidad reducida pueden informarse sobre los vehículos
                 que tienen ascensor para programar sus desplazamientos. Se puede coordinar 
                 el servicio en la línea de atención al cliente: 3206359257
                </p>
              </div>
              <div
                className=" linea-accesible"
                style={{ marginBottom: '-2px' }}
              />
            </div>
          </div>
          <div className="col">
            <div className="card  car__Acce-card  h-100 align-items-center">
              <img
                src="https://apiwebtm.com/uploads/icosn_36_aeee2d0512.png"
                alt="icono accesibilidad "
                className="img-fluid"
              />
              <div className="card-body">
                <p className="card-text text-center">
                  Las estaciones sencillas, la estación de retorno Joe Arroyo y
                  el Portal de Soledad cuentan con rampas e informadores
                  electrónicos con información sobre los servicios y avisos
                  sobre la operación.
                </p>
              </div>
              <div
                className=" linea-accesible"
                style={{ marginBottom: '-2px' }}
              />
            </div>
          </div>
          <div className="col">
            <div className="card  car__Acce-card  h-100 align-items-center">
              <img
                src="https://apiwebtm.com/uploads/icosn_38_9e4092666f.png"
                alt="icono accesibilidad "
                className="img-fluid"
              />
              <div className="card-body">
                <p className="card-text text-center">
                  Los buses tienen sillas azules preferenciales para adultos
                  mayores, personas en condición de discapacidad y mujeres
                  gestantes y/o con niños.
                </p>
              </div>
              <div
                className=" linea-accesible"
                style={{ marginBottom: '-2px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Sistema;
