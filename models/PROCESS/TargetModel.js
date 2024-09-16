const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const TargetModels = sequelize.define('target',{
    target_id: {
        type: DataTypes.STRING(10),
        primaryKey:true,
      },
      target_name:{
        type:DataTypes.STRING(255),
        defaultValue:null,
        comment:'ชื่อเป้าหมายย่อย'
      },
      sub_target_name:{
        type:DataTypes.STRING(255),
        defaultValue:null,
        comment:'ชื่อแผนย่อย'
      },
      target_operator: {
        type:DataTypes.STRING(255),
        defaultValue:null,
        comment:'มากกว่า,น้อยกว่า,เท่ากับ'
      },
      milestone_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null,
        comment:'milestone ระยะเวลา'
      },
      kpi_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null
      },
});


    TargetModels.sync(    {alter:true}   );
    module.exports = TargetModels;

