import React from 'react';
import '../styles/components/Footer.css';

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  return (
    <>
      <div className="contact__us">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="/">
                <div className="contact__us-info">
                  <h3>HORARIO</h3>
                  <p>HORARIO DE OFICINA</p>
                  <p>Lunes a Viernes:</p>
                  <ul>
                    <li>8:00 - 12:00</li>
                    <li>13:00-17:00</li>
                  </ul>
                </div>
                <div className="contact__us-info">
                  <p>HORARIO DE OPERACION SISTEMAS</p>
                  <p>Lunes a Viernes:</p>
                  <ul>
                    <li>05:00 - 20:00</li>
                    <li>05:30 - 19:00</li>
                    <li>Sujeto a modificacion</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="cont__us">
                <h3>CONTACTO</h3>
              </div>
              <div>
                <div className="cont__us">
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <div>Cra. 57 No. 99A - 65</div>
                      <div>Ed. Torres del Atlantico T. Sur Piso 15</div>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <div>(57)(5) 3712222. Línea de Atención</div>
                      <div>350 2849625 Ofic. Adm.</div>
                    </li>
                  </ul>
                </div>
                <div className="cont__us">
                  <h3>ATENCION AL CIUDADANO</h3>
                  <ul className="fa-ul">
                    <li>
                      <a href="/">
                        <span>Petriciones, quejas y reclamos</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>Directorio de funcionarios</span>
                      </a>
                    </li>
                    <li>
                      <span>Notificacones judiciales</span>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="far fa-envelope contact-icon" />
                      </span>
                      info@transmetro.gov.co
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="gmap">
                <div className="card">
                  <img
                    src="https://s3.amazonaws.com/media.django.transmetro/images/logo_transmetro.png"
                    className="card-img-top"
                    alt="Google map"
                  />
                  <div className="card-body rounded-3">
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-map-marker-alt" />
                        </span>
                        <div>Cra. 57 No. 99A - 65</div>
                        <div>Ed. Torres del Atlantico T. Sur Piso 15</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-social-link">
                <h3>Siguenos</h3>
                <ul>
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span>
                  Copyright © 2021, All Right Reserved Transmetro S.A.S
                </span>
              </div>
              {/* End Col 1 */}
              <div className="col-md-6">
                <div className="copyright__menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">Home</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End col 2 */}
            </div>
            {/* End Row */}
          </div>
          {/* End Copyright Container */}
        </div>
      </div>
    </>
  );
};

export default Footer;
