const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const { sequelize } = require('../sequelize');

//Get all
router.get('/', async (req, res) => {
  try {
    sequelize.query("SELECT * FROM users").then(users => {
      res.send(users)
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


//Get One
router.get('/:id', (req, res) => {
  try {
    sequelize.query("SELECT * FROM users").then(users => {
      res.send(users)
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//Add
router.post('/', (req, res) => {

})

//Update
router.put('/:id', (req, res) => {

})

//Delete
router.delete('/:id', (req, res) => {

})

module.exports = router