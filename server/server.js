const express = require('express')
const app = express()
const port = 3000
const connect_db= require('./connect.js')
const dotenv= require('dotenv')
const path= require('path')
const {addWorkout, getWorkouts, addExercise}= require('./controllers.js')


dotenv.config()
connect_db()
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
  })
 app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
  }) 

app.post('/api/workouts', addWorkout)
app.get('/api/workouts', getWorkouts)
app.put('/api/workouts/:id', addExercise)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})