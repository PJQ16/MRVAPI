const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const AssumptionModel = sequelize.define('statcAssumption',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      name:{
        type:DataTypes.STRING(255),
        allowNull:true,
        defaultValue:null
      },
      value: {
            type: DataTypes.FLOAT(20,2),
            defaultValue:null,
            allowNull:true
        },
});


    /* AssumptionModel.sync(    {alter:true}   ); */
    module.exports = AssumptionModel;

