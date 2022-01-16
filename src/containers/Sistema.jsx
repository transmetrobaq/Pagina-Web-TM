/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import '../styles/components/Sistema.css';

const Sistema = () => (
  <div>
    <div className="container sist">
      <div className="row">
        <h1 className="text-center">MI SISTEMA</h1>
      </div>
      <div className="card border-light mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Estaciones</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://photos.worldtravelserver.com/photo/344/large/40826663.jpg"
              className="img-fluid rounded-start"
              alt="Estacion de Transmetro"
            />
          </div>
        </div>
      </div>

      <div className="card border-light mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Rutas Troncales</h5>
              <p className="card-text">
                Estos servicios transitan por el carril Solo Bus (exclusivo) de
                las troncales Murillo y Olaya Herrera. Estas rutas operan para
                llevar a los ciudadanos a las diferentes estaciones y portales
                con los que cuenta el Sistema Masivo. Actualmente, Transmetro
                tiene doce rutas (12) troncales, seis (6) corrientes y seis (6)
                expresas.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://photos.worldtravelserver.com/photo/344/large/40826663.jpg"
              className="img-fluid rounded-start"
              alt="Estacion de Transmetro"
            />
          </div>
        </div>
      </div>

      <div className="card border-light mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Rutas Alimentadoras</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://photos.worldtravelserver.com/photo/344/large/40826663.jpg"
              className="img-fluid rounded-start"
              alt="Estacion de Transmetro"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <nav className="navbar navbar-light  hora">
        <div className="container-fluid">
          <p className="navbar-text-ligth">Horarios</p>
          <form className="d-flex">
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
    </div>

    {/* Video */}
    <div className="container">
      <div className="card video-contenedor">
        <div className="card-body">
          <h1 className="card-text">TRANSBORDOS</h1>
          {/* <hr className="dropdown-divider" /> */}
        </div>
        <iframe
          src="https://www.youtube.com/embed/R0sOgE-oc8k"
          title="YouTube video player"
          alt="YouTube video player"
        />
      </div>
    </div>

    {/* Tarjeta TM */}

    <div className="container tarj">
      <div className="row">
        <h1 className="text-center">TARJETA TRANSMETRO / FORMA DE PAGO</h1>
      </div>
      <div className="card border-light mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">
                El servicio a partir del 1 de enero de 2021 tiene un costo de{' '}
                <spam>
                  {' '}
                  $.2500 pesos en dias ordinarios (De lunes a sábado) y $2.600
                  (domingos y festivos)
                </spam>{' '}
                que es descontado cienado la tarjeta inteligente pasa por los
                validadores en los portales, en las estaciones o en los
                alimentadores, el costo de la{' '}
                <spam>
                  Tarjeta Inteligente Sin Conacto es de $4.000 pesos,
                </spam>{' '}
                que se pueden personalizar a travez del sitio web y en los CAU.{' '}
                <spam>
                  {' '}
                  Con un pasaje se puede utilizar el servicio cuantas veces se
                  requera mientras no se abandonen las estaciones.
                </spam>{' '}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://s3.amazonaws.com/media.django.transmetro/news/tarjeta_la_novia_de_Barranquilla.jpg"
              className="img-fluid rounded-start"
              alt="Estacion de Transmetro"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Credito TM */}

    <div className="container cred">
      <h1 className="text-center">CRÉDITO</h1>

      <div className="card border-light">
        <div className="card-body">
          <p className="text-center">
            EL usuario con credito para ingresar al sistema en las rutas
            alimentadoras.
          </p>
          <ul className="card-text">
            <li>
              El monto del crédito: por una parte o la totalidad del pasaje.
            </li>
            <li>
              Al hacer transbordo a una estacion, debe cancelar el dredito para
              seguir su recorrido. En este caso no se cobrará un nuevo pasaje,
              se validará el transbordo.
            </li>
            <li>
              Si la tarjeta tiene un saldo negativo, auque sea un valor minimo,
              se tiene que cancelar el primer credito para activar uno nuevo.
            </li>
            <li>En las rutas troncales no puede hacer uso de crédito</li>
          </ul>
        </div>
      </div>
    </div>

    {/* <!-- Como personalizar --> */}
    <div className="container como-perso ">
      <div className="card-body text-center tex-como-per">
        <h1 className=" text-video">¿Como personalizas?</h1>
      </div>

      <div className="card-body como-perso-text">
        <div
          className="  text-center"
          style={{ maxWidth: '500px', margin: '0 auto' }}
        >
          <p>
            Linea de atencion al cliente <spam>3712222</spam>, en{' '}
            <spam>www.transmetro.gov.co</spam>, punto de atencion al cliente en
            la <spam>Estacion Joe Arroyo</spam>, a través de estos medios
            también la pueden bloquear.
          </p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="text-center per-tarjeta">
        <p>
          Personaliza tu parjeta haciendo clikc{' '}
          <strong>
            {' '}
            <a href="https://example.com" className="text-danger ">
              aqui
            </a>
          </strong>{' '}
        </p>
      </div>
    </div>
    <div className="container">
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
    </div>

    <div className="card bg-dark text-white">
      <img
        src="https://i.postimg.cc/nhS5mNhT/22-1.jpg"
        className="card-img"
        alt="..."
      />
      <div className="card-img-overlay card__Movi">
        <div className="card-title">
          {' '}
          <img
            src="https://image.freepik.com/vector-gratis/vector-autobus_20448-202.jpg"
            className="card-img"
            alt="..."
          />
        </div>
        <div className="card-text  car__Movi-1">Usuarios Movilizados</div>
        <div className="card-text  car__Movi-2">123.405</div>
      </div>
    </div>
    <div className="container ">
      <div
        className="card mb-3 car__cul border-light"
        style={{ maxWidth: '780px' }}
      >
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">CULTURA TRANSMETRO</h2>
              <p className="card-text">
                La cultura Transmetro es una de las culturas más importantes
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://i.pinimg.com/originals/ba/12/29/ba1229a6eabf77149850a7bcbbe0a70f.png"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="container linea-colores" />
    </div>

    {/* <!-- Dato de operacion --> */}

    <div className="text-center">
      <h1 className="text-danger">DATOS DE LA OPERACION </h1>
    </div>

    <div className="container">
      <div className="car__opera">
        <div className="card-title text-center">
          <h2>Operación</h2>
        </div>

        <div className="card-body">
          <p>
            Creamos tu página web utilizando las últimas tecnologías
            disponibles.
          </p>
        </div>
      </div>
    </div>

    {/* <!-- ICONO OPERACION  --> */}
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="text-center ">
            <i className="ico-ope fa fa-bus fa-3x">
              <h3 className="textIco1"> lavarse las manos </h3>
            </i>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center ">
            <i className="ico-ope fa fa-bus fa-3x">
              <h3 className="textIco1"> lavarse las manos </h3>
            </i>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center ">
            <i className="ico-ope fa fa-bus fa-3x">
              <h3 className="textIco1"> lavarse las manos </h3>
            </i>
          </div>
        </div>
      </div>
    </div>

    <center>
      <div className="container">
        <div className="Tarjeta">
          <div className="row">
            <div className="col-3">
              <h1 className="seis">6</h1>
            </div>
            <div className="tarjetaT col-9">
              <p>RUTAS TRONCALES CORRIENTES</p>
              <hr />
              <p>RUTAS TRONCALES CORRIENTES</p>
            </div>
          </div>
        </div>
      </div>
    </center>

    <div className="container rutas-ali">
      <div className="row text-center">
        <div className="col-sm-4 rutas-ali1 ">
          <div className="card-body ">
            <h2 className="card-text">Soledad</h2>
            <h1 className="card-text">10</h1>
          </div>
        </div>
        <div className="col-sm-4  rutas-ali2">
          <div className="card-body ">
            <h2 className="card-text">24 Rutas alimentadoras</h2>
            <i className="fa fa-bus fa-2x text-danger card-img" />
          </div>
        </div>
        <div className="col-sm-4 rutas-ali3">
          <div className="card-body">
            <h2 className="card-text">Barranquilla</h2>
            <h1 className="card-text">14</h1>
          </div>
        </div>
      </div>
    </div>

    <div className="container-card">
      <div className="card car__info">
        <div className="text-center">
          <i className=" card-ali fa fa-bus fa-7x text-white" />
          <div className="hr-card" />
        </div>

        <div className="contenido-card">
          <p>
            Creamos tu página web utilizando las últimas tecnologías
            disponibles. s tu pági las últimas tecnologías disponibles. Creamos
            tu pági
          </p>
        </div>
      </div>

      <div className="card car__info">
        <div className="text-center">
          <i className=" card-ali fa fa-bus fa-7x text-white" />
          <div className="hr-card" />
        </div>

        <div className="contenido-card">
          <p>
            Creamos tu página web utilizando las últimas tecnologías
            disponibles. s tu pági las últimas tecnologías disponibles. Creamos
            tu pági
          </p>
        </div>
      </div>
    </div>

    <div className="container-card">
      <div className="card car__info">
        <div className="text-center">
          <i className=" card-ali fa fa-bus fa-7x text-white" />
          <div className="hr-card" />
        </div>

        <div className="contenido-card">
          <p>
            Creamos tu página web utilizando las últimas tecnologías
            disponibles. s tu pági las últimas tecnologías disponibles. Creamos
            tu pági
          </p>
        </div>
      </div>

      <div className=" card car__info">
        <div className="text-center">
          <i className=" card-ali fa fa-bus fa-7x text-white" />
          <div className="hr-card" />
        </div>

        <div className="contenido-card">
          <p>
            Creamos tu página web utilizando las últimas tecnologías
            disponibles. s tu pági las últimas tecnologías disponibles. Creamos
            tu pági
          </p>
        </div>
      </div>
    </div>

    <center>
      <div className="container">
        <div className="Tarjeta">
          <div className="row ">
            <div className="tarjetaT-movilizados col">
              <h1>56.653 Usuarios Movilizados diariamente en promedio</h1>
            </div>
          </div>
        </div>
      </div>
    </center>
    {/* SIstemas 2 */}
    <div className="container-fluid acce text-center">
      <div className="titulo-acce">
        <h1 className="card-title">ACCESIBILIDAD</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col space">
          <div className="accesible ">
            <i className="fab fa-accessible-icon fa-4x " alt="" />
            <div className="container linea-accesible" />
            <div className="card-body">
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a This is a
                longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="accesible ">
            <i className="fab fa-accessible-icon fa-4x " alt="" />
            <div className="container linea-accesible" />
            <div className="card-body">
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a This is a
                longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="accesible ">
            <i className="fab fa-accessible-icon fa-4x " alt="" />
            <div className="container linea-accesible" />
            <div className="card-body">
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a This is a
                longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col space">
          <div className="accesible">
            <i className="fab fa-accessible-icon fa-4x " alt="" />
            <div className="container linea-accesible" />
            <div className="card-body">
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a This is a
                longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="accesible">
            <i className="fab fa-accessible-icon fa-4x " alt="" />

            <div className="container linea-accesible" />
            <div className="card-body">
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a This is a
                longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="accesible ">
            <i className="fab fa-accessible-icon fa-4x " alt="" />
            <div className="container linea-accesible" />
            <div className="card-body">
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a This is a
                longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sistema;
