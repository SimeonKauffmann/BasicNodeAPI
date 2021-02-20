const express = require('express')
const router = express.Router()
const { sequelize, Users } = require('../sequelize');

//Get all
router.get('/', async (req, res) => {
  try {
    Users.findAll().then(users => res.json(users))
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


//Get One
router.get('/:id', (req, res) => {
  try {


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