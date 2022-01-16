/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import '../styles/components/Ciudadano.css';
import AppContext from '../context/AppContext';

// eslint-disable-next-line arrow-body-style
const Ciudadano = () => {
  const { manual, quest } = useContext(AppContext);
  const quests = quest;
  return (
    <>
      <div className="container ">
        <div className="row cd">
          <div className="card ">
            <div className="card-body text-center" key={manual.id}>
              <h3 className="card-title">{manual.title}</h3>
              <h4 className="card-text">{manual.subtitle}</h4>
              <p className="card-text">{manual.content}</p>

              <a
                href="http://bit.ly/2nQO0TD"
                className="btn btn-outline-success"
                target="_blanck"
                alt="Manual de Usuario"
              >
                Manual de Usuario
              </a>
            </div>
          </div>
        </div>
        <div className="row cd">
          <div className="card">
            <div className="card-body text-center" key={quest.id}>
              <h3 className="card-title">Preguntas y Respuestas Frecuentes</h3>
              <div className="card-group">
                <div className="col-md-6">
                  <ul className="list-group">
                    {quests.map((quest) => (
                      <li key={quest.id} className="list-group-item">
                        <h4>{quest.title}</h4>
                        <p>{quest.content}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="card-text">
                    Este Manual describe objetos, generalidades, derechos y
                    deberes del usuario.
                  </p>
                  <a href="/" className="card-link">
                    Card link
                  </a>
                  <a href="/" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
              <div className="card-group">
                <div className="col-md-6">
                  <p className="card-text">
                    Este Manual describe objetos, generalidades, derechos y
                    deberes del usuario.
                  </p>
                  <a href="/" className="card-link">
                    Card link
                  </a>
                  <a href="/" className="card-link">
                    Another link
                  </a>
                </div>
                <div className="col-md-6">
                  <p className="card-text">
                    Este Manual describe objetos, generalidades, derechos y
                    deberes del usuario.
                  </p>
                  <a href="/" className="card-link">
                    Card link
                  </a>
                  <a href="/" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row cd">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Encuesta</h3>
            </div>
          </div>
        </div>
        <div className="row cd">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img src="/" className="img-fluid rounded-start" alt="..." />
              </div>
            </div>
          </div>
        </div>

        {/* Objetivos */}
        <div className="container">
          <div className="row text-center obj-ali">
            <div className="col-sm-4 obj-ali1 ">
              <div className="card-body ">
                <i className="far fa-chart-bar fa-5x" />
              </div>
            </div>
            <div className="col obj-ali2">
              <div className="card-body ">
                <ol className="list-group list-group-horizontal-md">
                  <li>1. Optimizar el uso de los recursos disponibles</li>
                  <li>
                    2. Gestionar para propender por la sostenibilidad financiera
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="row text-center obj-ali">
            <div className="col-sm-4 obj-ali1 ">
              <div className="card-body ">
                <i className="fas fa-users fa-5x" />
              </div>
            </div>
            <div className="col obj-ali2">
              <div className="card-body ">
                <ul className="list-group list-group-horizontal-md">
                  <li>
                    1. Incrementar el nivel de satisfaccion de ususarios y
                    ciudadanos.
                  </li>
                  <li>
                    2. Trabajar bajo el principio de la responsabilidad social.
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal-md">
                  <li>
                    3. Gestionar una comunicacion adecuada con nuestro pcublico
                    y generar valor agregado.
                  </li>
                  <li>
                    4. Contribuir sustancialmente al mejoramiento en la
                    movilidad.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row text-center obj_ali">
            <div className="col-sm-4 obj-ali3 ">
              <div className="card-body ">
                <i className="fas fa-cogs fa-5x" />
              </div>
            </div>
            <div className="col obj-ali4">
              <div className="card-body ">
                <ul className="list-group list-group-horizontal-md">
                  <li>
                    1. Optimizar los procesos internos de acuerdo a exigencias
                    de MIPG.
                  </li>
                  <li>2. Mejorar en los indicadores del sistema.</li>
                  <li>
                    3. Gestionar la integracion del Transporte Masivo con el
                    complementario..
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal-md">
                  <li>4. Constituir Banco de Proyectos.</li>
                  <li>5. Incrementar la demanda.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row text-center obj_ali">
            <div className="col-sm-4 obj-ali3 ">
              <div className="card-body ">
                <i className="far fa-id-badge fa-5x >" />
              </div>
            </div>
            <div className="col obj-ali4">
              <div className="card-body ">
                <ul className="list-group list-group-horizontal-md">
                  <li>
                    1. Fortalecer las competecias del talento humano y el
                    ambiente laboral.
                  </li>
                  <li>
                    2. Desarrollar una cultura organizacional de trabajo en
                    equipo y orientacion a los logros.
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal-md">
                  <li>
                    3. Propiciar ambientes laborales seguros y armoniosos que
                    redunden en el mejoramiento de la calidad de vida de los
                    servidores publicos.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="todos">
        <div className="card mb-3 cubo text-white ">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body text-cubo">
                <h5 className="card-title">
                  MEJORAR LA CALIDAD DE VIDA DE LOS USUARIOS QUE USAN EL
                  SISTEMA, CON CADA EXPERIENCIA DE VIAJE
                </h5>
                <p className="card-text text-justify">
                  Qué: Hacer que la experiencia de viaje de los usuarios en
                  Transmetro sea un diferencial positivo frente a otras opciones
                  de transporte público Cómo: 1) Midiendo el cumplimiento de la
                  oferta de servicio dada 2) Garantizando al usuario diferentes
                  medios de contacto con Transmetro S.A.S. 3) midiendo la
                  disponibilidad de la flota ofertada. Para: 1) Cautivar al
                  usuario con elementos diferenciadores del servicio. 2) Dar al
                  usuario la calidad de cliente 3) Para que el usuario pueda
                  destinar mas tiempo para actividades diferentes al
                  desplazamiento y/o para que pueda destinar mas recursos a
                  necesidades básicas diferentes al transporte
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <i className="fas fa-search  fa-7x " />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className=" row justify-content-end ">
            <div className="card cubo-2 azul-lt ">
              <div className="row">
                <div className="col-md-4 text-center">
                  <i className="fas fa-search  fa-7x " />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-cubo-2">
                    <h5 className="card-title">
                      MEJORAR LA CALIDAD DE VIDA DE LOS USUARIOS QUE USAN EL
                      SISTEMA, CON CADA EXPERIENCIA DE VIAJE
                    </h5>
                    <p className="card-text text-justify">
                      Qué: Hacer que la experiencia de viaje de los usuarios en
                      Transmetro sea un diferencial positivo frente a otras
                      opciones de transporte público Cómo: 1) Midiendo el
                      cumplimiento de la oferta de servicio dada 2) Garantizando
                      al usuario diferentes medios de contacto con Transmetro
                      S.A.S. 3) midiendo la disponibilidad de la flota ofertada.
                      Para: 1) Cautivar al usuario con elementos diferenciadores
                      del servicio. 2) Dar al usuario la calidad de cliente 3)
                      Para que el usuario pueda destinar mas tiempo para
                      actividades diferentes al desplazamiento y/o para que
                      pueda destinar mas recursos a necesidades básicas
                      diferentes al transporte
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 cubo-3 text-white ">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body text-cubo">
                <h5 className="card-title">
                  MEJORAR LA CALIDAD DE VIDA DE LOS USUARIOS QUE USAN EL
                  SISTEMA, CON CADA EXPERIENCIA DE VIAJE
                </h5>
                <p className="card-text text-justify">
                  Qué: Hacer que la experiencia de viaje de los usuarios en
                  Transmetro sea un diferencial positivo frente a otras opciones
                  de transporte público Cómo: 1) Midiendo el cumplimiento de la
                  oferta de servicio dada 2) Garantizando al usuario diferentes
                  medios de contacto con Transmetro S.A.S. 3) midiendo la
                  disponibilidad de la flota ofertada. Para: 1) Cautivar al
                  usuario con elementos diferenciadores del servicio. 2) Dar al
                  usuario la calidad de cliente 3) Para que el usuario pueda
                  destinar mas tiempo para actividades diferentes al
                  desplazamiento y/o para que pueda destinar mas recursos a
                  necesidades básicas diferentes al transporte
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <i className="fas fa-search  fa-7x " />
            </div>
          </div>
        </div>

        {/* <!-- cubo 4 --> */}

        <div className="container-fluid">
          <div className=" row justify-content-end">
            <div className="card cubo-4 azul-lt ">
              <div className="row">
                <div className="col-md-4 text-center">
                  <i className="fas fa-search  fa-7x " />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-cubo-2">
                    <h5 className="card-title">
                      MEJORAR LA CALIDAD DE VIDA DE LOS USUARIOS QUE USAN EL
                      SISTEMA, CON CADA EXPERIENCIA DE VIAJE
                    </h5>
                    <p className="card-text text-justify">
                      Qué: Hacer que la experiencia de viaje de los usuarios en
                      Transmetro sea un diferencial positivo frente a otras
                      opciones de transporte público Cómo: 1) Midiendo el
                      cumplimiento de la oferta de servicio dada 2) Garantizando
                      al usuario diferentes medios de contacto con Transmetro
                      S.A.S. 3) midiendo la disponibilidad de la flota ofertada.
                      Para: 1) Cautivar al usuario con elementos diferenciadores
                      del servicio. 2) Dar al usuario la calidad de cliente 3)
                      Para que el usuario pueda destinar mas tiempo para
                      actividades diferentes al desplazamiento y/o para que
                      pueda destinar mas recursos a necesidades básicas
                      diferentes al transporte
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 cubo-5 text-white ">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body text-cubo">
                <h5 className="card-title">
                  MEJORAR LA CALIDAD DE VIDA DE LOS USUARIOS QUE USAN EL
                  SISTEMA, CON CADA EXPERIENCIA DE VIAJE
                </h5>
                <p className="card-text text-justify">
                  Qué: Hacer que la experiencia de viaje de los usuarios en
                  Transmetro sea un diferencial positivo frente a otras opciones
                  de transporte público Cómo: 1) Midiendo el cumplimiento de la
                  oferta de servicio dada 2) Garantizando al usuario diferentes
                  medios de contacto con Transmetro S.A.S. 3) midiendo la
                  disponibilidad de la flota ofertada. Para: 1) Cautivar al
                  usuario con elementos diferenciadores del servicio. 2) Dar al
                  usuario la calidad de cliente 3) Para que el usuario pueda
                  destinar mas tiempo para actividades diferentes al
                  desplazamiento y/o para que pueda destinar mas recursos a
                  necesidades básicas diferentes al transporte
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <i className="fas fa-search  fa-7x " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ciudadano;
