/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
/* import { Link } from 'react-router-dom'; */
import '../styles/components/Footer.css';

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  return (
    <>
      <footer className="container">
        <div className="contact__us">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <div className="contact__us-info">
                  <h3>HORARIO</h3>
                  <p>HORARIO DE OFICINA</p>
                  <span>Lunes a Viernes:</span>
                  <ul>
                    <li>8:00 - 12:00</li>
                    <li>13:00-17:00</li>
                  </ul>
                </div>
                <div className="contact__us-info">
                  <p>HORARIO DE OPERACIÓN DEL SISTEMA</p>
                  <span>Lunes a Viernes:</span>
                  <ul>
                    <li>05:00 - 22:00</li>
                  </ul>
                  <span>Sábados:</span>
                  <ul>
                    <li>05:00 - 22:00</li>
                  </ul>
                  <span>Domingos y Festivos:</span>
                  <ul>
                    <li>05:00 - 21:00</li>

                    <li>* Sujeto a modificación</li>
                  </ul>
                </div>
                <div className="footer-social-link d-flex">
                  <div className="col-md-6">
                    <h3>SÍGUENOS:</h3>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li>
                        <a
                          href="https://es-la.facebook.com/transmetrobaq/"
                          target="_blanck"
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/transmetrobaq"
                          target="_blanck"
                        >
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/user/transmetrotv"
                          target="_blanck"
                        >
                          <i className="fab fa-youtube" aria-hidden="true" />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.instagram.com/transmetrobaq/?hl=es"
                          target="_blanck"
                        >
                          <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>{' '}
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="cont__us">
                  <h3>ATENCIÓN AL CIUDADANO</h3>
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="far fa-envelope contact-icon" />
                      </span>
                      <span>atencionalcliente@transmetro.gov.co</span>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fa fa-phone" aria-hidden="true" />
                      </span>
                      <p>
                        <span>605 3712222</span> Línea de atención
                      </p>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fa fa-file-text-o" aria-hidden="true" />
                      </span>
                      <a href="/">
                        <span>Peticiones, quejas y reclamos</span>
                      </a>
                    </li>
                    {/*      <li>
                      <span className="fa-li">
                        <i
                          className="fa fa-address-book-o"
                          aria-hidden="true"
                        />
                      </span>
                      <a href="/">
                        <span>Directorio de funcionarios</span>
                      </a>
                    </li> */}
                    <li>
                      <span className="fa-li">
                        <i className="far fa-envelope contact-icon" />
                      </span>
                      <span>Notificaciones judiciales:</span>
                    </li>
                    <li>
                      <span>info@transmetro.gov.co</span>
                    </li>
                  </ul>
                </div>
                <div
                  className="contact__us-info"
                  style={{ marginTop: '70px', marginBottom: '50px' }}
                >
                  <h3>POLÍTICAS WEB</h3>
                  <ul className="fa-ul">
                    <li>
                      <a
                        id="preguntas-frecuentes"
                        href="/ciudadano/#preguntas-frecuentes"
                        role="button"
                        alt="preguntas frecuentes"
                      >
                        <span>Preguntas frecuentes</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1r_z9PU_-Elhpf1CJnsg8OudxpKdvmfHt/view?usp=sharing"
                        target="_blanck"
                        alt="Términos y condiciones"
                      >
                        <span>Términos y condiciones</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://drive.google.com/file/d/18EcMay50AmkcNx0bjzstqYtu8hQ_l-Tg/view?usp=sharing"
                        target="_blanck"
                        alt="Política de privacidad"
                      >
                        <span>Política de privacidad</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="cont__us">
                  <h3>CONTACTO</h3>

                  <div className="cont__us">
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li" aria-hidden="true">
                          <i className="fas fa-map-marker-alt" />
                        </span>
                        <span>Cra. 57 No. 99A - 65</span>
                        <p>Ed. Torres del Atlántico - Torre sur, piso 15</p>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-mobile" aria-hidden="true" />
                        </span>
                        <p>
                          <span>350 2849625</span> Ofic. Adm.
                        </p>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="far fa-envelope contact-icon" />
                        </span>
                        <span>info@transmetro.gov.co</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="gmap">
                  <div className="card">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.295896701137!2d-74.83027838597417!3d11.01641165773227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42c4cc84719e7%3A0x982044cbfabf3060!2sTorres%20Del%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1645041789301!5m2!1ses!2sco"
                      loading="lazy"
                      style={{ border: '0', borderRadius: '10px' }}
                    />
                    <div className="card-body rounded-3">
                      <ul className="fa-ul">
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <div>Cra. 57 No. 99A - 65</div>
                          <div>
                            Ed. Torres del Atlántico - Torre Sur Piso 15
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="copyright">
            <div className="container">
              <div className="row align-items-center">
                {/* End Col 1 */}
                <div className="col-md-12 ">
                  <div className="row row-cols-1 row-cols-md-2 g-5">
                    <div className="col copyright__img">
                      <div>
                        <a href="https://www.gov.co/home/" target="_blanck">
                          <img
                            src="https://apiwebtm.com/uploads/icosn_20_8b497e7f22.png"
                            alt="icono"
                            style={{ width: '10vw', marginTop: '10px' }}
                            className="mx-auto d-block copyright__img-gov"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col copyright__img">
                      <div>
                        <a
                          href="https://www.barranquilla.gov.co/"
                          target="_blanck"
                        >
                          <img
                            src="https://apiwebtm.com/uploads/logo_alcaldia_c6054f4065.svg"
                            alt="icono"
                            style={{
                              width: '10vw',
                              marginTop: '5px',
                            }}
                            className="mx-auto d-block copyright__img-baq"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col copyright__img">
                      <div>
                        <a
                          href="https://www.mintransporte.gov.co/"
                          target="_blanck"
                        >
                          <img
                            src="https://apiwebtm.com/uploads/Mintransporte_39c7a45771.png"
                            alt="icono"
                            style={{ width: '10vw', marginTop: '10px' }}
                            className="mx-auto d-block copyright__img-min"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col copyright__img">
                      <div>
                        <a href="https://www.colombia.co/" target="_blanck">
                          <img
                            src="https://apiwebtm.com/uploads/icosn_21_e329fc7483.png"
                            alt="icono"
                            style={{ width: '3vw' }}
                            className="mx-auto d-block copyright__img-co"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="col copyright__img">
                      <div>
                        <a href="https://www.ambq.gov.co/" target="_blanck">
                          <img
                            src="https://apiwebtm.com/uploads/AREA_METROPOLITANA_BARRANQUILLA_LOGO_ab49e2fe6d.png"
                            alt="icono"
                            style={{ width: '5vw', marginTop: '5px' }}
                            className="mx-auto d-block copyright__img-amb"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <p>
                  Copyright © 2021, All Right Reserved
                  <span>Transmetro S.A.S</span>
                </p>
              </div>
              {/* End col 2 */}
            </div>
            {/* End Row */}
          </div>
          {/* End Copyright Container */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
