const { Router } = require('express');
const { getActivities, getActivitiesByDifficulty, getActivitiesByDuration, getActivitiesBySeason, getActivitiesByName, postActivity} = require('../controllers/activities')

const router = Router();

//Get all Activities
router.get('/', getActivities)

//Get all Activities
router.get('/difficulty=:difficulty', getActivitiesByDifficulty)

//Get all Activities
router.get('/duration=:duration', getActivitiesByDuration)

//Get all Activities
router.get('/season=:season', getActivitiesBySeason)

//Get all Activities
router.get('/name=:name', getActivitiesByName)

//Create Activity
router.post('/', postActivity)

module.exports = router;
