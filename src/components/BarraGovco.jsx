import React from 'react';
import '../styles/components/BarraGovco.css';

const BarraGovco = () => (
  <nav
    className="navbar navbar-expand-lg barra-superior-govco"
    aria-label="Barra superior"
  >
    <a
      href="https://www.gov.co/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Portal del Estado Colombiano - GOV.CO"
      style={{ marginRight: 'auto', display: 'block' }}
    >
      <img
        src="https://cdn.www.gov.co/assets/images/logo.svg"
        alt="Logo GOVCO"
        style={{ height: '1.875rem', width: '8.5rem', display: 'block' }}
      />
    </a>
    {/* Botón de idioma eliminado */}
  </nav>
);

export default BarraGovco;