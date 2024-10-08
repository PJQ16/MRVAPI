const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const VerifyModel = sequelize.define('verify',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      year_verify:{
        type: DataTypes.INTEGER(11),
        allowNull:true,
        defaultValue:null
      },
      active:{
        type:DataTypes.STRING(255),
        allowNull:true,
        defaultValue:null
      },
});


    /* VerifyModel.sync(    {alter:true}   ); */
    module.exports = VerifyModel;

