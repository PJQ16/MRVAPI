const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const PowerModels = sequelize.define('pdp',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      year:{
        type:DataTypes.INTEGER(11),
        allowNull:false
      },
      pdp_detial_id: {
            type: DataTypes.INTEGER(11),
            defaultValue:null
        },
    plan:{
        type: DataTypes.FLOAT(20,2),
        defaultValue:null
    },
    result:{
        type: DataTypes.FLOAT(20,2),
        defaultValue:null
    },
    verify_status:{
        type: DataTypes.ENUM('0','1'),
        defaultValue:null
    }
});


    PowerModels.sync(    {alter:true}   );
    module.exports = PowerModels;

