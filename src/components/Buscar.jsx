import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/Buscar.css';

/* import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close"; */

const Buscar = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const [noti, setNoti] = useState([]);

  const AP = `https://apiwebtm.com/noticias`;
  useEffect(async () => {
    const resnoti = await axios.get(AP);
    setNoti(resnoti.data);
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = noti.filter((value) =>
      value.title.toLowerCase().includes(searchWord.toLowerCase())
    );

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  /*   const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  }; */

  return (
    <div className="search ">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar"
          value={wordEntered}
          onChange={handleFilter}
        />
        {/*  <i className="fa fa-search" aria-hidden="true" /> */}
        <div className="btn btn-outline-success" type="submit">
          <i className="fa fa-search" aria-hidden="true" />
        </div>
        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <i className="fa fa-search" aria-hidden="true" />
          ) : (
            <i
              className="fa fa-close"
              aria-hidden="true"
              id="clearBtn"
              onClick={clearInput}
            />
          )}
        </div> */}
      </form>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value) => (
            <a
              className="dataItem"
              href={`/noticias/${value.slug}/#noti`}
              target="_blank"
              rel="noreferrer"
              key={noti.id}
            >
              <p>{value.title}... </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Buscar;
