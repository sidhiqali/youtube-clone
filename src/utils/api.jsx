import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
  params: {
    hl: 'en',
    gl: 'US',
  },
  headers: {
    'X-RapidAPI-Key': 'eea2c8dbafmsh317b9092b484614p1a1b27jsn2f0175ab7524',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchDataFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
