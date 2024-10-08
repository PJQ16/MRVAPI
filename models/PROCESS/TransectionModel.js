const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const TransectionModel = sequelize.define('transection',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      milestone_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null,
        allowNull:true
      },
      detail_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null,
        allowNull:true
      },
      plan_value:{
        type: DataTypes.FLOAT(20,2),
        defaultValue:null,
        allowNull:true
      },
      jan_val:{
        type: DataTypes.DECIMAL(20,0),
        defaultValue:null,
        allowNull:true
      },
      feb_val: {
        type: DataTypes.DECIMAL(20,0),
        defaultValue:null,
        allowNull:true
      },
      mar_val:{
        type: DataTypes.DECIMAL(20,0),
        defaultValue:null,
        allowNull:true
      },
      apr_val:{
        type: DataTypes.DECIMAL(20,0),
        defaultValue:null,
        allowNull:true
      },
      may_val:{
        type: DataTypes.DECIMAL(20,0),
        defaultValue:null,
        allowNull:true
      },
      jun_val:{
        type: DataTypes.DECIMAL(20,0),
        defaultValue:null,
        allowNull:true
      },
      jul_val:{
        type: DataTypes.DECIMAL(20,0),
        defaultValue:null,
        allowNull:true
      },
      aug_val: {
        type: DataTypes.DECIMAL(20,0),
        defaultValue:null,
        allowNull:true
      },
      sep_val:{
        type: DataTypes.DECIMAL(20,0),
        defaultValue:null,
        allowNull:true
      },
      oct_val:{
        type: DataTypes.DECIMAL(20,0),
        defaultValue:null,
        allowNull:true
      },
      nov_val:{
        type: DataTypes.DECIMAL(20,0),
        defaultValue:null,
        allowNull:true
      },
      dec_val:{
        type: DataTypes.DECIMAL(20,0),
        defaultValue:null,
        allowNull:true
      },
      actual_value: {
        type: DataTypes.FLOAT(20,2),
        defaultValue:null,
        allowNull:true
      },
      verify_status:{
        type: DataTypes.INTEGER(11),
        defaultValue:0,
        allowNull:false
      }
});


   /*  TransectionModel.sync(    {alter:true}   ); */
    module.exports = TransectionModel   ;

