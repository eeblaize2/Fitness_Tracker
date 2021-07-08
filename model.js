const mongoose= require('mongoose')
//name, type, weight, sets, reps, and duration and distance
const exerciseSchema= mongoose.Schema({
    name:{type:String, required:true},
    type:{type:String, required:true},
    weight:{type:Number, required:false},
    sets:{type:Number, required:false},
    reps:{type:Number, required:false},
    duration:{type:Number, required:false},
    distance:{type:Number, required:false},

})

const workoutSchema= mongoose.Schema({
   exercises:[exerciseSchema],
    day:{type:Date},
    totalDuration:{type:Number}
})

const Workout= mongoose.model('Workout', workoutSchema)

module.exports= Workout;