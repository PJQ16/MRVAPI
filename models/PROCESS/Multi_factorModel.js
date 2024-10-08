const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const Multi_factorModel = sequelize.define('multi_factor',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    enocomy:{
        type:DataTypes.FLOAT(20,2),
        defaultValue:null,
        allowNull:true
      },
    social: {
            type: DataTypes.DECIMAL(10,2),
            defaultValue:null,
            allowNull:true
        },
    scc:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue:null,
        allowNull:true
    }
});


    Multi_factorModel.sync(    {alter:true}   );
    module.exports = Multi_factorModel;

