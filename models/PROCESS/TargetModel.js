const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const TargetModel = sequelize.define('target',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true
      },
      target_cores:{
        type:DataTypes.STRING(50),
        defaultValue:null,
      },
      description:{
        type:DataTypes.STRING(255),
        defaultValue:null,
      }
});


      /* TargetModel.sync(    {alter:true}   ); */
    module.exports = TargetModel;

