module.exports = function(sequelize, DataTypes) {

const Track = sequelize.define('Track', {
  name: {
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
return Track;
}




