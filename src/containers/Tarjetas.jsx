import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import '../styles/components/Tarjetas.css';

// eslint-disable-next-line arrow-body-style
const Tarjetas = () => {
  const [tarj, setTarj] = useState([]);
  const AP = `https://apiwebtm.com/tarjetas`;

  useEffect(async () => {
    /* Get Api  */
    const restarj = await axios.get(AP);
    /* setNoti(resnoti.data.data.slice(start, limit)); */
    setTarj(restarj.data);
    /*  console.log(restarj.data[0]); */

    /* console.log(restarj.data.img[0]);  */
  }, []);

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
                src="https://apiwebtm.com/uploads/BAQANA_TM_7c5d8f34d7.jpg"
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
                   Tarjeta conmemorativa a los 210 años de " Barranquilla, Ciudad Baqana " 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {tarj
            ? tarj.map((tarjs) => (
                <div className="col cardMini" key={tarjs.id}>
                  <div className="card h-100 ">
                    <img
                      src={`https://apiwebtm.com${tarjs.url}`}
                      className="card-img-top img-fluid"
                      alt="Tarjeta Transmetro"
                    />
                    <div className="card-body">
                      <p className="card-title fw-bold">
                        Tarjeta con diseño artístico.
                      </p>

                      <p className="card-text">
                        <ReactMarkdown escapeHtml={false}>
                          {tarjs.descripcion}
                        </ReactMarkdown>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </>
  );
};

export default Tarjetas;
