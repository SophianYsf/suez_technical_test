const axios = require('axios');

// clé API pour accéder à l'API de TMDB
const API_KEY = '062120657f3f8ef0eecfa317732799d7';

async function getPopularMovies(page = 1) { // valeur initial pour gérer la pagination
    // URL pour accéder à l'API
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=${page}`;
  try {
    // requête HTTP GET à l'API pour récupérer les films.
    const response = await axios.get(url);
    // extraction des films
    const movies = response.data.results;
    // tri des films par popularité décroissante.
    movies.sort((a, b) => b.popularity - a.popularity);
    // return des films triés.
    return movies;
  } catch (error) {
    //gestions erreur
    console.error('Erreur lors de la récupération des films populaires:', error);
    throw error;
  }
}

module.exports = getPopularMovies;
