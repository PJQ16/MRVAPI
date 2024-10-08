const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const DetailModel = sequelize.define('detail',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    desciption: {
        type: DataTypes.STRING(255),
        defaultValue:null
      },
    unit:{
        type: DataTypes.STRING(50),
        defaultValue:null
    },
    plan_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null
    },
    categories_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null
    },
    periods_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null
    },
    user_plan_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null
    },
    user_input_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null
    },
    user_verify_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null
    },
    sub_target_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null
    },
    capex:{
        type: DataTypes.DECIMAL(20,2),
        defaultValue:null
    },
    opex:{
        type: DataTypes.DECIMAL(20,2),
        defaultValue:null
    },
    opex_ratio:{
        type: DataTypes.DECIMAL(20,2),
        defaultValue:null
    },
    social_investment:{
        type: DataTypes.DECIMAL(20,2),
        defaultValue:null
    },
    social_income:{
        type: DataTypes.DECIMAL(20,2),
        defaultValue:null
    },
    
    ghg_co2:{
        type: DataTypes.DECIMAL(20,2),
        defaultValue:null
    }
});


  /*   DetailModel.sync(      {alter:true}     ); */
    module.exports = DetailModel;

