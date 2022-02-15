/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
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
  console.log(notic);
  return (
    <div className=" container newsview" key={notic.id}>
      {/* <div className="newsviewimg" key={notic.id}>
        <img src={`https://apiwebtm.com${notic.url}`} alt={notic.alt} />
      </div> */}
      <div>
        <div className="newsviewtitlesection">
          <div className="newsviewtitle">
            <h1>{notic.title}</h1>
          </div>
          <div className="newsviewdetails">
            <span style={{ flex: '1', color: 'rgb(99 98 98)' }}>
              Date: <span>{notic.date}</span>
            </span>
          </div>
        </div>
        <div className="newsviewbody">{notic.Content}</div>
      </div>
      <div className="backNoti">
        <Link
          to="/noticias"
          role="button"
          className="btn btn-outline-primary"
          alt="Ver Noticia"
        >
          Ir a Noticias
        </Link>
      </div>
    </div>
  );
};

export default NoticiasDetails;
