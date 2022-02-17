import { useState, useEffect } from 'react';
import axios from 'axios';
/* import initialState from '../initialState'; */

const API = 'http://localhost:1337/manual';
const API1 = 'http://localhost:1337/quests';
const API2 = 'https://apiwebtm.com/noticias';
const useFetch = () => {
  const [manual, setManual] = useState([]);
  const [quest, setQuest] = useState([]);
  const [noti, setNoti] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setManual(response.data);
    const resquest = await axios(API1);
    setQuest(resquest.data);
    const resnoti = await axios(API2);
    setNoti(resnoti.data);
  }, []);

  return {
    manual,
    quest,
    noti,
  };
};

export default useFetch;
