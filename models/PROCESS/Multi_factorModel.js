const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const Multi_factorModel = sequelize.define('multi_factor',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    multi_factor_production: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue:null
      },
    multi_factor_labor:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue:null
    },
    multi_factor_carbon:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue:null
    },
    user_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null
    }
});


    Multi_factorModel.sync(    {alter:true}   );
    module.exports = Multi_factorModel;

