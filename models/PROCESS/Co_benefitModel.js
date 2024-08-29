const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const Co_benefitModel = sequelize.define('co_benefit',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    cobenefit_year: {
        type: DataTypes.INTEGER(11),
        allowNull:false
      },
    cobenefit_plan:{
        type: DataTypes.INTEGER(11),
        allowNull:false
    },
    passive_income:{
        type: DataTypes.DECIMAL(20,2),
        allowNull:false
    },
    employment:{
        type: DataTypes.DECIMAL(20,2),
        allowNull:false
    },
    generate_income:{
        type: DataTypes.DECIMAL(20,2),
        allowNull:false
    },
    ghg_reduction:{
        type: DataTypes.DECIMAL(20,2),
        allowNull:false
    },
    economic_cobenefit:{
        type: DataTypes.DECIMAL(20,2),
        allowNull:false
    },
    social_cobenefit:{
        type: DataTypes.DECIMAL(20,2),
        allowNull:false
    },
    environment_cobenefit:{
        type: DataTypes.DECIMAL(20,2),
        allowNull:false
    },
    user_id:{
        type: DataTypes.INTEGER(11),
       allowNull:false
    }
});


    Co_benefitModel.sync(      {alter:true}     );
    module.exports = Co_benefitModel;

