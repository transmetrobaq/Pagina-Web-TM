import React from 'react';
import '../styles/components/Footer1.css';

function Footer() {
  return (
    <footer className="dk-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="dk-footer-box-info">
              <div className="card border border-light">
                {/* <!--Google map--> */}
                <div className="map-container-google-1 z-depth-1-half map-container card-img-top rounded">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.295896701137!2d-74.83027838597415!3d11.016411657732267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42c4cc84719e7%3A0x982044cbfabf3060!2sTorres%20Del%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1632171875023!5m2!1ses!2sco"
                    width="300"
                    height="200"
                    allowfullscreen=""
                    loading="lazy"
                  />
                  <div className="card-body">
                    <div>
                      <i className="fa-solid fa-location-dot" />
                    </div>
                    <li>Cra. 57 No. 99A - 65</li>
                    <li>Ed. Torres del Atlantico T. Sur Piso 15</li>
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
              {/* <!-- End Social link --> */}
            </div>
            {/* <!-- End Footer info --> */}
            <div className="footer-awarad">
              <img src="images/icon/best.png" alt="" />
              <p>Best Design Company 2019</p>
            </div>
          </div>
          {/* <!-- End Col --> */}
          <div className="col-md-12 col-lg-8">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-us ">
                  <div className="contact-info ">
                    <h3>HORARIO</h3>
                    <ul>
                      <li>HORARIO DE OFICINA</li>
                      <li>Lunes a Viernes:</li>
                      <li>8:00 - 12:00</li>
                      <li>13:00-17:00</li>
                    </ul>
                  </div>
                  {/* <!-- End Contact Info --> */}
                </div>
                {/* <!-- End Contact Us --> */}
              </div>
              {/* <!-- End Col --> */}
              <div className="col-md-6">
                <div className="contact-us contact-us-last">
                  <div className="contact-info">
                    <h3>95 711 9 5353</h3>
                    <p>Give us a call</p>
                  </div>
                  {/* <!-- End Contact Info --> */}
                </div>
                {/* <!-- End Contact Us --> */}
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Contact Row --> */}
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="footer-widget footer-left-widget">
                  <div className="section-heading">
                    <h3>Useful Links</h3>
                    <span className="animate-border border-black" />
                  </div>
                  <ul>
                    <li>
                      <a href="/">About us</a>
                    </li>
                    <li>
                      <a href="/">Services</a>
                    </li>
                    <li>
                      <a href="/">Projects</a>
                    </li>
                    <li>
                      <a href="/">Our Team</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/">Contact us</a>
                    </li>
                    <li>
                      <a href="/">Blog</a>
                    </li>
                    <li>
                      <a href="/">Testimonials</a>
                    </li>
                    <li>
                      <a href="/">Faq</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Footer Widget --> */}
              </div>
              {/* <!-- End col --> */}
              <div className="col-md-12 col-lg-6">
                <div className="footer-widget">
                  <div className="section-heading">
                    <h3>Subscribe</h3>
                    <span className="animate-border border-black" />
                  </div>
                  {/* <!-- Don’t miss to subscribe to our new feeds, kindly fill the form below. --> */}
                  <p>
                    Suscribete para recibir notificaciones y avisos de cuando
                    publiquemos novedades.
                  </p>
                  <form action="/">
                    <div className="form-row">
                      <div className="col dk-footer-form">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Direccion de correo"
                          name="email"
                        />
                        <button type="submit">
                          <i className="fa fa-send" />
                        </button>
                      </div>
                    </div>
                  </form>
                  {/*  <!-- End form --> */}
                </div>
                {/* <!-- End footer widget --> */}
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Row --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Widget Row --> */}
      </div>
      {/* <!-- End Contact Container --> */}

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span>Copyright © 2021, All Right Reserved Transmetro S.A.S</span>
            </div>
            {/* <!-- End Col --> */}
            <div className="col-md-6">
              <div className="copyright-menu">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Terms</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End col --> */}
          </div>
          {/* <!-- End Row --> */}
        </div>
        {/* <!-- End Copyright Container --> */}
      </div>
      {/* <!-- End Copyright --> */}
      {/* <!-- Back to top --> */}

      {/* <!-- End Back to top --> */}
    </footer>
  );
}

export default Footer;
