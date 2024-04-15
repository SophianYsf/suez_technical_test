// movies.js

//gestion des routes movies

const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController.js');

router.get('/', moviesController.getAllMovies);

module.exports = router;
