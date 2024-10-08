const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const CoBenefitModel = sequelize.define('CoBenefit',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    year:{
        type:DataTypes.INTEGER(11),
        defaultValue:null
    },
    plans_id:{
        type:DataTypes.INTEGER(11),
        defaultValue:null
    },
    co_benefit_economics:{
        type:DataTypes.FLOAT(20,2),
        defaultValue:null
    },
    co_benefit_social:{
        type:DataTypes.FLOAT(20,2),
        defaultValue:null
    },
    co_benefit_environment:{
        type:DataTypes.FLOAT(20,2),
        defaultValue:null
    }       
});


    CoBenefitModel.sync(      {alter:true}     ); 
    module.exports = CoBenefitModel;

