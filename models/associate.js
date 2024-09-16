// models/index.js

const sequelize = require('../connect/config');
const Co_benefitModel = require('./PROCESS/Co_benefitModel');
const Co_benefit_parameterModel = require('./PROCESS/Co_benefit_parameterModel');
const EntriesModel = require('./PROCESS/EntriesModel');
const MetricModel = require('./PROCESS/MetricModel'); 
const MrvModel = require('./PROCESS/MrvModel');
const Multi_factorModel = require('./PROCESS/Multi_factorModel');
const PlanModel = require('./PROCESS/PlanModel');
const OrganizationModel = require('./USER/OrganizationModel');
const UserModel = require('./USER/UserModel');
const VerificationModel = require('./USER/VerificationModel');
const RoleModel = require('./USER/RoleModel');
const PdpModel = require('./PROCESS/PdpModel');
const PdpDetailModel = require('./PROCESS/PdpDetailModel');
const PdpTypeModel = require('./PROCESS/PdpTypeModel');
const TargetModel = require('./PROCESS/TargetModel');
const UnitModel = require('./PROCESS/UnitModel');

// Associations
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

// Process Relationships
MetricModel.hasMany(EntriesModel, {
    foreignKey: 'metric_id',
    as: 'metricsEntry'
});
EntriesModel.belongsTo(MetricModel, {
    foreignKey: 'metric_id',
    as: 'entryMetrics'
});



MrvModel.hasMany(EntriesModel, {
    foreignKey: 'year_mrv',
     as: 'mrvEntries'
});
EntriesModel.belongsTo(MrvModel, {
    foreignKey: 'year_mrv',
    as: 'entryMrvs'
});



PlanModel.hasMany(MetricModel, {
    foreignKey: 'plan_id',
    as: 'planMetric'
});
MetricModel.belongsTo(PlanModel, {
    foreignKey: 'plan_id',
    as: 'metricPlans'
});

MetricModel.hasMany(Co_benefit_parameterModel, {
    foreignKey: 'cobenefit_metric_id',
        as: 'metricCoBenefits'
});
Co_benefit_parameterModel.belongsTo(MetricModel, {
    foreignKey: 'cobenefit_metric_id',
     as: 'coBenefitMetrics'
}); 

// Export models and sequelize instance
module.exports = {
    sequelize,
    Co_benefitModel,
    Co_benefit_parameterModel,
    EntriesModel,
    MetricModel, 
    MrvModel,
    Multi_factorModel,
    PlanModel,
    OrganizationModel,
    UserModel,
    VerificationModel,
    RoleModel,
    PdpModel,
    PdpDetailModel,
    PdpTypeModel,
    TargetModel,
    UnitModel, 
};
