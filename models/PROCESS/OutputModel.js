const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const OutputModel = sequelize.define('output',{
  id:{
      type: DataTypes.INTEGER(11),
      primaryKey:true,
      autoIncrement:true,
      },
  year: {
    type: DataTypes.INTEGER(11),
      defaultValue:null,
      allowNull:true
      },
  plans_id:{
      type: DataTypes.INTEGER(11),
      defaultValue:null,
    allowNull:true
    },
  fossil_fuel_reduction:{
    type: DataTypes.FLOAT(20,2),
    defaultValue:null,
    allowNull:true
  },
  ghg_reduction:{
    type: DataTypes.FLOAT(20,2),
    defaultValue:null,
    allowNull:true
  },
  economic_benefit:{
    type: DataTypes.FLOAT(20,2),
    defaultValue:null,
    allowNull:true
  },
  social_benefit:{
    type: DataTypes.FLOAT(20,2),
    defaultValue:null,
    allowNull:true
  }
});


    OutputModel.sync(      {alter:true}      );
    module.exports = OutputModel;

