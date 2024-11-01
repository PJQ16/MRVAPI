const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const PermissionModel = sequelize.define('permission',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    permission_name:{
        type: DataTypes.STRING(255),
        allowNull:false
    }
});


   /*  PermissionModel.sync(   {alter:true}     );  */
    module.exports = PermissionModel;

