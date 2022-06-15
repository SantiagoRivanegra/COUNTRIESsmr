const { Router } = require('express');
const { getAll, getCountryById } = require('../controllers/countries')


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
router.get('/all', async (__req, res) => {
  const allCountries = await getAll()
  res.status(200).send(allCountries)
})

//Get country by ID
router.get('/:id', getCountryById)

module.exports = router;
