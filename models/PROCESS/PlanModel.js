const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const PlanModel = sequelize.define('plan',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    name: {
        type: DataTypes.STRING(255),
        defaultValue:null
      },
});


    PlanModel.sync(     {alter:true}    );
    module.exports = PlanModel;

