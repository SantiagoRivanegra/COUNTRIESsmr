const { Country, Activity } = require('../db')

/* Get all activities */
const getActivities = async (req, res,) => {
try {
  let allActivities = await Activity.findAll({
    include :{model: Country,
              attributes: ['nameCommon'],
              through: {attributes: []}}
  })
  return res.status(200).json(allActivities)
} catch (error) {
  console.log(error + ' GetAcivitiesControllerActivity')
  }
}

const getActivitiesByDifficulty = async (req, res) => {
  const { difficulty } = req.params
  try {
    let allActivities = await Activity.findAll({
      include :{model: Country,
                attributes: ['nameCommon'],
                through: {attributes: []}}
    })
    if(difficulty){
      let diffActivities = allActivities.filter(a => a.difficulty === difficulty)
      diffActivities.length ? 
      res.status(200).send(diffActivities) :
      res.status(404).send('Activities not found')
    }
  } catch (error) {
    console.log(error + ' GetByDiffControllerActivity')    
  }
}

const getActivitiesBySeason = async (req, res) => {
  const { season } = req.params
  try {
    let allActivities = await Activity.findAll({
      include :{model: Country,
                attributes: ['nameCommon'],
                through: {attributes: []}}
    })
    if(season){
      let seasonActivities = allActivities.filter(a => a.season.toLowerCase().includes(season.toLowerCase()))
      seasonActivities.length ? 
      res.status(200).send(seasonActivities) :
      res.status(404).send('Activities not found')
    }
  } catch (error) {
    console.log(error + ' GetBySeasonControllerActivity')    
  }
}

const getActivitiesByDuration  = async (req, res) => {
  const { duration } = req.params
  try {
    let allActivities = await Activity.findAll({
      include :{model: Country,
                attributes: ['nameCommon'],
                through: {attributes: []}}
    })
    if(duration){
      dur = parseInt(duration)
      let durationActivities = allActivities.filter(a => a.duration === dur)
      durationActivities.length ? 
      res.status(200).send(durationActivities) :
      res.status(404).send('Activities not found')
    }
  } catch (error) {
    console.log(error + ' GetByDurationControllerActivity')    
  }
}

const getActivitiesByName  = async (req, res) => {
  const { name } = req.params
  try {
    let allActivities = await Activity.findAll({
      include :{model: Country,
                attributes: ['nameCommon'],
                through: {attributes: []}}
    })
    if(name){
      let nameActivities = allActivities.filter(a => a.name.toLowerCase().includes(name.toLowerCase()))
      nameActivities.length ? 
      res.status(200).send(nameActivities) :
      res.status(404).send('Activities not found')
    }
  } catch (error) {
    console.log(error + ' GetByNameControllerActivity')    
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
  postActivity,
  getActivitiesByDifficulty, 
  getActivitiesByDuration, 
  getActivitiesBySeason, 
  getActivitiesByName
}