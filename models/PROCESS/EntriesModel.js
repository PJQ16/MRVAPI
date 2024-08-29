const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const EntriesModel = sequelize.define('entries',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    metric_id: {
        type: DataTypes.INTEGER(11),
        defaultValue:null
      },
    year_mrv:{
        type: DataTypes.INTEGER(4),
        defaultValue:null
    },
    jan_data:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    feb_data:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    mar_data:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    apr_data:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    may_data:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    june_data:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    july_data:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    aug_data:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    sep_data:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    oct_data:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    nov_data:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    dec_data:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    
    plan:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue:0
    },
    result: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue:0
      },
    oilplan_using: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue:0
      },
    oilplan_pricing:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue:0
    },
    oilplan_percentage:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue:0
    },
    investment_value:{
        type: DataTypes.DECIMAL(20,2),
        allowNull:false
    },
    employment:{
        type: DataTypes.DECIMAL(10,2),
       allowNull:false
    },
    position:{
        type: DataTypes.DECIMAL(10,2),
       allowNull:false
    },
    user_id:{
        type: DataTypes.INTEGER(11),
       defaultValue:null
    }
});


    EntriesModel.sync(      {alter:true}     );
    module.exports = EntriesModel;

