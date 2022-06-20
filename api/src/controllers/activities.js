const { Country, Activity } = require('../db')

/* Get all activities */
const getActivities = async (req, res, next) => {
// try {
//   let allActivities = await Activity.findAll({
//     include :{model: Country,
//               attributes: ['nameCommon'],
//               through: {attributes: []}}
//   })
//   return res.status(200).json(allActivities)
// } catch (error) {
//   next(error)
// }

try {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.limit) || 4;
  const skip = (page - 1) * pageSize;

  const {count, rows} = await Activity.findAndCountAll(
    {
    include :{model: Country,
              attributes: ['nameCommon'],
              through: {attributes: []}
      },
      limit: pageSize, 
      offset: skip,
    }
  )

  const total = count
  
  const pages = Math.ceil(total / pageSize);

  if (page > pages) {
    return res.status(404).json({
      status: "fail",
      message: "No page found",
    });
  }

  const result = await rows;

  res.status(200).json({
    status: "success",
    count: result.length,
    page,
    pages,
    data: result,
  });
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