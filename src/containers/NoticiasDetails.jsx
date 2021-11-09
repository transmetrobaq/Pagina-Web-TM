/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../styles/components/NoticiasDetails.css';

// eslint-disable-next-line arrow-body-style

const NoticiasDetails = () => {
  const { noticiasId } = useParams();

  const [notic, setNotic] = useState([]);
  const AP = `http://localhost:1337/noticias?slug=${noticiasId}`;

  useEffect(async () => {
    const resnoti = await axios(AP);
    setNotic(resnoti.data[0]);
  }, [noticiasId]);
  console.log(notic);
  return (
    <div className=" container newsview">
      {/* <div className="newsviewimg" key={notic.id}>
        <img src={`http://localhost:1337${notic.image.url}`} alt={notic.alt} />
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
        <div className="newsviewbody">{notic.content}</div>
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
