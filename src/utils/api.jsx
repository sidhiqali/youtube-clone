import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
  params: {
    hl: 'en',
    gl: 'US',
  },
  headers: {
    'X-RapidAPI-Key': '6d06f16d50msh59ddd9f912f6dd0p10a152jsnc20a21146dd4',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchDataFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
