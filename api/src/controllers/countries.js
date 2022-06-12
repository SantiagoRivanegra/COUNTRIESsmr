const axios = require('axios')
const {Country, Activity} = require('../db')

const getApiCountries = async () =>{
  try {
    const apiUrl = await axios('https://restcountries.com/v3.1/all');
    const apiInfo = await apiUrl.data.map(c => {
      
      return {
        id: c.cca3,
        nameOfficial: c.name.official,
        nameCommon: c.name.common,
        flag: c.flags.png,
        currencyName: c.currencies, //objeto.'nombredelamoneda'.symbol
        currencySymbol: c.currencies, //objeto.'nombredelamoneda'.symbol
        capital: c.capital ? c.capital[0] : 'Capital not found',
        continent: c.continents[0],
        region: c.region,
        subRegion: c.subregion,
        languages: c.languages, //objeto
        area: c.area,
        population: c.population,
        coatOfArms: c.coatOfArms.png ? c.coatOfArms.png : 'This country has not coat of arms',
        timeZones: c.timezones
      }
    })
    return apiInfo
  } catch (error) {
    console.log(error + 'Api failure')
  }
}

const getDbCountries = async () => {
  return await Country.findAll({
    include: {model: Activity,
              attribute: ['name', 'duration', 'difficulty', 'description'],
              through: {attributes: []}
            }
  })
}

const getAllCountries = async () => {
  const apiInfo = await getApiCountries()
  const dbInfo = await getDbCountries()
  infoTotal = apiInfo.concat(dbInfo)
  return infoTotal
}

module.exports = {
  getAllCountries,
}