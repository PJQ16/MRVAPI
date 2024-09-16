const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const VerifyModel = sequelize.define('verification',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      user_id: {
        type: DataTypes.INTEGER(11),
        allowNull:false
      },
    verificationToken:{
        type: DataTypes.STRING(255),
        defaultValue:null
    },
    verificationTokenExpiry:{
        type: DataTypes.DATE,
        defaultValue:null
    },
    isVerified:{
        type: DataTypes.TINYINT(1),
        defaultValue:0
    }
});


 /*    VerifyModel.sync(      {alter:true}    ); */
    module.exports = VerifyModel;

