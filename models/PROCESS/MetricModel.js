const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const MetricModel = sequelize.define('metric',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    plan_id:{
        type: DataTypes.INTEGER(11),
        allowNull:false
      },
    description:{
        type: DataTypes.STRING(255),
        defaultValue:null
    },
    unit:{
        type: DataTypes.STRING(255),
        defaultValue:null
    },
    type_of_period:{
        type: DataTypes.TINYINT(1),
        defaultValue:null
    },
    organization_id1:{
        type: DataTypes.TINYINT(2),
        defaultValue:null
    },
    organization_id2:{
        type: DataTypes.TINYINT(2),
        defaultValue:null
    },
    cobenefit_active_id:{
        type: DataTypes.TINYINT(2),
        defaultValue:null
    },
    user_id:{
        type: DataTypes.DECIMAL(10),
        defaultValue:null
    },
});


    MetricModel.sync(     {alter:true}     );
    module.exports = MetricModel;

