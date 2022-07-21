const { Router } = require('express');
const { getDbCountries, getCountryById } = require('../controllers/countries')


const router = Router();



//Get country by name
router.get('', async (req, res) => {
  const { name } = req.query
  const allCountries = await getAllCountries()
  if(name){
    let countryName = allCountries.filter(c => c.nameCommon.toLowerCase().includes(name.toLowerCase()))
    countryName.length ? 
    res.status(200).send(countryName) :
    res.status(404).send('Country not found')
  }
})


//Get all countries
// router.get('/all', async (req, res) => {
//   const allCountries = await getDbCountries()
//   res.status(200).send(allCountries)
// })

router.get('/all', getDbCountries)

//Get country by ID
router.get('/:id', getCountryById)
//Get country by Name
//router.get('/:name', getCountryByName)
//Get country by Continent
//router.get('/:continent', getCountriesByContinent)

module.exports = router;
