
module.exports = (sequelize, type) => {
  return sequelize.define('Events', {
    id: {
      type: type.STRING,
      primaryKey: true
    },
    date: {
      type: type.STRING,
      allowNull: false
    },
    title: {
      type: type.STRING
    },
    startTime: {
      type: type.STRING,
      allowNull: false
    },
    endTime: {
      type: type.STRING,
      allowNull: false
    },
    text: {
      type: type.STRING,
    },
  })
}