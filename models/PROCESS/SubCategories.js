const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config')
 
const subCategoryModel = sequelize.define('subCategory',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      category:{
        type:DataTypes.STRING(255),
        defaultValue:null,
        allowNull:true
      },
      subcategory:{
        type:DataTypes.STRING(255),
        defaultValue:null,
        allowNull:true
      },

});


    /* subCategoryModel.sync(    {alter:true}   );  */
    module.exports = subCategoryModel;

