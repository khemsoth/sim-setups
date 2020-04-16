module.exports = function(sequelize, DataTypes) {

const Car = sequelize.define('Car', {
  make: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  iracing: {
    type: DataTypes.BOOLEAN
  },
  acc: {
    type: DataTypes.BOOLEAN
  },
  assettoCorsa: {
    type: DataTypes.BOOLEAN
  },
  raceroom: {
    type: DataTypes.BOOLEAN
  },
})
return Car;
}




