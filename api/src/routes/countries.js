const { Router } = require('express');
const { getAll, getCountryById, getCountryByName, getCountriesByPopulation, getCountriesByContinent } = require('../controllers/countries')


const router = Router();

//Get all Countries
router.get('/all', getAll)

//Get country by Name
router.get('/:name', getCountryByName)

//Get country by ID
router.get('/:id', getCountryById)

//Get Countries By Continent
router.get('/all/continent/:continent', getCountriesByContinent)

//Get countries more or equal population to the enter number
router.get('/all/population/:population', getCountriesByPopulation)

module.exports = router;
