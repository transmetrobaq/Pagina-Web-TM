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
            <h1 className="card-title" style={{ marginBottom: '30px' }}>
              Comandos de accesibilidad en la pagina web de Transmetro{' '}
            </h1>

            <p className="card-text">
              El Sistema Transmetro pensando en su comunidad adaptó sus
              contenidos y desde ahora, cuenta con los servicios de
              accesibilidad que permiten la inclusión de personas con
              discapacidad visual, problemas auditivos y discapacidad cognitiva.
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
    </div>
    {/* Personas con discapacidad visual  */}

    <div className="container accesibilidad-tm  ">
      <div className="row justify-content-center aliegn-items-center">
        <div
          className="card mb-3 accesibilidad-border  "
          style={{ maxWidth: '540px' }}
        >
          <div className="row">
            <div className="col-md-4 text-center">
              <i
                className="card-img-top fa fa-low-vision fa-6x"
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

    <div className="container accesibilidad-tm" style={{ paddingTop: '90px' }}>
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
