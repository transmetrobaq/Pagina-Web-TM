/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
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
                El servicio tiene un costo de{' '}
                <span>
                  $2.700 en días hábiles (lunes a sábado) y $2.800 para los días
                  domingos y festivos (vigente desde 1 de agosto de 2022)
                </span>
                . El mismo es descontado de la tarjeta inteligente al pasar por
                los validadores en los portales, estaciones o servicios
                alimentadores. El costo de la{' '}
                <span>Tarjeta Inteligente Sin Contacto es de $4.000</span> y se
                puede personalizar a través del sitio web y en el Punto de
                Atención al Cliente de la estación Joe Arroyo.{' '}
                <span>
                  Con el valor de un pasaje se puede utilizar el servicio
                  cuantas veces se requiera siempre y cuando el usuario
                  permanezca en las estaciones.
                </span>
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
                  Uso del crédito para ingresar al Sistema en las rutas
                  alimentadoras:
                </p>
                <ul className="card-text fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-circle" />
                    </span>
                    El monto del crédito será una parte o la totalidad del
                    pasaje.
                  </li>
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
                  Personalizar la tarjeta Transmetro es vincular los datos
                  personales del usuario, adulto o menor de edad, con el número
                  de la tarjeta para proteger el saldo en caso de pérdida, daño
                  o hurto.
                </p>
                <p className="fw-bold">¿Cómo personalizas?</p>
                <ul className="card-text fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-circle" />
                    </span>
                    Línea de atención al cliente 3712222.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-circle" />
                    </span>
                    En www.transmetro.gov.co.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-circle" />
                    </span>
                    Punto de Atención al Cliente / Estación Joe Arroyo.
                  </li>
                </ul>
                <p>*A través de estos medios también se puede bloquear.</p>
                <div className="card-body">
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
            <Link
              to="/sistema/transbordos"
              role="button"
              alt="Transbordos"
              style={{ textDecoration: 'none' }}
            >
              <p>
                <a href="/sistema/transbordos/#transbordos" alt="Ver Noticia">
                  Mas información
                </a>

                <i className="fa-solid fa-arrow-right" />
              </p>
            </Link>
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

    {/* <!-- Dato de operacion --> */}

    {/* <!-- DATOS DE INFRAESTRUCTURA --> */}

    <div id="datos-infraestructura" className="container-xxl cont-infr">
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
                  style={{ marginTop: '49px' }}
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
                  style={{ marginTop: '49px' }}
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
                  style={{ marginTop: '49px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <center>
      <div className="container">
        <div className="row justify-content-md-center card__opera-tarj">
          <div className="col-2">
            <h1 className="align-baseline text-center ">6</h1>
          </div>
          <div className="col-10">
            <div className="card-body">
              <p>RUTAS TRONCALES CORRIENTES</p>
              <hr />
              <p>RUTAS TRONCALES EXPRESAS</p>
            </div>
          </div>
        </div>
      </div>
    </center>

    <div className="container rutas-ali">
      <div className="row">
        <div className="col-md-3 rutas-ali1">
          <h2 className="card-text  text-break">Soledad</h2>
          <p className="card-text">10</p>
        </div>
        <div className="col-sm-6  rutas-ali2">
          <div className="card-body text-center">
            <h2 className="card-text">24 Rutas Alimentadoras</h2>

            <img
              src="https://apiwebtm.com/uploads/icosn_29_3a3181e8d8.png"
              alt="icono bus "
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-3 rutas-ali3">
          <h2 className="card-text">Barranquilla</h2>
          <p className="card-text">14</p>
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
        <div className="col">
          <div className="card h-100 car__info">
            <img
              src="https://apiwebtm.com/uploads/icosn_31_5f13bb7208.png"
              className="card-img-top mx-auto img-fluid"
              alt="icono punto de recarga"
            />

            <div className="contenido-card  ">
              <p>Contamos con 120 puntos de recarga disponibles</p>
            </div>
          </div>
        </div>
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
      </center>
    </div>

    <div className="container-fluid car-movilizados">
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
                <span>93.000 Usuarios Movilizados</span> diariamente en promedio
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SIstemas 2 */}
    <div className="container-fluid acce ">
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
                  Los usuarios con movilidad reducida pueden informarse sobre
                  los vehículos que tienen ascensor para programar sus
                  desplazamientos. Se puede coordinar el servicio en la línea de
                  atención al cliente: 605-3712222.
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
