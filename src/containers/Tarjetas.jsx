import React from 'react';
import '../styles/components/Tarjetas.css';

// eslint-disable-next-line arrow-body-style
const Tarjetas = () => {
  return (
    <>
      <div className="container-xxl tarjetas__tm" id="tarjetas">
        <div className="card mb-3 border border-0">
          <div className="row g-0 justify-content-end ">
            <div className="col-md-6">
              <div className="card-body">
                <h2 id="acerca">Tarjetas del Sistema</h2>
              </div>
            </div>
            <div className="col-md-5" />
          </div>
        </div>

        <div className="card mb-3 border border-0">
          <div className="row g-0 justify-content-end ">
            <div className="col-md-4">
              <img
                src="https://apiwebtm.com/uploads/Juegos_Pana_0ccfbf1562.svg"
                className="card-img-top img-fluid"
                alt="Tarjeta Transmetro"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <div className="card-body">
                <p
                  className="card-text fs-5 fw-semibold"
                  style={{ marginTop: '-20px' }}
                >
                  Tarjeta con fondo negro conmemorativa a los Juegos
                  Panamericanos en Barranquilla 2027
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Persona_Sonteniendo_Chancletas_0a2ece4127.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción: </h5>
              <p className="card-text">
                Tarjeta con diseño artístico. Persona sosteniendo en sus manos
                chancletas de diversos colores.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Persona_Sonteniendo_Flotadores_396d105336.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño artístico. Persona sosteniendo en sus manos
                flotadores de diversos colores.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Vendedor_Flotadores_b152e00da6.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño artístico. Vendedor ambulante con flotadores
                de diversos colores.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Futbol_nos_une_81b8691d64.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño artístico de tres futbolistas colombianos e
                infraestructura del Estadio Metropolitano.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/El_RIO_ES_CUMBIA_816960cb14.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño artístico en homenaje al Río Magdalena y la
                cumbia.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/HOMENAJE_A_LOS_ARTESANOS_DEL_ATLANTICO_cd305fd238.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño artístico en homenaje a los artesanos.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/HOMENAJE_A_PACHO_GALAN_40d2c7431f.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño artístico en homenaje a Pacho Galán y el
                municipio de Soledad.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/HOMENAJE_A_ALFREDO_CORREA_DE_ANDREIS_8420ac69b7.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño artístico en homenaje a Alfredo Correa de
                Andréis.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/LA_NOVIA_DE_BARRANQUILLA_620005b225.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño artístico conmemorativa a Esthercita Forero.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Barranquilla_ciudad_pionera_ed01abca94.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño gráfico fondo amarillo, bus del Sistema,
                líneas de colores de bandera de Barranquilla y estrella verde
                símbolo del bicentenario de la ciudad.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Barranquillacapitaldevida_f26266a0a0.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con fondo blanco con logo y logo símbolo de la Alcaldía
                de Barranquilla.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/TM_Siete_Anos_92ce34cc94.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño gráfico fondo azul y bus del Sistema en
                conmemoración a los siete años del Masivo.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Soy_barranquilla_a83b9d9fdd.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño gráfico conmemorativa a los sitios de interés
                que recorre el Sistema Masivo.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Malecon_de_Avenida_del_Rio_1e4d3d6f55.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta conmemorativa al Malecón de Avenida del Río de
                Barranquilla.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Antiguo_Edifico_de_La_Aduana_efabedcf4c.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con imagen del Antiguo Edifico de La Aduana y el Par
                Vial de la Carrera 50.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Museo_del_Caribe_f46e45e80c.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño gráfico e imagen del Museo del Caribe,
                conmemorativa a Gabriel García Márquez.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Edificio_de_la_Intendencia_Fluvial_be8000eb8d.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta conmemorativa al restaurado edificio de la Intendencia
                Fluvial.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Canal_Regional_Telecaribe_31bd9026db.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta conmemorativa a los 30 años del Canal Regional
                Telecaribe.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Juegos_Centroamericanos_y_del_Caribe_09de03b043.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta conmemorativa a los Juegos Centroamericanos y del Caribe
                de Barranquilla 2018, con diseño gráfico de “Baqui”, la mascota
                de las justas deportivas.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Carnaval_de_Barranquilla_2020_c837175578.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta conmemorativa al Carnaval de Barranquilla 2020.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/BID_BID_INVEST_2020_df548f4f04.png"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta conmemorativa al BID BID INVEST 2020 Reunión Anual de la
                Asamblea de Gobernadores.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Juegos_Pana_0ccfbf1562.svg"
              className="card-img-top"
              alt="Tarjeta Transmetro"
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con fondo negro conmemorativa a los Juegos Panamericanos
                en Barranquilla 2027
              </p>
            </div>
          </div>
        </div>
      </div> */}
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col cardMini">
            <div className="card h-100 ">
              <img
                src="https://apiwebtm.com/uploads/Juegos_Pana_0ccfbf1562.svg"
                className="card-img-top img-fluid"
                alt="Tarjeta Transmetro"
              />
              <div className="card-body">
                <p className="card-title fw-bold">
                  Tarjeta con diseño artístico.
                </p>
                <p className="card-text">
                  Tarjeta con fondo negro conmemorativa a los Juegos
                  Panamericanos en Barranquilla 2027
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tarjetas;
