/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable arrow-body-style */
import React from 'react';
import '../styles/components/Navinfe.css';
/* import { Link } from 'react-router-dom'; */

const Navinfe = () => {
  return (
    <>
      {/* Nav inferior / Moovit */}

      <div className="container-xxl container__wave ">
        <div className="row justify-content-end">
          <div className="col-md-4 align-self-center ">
            <div className="wave__card-group ">
              <div className=" wrapper ">
                <div className="card wave__card">
                  <a
                    href="/sistema/rutas_troncales/#rutas-troncales"
                    role="button"
                    className="btn btn-link"
                    alt="ir a rutas alimentadoras"
                  >
                    <picture>
                      <img
                        src="https://apiwebtm.com/uploads/icosn_41_00e5906fea.png"
                        className="card-img-top "
                        alt="Icono Transmetro"
                      />
                    </picture>
                    <p className="card-title">Rutas Troncales</p>
                  </a>
                </div>
                <div className="card wave__card">
                  <a
                    href="/sistema/rutas_alimentadoras/#rutas-alimentadoras"
                    role="button"
                    className="btn btn-link"
                    alt="ir a rutas alimentadoras"
                  >
                    <picture>
                      <img
                        src="https://apiwebtm.com/uploads/icosn_41_00e5906fea.png"
                        className="card-img-top "
                        alt="Icono Transmetro"
                      />
                    </picture>
                    <p className="card-title">Rutas Alimentadoras </p>
                  </a>
                </div>
                <div className="card wave__card">
                  <a
                    href="/sistema/transbordos/#transbordos"
                    role="button"
                    className="btn btn-link"
                    alt="ir a rutas alimentadoras"
                  >
                    <picture>
                      <img
                        src="https://apiwebtm.com/uploads/icosn_41_00e5906fea.png"
                        className="card-img-top "
                        alt="Icono Transmetro"
                      />
                    </picture>
                    <p className="card-title">Transbordos</p>
                  </a>
                </div>

                <div className="card wave__card">
                  <a
                    href="https://apiwebtm.com/uploads/PVE_20230719_dc346d7f43.pdf"
                    role="button"
                    className="btn btn-link"
                    target="_blank"
                    alt="Puntos de Recarga"
                  >
                    <picture>
                      <img
                        src="https://apiwebtm.com/uploads/icosn_41_00e5906fea.png"
                        className="card-img-top "
                        alt="Icono Transmetro"
                      />
                    </picture>
                    <p className="card-title">Puntos de Recarga</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Moovit */}
          <div className="col-md-6 align-self-center">
            <div className="moovit__card">
              <div className="iframe-container responsive">
                <div
                  className="mv-gd-widget-20"
                  data-width="100%"
                  data-height="100%"
                >
                  <div className="r2v04k_mv-widget-wrapper rounded-corners black_blue">
                    <h3
                      className="r2v04k_mv-widget-title title-long"
                      data-automation="widget_header"
                    >
                      Tu Ruta
                    </h3>
                    <iframe
                      title="Tu Ruta"
                      allowtransparency="true"
                      width="100%"
                      className="responsive"
                      src="https://widgets.moovit.com/ws/fp/D888A86159E94E19E0530100007F3EC8/4393334?metroId=2883&amp;lang=es"
                    />

                    <div className="r2v04k_mv-widget-footer">
                      <div className="r2v04k_mv-widget-footer-container">
                        <div className="r2v04k_mv-widget-footer-links">
                          <a
                            className="r2v04k_mv-widget-moovitHomePageLink"
                            href="https://moovit.onelink.me/3986059930?pid=widget&amp;c=logo&amp;af_web_dp=https%3A%2F%2Fmoovitapp.com%2F%3Futm_source%3Dwidget%26utm_campaign%3Dget_yours"
                            target="_blank"
                          >
                            <img
                              src="https://widgets.moovit.com/w/images/moovit_logo.svg"
                              alt="Moovit logo"
                            />{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fin Nav inferior */}
    </>
  );
};

export default Navinfe;
