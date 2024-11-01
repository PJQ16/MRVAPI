const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const UserVerifyModel = sequelize.define('userVerify',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      user_id:{
        type: DataTypes.INTEGER(11),
        allowNull:false,
      },
      milestone_id:{
        type:DataTypes.INTEGER(11),
        allowNull:false,
      },
      active:{
        type: DataTypes.TINYINT(1),
        defaultValue:null
      }
      
});


   /*  UserVerifyModel.sync(    {alter:true}   );  */
    module.exports = UserVerifyModel;

