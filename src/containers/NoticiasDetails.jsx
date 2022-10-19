/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import '../styles/components/NoticiasDetails.css';

// eslint-disable-next-line arrow-body-style

const NoticiasDetails = () => {
  const { noticiasId } = useParams();

  const [notic, setNotic] = useState([]);
  const AP = `https://apiwebtm.com/noticias?slug=${noticiasId}`;
  /* const AP = `http://34.125.209.125/api/noticias?filters[slug][$eq]=${noticiasId}`; */
  /* console.log(AP); */
  useEffect(async () => {
    const resnoti = await axios(AP);
    setNotic(resnoti.data[0]);
    /* console.log(resnoti.data); */
  }, [noticiasId]);
  /* console.log(notic); */
  return (
    <div className=" container newsview" key={notic.id} id="noti">
      <div className="newsviewtitlesection">
        <div className="text-center newsviewtitle ">
          <h1>{notic.title}</h1>
        </div>
        <center className="newsviewdetails">
          <span style={{ flex: '1', color: '#002856' }}>
            Fecha: <span>{notic.date}</span>
          </span>
        </center>
        {/* <div className="container" style={{ width: '500px' }}>
            <img
              className="card-img-top cd"
              src={`https://apiwebtm.com${notic.url}`}
              alt={notic.alt}
            />
          </div> */}
        <div className="card mb-3 " style={{ border: 'none' }}>
          <img
            src={`https://apiwebtm.com${notic.url}`}
            className="card-img-top img-fluid"
            alt={notic.alt}
          />
          <div className="card-body">
            <ReactMarkdown className="newsviewbody" escapeHtml={false}>
              {notic.Content}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      <center className="backNoti">
        <a
          href="/noticias/#comunicados-prensa"
          role="button"
          className="btn btn-outline-primary"
          alt="Ver Noticia"
        >
          Ir a Noticias
        </a>
      </center>
    </div>
  );
};

export default NoticiasDetails;
