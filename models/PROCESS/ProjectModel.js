const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config');

const ProjectModel = sequelize.define('project',{
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true,
      },
      strategy: {
        type: DataTypes.STRING(255),
        defaultValue:null
      },
      name:{
        type: DataTypes.STRING(255),
        defaultValue:null
      },
      milestone1:{
        type: DataTypes.STRING(255),
        defaultValue:null
      },
      milestone2:{
        type: DataTypes.STRING(255),
        defaultValue:null
      },
      milestone3:{
        type: DataTypes.STRING(255),
        defaultValue:null
      },
      budget:{
        type: DataTypes.STRING(255),
        defaultValue:null
      },
      user_res:{
        type: DataTypes.STRING(255),
        defaultValue:null
      },
      plan:{
        type: DataTypes.STRING(255),
        defaultValue:null
      },
      remask:{
        type: DataTypes.STRING(255),
        defaultValue:null
      }
});


    ProjectModel.sync(      /* {alter:true}  */   );  
    module.exports = ProjectModel;

