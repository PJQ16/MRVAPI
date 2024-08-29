
const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const Co_benefit_parameterModel = sequelize.define('co_benefit_parameter',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    year_mrv: {
        type: DataTypes.INTEGER(11),
        defaultValue:null
      },
    cobenefit_metric_id:{
        type: DataTypes.INTEGER(11),
        allowNull:false
    },
    cobenefit_name:{
        type: DataTypes.STRING(255),
       allowNull:false
    },
    new_investment:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue:0
    },
    new_employment: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue:0
      },
      new_income: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue:0
      },
    capital_community_farmer: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue:0
      },
    trading_val:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue:0
    },
    ghg_reduction:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue:0
    },
    lole_assumption_pdp:{
        type: DataTypes.DECIMAL(20,2),
        allowNull:false
    },
    ratio_ethanol_oilplan:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    ratio_biodiesel_oilplan:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    ratio_uco_saf_oilplan:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    ratio_uco_biovlsfo: {
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
      },
    imp_reduc_ethanol_oilplan:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    imp_reduc_biodiesel_oilplan:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    imp_reduc_uco_oilplan:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    imp_reduc_uco_biovlsfo_oilplan: {
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
      },
    user_id:{
        type: DataTypes.INTEGER(11),
        allowNull:false
    },
});


Co_benefit_parameterModel.sync(      {alter:true}     );
module.exports = Co_benefit_parameterModel;

