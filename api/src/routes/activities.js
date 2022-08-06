const { Router } = require('express');
const { getActivities, getActivitiesByDifficulty, getActivitiesByDuration, getActivitiesBySeason, getActivitiesByName, getActivityById, postActivity, deleteActivity} = require('../controllers/activities')

const router = Router();

//Get all Activities
router.get('/', getActivities)

//Get Activities By Difficulty
router.get('/difficulty=:difficulty', getActivitiesByDifficulty)

//Get Activities By Duration
router.get('/duration=:duration', getActivitiesByDuration)

//Get Activities By Season
router.get('/season=:season', getActivitiesBySeason)

//Get Activities By Name
router.get('/name=:name', getActivitiesByName)

//Get Activities By ID
router.get('/id/:id', getActivityById)

//Create Activity
router.post('/', postActivity)

//Delete Activity
router.delete('/:id', deleteActivity)

module.exports = router;
