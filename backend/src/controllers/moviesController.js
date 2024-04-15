// importation de la fonction getPopularMovies
const getPopularMovies = require('../services/movieService');

// export du middleware getAllMovies pour obtenir tous les films populaires trié par ordre decroissant (cf PDF)
exports.getAllMovies = async (req, res, next) => {
  // extraction du numéro de page depuis la requête
  const page = req.query.page || 1; 

  try {
    // appel du service
    const movies = await getPopularMovies(page);
    
    // envoi de la liste des films récupérés.
    res.json(movies);
  } catch (err) {
    // passage de l'erreur au middleware
    next(err);
  }
};
