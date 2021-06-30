const Workout= require('./model.js')

const addWorkout= async(req,res)=>{
    const newWorkout= await new Workout()
    const createdWorkout= await newWorkout.save()
    res.status(201).json(createdWorkout)
}
const getWorkouts= async(req,res)=>{
    const workouts= await Workout.find({})
    res.status(200).json(workouts)
}

module.exports={
    addWorkout, getWorkouts
}