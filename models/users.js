
module.exports = (sequelize, type) => {
  return sequelize.define('User', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: type.STRING,
      allowNull: false
    },
    userId: {
      type: type.STRING,
      allowNull: false
    },
    events: {
      type: type.STRING
    }
  })
}