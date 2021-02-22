const express = require('express')
const router = express.Router()
const { sequelize, queryInterface, Events } = require('../sequelize');
const { DataTypes, QueryTypes } = require('sequelize');


//Get all events
router.get('/:id', async (req, res) => {
  try {
    sequelize.query(`SELECT * FROM ${req.params.id}`, { type: QueryTypes.SELECT }).then(events => res.json(events));
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//New user events
router.get('/newuser/:id', async (req, res) => {
  try {
    queryInterface.createTable(req.params.id, {
      id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING
      },
      startTime: {
        type: DataTypes.STRING,
        allowNull: false
      },
      endTime: {
        type: DataTypes.STRING,
        allowNull: false
      },
      text: {
        type: DataTypes.STRING,
      },
    });
    res.status(200).json({ message: `new table ${req.params.id} created` })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// //Get One event
// router.get('/:userid/:eventid', (req, res) => {
//   try {
//     sequelize.query(`SELECT * FROM ${req.params.userid} WHERE id = ${eventid}`, { type: QueryTypes.SELECT }).then(events => res.json(events));
//   } catch (err) {
//     res.status(500).json({ message: err.message })
//   }
// })

//Add event
router.post('/:userid', (req, res) => {
  try {
    sequelize.query(`INSERT INTO ${req.params.userid} (id, date, startTime, endTime, title, text) VALUES ("${req.body.id}","${req.body.date}","${req.body.startTime}","${req.body.endTime}","${req.body.title}","${req.body.text}")`).then(() => res.send('done'))

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//Update
router.put('/:userid/:eventid', (req, res) => {
  try {
    sequelize.query(`UPDATE ${req.params.userid} SET date = "${req.body.date}", startTime = "${req.body.startTime}", endTime = "${req.body.endTime}", title = "${req.body.title}", text = "${req.body.text}" WHERE id = "${req.params.eventid}"`).then(() => res.send('updated'))

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//Delete
router.delete('/:userid/:eventid', (req, res) => {
  try {

    sequelize.query(`DELETE FROM ${req.params.userid} WHERE id = "${req.params.eventid}"`).then(() => res.send('deleted'))

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
