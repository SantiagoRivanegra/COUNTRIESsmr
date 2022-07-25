const { Router } = require('express');
const { getAll, getCountryById, getCountryByNameOrContinent } = require('../controllers/countries')


const router = Router();



//Get all Countries
router.get('/all', getAll)

//Get country by ID
router.get('/:id', getCountryById)

//Get country by Name or Continent
router.get('', getCountryByNameOrContinent)


module.exports = router;
