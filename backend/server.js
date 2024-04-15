const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// middleware 
app.use(express.json());

//gestion du cors, autorisation des methodes http etc...
app.use(cors({
  origin: ['http://localhost:4200'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));


// routes
const moviesRoutes = require('./src/routes/movies');
app.use('/api/movies', moviesRoutes);

// gestion erreur middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
