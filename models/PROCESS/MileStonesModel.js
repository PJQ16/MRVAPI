const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const MileStoneModels = sequelize.define('milestone',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      first_year:{
        type:DataTypes.INTEGER(11),
        allowNull:false
      },
      last_year: {
            type: DataTypes.INTEGER(11),
            defaultValue:null
        },
    active_year:{
        type: DataTypes.INTEGER(11),
        defaultValue:null
    },
    note:{
        type: DataTypes.STRING(255),
        defaultValue:null
    },
    status:{
        type: DataTypes.STRING(255),
        defaultValue:null
    }
});


    MileStoneModels.sync(    {alter:true}   );
    module.exports = MileStoneModels;

