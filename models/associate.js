// models/index.js

const sequelize = require('../connect/config');
const Co_benefitModel = require('./PROCESS/Co_benefitModel');
const DetailModel = require('./PROCESS/DetailModel');
const MileStoneModel = require('./PROCESS/MileStonesModel');
const Multi_factorModel = require('./PROCESS/Multi_factorModel');
const OutPutModel = require('./PROCESS/OutputModel');
const PeriodModel = require('./PROCESS/PeriodModel');
const PlanModel = require('./PROCESS/PlanModel');
const StaticAssumptionModel = require('./PROCESS/StaticAssumptionModel');
const subCategoryModel = require('./PROCESS/SubCategories');
const SubTargetModel = require('./PROCESS/SubTargetModel');
const TargetModel = require('./PROCESS/TargetModel');
const TransectionModel = require('./PROCESS/TransectionModel');
const VerifyModel = require('./PROCESS/VerifyModel');
const OrganizationModel = require('./USER/OrganizationModel');
const UserModel = require('./USER/UserModel');
const VerificationModel = require('./USER/VerificationModel');
const RoleModel = require('./USER/RoleModel');



// Associations


// User and Organization Associations
/* OrganizationModel.hasMany(UserModel, {
    foreignKey: 'organize_id',
    as: 'organizationUser'
});
UserModel.belongsTo(OrganizationModel, {
    foreignKey: 'organize_id',
    as: 'userOrganizations'
});

// User and Role Associations
RoleModel.hasMany(UserModel, {
    foreignKey: 'role_id',
     as: 'roleUser'
   
});
UserModel.belongsTo(RoleModel, {
    foreignKey: 'role_id',
    as: 'userRoles'
});

// Verification and User Associations
UserModel.hasMany(VerificationModel, {
    foreignKey: 'user_id',
    as: 'userVerification'
});
VerificationModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
     as: 'verificationUsers'
});  */

 
// Export models and sequelize instance
module.exports = {
    sequelize,
    Co_benefitModel,
    DetailModel,
    MileStoneModel,
    Multi_factorModel, 
    OutPutModel,
    PeriodModel,
    PlanModel,
    StaticAssumptionModel,
    subCategoryModel,
    SubTargetModel,
    TargetModel,
    TransectionModel, 
    VerifyModel,
    OrganizationModel, 
    UserModel,
    VerificationModel,
    RoleModel 
};
