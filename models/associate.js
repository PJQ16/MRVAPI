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
const UserPlanModel = require('./PROCESS/UserPlanModel');
const UserInputModel = require('./PROCESS/UserInputModel');
const UserVerifyModel = require('./PROCESS/UserVerifyModel');
const PermissionModel = require('./USER/PermissionModel');
const RolePermissionModel = require('./USER/RolePermissionModel');

// Associations
Multi_factorModel.hasMany(MileStoneModel, {
    foreignKey: 'multifactor_id',
    as: 'multiFactor'
});
MileStoneModel.belongsTo(Multi_factorModel, {
    foreignKey: 'multifactor_id',
    as: 'mileStone'
});


MileStoneModel.hasMany(SubTargetModel, {
    foreignKey: 'milestone_period_id',
    as: 'mileSubtarget'
});
SubTargetModel.belongsTo(MileStoneModel, {
    foreignKey: 'milestone_period_id',
    as: 'subTargetMile'
});


TargetModel.hasMany(SubTargetModel, {
    foreignKey: 'target_id',
    as: 'targetSub'
});
SubTargetModel.belongsTo(TargetModel, {
    foreignKey: 'target_id',
    as: 'subTargetTarget'
});


SubTargetModel.hasMany(DetailModel, {
    foreignKey: 'sub_target_id',
    as: 'subTargetDetail'
});
DetailModel.belongsTo(SubTargetModel, {
    foreignKey: 'sub_target_id',
    as: 'detailSubtarget'
});


PeriodModel.hasMany(DetailModel, {
    foreignKey: 'periods_id',
    as: 'perriodDetail'
});
DetailModel.belongsTo(PeriodModel, {
    foreignKey: 'periods_id',
    as: 'detailPeriod'
});

subCategoryModel.hasMany(DetailModel, {
    foreignKey: 'categories_id',
    as: 'cateDetail'
});
DetailModel.belongsTo(subCategoryModel, {
    foreignKey: 'categories_id',
    as: 'detailCate'
});


PlanModel.hasMany(DetailModel, {
    foreignKey: 'plan_id',
    as: 'planDetail'
});
DetailModel.belongsTo(PlanModel, {
    foreignKey: 'plan_id',
    as: 'detailPlan'
});


DetailModel.hasMany(TransectionModel, {
    foreignKey: 'detail_id',
    as: 'detailTransec'
});
TransectionModel.belongsTo(DetailModel, {
    foreignKey: 'detail_id',
    as: 'transecDetail'
});


MileStoneModel.hasMany(TransectionModel, {
    foreignKey: 'milestone_id',
    as: 'mileTransec'
});
TransectionModel.belongsTo(MileStoneModel, {
    foreignKey: 'milestone_id',
    as: 'transecMile'
});

//verify data Associate
UserModel.hasMany(UserPlanModel, {
    foreignKey: 'user_id',
    as: 'planUser'
});
UserPlanModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
    as: 'userPlan'
});

UserModel.hasMany(UserInputModel, {
    foreignKey: 'user_id',
    as: 'inputUser'
});
UserInputModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
    as: 'userInput'
});

UserModel.hasMany(UserVerifyModel, {
    foreignKey: 'user_id',
    as: 'verifyUser'
});
UserVerifyModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
    as: 'userVerify'
});


UserPlanModel.hasMany(DetailModel, {
    foreignKey: 'user_plan_id',
    as: 'UPProves'
});
DetailModel.belongsTo(UserPlanModel, {
    foreignKey: 'user_plan_id',
    as: 'ProveUPs'
});


UserInputModel.hasMany(DetailModel, {
    foreignKey: 'user_input_id',
    as: 'UIProve'
});
DetailModel.belongsTo(UserInputModel, {
    foreignKey: 'user_input_id',
    as: 'ProveUI'
});


UserVerifyModel.hasMany(DetailModel, {
    foreignKey: 'user_verify_id',
    as: 'UVProve'
});
DetailModel.belongsTo(UserVerifyModel, {
    foreignKey: 'user_verify_id',
    as: 'ProveUV'
}); 


//milestone verify
MileStoneModel.hasMany(UserPlanModel,{
    foreignKey:'milestone_id',
    as:'mileUP'
});
UserPlanModel.belongsTo(MileStoneModel,{
    foreignKey:'milestone_id',
     as:'UPmile'
})

MileStoneModel.hasMany(UserInputModel,{
    foreignKey:'milestone_id',
    as:'mileUI'
});
UserInputModel.belongsTo(MileStoneModel,{
    foreignKey:'milestone_id',
     as:'UImile'
})

MileStoneModel.hasMany(UserVerifyModel,{
    foreignKey:'milestone_id',
    as:'mileUV'
});
UserVerifyModel.belongsTo(MileStoneModel,{
    foreignKey:'milestone_id',
     as:'UVmile'
})


// User and Organization Associations
 OrganizationModel.hasMany(UserModel, {
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
});  


RoleModel.belongsToMany(PermissionModel, {
    through: RolePermissionModel, // ใช้ RolePermissionModel เป็นตารางกลาง
    foreignKey: 'role_id', // ใช้ role_id เป็น Foreign Key
    otherKey: 'permission_id', // ใช้ permission_id เป็น Foreign Key อีกฝั่ง
    as: 'permissions' // ตั้งชื่อ alias สำหรับความสัมพันธ์
});

PermissionModel.belongsToMany(RoleModel, {
    through: RolePermissionModel, // ใช้ RolePermissionModel เป็นตารางกลาง
    foreignKey: 'permission_id', // ใช้ permission_id เป็น Foreign Key
    otherKey: 'role_id', // ใช้ role_id เป็น Foreign Key อีกฝั่ง
    as: 'roles' // ตั้งชื่อ alias สำหรับความสัมพันธ์
});
 
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
    RoleModel,
    UserPlanModel,
    UserInputModel,
    UserVerifyModel,
    PermissionModel,
    RolePermissionModel
};