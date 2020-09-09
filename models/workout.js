const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutSchema = new Schema({
    
    day: {
        type: Date,
        default: Date.now,
    },

    excercises: [
        {
            type: {
                type: String,
                required: 'Excercises Type:',
            },
            
            name: {
                type: String,
                trim: true,
                required: 'Excercises Name:',
            },

            duration: {
                type: Number,
                required: 'Excercises Duration',
            },

            weight: {
                type: Number,
                default: 0,
            },

            weight: {
                type: Number,
                default: 0,
            },

            reps: {
                type: Number,
                default: 0,
            },

            sets: {
                type: Number,
                default: 0,
            },
        },
    ],
}, {
    toJSON: {
        virtuals: true,
    },
});

workoutSchema.virtual('totalDuration')
    .get(function totalDuration() {
        return this.exercises.reduce((total, exercise) => total + excercise.duration, 0);
    });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;