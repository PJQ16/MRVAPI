const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const PowerDetailModels = sequelize.define('pdp_detail',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      target_id:{
        type:DataTypes.STRING(255),
        allowNull:false
      },
      pdp_type_id: {
            type: DataTypes.INTEGER(11),
            defaultValue:null
        },
    pdp_name:{
        type:DataTypes.STRING(255),
        defaultValue:null
    },
    unit_id:{
        type:DataTypes.INTEGER(11),
        defaultValue:null
    },
    user_plan:{
        type:DataTypes.INTEGER(11),
        defaultValue:null
    },
    user_res:{
        type:DataTypes.INTEGER(11),
        defaultValue:null
    },
    user_verify:{
        type:DataTypes.INTEGER(11),
        defaultValue:null
    }
});


    PowerDetailModels.sync(    {alter:true}   );
    module.exports = PowerDetailModels;

