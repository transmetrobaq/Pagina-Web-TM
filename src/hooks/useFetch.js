import { useState, useEffect } from 'react';
import axios from 'axios';
/* import initialState from '../initialState'; */

const API = 'http://localhost:1337/manual';
const API1 = 'http://localhost:1337/quests';
const useFetch = () => {
  const [manual, setManual] = useState([]);
  const [quest, setQuest] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setManual(response.data);
    const resquest = await axios(API1);
    setQuest(resquest.data);
  }, []);

  return {
    manual,
    quest,
  };
};

export default useFetch;
