const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/api/Workouts', (req, res) => {

    db.Workout.find({})
        .then(dbWorkout => { res.json( dbWorkout ); })
        .catch(err => { res.json(err); }); 

});

router.post('/api/Workouts', ({ body }, res) => {

    db.Workout.create(body)
        .then(dbWorkout => { res.json(dbWorkout); })
        .catch(err => { res.json(dbWorkout); })

});

router.put('/apiWorkouts/id', (req,res) => {

    db.Workout.findByIdAndUpdate(

        req.params.id,
        { $push: { exercises: req.body }},
        { new: true})
            .then(dbWorkout => { res.json(dbWorkout); })
            .catch(err => { res.json(err); });
    
});

router.get('api/Workouts/range', (req, res) => {

    db.Workout.find({})
        .then(dbWorkout => { res.json(dbWorkout); })
        .catch(err => { res.json(err); });

});

module.exports = router;