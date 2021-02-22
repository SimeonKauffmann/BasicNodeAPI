require('dotenv').config()

const express = require('express')
const app = express()
const { run } = require('./sequelize');

run().catch(error => console.log(error.stack))

app.use(express.json())

const usersRouter = require('./routes/users')
const eventsRouter = require('./routes/events')


app.use('/users', usersRouter)
app.use('/events', eventsRouter)

// app.listen(3000, '98.128.166.127', () => console.log('Server Started'))

app.listen(3000, () => console.log('Server Started'))



