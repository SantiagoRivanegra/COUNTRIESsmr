const axios = require('axios')
const {Country, Activity} = require('../db')

/* All API countries */
const getApiCountries = async () =>{
  const countryApiToDb = await Country.findAll({
    attributes: ['id', 'nameOfficial', 'nameCommon', 'flag', 'currencyName', 'currencySymbol', 'capital', 'continent', 'region', 'subRegion', 'languages', 'area', 'population', 'coatOfArms', 'timeZones']
  })

  if(!countryApiToDb.length){
  try {
    const apiUrl = await axios('https://restcountries.com/v3.1/all');
    const apiInfo = await apiUrl.data.map(c => {      

      return {
        id: c.cca3,
        nameOfficial: c.name.official,
        nameCommon: c.name.common,
        flag: c.flags.png,
        currencyName: c.currencies ?  Object.keys(c.currencies) : 'No hay currencies',
        currencySymbol: c.currencies ? Object.keys(c.currencies) : 'No hay currencies', //objeto.'nombredelamoneda'.symbol
        capital: c.capital ? c.capital[0] : 'Capital not found',
        continent: c.continents[0] ? c.continents[0] : 'Continent not found',
        region: c.region ? c.region : 'No tiene region',
        subRegion: c.subregion ? c.subregion : 'No tiene subRegion',
        languages: c.languages ? Object.keys(c.languages) : 'No tiene languages', //objeto
        area: c.area,
        population: c.population,
        coatOfArms: c.coatOfArms.png ? c.coatOfArms.png : 'This country has not coat of arms',
        timeZones: c.timezones ? c.timezones : 'No hay timeZone'
      }
    })
    await Country.bulkCreate(apiInfo)
    return apiInfo
  } catch (error) {
    console.log(error + 'Api failure')
  } 
    } else {
    return countryApiToDb
  }
}


/* All DB countries */
const getDbCountries = async (req, res) => {
  // const perPage = 10
  // const page = 2
  // const dbInfo = await Country.findAll(
  //   {skip: perPage * page, limit: perPage},
  //   {include: 
  //     {model: Activity,
  //             attribute: ['name', 'duration', 'difficulty', 'description', 'season'],
  //             through: {attributes: []}
  //           },
  // })
  // return dbInfo
  
  try {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * pageSize;

  const dbInfo = await Country.findAll(
    {
      include: 
      {model: Activity,
        attribute: ['name', 'duration', 'difficulty', 'description', 'season'],
        through: {attributes: []}
      },
      limit: pageSize, 
      offset: skip,
    }
  )

  const total = 250
  
  const pages = Math.ceil(total / pageSize);

  if (page > pages) {
    return res.status(404).json({
      status: "fail",
      message: "No page found",
    });
  }

  const result = await dbInfo;

  res.status(200).json({
    status: "success",
    count: result.length,
    page,
    pages,
    data: result,
  });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
}


// /* All API countries */
// const getAllCountries = async () => {
//   await getApiCountries()
//   return await Country.findAll({
//     limit: 1,
//     include: {model: Activity}
//   })
// }

// /* Get all countries */
// const getAll = async () => {
//   const apiCountries = await getAllCountries()
//   const dbCountries = await getDbCountries()
//    infoTotal = apiCountries.concat(dbCountries)
//   return infoTotal
// }


/* Country by ID */
const getCountryById = async (req,res) => {
  const {id} = req.params
  const ID = id.toUpperCase()
  try {
    const countryId = await Country.findOne({where: {id: ID},
      include: {model: Activity}
    })
      countryId ? res.status(200).json(countryId) : res.status(404).send('Nope countryController line 132')
    }
     catch (error) {
    console.log(error)
  }
}

module.exports = {
  getDbCountries,
  getCountryById,
}