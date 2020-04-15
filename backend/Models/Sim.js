module.exports = function(sequelize, DataTypes) {

const Sim = sequelize.define('Sim', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
return Sim;
}




