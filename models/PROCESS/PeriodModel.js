const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const PeriodModel = sequelize.define('period',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      period_type:{
        type:DataTypes.STRING(50),
        allowNull:true,
        defaultValue:null
      },
});


   /*  PeriodModel.sync(    {alter:true}   ); */
    module.exports = PeriodModel;

