const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const UnitModels = sequelize.define('unit',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      unit_name:{
        type:DataTypes.STRING(255),
        defaultValue:null
      },
});


    UnitModels.sync(    {alter:true}   );
    module.exports = UnitModels;

