const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const MrvModel = sequelize.define('mrv',{
    year_mrv: {
        type: DataTypes.INTEGER(4),
        primaryKey:true,
        autoIncrement:false,
      },
    active: {
        type: DataTypes.TINYINT(1),
        defaultValue:null
      },
    user_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null
    }
});


    MrvModel.sync(      {alter:true}      );
    module.exports = MrvModel;

