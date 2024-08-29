const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const UserModel = sequelize.define('user',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    fisrt_name:{
        type: DataTypes.STRING(255),
        allowNull:false
    },
    last_name:{
        type: DataTypes.STRING(255),
        allowNull:false
    },
    email:{
        type: DataTypes.STRING(255),
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING(255),
        allowNull:false
    },
    address:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    role_id:{
        type: DataTypes.INTEGER(11),
        allowNull:false
    },
    organize_id:{
        type: DataTypes.INTEGER(11),
        allowNull:false
    }
});


    UserModel.sync(   {alter:true}    );
    module.exports = UserModel;

