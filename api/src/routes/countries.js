const { Router } = require('express');
const { getAll, getCountryById, getCountryByName } = require('../controllers/countries')


const router = Router();



//Get country by name
router.get('', getCountryByName)
// router.get('', async (req, res) => {
//   const { name } = req.query
//   const allCountries = await getAll()
//   if(name){
//     let countryName = allCountries.filter(c => c.nameCommon.toLowerCase().includes(name.toLowerCase()))
//     countryName.length ? 
//     res.status(200).send(countryName) :
//     res.status(404).send('Country not found')
//   }
// })

//Get all countries
router.get('/all', getAll)

//Get country by ID
router.get('/:id', getCountryById)

module.exports = router;
