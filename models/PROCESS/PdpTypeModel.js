const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const PowerTypeModels = sequelize.define('pdp_type',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      type_name:{
        type:DataTypes.STRING(255),
        defaultValue:null
      },
});


    PowerTypeModels.sync(    {alter:true}   );
    module.exports = PowerTypeModels;

