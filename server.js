require('dotenv').config()

const express = require('express')
const app = express()
const { run } = require('./sequelize');

run().catch(error => console.log(error.stack))

app.use(express.json())

const usersRouter = require('./routes/users')

app.use('/users', usersRouter)

app.listen(3000, () => console.log('Server Started'))



