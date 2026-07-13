const express = require('express')
require('dotenv').config()
const connectDB = require('./connectDB')
const taskRoutes = require('./routes/routes')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

const PORT = process.env.PORT

connectDB()

app.use('/api', taskRoutes)

// http://localhost:4000/api/tasks - get all tasks
// http://localhost:4000/api/task/:id - get a single tasks
// http://localhost:4000/api/create - create a task
// http://localhost:4000/api/edit/:id - edit a task
// http://localhost:4000/api/delete/:id - delete a task

app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`)
})