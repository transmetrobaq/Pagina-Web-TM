/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
/* import { Link } from 'react-router-dom'; */

import '../styles/components/Participacion.css';

const Participacion = () => (
  <>
    <div className="container-xxl tarj" id="Participacion">
      <div className="row">
        <h2 className="text-center">Participación Ciudadana</h2>
      </div>
      <div className="card mb-3 border border-0">
        <div className="row g-0 justify-content-center">
          <div className="col-md-5 align-self-center">
            <div className="card-body">
              <p className="card-text">
                La Participación Ciudadana es el proceso de discusión,
                negociación y concertación en el que se analizan y deciden
                conjuntamente con los ciudadanos problemas a atender, acciones a
                emprender, prioridades, maneras de ejecutar los programas y la
                definición de políticas públicas.
              </p>
              <p>
                En esta sección se encuentra la información relacionada con
                espacios de Participación Ciudadana del Sistema Integrado de
                Transporte Masivo de Barranquilla y su área metropolitana,
                Transmetro SAS.
              </p>
            </div>
          </div>
          <div className="col-md-4 " id="participacion_img">
            {/*  <img
              src="https://apiwebtm.com/uploads/tarjeta_la_novia_de_Barranquilla_3c5f0b139c.jpg"
              className="img-fluid"
              alt="Estacion de Transmetro"
            /> */}
          </div>
        </div>
      </div>
    </div>

    <div className=" container transparencia" style={{ maxWidth: '720px' }}>
      <div className="accordion" id="accordionPanelsStayOpenExample1">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingPar">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Menú
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="panelsStayOpen-headingPar"
          >
            <div className="accordion-body">
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingCero"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseCero"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseCero"
                  >
                    Participa/Consulta Ciudadana
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseCero"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingCero"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <li className="list-group-item ">
                        2025
                        {/* Título */}
                        <div className="text-center mt-2">
                          <h5 className="fw-bold">
                            Convocatoria: Validación Ruta Acoso Callejero
                          </h5>
                        </div>
                        <div className="text-center">
                          <div className="text-center">
                            <a
                              href="https://x.com/transmetrobaq/status/1976052998091559352?s=46"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="https://apiwebtm.com/uploads/ROSADO_8656f7c137.jpg" // 🔸 Cambia por la URL de tu imagen
                                alt="Afiche de Transmetro invitando a participar en la construcción del protocolo contra el acoso sexual. Evento: viernes 10 de octubre, 2:00 p. m., C.C. Los Ángeles, Auditorio Bonga. Cupos limitados. Logos de Transmetro, Alcaldía de Barranquilla y ONU Mujeres."
                                className="img-fluid my-2"
                                style={{
                                  maxWidth: '300px',
                                  borderRadius: '8px',
                                }}
                              />
                            </a>
                          </div>
                        </div>
                        {/* Descripción */}
                        <p className="mb-2" style={{ fontSize: '14px' }}>
                          Este viernes, 10 de octubre de 2025 te invitamos a ser
                          parte de la validación de la ruta de Prevención y
                          Atención del Acoso en Transmetro, una iniciativa
                          respaldada por @alcaldiabquilla y el programa
                          #CiudadesSeguras de @ONUMujeres . Juntos construimos y
                          preservamos un Sistema seguro para todos. Participa y
                          suma tu voz para proteger los derechos de todas.
                          Inscríbete aquí: ⬇️
                        </p>
                        {/* Lista de enlaces */}
                        <div className="list-group">
                          <a
                            href="https://t.co/KEA4bGjpwt"
                            className="list-group-item list-group-item-action"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Link de inscripción
                          </a>
                        </div>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneOne"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneOne"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneOne"
                  >
                    Plan Anticorrupción y de Atención al Ciudadano
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOneOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOneOne"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <li className="list-group-item list-group-item-action ">
                        2019
                        <div className="list-group">
                          <a
                            href="https://apiwebtm.com/uploads/MAPA_DE_RIESGOS_ANTICORRUPCION_2019_9c810c5e01.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Mapa de riesgos anticorrupción
                          </a>
                          <a
                            href="https://apiwebtm.com/uploads/Plan_Anticorrupcion_2019_3f9bb126f7.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Plan anticorrupción
                          </a>
                          <a
                            href="https://apiwebtm.com/uploads/Seguimiento_al_Plan_Anticorrupcion_2019_a2380ae82b.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Seguimiento al plan anticorrupción
                          </a>
                        </div>
                      </li>

                      <li className="list-group-item list-group-item-action ">
                        2020
                        <div className="list-group">
                          <a
                            href="https://apiwebtm.com/uploads/MAPA_DE_RIESGOS_2020_01a3713282.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Mapa de riesgos
                          </a>
                          <a
                            href="https://apiwebtm.com/uploads/Seguimiento_al_Plan_Anticorrupcion_2020_1_ca1c8a21ff.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Seguimiento al Plan Anticorrupción 2020
                          </a>
                        </div>
                      </li>

                      <li className="list-group-item list-group-item-action ">
                        2021
                        <div className="list-group">
                          <a
                            href="https://apiwebtm.com/uploads/MATRIZ_DE_RIESGO_COMPILADA_d26703eae4.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Matriz de riesgo
                          </a>
                          <a
                            href="https://apiwebtm.com/uploads/SEGUIMIENTO_PLAN_ANTICORRUPCION_VIG_2021_2d30d9685f.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Seguimiento Plan Anticorrupción vig 2021
                          </a>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action ">
                        2022
                        <div className="list-group">
                          <a
                            href="https://apiwebtm.com/uploads/Plan_Anticorrupcion_2022_855ecbd179.docx"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Plan Anticorrupción 2022
                          </a>
                          <a
                            href="https://apiwebtm.com/uploads/Mapa_de_riesgo_institucional_02d4397048.xlsx"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Mapa de riesgo institucional
                          </a>
                          <a
                            href="https://apiwebtm.com/uploads/Seguimiento_Mapa_de_riesgo_institucional_vig_2022_35a2cdf851.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Seguimiento Mapa de riesgo institucional vig 2022
                          </a>
                        </div>
                      </li>

                      <li className="list-group-item list-group-item-action ">
                        2023
                        <div className="list-group">
                          <a
                            href="https://apiwebtm.com/uploads/Plan_Anticorrupcion_2023_f5b512c841.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Plan anticorrupción 2023
                          </a>

                          <a
                            href="https://apiwebtm.com/uploads/SEGUIMIENTO_DIC_31_Plan_Anticorrupcion_2023_1_388cd6bfd0.xlsx"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Seguimiento Plan Anticorrupción 2023
                          </a>
                        </div>
                      </li>

                      <li className="list-group-item list-group-item-action ">
                        2024
                        <div className="list-group">
                          <a
                            href="https://apiwebtm.com/uploads/Plan_Anticorrupcion_2024_045806a27e.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Plan Anticorrupción 2024
                          </a>

                          <a
                            href="https://apiwebtm.com/uploads/Primer_seguimiento_Plan_Anticorrupcion_2024_878c0de4d9.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Seguimiento Plan Anticorrupción 2024
                          </a>
                          <li className="list-group-item list-group-item-action ">
                            2025
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/Programa_de_Transp_y_Etica_Publica_PTEP_5f46e77912.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                Programa De Transparencia Y Ética Pública
                              </a>

                              <a
                                href="https://apiwebtm.com/uploads/1_Monitoreo_Programa_de_Transparencia_y_etica_publica_37d82b7299.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                1° Monitoreo Programa de Transparencia y etica
                                pública
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/2do_Monitoreo_Programa_de_Transparencia_y_etica_publica_7291531e6d.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2do Monitoreo Programa de Transparencia y ética
                                pública
                              </a>
                            </div>
                          </li>
                        </div>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFourDos"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseDos"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFourDos"
                  >
                    Manual de Atención al Ciudadano
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseDos"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingDos"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="https://apiwebtm.com/uploads/CA_MA_001_MANUAL_DE_ATENCION_AL_CIUDADANO_76533f9592.pdf"
                        className="list-group-item list-group-item-action "
                        target="_blank"
                        rel="noreferrer"
                      >
                        Manual
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingDos">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTres"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTres"
                  >
                    Comunicados de prensa
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTres"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTres"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="https://www.transmetro.gov.co/noticias/#comunicados-prensa"
                        className="list-group-item list-group-item-action "
                        target="_blank"
                        rel="noreferrer"
                      >
                        Comunicados
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingCuatro"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseCuatro"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseCuatro"
                  >
                    Encuesta
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseCuatro"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingCuatro"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="https://forms.office.com/r/5xLFhJRrch?origin=lprLink"
                        className="list-group-item list-group-item-action "
                        target="_blank"
                        rel="noreferrer"
                      >
                        Encuesta de Transparencia
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingParCinco"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseParCinco"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseParCinco"
                  >
                    Consulta Ciudadana
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseParCinco"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingParCinco"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <li className="list-group-item ">
                        2025
                        {/* Título */}
                        <div className="text-center mt-2">
                          <h5 className="fw-bold">
                            Intervención en estaciones y Portal de Soledad
                          </h5>
                        </div>
                        {/* Descripción */}
                        <p className="mb-2" style={{ fontSize: '14px' }}>
                          Transmetro invita a la ciudadanía de Barranquilla y su
                          área metropolitana a participar en esta encuesta sobre
                          la infraestructura del Sistema de Transporte Masivo
                          para Barranquilla y su Área Metropolitana. Este
                          ejercicio de participación ciudadana se enmarca en el
                          principio de democracia participativa consagrado en la
                          Constitución Política de Colombia y en la Ley 1757 de
                          2015, que promueve la incidencia de la comunidad en la
                          formulación, seguimiento y evaluación de políticas
                          públicas. Su experiencia como usuario es fundamental
                          para identificar oportunidades de mejora en las
                          estaciones del Sistema. La información recolectada
                          será insumo clave para fortalecer la infraestructura y
                          avanzar hacia una movilidad más sostenible.
                        </p>
                        {/* Lista de enlaces */}
                        <div className="list-group">
                          <a
                            href=" https://forms.office.com/r/QDhyECbZuE?origin=lprLink"
                            className="list-group-item list-group-item-action"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Link de inscripción
                          </a>
                        </div>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* card informacion sistemas */}
    {/* <div className="container" style={{ maxWidth: '850px' }}>
      <center className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
        <div className="col ">
          <div className="card h-100 car__Archivo ">
            <img
              src="https://apiwebtm.com/uploads/whiter_docs_2991112_4b96782d86.png"
              className="card-img-top mx-auto img-fluid"
              alt="icono bus"
            />

            <div className="contenido-card">
              <p>Como evitar el acoso</p>
              <a
               className="btn btn-light custom-link"
              // style={{ backgroundColor: '#0000', borderColor:'green', color:'white' }}
              target="_blank"
              rel="noreferrer"
               href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_DOM_Y_FES_15_DE_ENE_2023_613ca9c764.pdf">Ver Archivo</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 car__Archivo">
            <img
              src="https://apiwebtm.com/uploads/whiter_docs_2991112_4b96782d86.png"
              className="card-img-top mx-auto img-fluid"
              alt="icono punto de recarga"
            />

            <div className="contenido-card  ">
              <p>Que hacer en estos casos</p>
              <a
               className="btn btn-light custom-link"
              // style={{ backgroundColor: '#0000', borderColor:'green', color:'white' }}
              target="_blank"
              rel="noreferrer"
               href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_DOM_Y_FES_15_DE_ENE_2023_613ca9c764.pdf">Ver Archivo</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 car__Archivo">
            <img
              src="https://apiwebtm.com/uploads/whiter_docs_2991112_4b96782d86.png"
              className="card-img-top mx-auto d-block img-fluid"
              alt="icono paradero"
            />

            <div className="contenido-card">
              <p>Donde dirigirse</p>
              <a
               className="btn btn-light custom-link"
              // style={{ backgroundColor: '#0000', borderColor:'green', color:'white' }}
              target="_blank"
              rel="noreferrer"
               href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_DOM_Y_FES_15_DE_ENE_2023_613ca9c764.pdf">Ver Archivo</a>
            </div>
          </div>
        </div>
        <div className="col">

          <div className="card h-100 car__Archivo">
            <img
              src="https://apiwebtm.com/uploads/whiter_docs_2991112_4b96782d86.png"
              className="card-img-top mx-auto img-fluid"
              alt="..."
            />

            <div className="contenido-card">
              <p>Informacion</p>
              <a
               className="btn btn-light custom-link"
              // style={{ backgroundColor: '#0000', borderColor:'green', color:'white' }}
              target="_blank"
              rel="noreferrer"
               href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_DOM_Y_FES_15_DE_ENE_2023_613ca9c764.pdf">Ver Archivo</a>
            </div>
          </div>

        </div>
        <div className="col-md-1" />
       </center>

    </div> */}
  </>
);

export default Participacion;
