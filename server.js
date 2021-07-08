const express = require('express')
const app = express()
const port = process.env.PORT||3000
const connect_db= require('./connect.js')
const dotenv= require('dotenv')
const path= require('path')
const {addWorkout, getWorkouts, addExercise, getRange}= require('./controllers.js')


dotenv.config()
connect_db()
app.use(express.static(path.join(__dirname, './public')))
app.use(express.json())


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public'))
})

app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, './public/exercise.html'))
  })
 app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, './public/stats.html'))
  }) 

app.post('/api/workouts', addWorkout)
app.get('/api/workouts', getWorkouts)
app.put('/api/workouts/:id', addExercise)
app.get('/api/workouts/range', getRange)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})