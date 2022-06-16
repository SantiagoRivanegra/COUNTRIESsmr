const { Country, Activity, Season } = require('../db')

/* Get all activities */
const getActivities = async (req, res, next) => {
try {
  let allActivities = await Activity.findAll({
    include :{model: Country,
              attributes: ['nameCommon'],
              through: {attributes: []}}
  })
  return res.status(200).json(allActivities)
} catch (error) {
  next(error)
}
}

/* Create activity */
const postActivity = async (req, res, next) => {
  const { name, description, duration, difficulty, season, countries } = req.body
  try {
    let newActivity = await Activity.create({
      name,
      description,
      duration,
      difficulty,
      season
    })
    let activityCountry = await Country.findAll({
      where:{
        nameCommon : countries
      }      
    })

    newActivity.addCountry(activityCountry)
    res.status(200).send('Actividad creada')
  } catch (error) {
    next(error)
    
  }
}

module.exports = {
  getActivities,
  postActivity
}