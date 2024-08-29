const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const RoleModel = sequelize.define('role',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    role_name:{
        type: DataTypes.STRING(255),
        unique:true,
        defaultValue:null
    }
});


    RoleModel.sync(   {alter:true}     );
    module.exports = RoleModel;

