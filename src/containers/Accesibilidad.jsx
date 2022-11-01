/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

import '../styles/components/Accesibilidad.css';

const Accesibilidad = () => (
  <>
    {/* Comandos de accesibilidad */}
    <div className="container azul-lt ">
      <div className="col-sm-12">
        <div className="card border-0">
          <div id="accesibilidad" className="card-body">
            <h2
              className="card-title text-center"
              style={{ marginBottom: '30px' }}
            >
              Accesibilidad en la página web de Transmetro{' '}
            </h2>

            <p className="card-text">
              La accesibilidad a personas en condición de discapacidad es otro
              de los factores que hacen del Sistema de Trasporte Masivo,
              Transmetro, un servicio incluyente. El acceso al transporte
              público es una de las maneras de garantizar la movilidad a la
              comunidad en general, de ello da cuanta lo que tenemos ante
              nuestra vista con la infraestructura, los autobuses y la operación
              en general del Sistema.
            </p>
            <p className="card-text">
              <span>Espacio público:</span> en los andenes del Sistema la
              accesibilidad está dada por su red continua a lo largo de las
              Troncales Olaya Herrera y Murillo, losetas de color amarillo con
              guías podotáctiles para personas con discapacidad visual y rampas
              que facilitan acceso a usuarios con movilidad reducida, adultos
              mayores, niños movilizados en coches, entre otras personas que las
              utilizan.
            </p>
            <p className="card-text">
              <span>Estaciones</span>: cuentan con rampas de acceso, losetas
              podotáctiles y barreras de acceso especiales para personas cuya
              capacidad física para movilizarse le impida el paso a través de
              las barreras normales. En algunos casos, la obesidad puede ser
              motivo para utilizar estas barreas especiales. Los buses del
              Sistema cuentan con sillas preferenciales para personas que
              presentan discapacidad, para adulto mayor, para mujeres
              embarazadas y personas con niños en brazos; además de un espacio
              para silla de rueda que cuenta con cinturones que afianza la silla
              al bus, asegurando al usuario que la utiliza. Un porcentaje de los
              buses Padrones y Busetones, además de las características
              mencionadas, cuentan con un mecanismo de ascensor para usuarios
              con movilidad reducida, quienes abordan el vehículo a la altura de
              los andenes. El mismo es manipulado por el operador del bus para
              facilitar el acceso del usuario.
            </p>
            <p className="card-text">
              De acuerdo al lineamiento LI.SIS.24 Accesibilidad de la Política
              de Gobierno Digital del Ministerio de Tecnologías y Sistemas de
              Información, el análisis de cumplimiento del Nivel A de
              accesibilidad se realiza con la herramienta en línea Tawdis
              https://www.tawdis.net, que es una herramienta en línea que fue
              creada por la Fundación CTIC en España teniendo como referencia
              técnica las pautas de accesibilidad al contenido web (WCAG 2.0)
              del W3C que en Colombia fue homologada con la norma NTC 5854
              Accesibilidad a páginas web
            </p>
          </div>
        </div>
      </div>
      {/* Personas con discapacidad visual  */}

      <div className="container accesibilidad-tm  ">
        <div className="row justify-content-center aliegn-items-center">
          <div
            className="card mb-3 accesibilidad-border  "
            style={{ maxWidth: '540px' }}
          >
            <div className="row  ">
              <div className="col-md-4 text-center ">
                <i
                  className="card-img-top fa fa-low-vision fa-4x   "
                  aria-hidden="true"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body azul-lt ">
                  <h3 className="card-title">
                    Personas con discapacidad visual o baja visión:
                  </h3>
                  <p className="card-text">
                    Usted puede descargar los lectores de pantalla
                    <a
                      href="https://www.convertic.gov.co/641/w3-propertyvalue-15339.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Enlace para descargar programa JAWS"
                    >
                      {' '}
                      JAWS{' '}
                    </a>
                    y
                    <a
                      href="https://convertic.gov.co/641/w3-propertyvalue-15340.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Enlace para descargar programa ZOOMTEXT"
                    >
                      {' '}
                      ZOOMTEXT.
                    </a>{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  <div className="container accesibilidad-tm  azul-lt ">
      <div
        className="card mb-3 accesibilidad-border"
        style={{ maxWidth: '100%' }}
      >
        <div className="row g-0">
          <div className="col-md-12">
            <div className="card-body">
              <h3 className="card-title">¿Cómo usar la página web del SITP?</h3>

              <iframe
                width="100%"
                height="500px"
                src="https://www.youtube.com/embed/xTz7Kvlm_Hc"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div> */}

    {/* <div className="container">
      <div className="row justify-content-center aliegn-items-cente">
        <div className="col-8">
          <div className="preguntas-tm">
            <div className="preguntas-grupo">
              <input type="checkbox" id="preg1" />
              <label className="preguntas-label" htmlFor="preg1">
                <h3>Personas con discapacidad cognitiva: </h3>
              </label>
              <div className="respuestas-content">
                <div className="conTecla">
                  <p title="Alt + tecla de acceso">
                    {' '}
                    <span className=" tecla" data-mce-mark="1">
                      alt
                    </span>
                    + tecla de acceso
                  </p>
                </div>
                <div className="conTecla">
                  <p title="Alt + tecla de acceso">
                    {' '}
                    <span className=" tecla" data-mce-mark="1">
                      alt
                    </span>
                    + tecla de acceso
                  </p>
                </div>
                <div className="conTecla">
                  <p title="Alt + tecla de acceso">
                    {' '}
                    <span className="tecla" data-mce-mark="1">
                      alt
                    </span>
                    + tecla de acceso
                  </p>
                </div>
                <div className="conTecla">
                  <p title="Alt + tecla de acceso">
                    {' '}
                    <span className="tecla" data-mce-mark="1">
                      alt
                    </span>
                    + tecla de acceso
                  </p>
                </div>
                <div className="conTecla">
                  <p title="Alt shift + tecla de acceso">
                    <span className=" tecla" data-mce-mark="1">
                      alt
                    </span>{' '}
                    <span className="ignoreAaa tecla" data-mce-mark="1">
                      shift
                    </span>
                    + tecla de acceso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    <div className="container accesibilidad-tm">
      <div className="row">
        <div className="col-sm-8">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title azul-lt">
                Nivel de accesibilidad del sitio web
              </h5>
              <p className="card-text azul-lt">
                La entidad tiene un nivel de accesibilidad AA, diagnosticada por
                la herramienta TAWDIS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Accesibilidad;
