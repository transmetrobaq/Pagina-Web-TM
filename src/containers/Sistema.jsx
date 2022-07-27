/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import Infra from '../components/Infra';
import '../styles/components/Sistema.css';

const Sistema = () => (
  <div>
    {/*  <!--INFO BLOQUE  Mapa---> */}
    <Infra />
    <div className="container linea-colores" />
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

    <div className="container tarj">
      <div className="row">
        <h2 className="text-center">TARJETA TRANSMETRO / FORMA DE PAGO</h2>
      </div>
      <div className="card border-white mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">
                El servicio tiene un costo de{' '}
                <span>
                  $.2500 en días hábiles (lunes a sábado) y $2.600 para los días
                  domingos y festivos (vigente desde 1 de enero de 2021)
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
          <div className="col-md-4 tarj__Img">
            <img
              src="https://apiwebtm.com/uploads/tarjeta_la_novia_de_Barranquilla_3c5f0b139c.jpg"
              className="img-fluid"
              alt="Estacion de Transmetro"
            />
          </div>
        </div>
      </div>
      <div className="container linea-colores" />
    </div>

    {/* Credito y Personlaizacion */}
    <div className="container card__Credi">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div
            className="card h-70 card__Credi-credito "
            style={{ backgroundColor: '#004f9f' }}
          >
            <img
              src="https://apiwebtm.com/uploads/credito_9e6e099d6c.png"
              className="card-img-top"
              alt="..."
            />
            <div
              className="card-body "
              style={{ backgroundColor: '#004f9f', borderRadius: '50px' }}
            >
              <h2 className="card-title">Crédito</h2>
              <p className="card-text">
                Uso del crédito para ingresar al Sistema en las rutas
                alimentadoras:
              </p>
              <ul className="card-text">
                <li>
                  El monto del crédito será una parte o la totalidad del pasaje.
                </li>
                <li>
                  Al hacer transbordo a una estación debe cancelar el crédito
                  para seguir su recorrido. En este caso no se cobrará un nuevo
                  pasaje, se validará el transbordo.
                </li>
                <li>
                  Si la tarjeta tiene un saldo negativo, aunque sea un valor
                  mínimo, se tiene que cancelar el primer crédito para activar
                  uno nuevo.
                </li>
                <li>En las rutas troncales no puede hacer uso de crédito.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card h-50 card__Credi-Personaliza"
            style={{
              backgroundColor: '#c00d0d',
            }}
          >
            <img
              src="https://apiwebtm.com/uploads/personalizacion_f07a455788.png"
              className="card-img-top"
              alt="..."
            />
            <div
              className="card-body"
              style={{ backgroundColor: '#c00d0d', borderRadius: '50px' }}
            >
              <h2 id="personalizacion" className="card-title">
                Personalización
              </h2>
              <p className="card-text">
                Personalizar la tarjeta Transmetro es vincular los datos
                personales del usuario, adulto o menor de edad, con el número de
                la tarjeta para proteger el saldo en caso de pérdida, daño o
                hurto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Como personalizar --> */}
    <div className="container como-perso ">
      <div className="card-body text-center tex-como-per">
        <h2>¿Cómo personalizas?</h2>
      </div>

      <div className="card-body como-perso-text">
        <div className="card-text">
          <p>
            <ul>
              <li>
                Línea de atención al cliente <span>3712222</span>.
              </li>
              <li>
                En <span>www.transmetro.gov.co</span>.
              </li>
              <li>Punto de Atención al Cliente / Estación Joe Arroyo.</li>
            </ul>
            *A través de estos medios también se puede bloquear.
          </p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="text-center per-tarjeta">
        <p>
          Personaliza tu tarjeta haciendo clic{' '}
          <a
            href="http://www.sitbarranquilla.com/index.php/personaliza-tu-tarjeta"
            target="_blank"
            rel="noopener noreferrer"
          >
            aquí
          </a>
        </p>
      </div>
      <div className="container linea-colores" />
    </div>

    {/* Video */}
    <div className="container">
      <div className="card video-contenedor">
        <div className="card-body">
          <Link to="/sistema/transbordos" role="button" alt="Transbordos">
            <h2 id="transbordos" className="card-text">
              TRANSBORDOS
            </h2>
          </Link>

          {/* <hr className="dropdown-divider" /> */}
        </div>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/R0sOgE-oc8k"
            title="Transmetro paso a paso"
            alt="YouTube video como funciona"
          />
        </div>
      </div>
      <center style={{ marginTop: '20px' }}>
        <Link
          to="/sistema/transbordos"
          role="button"
          className="btn btn-outline-primary"
          alt="Ver Noticia"
        >
          Mas información
        </Link>
      </center>
    </div>

    {/* <div className="container">
      <div className="text-center">
        <h1>PUNTOS DE VENTA Y RECARGA</h1>
      </div>
    </div>

    <div className="container">
      <div className="text-center">
        <h1>MAPA KMZ</h1>
      </div>
    </div>

    <div className="container">
      <div className="text-center">
        <h1>LOGO</h1>
      </div>
    </div> */}

    {/* Movilizados */}
    {/*  <div className="card bg-dark text-white">
      <div className="card-img-overlay card__Movi">movilizados</div>
    </div> */}

    <div className="container ">
      <div
        className="card mb-3 car__cul border-white"
        style={{ maxWidth: '100%' }}
      >
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h2 id="cultura-transmetro" className="card-title">
                CULTURA TRANSMETRO
              </h2>
              <p className="card-text">
                La ´Cultura Transmetro´ está basada en el Manual del Usuario de
                Transmetro que suministra información sobre cómo utilizar el
                Sistema correctamente. Es una guía de cómo relacionarse con
                otros usuarios y funcionarios, aportando, además, claridad sobre
                los derechos y deberes de los usuarios, restricciones y
                sanciones.
              </p>
              <p>
                {' '}
                Esta estandarización de comportamientos y sus consecuencias son
                una herramienta útil para que Transmetro agilice la respuesta
                ante diferentes situaciones que se presentan en la operación
                diaria del Sistema.
              </p>
              <p className="card-text">
                {' '}
                En la medida que los usuarios conozcan, entiendan y acaten las
                normas de Transmetro, basadas en el respeto mutuo, tolerancia y
                responsabilidad, hacemos de nuestro Sistema Masivo un espacio de
                buena convivencia.
              </p>
              <center>
                <a
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
                </a>
              </center>
            </div>
          </div>
          <figure className="col-md-4 ">
            <img
              src="https://apiwebtm.com/uploads/cultura_ef186cfcf6.png"
              className="img-fluid rounded-start center-block"
              alt="usuario en paradero"
            />
          </figure>
        </div>
      </div>
      <div className="container linea-colores" />
    </div>

    {/* <!-- Dato de operacion --> */}

    <div className="container car__opera">
      <div className="text-center">
        <h1 id="datos-operacion" className="text-danger">
          DATOS DE LA OPERACIÓN{' '}
        </h1>
      </div>

      <div className="card-title text-center">
        <h1 id="title-operacion">OPERACIÓN</h1>
      </div>

      <div className="card-body">
        <p>
          Flota contractualmente vinculada al Sistema de Transporte Masivo
          Transmetro:
        </p>
      </div>

      {/* <!-- ICONO OPERACION  --> */}
      <div className="container car__opera-icon">
        <div className="row">
          <div className="col-md-4">
            <div className="text-center ">
              <img
                src="https://apiwebtm.com/uploads/icosn_26_a906f6271a.png"
                alt="icono bus articulado"
                className="car__opera-img"
              />
              <h3> 92 articulados </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center ">
              <img
                src="https://apiwebtm.com/uploads/icosn_27_f82dcd614d.png"
                alt="icono bus "
              />
              <h3> 85 padrones </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center ">
              <img
                src="https://apiwebtm.com/uploads/icosn_25_3af655a391.png"
                alt="icono bus "
              />
              <h3> 107 busetones </h3>
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
    <div className="container" style={{ maxWidth: '640px' }}>
      <center className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        <div className="col ">
          <div className="card h-100 car__info ">
            <img
              src="https://apiwebtm.com/uploads/icosn_50_a66554c381.png"
              className="card-img-top mx-auto"
              alt="icono bus"
            />
            <div className="hr-card" />

            <div className="contenido-card">
              <p>4 RUTAS ALIMENTADORAS DE REFUERZO</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 car__info">
            <img
              src="https://apiwebtm.com/uploads/icosn_31_5f13bb7208.png"
              className="card-img-top mx-auto"
              alt="icono punto de recarga"
            />
            <div className="hr-card" />

            <div className="contenido-card  ">
              <p>CONTAMOS CON 120 PUNTOS DE RECARGA DISPONIBLES</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 car__info">
            <img
              src="https://apiwebtm.com/uploads/icosn_30_8209b17d3c.png"
              className="card-img-top mx-auto"
              alt="icono paradero"
            />
            <div className="hr-card" />
            <div className="contenido-card">
              <p>MÁS DE 600 PARADEROS DE RUTAS ALIMENTADORAS</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 car__info">
            <img
              src="https://apiwebtm.com/uploads/icosn_32_e85865ae5d.png"
              className="card-img-top mx-auto"
              alt="..."
            />
            <div className="hr-card" />
            <div className="contenido-card">
              <p>105 MINUTOS PARA HACER TRANSBORDOS</p>
            </div>
          </div>
        </div>
      </center>
    </div>

    <center>
      <div className="container ">
        <div className="card car-movilizados">
          <div className="card-body d-flex align-items-center">
            <div className="col">
              <h2>
                <span>56.653 Usuarios Movilizados</span> diariamente en promedio
              </h2>
            </div>
          </div>
        </div>
      </div>
    </center>

    {/* SIstemas 2 */}
    <div className="container-fluid acce ">
      <div className="titulo-acce text-center">
        <h1 id="accesibilidad" className="card-title">
          ACCESIBILIDAD
        </h1>
      </div>

      {/* Accesibilidad Bootstrap */}
      <div className="container car__Acce">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col ">
            <div className="card car__Acce-card h-100  align-items-center">
              <img
                src="https://apiwebtm.com/uploads/icosn_33_959cd9c678.png"
                alt="icono accesibilidad "
              />
              <div className="card-body">
                <div className="container linea-accesible" />
                <p className="card-text text-center">
                  La población en condición de discapacidad cuenta con
                  señalización en estaciones para su ubicación en filas. Tienen
                  preferencia al abordar los buses del Sistema.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  car__Acce-card h-100 align-items-center">
              <img
                src="https://apiwebtm.com/uploads/icosn_35_70844bdef4.png"
                alt="icono accesibilidad "
              />
              <div className="card-body">
                <div className="container linea-accesible" />
                <p className="card-text text-center">
                  {' '}
                  La infraestructura del Sistema es accesible. Las troncales
                  cuentan con andenes con placas podotáctiles para personas con
                  baja visión y/o discapacidad visual y rampas de acceso en cada
                  cuadra.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  car__Acce-card h-100 align-items-center">
              <img
                src="https://apiwebtm.com/uploads/icosn_37_5ce3c5bb37.png"
                alt="icono accesibilidad "
              />
              <div className="card-body">
                <div className=" container linea-accesible" />
                <p className="card-text text-center">
                  Las personas con discapacidad motriz tienen la asistencia del
                  operador para manipular el ascensor del vehículo. Cuentan con
                  la Tarjeta de Movilidad Reducida que facilita la accesibilidad
                  a las estaciones.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  car__Acce-card  h-100 align-items-center">
              <img
                src="https://apiwebtm.com/uploads/icosn_34_8b71171ea5.png"
                alt="icono accesibilidad "
              />
              <div className="card-body">
                <div className="container linea-accesible " />
                <p className="card-text text-center">
                  Los usuarios con movilidad reducida pueden informarse sobre
                  los vehículos que tienen ascensor para programar sus
                  desplazamientos. Se puede coordinar el servicio en la línea de
                  atención al cliente: 605-3712222.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  car__Acce-card  h-100 align-items-center">
              <img
                src="https://apiwebtm.com/uploads/icosn_36_aeee2d0512.png"
                alt="icono accesibilidad "
              />
              <div className="card-body">
                <div className="container linea-accesible " />
                <p className="card-text text-center">
                  Las estaciones sencillas, la estación de retorno Joe Arroyo y
                  el Portal de Soledad cuentan con rampas e informadores
                  electrónicos con información sobre los servicios y avisos
                  sobre la operación.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  car__Acce-card  h-100 align-items-center">
              <img
                src="https://apiwebtm.com/uploads/icosn_38_9e4092666f.png"
                alt="icono accesibilidad "
              />
              <div className="card-body">
                <div className="container linea-accesible " />
                <p className="card-text text-center">
                  Los buses tienen sillas azules preferenciales para adultos
                  mayores, personas en condición de discapacidad y mujeres
                  gestantes y/o con niños.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sistema;
