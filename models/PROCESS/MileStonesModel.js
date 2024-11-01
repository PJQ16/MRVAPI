const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const MileStoneModel = sequelize.define('milestone',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    period_type:{
        type:DataTypes.STRING(50),
        defaultValue:null
      },
    actual_year: {
        type: DataTypes.INTEGER(11),
        defaultValue:null
        },
    multifactor_id:{
        type: DataTypes.INTEGER(11),
        defaultValue:null
    },
    active:{
        type: DataTypes.INTEGER(11),
        defaultValue:null,
        comment:'0,1'
    },
});


   /*    MileStoneModel.sync(    {alter:true}   );    */
    module.exports = MileStoneModel;

