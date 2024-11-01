const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
const bcrypt = require('bcrypt');

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
    role_id:{
        type: DataTypes.INTEGER(11),
        allowNull:false
    },
    organize_id:{
        type: DataTypes.INTEGER(11),
        allowNull:false
    },
    sessionId:{
        type: DataTypes.STRING(255),
        defaultValue:null
    }
});

//กำหนดpass word ให้เป็น hash
 UserModel.beforeCreate(async (user, options) => {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
  }); 

  /*   UserModel.sync(   {alter:true}   );    */
    module.exports = UserModel;

