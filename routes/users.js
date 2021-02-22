const express = require('express')
const router = express.Router()
const { Users } = require('../sequelize');

//Get all users
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
    Users.findAll({
      where: { userId: req.params.id }
    }).then(users => res.json(users))
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
  try {
    Users.destroy({
      where: {
        id: req.params.id
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router