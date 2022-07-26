import React from 'react';

// eslint-disable-next-line arrow-body-style
const Acordeon = () => {
  return (
    <div className=" container " style={{ maxWidth: '720px' }}>
      <div className="accordion accordion-total" id="accordionExample">
        <div className="accordion-item">
          <div className="accordion-header" id="headingOne">
            <button
              className="accordion-button  collapsed  fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h5>1. Información de la entidad</h5>
            </button>
          </div>
          <div
            id="collapseOne"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              <dd type="button" className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1GIgaJR0bNbympBTqEkJcsUHiFs8vsOWv?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p> 1.1 Misión, visión, funciones y deberes</p>
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1iA89ywT8RtCO-ubMrMglBBoq66iOurER?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>1.2 Estructura orgánica</p>
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  <p>1.3 Mapas y cartas descriptivas</p>
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.4 Directorio institucional incluyendo sedes
                </a>
              </dd>
              <dd className="bor ">
                <a href="/transparencia/directorio">
                  <p>1.5 Directorio de servidores públicos</p>
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.6 Directorio de entidades
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.7 Directorio de agremiaciones
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.8 Servicio al público, normas, formularios y protocolos de
                  atención
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.9 Procedimientos que se siguen para tomar decisiones
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.10 Mecanismo de presentación directa de solicitudes
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.11 Calendario de actividades y eventos
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.12 Información sobre decisiones que puede afectar al público
                </a>{' '}
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.13 Entes y autoridades que lo vigilan
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/13cKR6RUIltdPdO6z5OGHBucvWeBh4bRO?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>1.14 Publicación de hojas de vida</p>
                </a>
              </dd>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed  fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <h5>2. Normativa</h5>
            </button>
          </div>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1. Normativa de la entidad o autoridad
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1.1 Leyes
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1.2 Decreto Único Reglamentario
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1.3 Normativa aplicable
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1.4 Vínculo al Diario o Gaceta Oficial
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1.5 Políticas
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1.6 Agenda Regulatoria
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.2. Búsqueda de normas
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.2.1 Sistema Único de Información Normativa
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.2.2 Sistema de búsquedas de normas
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.3 Proyectos de normas para comentarios
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.3.2 Comentarios y documento de respuesta
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.3.3 Participación ciudadana
                </a>
              </dd>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h5>3. Contratación</h5>
            </button>
          </div>
          <div
            id="collapseThree"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1pw_dAKyNzz48Dk100iw7gm6VKDO5vdfS?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>3.1 Plan Anual de Adquisiciones</p>
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://www.contratos.gov.co/consultas/inicioConsulta.do"
                  target="_blank"
                  rel="noreferrer"
                >
                  3.2 Publicación de la información contractual
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1USnQsfDjQESQKinqnxIu6rt1t1I1cCfa?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>3.3 Publicación de la ejecución de los contratos</p>
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1rJRwoQlQzvvAONxtr8Q5J6jwf28uMwT5?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>3.4 Manual de contratación</p>
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/12MzzEH1O79uCdYYdr8fkpw9B7UgNtmHE?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>3.5 Formatos o modelos de contratos o pliegos tipo</p>
                </a>
              </dd>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed  fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFor"
              aria-expanded="false"
              aria-controls="collapseFor"
            >
              <h5>4. Planeación</h5>
            </button>
          </div>
          <div
            id="collapseFor"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1RVPZphj9aHxhJjRUHObOI0cJv9lPsHYT?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>4.1 Presupuesto general de ingresos</p>
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  4.2 Ejecución presupuestal
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1xfL9EjCQeSgjVoHiW3fuN9QMEWeLofqk?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>4.3 Plan de Acción</p>
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  4.4 Proyectos de Inversión
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  4.5 Informes de empalme
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  4.6 Información pública
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  4.7 Informes de gestión
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1WxAsBYZOE1lZmXynnq4mav4_G7Fd7l13?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>4.8 Informes de la Oficina de Control Interno</p>
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  4.9 Informe sobre Defensa Pública y Prevención del Daño
                  Antijurídico
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1pURjjpOiq66PtRNQZpTAGYt7U7xqUmXW?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>
                    4.10 Informes trimestrales sobre acceso a información,
                    quejas y reclamos
                  </p>
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/13yb9qBlefN2yyszk1tzkrG1_BD9p53Qt?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>4.11 Respuesta a peticiones anónimas o sin dirección</p>
                </a>
              </dd>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed fw-bolder text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <h5>5. Trámites</h5>
            </button>
          </div>
          <div
            id="collapseFive"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" />
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed fw-bolder text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              <h5>6. Participa</h5>
            </button>
          </div>
          <div
            id="collapseSix"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1GXifF3djRYFjw6MGQo5VqkpMkJF8ym2V?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>6.1 Informes</p>
                </a>
              </dd>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header" id="headingSev">
            <button
              className="accordion-button collapsed fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSev"
              aria-expanded="false"
              aria-controls="collapseSev"
            >
              <h5>7. Datos abiertos</h5>
            </button>
          </div>
          <div
            id="collapseSev"
            className="accordion-collapse collapse  hv"
            aria-labelledby="headingSev"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  7.1 Instrumentos de gestión de la información
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://datos.gov.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>7.2 Sección de Datos Abiertos</p>
                </a>
              </dd>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="headingEi">
            <button
              className="accordion-button collapsed fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEi"
              aria-expanded="false"
              aria-controls="collapseEi"
            >
              <h5>8. Información específica</h5>
            </button>
          </div>
          <div
            id="collapseEi"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingEi"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" />
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header" id="headingNine">
            <button
              className="accordion-button collapsed fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              <h5>9. Obligación de reporte de información</h5>
            </button>
          </div>
          <div
            id="collapseNine"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" />
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="headingTeen">
            <button
              className="accordion-button collapsed fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTeen"
              aria-expanded="false"
              aria-controls="collapseTeen"
            >
              <h5> 10. Obligación de reporte de información</h5>
            </button>
          </div>
          <div
            id="collapseTeen"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingNTeen"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  10.1 Procesos de recaudo de rentas locales
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  10.2 Tarifas de liquidación del Impuesto de Industria y
                  Comercio (ICA)
                </a>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acordeon;
