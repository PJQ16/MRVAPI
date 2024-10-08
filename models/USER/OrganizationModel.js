const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const OrganizationModel = sequelize.define('organization',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
    organization_name:{
        type: DataTypes.STRING(255),
        defaultValue:null
    }
});


/* OrganizationModel.sync(   {alter:true}    ); */
module.exports = OrganizationModel;

