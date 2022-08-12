const { Router } = require('express');
const { getAll, getCountryById, getCountryByName, getCountriesByPopulation, getCountriesByContinent, getCountriesByActivity } = require('../controllers/countries')


const router = Router();

//Get all Countries
router.get('/all', getAll)

//Get country by Name
router.get('/name/:name', getCountryByName)

//Get country by ID
router.get('/id/:id', getCountryById)

//Get Countries By Continent
router.get('/all/continent/:continent', getCountriesByContinent)

//Get countries more or equal population to the enter number
router.get('/all/population/:population', getCountriesByPopulation)

//Get countries more or equal population to the enter number
router.get('/activity/:activity', getCountriesByActivity)

module.exports = router;
