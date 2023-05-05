import axios from 'axios';


const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
  params: {
    hl: 'en',
    gl: 'IN',
  },
  headers: {
    'X-RapidAPI-Key':"b517533032msh0c2cadf8273fb28p1b8315jsn758c113e4588",
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchDataFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
