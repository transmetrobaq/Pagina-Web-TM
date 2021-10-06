import { useState, useEffect } from 'react';
import axios from 'axios';
/* import initialState from '../initialState'; */

const API = 'http://localhost:1337/preguntas';

const useFetch = () => {
  const [preg, setPreg] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setPreg(response.data);
  }, []);

  return {
    preg,
  };
};

export default useFetch;
