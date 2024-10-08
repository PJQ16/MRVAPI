const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const SubTargetModel = sequelize.define('subTarget',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      sub_target_name:{
        type:DataTypes.STRING(255),
        defaultValue:null,
        allowNull:true
      },
      target_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null,
        allowNull:true
      },
      description:{
        type: DataTypes.STRING(255),
        defaultValue:null,
        allowNull:true
      },
      milestone_period_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null,
        allowNull:true
      },
});


   /*  SubTargetModel.sync(    {alter:true}   ); */
    module.exports = SubTargetModel;

