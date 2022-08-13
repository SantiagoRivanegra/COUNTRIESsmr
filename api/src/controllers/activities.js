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

/* Activities by Difficulty */
const getActivitiesByDifficulty = async (req, res) => {
  const { difficulty } = req.params
  try {
    let allActivities = await Activity.findAll({
      include :{model: Country,
                attributes: ['nameCommon'],
                through: {attributes: []}}
    })
    if(difficulty === 'Todas' || difficulty === 'All'){
      res.status(200).send(allActivities)
    } else {
      let diffActivities = allActivities.filter(a => a.difficulty === difficulty)
      diffActivities.length ? 
      res.status(200).send(diffActivities) :
      res.status(404).send('Activities not found')
    }
  } catch (error) {
    console.log(error + ' GetByDiffControllerActivity')    
  }
}

/* Activities by Season */
//Hacer dinamico el Season[i], Tiene que haber valores en todas las posiciones para que no rompa
const getActivitiesBySeason = async (req, res) => {
  const { season } = req.params
  try {
    let allActivities = await Activity.findAll({
      include :{model: Country,
                attributes: ['nameCommon'],
                through: {attributes: []}}
    })
    if(season === 'Todas' || season === 'All'){
      res.status(200).send(allActivities)
    } else {
      let seasonActivities = allActivities.filter(a => a.season[0].toLowerCase().includes(season.toLowerCase()))
      seasonActivities.length ? 
      res.status(200).send(seasonActivities) :
      res.status(404).send('Activities not found')
    }
  } catch (error) {
    console.log(error + ' GetBySeasonControllerActivity')    
  }
}

/* Activities by Duration */
const getActivitiesByDuration  = async (req, res) => {
  const { duration } = req.params
  try {
    let allActivities = await Activity.findAll({
      include :{model: Country,
                attributes: ['nameCommon'],
                through: {attributes: []}}
    })
    if(duration === 'Todas' || duration === 'All'){
      res.status(200).send(allActivities)
    } else {
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

/* Activities by Name */
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

/* Activities by Id */
const getActivityById = async (req, res) => {
  const {id} = req.params
  try {
    const activityId = await Activity.findOne({where: {id: id},
      include: {model: Country,
                attributes: ['nameCommon']}
    })
      activityId ? res.status(200).json(activityId) : res.status(404).send('Nope')
    }
     catch (error) {
    console.log(error)
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


/* Delete activity */
const deleteActivity = async (req, res) => {
  const { id } = req.params
  try {
    await Activity.destroy({
      where: { id: id}
    })
    return res.status(200).send(`Activity ${id} has been deleted`)
  } catch (error) {
    console.log(error + ' DeleteAcivitiesControllerActivity')
    }
}

module.exports = {
  getActivities,
  postActivity,
  getActivitiesByDifficulty, 
  getActivitiesByDuration, 
  getActivitiesBySeason,
  getActivityById, 
  getActivitiesByName,
  deleteActivity
}