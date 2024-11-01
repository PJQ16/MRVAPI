const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const UserPlanModel = sequelize.define('userPlan',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      user_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null,
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


   /*  UserPlanModel.sync(    {alter:true}   );  */
    module.exports = UserPlanModel;

