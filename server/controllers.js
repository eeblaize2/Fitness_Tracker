const Workout= require('./model.js')
const dayjs= require('dayjs')

const addWorkout= async(req,res)=>{
    const newWorkout= await new Workout({
        day:new Date()
    })
    const createdWorkout= await newWorkout.save()
    res.status(201).json(createdWorkout)
}
const getWorkouts= async(req,res)=>{
    const workouts= await Workout.find({})
    const updatedWorkouts= workouts.map((workout)=>{
        const totalDuration= workout.exercises.reduce((total, currentValue)=> total+currentValue.duration,0)
        workout.totalDuration= totalDuration
        return workout
    })
    res.status(200).json(updatedWorkouts)
}

const addExercise= async(req,res)=>{
    const newExercise= req.body
    const workout= await Workout.findById(req.params.id)
    if(!workout){
        res.status(404).send('workout not found')
    }
     workout.exercises.push(newExercise)
     await workout.save()
     res.status(201).json(workout)

}

const getRange= async(req,res)=>{
    const sevenDays= dayjs().subtract(7,'day').format('MM/DD/YYYY')
    const workouts= await Workout.find({})
    const inRange= workouts.map(workout=>{
        const formattedDate= workout.day.toLocaleDateString()
        if(dayjs(formattedDate).isAfter(sevenDays)){
            return workout
        }
    })
   res.status(200).json(inRange)
}


module.exports={
    addWorkout, getWorkouts, addExercise, getRange
}