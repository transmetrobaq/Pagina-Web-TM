import React from 'react';
import '../styles/components/Transmetro.css';

// eslint-disable-next-line arrow-body-style
const Transmetro = () => {
  return (
    <div>
      {/* <!-- acerca de  --> */}

      <div className="container acerca__card">
        <div className="row">
          <h2>Acerca de </h2>

          <div className="clearfix">
            <p>
              En agosto del año 2000, el proyecto Transmetro comienza a gestarse
              cuando un grupo de profesionales especialistas en urbanismo y
              planificación de transporte decidieron formular un proyecto basado
              en el modelo brasileño de transporte masivo y el proyecto
              Transmilenio, en ese entonces en construcción, este trabajo
              desarrollado por Planeación Distrital, Tránsito Distrital, Dadima,
              Edubar, Ministerio de Ambiente, Universidad del Norte liderado y
              coordinado por la Cámara de Comercio de Barranquilla.
            </p>
            <img
              src="http://localhost:1337/uploads/Acerca_de_e6ae4d160c.jpg"
              className="col-md-6 float-md-end mb-3 ms-md-3 rounded-start "
              alt="Buses Transmetro"
            />
            <p>
              Después de realizados los estudios de transporte público y del
              diseño conceptual de Transmetro llevados a cabo por el consorcio
              colombo-español Bocarejo-ETT, mediante acuerdo Nº 003 de febrero
              14 de 2003 del Concejo de Barranquilla se autoriza al Alcalde
              Metropolitano para que el Distrito participe en la conformación de
              la empresa Transmetro cuyo objeto principal es ser titular del
              sistema integrado de transporte masivo de pasajeros de
              Barranquilla y su área metropolitana.
            </p>

            <p>
              Transmetro se constituye en la Notaría Novena de Barranquilla,
              mediante escritura Pública suscrita el 2 de julio de 2003 como una
              sociedad por acciones entre entidades públicas de la especie de
              Sociedad Anónima Simplificada.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- linea con colores rojo, amarillo, verde  --> */}
      <div className="container linea-colores" />

      {/* Mision -Vision */}
      <div className="container-cardTM">
        <div className="card-tm">
          <figure>
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058"
            />
          </figure>

          <div className="contenido-card">
            <h3>Misión</h3>
            <p>
              Ser la primera opción para llegar a tu destino de manera
              confiable, oportuna y agradable, en un escenario incluyente y
              sostenible, generando calidad de vida para Barranquilla y su área
              metropolitana.
            </p>
          </div>
        </div>

        <div className="card-tm" style={{ backgroundColor: '#004f9f' }}>
          <figure>
            <img
              alt=""
              src="https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg"
            />
          </figure>

          <div className="contenido-card">
            <h3>Visión</h3>
            <p>
              Transmetro será a 2025 el eje de movilidad urbana sostenible de
              Barranquilla y su área metropolitana, integrando los modos de
              transportepúblico masivo, teniendo como principio fundamental la
              satisfacción de nuestros usuarios y públicos de interés
            </p>
          </div>
        </div>
      </div>
      <div className="container linea-colores" />
      {/* Asamblea de Socios */}
      <div className="container asamblea">
        <div className="row">
          <h2 className="text-center"> Asamblea de Socios</h2>
          <figure>
            <img
              src="http://localhost:1337/uploads/Asamblea_006af92ec8.png"
              alt="Asamblea"
              className="card-img"
            />
          </figure>
        </div>
      </div>
      {/* <!-- linea con colores rojo, amarillo, verde  --> */}
      <div className="container linea-colores" />

      {/* Objetivos */}
      <div className="container obje__Estra">
        <div className="row text-center obj__Estra-ali">
          <div className="col-sm-4 obj__Estra-ali1 ">
            <div className="card-body ">
              <div className="obje__Estra-title">
                <h2 className="text-center ">OBJETIVO ESTRATEGICO</h2>
              </div>
            </div>
          </div>
          <div className="col obj__Estra-ali2">
            <div className="card-body ">
              <img
                alt="hombre señalando titulo"
                src="http://localhost:1337/uploads/Obj_Estra_66d26a2067.png"
              />
            </div>
          </div>
        </div>
        <div className="row text-center obj-ali">
          <div className="col-sm-4 obj-ali1 ">
            <div className="card-body ">
              <i className="far fa-chart-bar fa-5x" />
            </div>
          </div>
          <div className="col obj-ali2 align-self-center">
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
          <div className="col obj-ali2 align-self-center">
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
                  3. Gestionar una comunicacion adecuada con nuestro pcublico y
                  generar valor agregado.
                </li>
                <li>
                  4. Contribuir sustancialmente al mejoramiento en la movilidad.
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
          <div className="col obj-ali4 align-self-center">
            <div className="card-body ">
              <ul className="list-group list-group-horizontal-md">
                <li>
                  1. Optimizar los procesos internos de acuerdo a exigencias de
                  MIPG.
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
          <div className="col obj-ali4 align-self-center">
            <div className="card-body ">
              <ul className="list-group list-group-horizontal-md">
                <li>
                  1. Fortalecer las competecias del talento humano y el ambiente
                  laboral.
                </li>
                <li>
                  2. Desarrollar una cultura organizacional de trabajo en equipo
                  y orientacion a los logros.
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

      {/* <!-- linea con colores rojo, amarillo, verde  --> */}
      <div className="container linea-colores" />

      {/* que es transmetro */}
      <div className="container">
        <div className="row">
          <div className="conformado">
            <div className="col-4">
              <h2>QUE ES TRANSMETRO Y COMO ESTA CONFORMADO</h2>
            </div>

            <div className="col-12">
              <div>
                <p>
                  {' '}
                  En Europa medieval, el destete probablemente ocurría entre el
                  primer y el tercer año. Aunque la mayoría de las mujeres
                  amamantaban sin restricciones y la ropa permitía un fácil
                  acceso al pecho, muchas mujeres nobles y ricas contrataban
                  amas de leche. Esta práctica se volvería la norma después del
                  siglo XI, en algunas áreas hasta los artesanos y pequeños
                  comerciantes empleaban amas de leche. El amamantamiento se
                  convirtió en el terreno de los pobres.
                </p>
              </div>
              <div>
                <p className="text-derecha ">
                  {' '}
                  <img alt="" src="https://n9.cl/qm9sb" />
                  En los siglos XVI y XVII, sacerdotes y médicos condenaban la
                  práctica de contratar amas de leche. Ellos sostenían que a
                  través de la leche los niños podrían adquirir también los
                  vicios de quien los alimentara. Sin embargo, mientras que las
                  mujeres pobres no tenían más remedio que amamantar a sus
                  hijos, las mujeres ricas creían que esto las haría verse más
                  viejas. Además el amamantar retrasaba el período de fertilidad
                  necesario para poder llegar a
                </p>
              </div>
              <div>
                <p className="text-derecha ">
                  <img alt="" src="https://n9.cl/qm9sb" />
                  la cantidad de 10 o más hijos deseados para mantener la
                  herencia. Por otra parte la moda de la época, marcada por el
                  uso de corsettes que achataban los pechos y causaban pezones
                  invertidos, impedía muchas veces que las propias madres
                  alimentaran a sus hijos. En contra de las recomendaciones de
                  religiosos y médicos la mayoría de las mujeres que tenían
                  posibilidades económicas de contratar amas de leche lo hacían.{' '}
                </p>
              </div>
              <div>
                <p className="text-derecha ">
                  <img alt="" src="https://n9.cl/qm9sb" />
                  El destete era doloroso para los niños: se los retiraba de la
                  casa de su ama de leche, el único hogar que él conocía, y
                  retornaba a la casa de su familia o en algunos casos el ama de
                  leche era despedida de la casa de familia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- linea con colores rojo, amarillo, verde  --> */}
      <div className="container linea-colores" />

      {/* <!-- DATOS DE INFRAESTRUCTURA --> */}

      <div className="color-tex-da-infra">
        <h1 className="text-center">DATOS DE INFRAESTRUCTURA</h1>
      </div>
      <div className="container dato1-">
        <div className="row">
          <div className="col text-center">
            <h3>TRONCALES MURILLO</h3>
            <i className="fas fa-bus-alt fa-3x " alt="" />
          </div>
          <div className="col order-5">
            <ol>
              <li>Primer elemento</li>
              <li>Segundo elemento</li>
              <li>Tercer elemento</li>
              <li>Cuarto elemento</li>
            </ol>
          </div>
          <div className="col">
            <ol>
              <li>Primer elemento</li>
              <li>Segundo elemento</li>
              <li>Tercer elemento</li>
              <li>Cuarto elemento</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="container dato1-">
        <div className="row">
          <div className="col text-center">
            <h3>TRONCAL OLAYA HERRERA</h3>
            <i className="fas fa-bus-alt fa-3x " alt="" />
          </div>
          <div className="col order-5">
            <ol>
              <li>Primer elemento</li>
              <li>Segundo elemento</li>
              <li>Tercer elemento</li>
              <li>Cuarto elemento</li>
            </ol>
          </div>
          <div className="col dato-1">
            <ol>
              <li>Primer elemento</li>
              <li>Segundo elemento</li>
              <li>Tercer elemento</li>
              <li>Cuarto elemento</li>
            </ol>
          </div>
        </div>

        {/* <!-- DATOS DE INFRSESTRUCTURA bloque 2 --> */}
      </div>
      <div className="container">
        <div className="row cont-a">
          <div className="col-4 portal1 text-center">
            <h3>PORTAL DE SOLEDAD</h3>
            <i className="fas fa-directions fa-3x dato-ico" alt="" />
          </div>
          <div className="col-4 portal1 text-center">
            <h3>PORTAL DEL PRADO</h3>
            <i className="fas fa-directions fa-3x dato-ico2" alt="" />
          </div>
          <div className="col-4 portal1 text-center">
            <h3>ESTACION JOE ARROYO</h3>
            <i className="fas fa-directions fa-3x dato-ico3" alt="" />
          </div>
        </div>
      </div>

      {/* <!-- DATOS DE INFRAESTRUCTURA bloque 3 --> */}

      <div className="container ">
        <div className="row cont-infr">
          <div className="col-sm-4 text-center">
            <a className="efecto" href="/">
              <i className="fas fa-route fa-3x " alt="" />
            </a>
            <div className="container linea-colores-peque" />

            <p className="">
              Lorem ipsum dolor, sit amet consectetur assumenda libero
              voluptates.{' '}
            </p>
          </div>
          <div className="col-sm-4  text-center">
            <a className="efecto" href="/">
              <i className="fas fa-hand-paper fa-3x " alt="" />
            </a>
            <div className="container linea-colores-peque" />
            <p className="">
              Lorem ipsum dolor, sit amet consectetur assumenda libero
              voluptates.{' '}
            </p>
          </div>
          <div className="col-sm-4  text-center">
            <a className="efecto" href="/">
              <i className="fas fa-shuttle-van fa-3x " alt="" />
            </a>
            <div className="container linea-colores-peque" />
            <p className="">
              Lorem ipsum dolor, sit amet consectetur assumenda libero
              voluptates.{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row cont-infr2">
          <div className="col-sm-4 text-center">
            <div className="card">
              <div className="card-body">
                <a className="efecto" href="/">
                  <i className="fas fa-route fa-3x " alt="" />
                </a>
                <div className="container  linea-colores-peque" />
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur assumenda libero
                  voluptates.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4  text-center">
            <div className="card">
              <div className="card-body">
                <a className="efecto" href="/">
                  <i className="fas fa-hand-paper fa-3x " alt="" />
                </a>
                <div className="container linea-colores-peque" />
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur assumenda libero
                  voluptates.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4  text-center">
            <div className="card">
              <div className="card-body">
                <a className="efecto" href="/">
                  <i className="fas fa-shuttle-van fa-3x " alt="" />
                </a>
                <div className="container linea-colores-peque" />
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur assumenda libero
                  voluptates.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="card-">
          <div className="row ">
            <div className="col-md-6">
              <img
                className="card-img"
                src="https://n9.cl/eqtje"
                alt="Suresh Dasari Card"
              />
            </div>
            <div className="col-md-5">
              <div className="card-body ">
                <h1 className="">Suresh Dasari</h1>
                <p className="">
                  Suresh Dasari is a founder and technical lead developer in
                  tutlane.
                </p>
                <a href="/" className="btn btn-primary btn-si">
                  SI
                </a>
                <a href="/" className="btn btn-primary btn-no ">
                  NO
                </a>
                <a href="/" className="btn btn-primary btn-votar">
                  VOTAR
                </a>
                <div>
                  <a href="/" className="ver-resultado btn btn-danger ">
                    VER RESULTADO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transmetro;
