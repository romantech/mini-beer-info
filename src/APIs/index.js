import axios from 'axios';

const baseUrl = `https://api.punkapi.com/v2`;

export default {
  getBeers: () => {
    return axios.get(`${baseUrl}/beers`);
  },
  getSingleBeer: id => {
    return axios.get(`${baseUrl}/beers/${id}`);
  },
  getRandomBeer: () => {
    return axios.get(`${baseUrl}/beers/random`);
  },
};
