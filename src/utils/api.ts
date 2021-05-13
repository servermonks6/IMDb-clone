import axios from 'axios';
const baseUrl =
  'https://imdb-internet-movie-database-unofficial.p.rapidapi.com';

export function getsearchdata(keyword: string) {
  console.log('calling get api.....');
  return axios.get(`${baseUrl}/search/${keyword}`, {
    headers: {
      'x-rapidapi-key': '3e20e0658dmsh845965e62924feep1352a2jsn6131ea803460',
      'x-rapidapi-host':
        'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      useQueryString: true,
    },
  });
}

export function getmovieDetails(id: string) {
  console.log('calling get api.....');
  return axios.get(`${baseUrl}/film/${id}`, {
    headers: {
      'x-rapidapi-key': '3e20e0658dmsh845965e62924feep1352a2jsn6131ea803460',
      'x-rapidapi-host':
        'imdb-internet-movie-database-unofficial.p.rapidapi.com',
    },
  });
}
