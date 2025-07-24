/* global requestAnimationFrame, cancelAnimationFrame */
import React, { useEffect, useRef } from 'react';
import '../styles/components/Publicarrusel.css';

const IMAGENES = [
  { id: 'img-1', alt: 'Valla publicitaria en la estación Joe Arroyo ', src: 'https://apiwebtm.com/uploads/Tira_comercial_1_990_KB_6fb8bd7fdc.jpg' },
  { id: 'img-2', alt: 'Alquiler de locales comerciales del Portal de Soledad', src: 'https://apiwebtm.com/uploads/Tira_comercial_2_e8eebe2135.png' },
  { id: 'img-3', alt: 'Pantallas publicitarias en la estación Joe Arroyo ', src: 'https://apiwebtm.com/uploads/Tira_comercial_3_14bf4112d2.png' },
//   { id: 'img-4', src: 'https://apiwebtm.com/uploads/Blanco_y_Azul_Bokeh_Pagina_Web_Banner_3_a04bc3618a.png' },
//  { id: 'img-5', src: 'https://apiwebtm.com/uploads/Blanco_y_Azul_Bokeh_Pagina_Web_Banner_3_a04bc3618a.png' },
// { id: 'img-6', src: 'https://apiwebtm.com/uploads/Blanco_y_Azul_Bokeh_Pagina_Web_Banner_3_a04bc3618a.png' },
];

const Publicarrusel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scroll = 0;
    const speed = 1.0;

    const step = () => {
      if (!container) return;

      scroll += speed;
      if (scroll >= container.scrollWidth / 2) {
        scroll = 0;
      }

      container.scrollLeft = scroll;
      requestAnimationFrame(step);
    };

    const anim = requestAnimationFrame(step);
    return () => cancelAnimationFrame(anim);
  }, []);

  // duplicamos imágenes para efecto de bucle infinito
  const imagesLoop = [...IMAGENES, ...IMAGENES.map((img, i) => ({
    ...img,
    id: `${img.id}-dup-${i}`,
  }))];

  return (
    <div className="publicidad-carrusel-container" ref={containerRef}>
      <div className="publicidad-carrusel-track">
        {imagesLoop.map((img) => (
          <div key={img.id} className="publicidad-carrusel-slide">
             <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publicarrusel;
