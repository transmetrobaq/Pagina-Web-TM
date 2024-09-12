import React from 'react';
import '../styles/components/Infantil.css';

const Infantil = () => (
  <>
    <div className="container__infantil">
      {/*  <h1 style={{ textAlign: 'center', padding: '4%', color: '#002856' }}>
        SECCION INFANTIL
      </h1> */}
      {/* <div className="card">
        <img src="..." className="card-img-top" alt="niño leyendo" />
      </div> */}

      <div className="card border-light" id="infantil">
        <div className="card-body">
          <h2 className="card-title text-center">Sección infantil</h2>
        </div>
        <img
          src="https://apiwebtm.com/uploads/Nino_leyendo_ba623016f5.PNG"
          className="card-img-bottom img-fluid"
          alt="niño leyendo"
        />
      </div>

      <div className="container">
        <div className="card video-contenedor">
          <div className="card-body">
            <h2 id="transbordos" className="card-text">
              Cómo funciona
            </h2>
            {/* <hr className="dropdown-divider" /> */}
          </div>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/gk7icVZnuT8?si=6xdn1HkR7o3NUAWa"
              title="Transmetro paso a paso"
              alt="YouTube video como funciona"
            />
          </div>
        </div>
      </div>
      {/* -------------------------------------------------- */}
      <div className="container linea-colores" />
      {/* Actividades Infantiles */}
      <div className="card-body" style={{ marginBottom: '50px' }}>
        <h3 className="card-title text-center">Actividades</h3>
        <h6 className="card-text text-center">
          Ejercita tu mente con estos entretenidos pasatiempos
        </h6>
      </div>

      <div className=" cubo__Infantil">
        <div className="card mb-3 cubo text-white ">
          <div className="row g-0">
            <div className="col-md-10">
              <div className="card-body text-cubo">
                <h4 className="card-title">LIBROS DE JUEGOS</h4>

                <p className="card-text">
                  Disfruta variedad de juegos divertidos y fáciles de seguir.
                  Perfecto para cualquier ocasión. ¡Empieza a jugar!
                </p>
              </div>
            </div>

            <div className="col-md-2 align-self-center">
              <a
                href="https://apiwebtm.com/uploads/Transmetro_infantil_3233d520e1.pdf"
                alt="Descargar"
                style={{ color: 'white' }}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://apiwebtm.com/uploads/descarga_fed0331b2f.png"
                  alt="Descargar"
                  style={{ width: '100px', height: '75px' }} // Ajusta el tamaño según tus necesidades
                />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="container-fluid">
          <div className=" row justify-content-end ">
            <div className="card cubo__Infantil-2 azul-lt ">
              <div className="row">
                <div className="col-md-2 align-self-center">
                  <a
                    href="https://drive.google.com/file/d/1Rp2P3cTZtT2XvkeN-lT9Uy-kb1Q6cnwC/view?usp=sharing"
                    alt="Descargar"
                    style={{ color: '#002856' }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-download fa-4x " aria-hidden="true" />
                  </a>
                </div>
                <div className="col-md-10">
                  <div className="card-body text-cubo-2">
                    <h4 className="card-title">COLOREA</h4>
                    <p className="card-text">
                      Disfrutar con las mejores plantillas de dibujos, explora
                      nuestra extensa colección. Elige tu favorita,
                      personalízala y logra divertidos dibujos en minutos.
                    </p>
                    <p>
                      {' '}
                      Elige tu favorita, personalízala y logra divertidos
                      dibujos en minutos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="card mb-3 cubo-3 text-white ">
          <div className="row g-0">
            <div className="col-md-10">
              <div className="card-body text-cubo">
                <h4 className="card-title">LABERINTO</h4>
                <p className="card-text">
                  Los laberintos son juegos antiguos, en los que los niños
                  tienen que encontrar un camino o una ruta de principio a fin.
                </p>
              </div>
            </div>

            <div className="col-md-2 align-self-center">
              <a
                href="https://drive.google.com/file/d/1gjVwrxje-9w0L-7M8s2A1E8YJZiHB7nZ/view?usp=sharing"
                alt="Descargar"
                style={{ color: 'white' }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-download fa-4x " aria-hidden="true" />
              </a>
            </div>
          </div>
        </div> */}

        {/* <!-- cubo 4 --> */}

        {/* <div className="container-fluid">
          <div className=" row justify-content-end">
            <div className="card cubo-4 azul-lt ">
              <div className="row">
                <div className="col-md-2 align-self-center">
                  <a
                    href="https://drive.google.com/file/d/1oDKa7U5XKvcrnHDyrzEbMBDFU1V-B6bT/view?usp=sharing"
                    alt="Descargar"
                    style={{ color: '#002856' }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-download fa-4x " aria-hidden="true" />
                  </a>
                </div>
                <div className="col-md-10">
                  <div className="card-body text-cubo-4">
                    <h4 className="card-title">CRUCIGRAMA</h4>
                    <p className="card-text">
                      Debemos descubrir qué palabra formar en los cuadrados
                      blancos con la ayuda de las letras de otras palabras que
                      se entrecruzan. Los cuadrados negros que aparecen en los
                      crucigramas más difíciles sirven para separar una palabra
                      de otra que no se cruza entre sí.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="card mb-3 cubo-5 text-white ">
          <div className="row g-0">
            <div className="col-md-10">
              <div className="card-body text-cubo">
                <h4 className="card-title">ENCUENTRA LAS DIFERENCIAS</h4>

                <p className="card-text">
                  Encuentra las diferencias de los objetos, por lo general son
                  iguales. Entre ellos se encuentran una o varias excepciones
                  que debes detectar y seleccionar para resolver el ejercicio.
                </p>
              </div>
            </div>

            <div className="col-md-2 align-self-center">
              <a
                href="https://drive.google.com/file/d/1dOQA8w07rC-eGk-pY2tGQZ6aR9dWwW3i/view?usp=sharing"
                alt="Descargar"
                style={{ color: 'white' }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-download fa-4x " aria-hidden="true" />
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </>
);

export default Infantil;
