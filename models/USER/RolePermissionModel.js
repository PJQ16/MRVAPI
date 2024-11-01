const { DataTypes } = require('sequelize');
const sequelize = require('../../connect/config');
const RoleModel = require('./RoleModel'); // นำเข้ามาเพื่อสร้างความสัมพันธ์
const PermissionModel = require('./PermissionModel'); // นำเข้ามาเพื่อสร้างความสัมพันธ์

// สร้างโมเดล RolePermission
const RolePermissionModel = sequelize.define('RolePermission', {
    role_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
            model: RoleModel, // อ้างอิงไปยัง RoleModel
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    permission_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
            model: PermissionModel, // อ้างอิงไปยัง PermissionModel
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'role_permissions', // ชื่อของตารางในฐานข้อมูล
    timestamps: false // ไม่ใช้ timestamps ในตารางนี้
});

// ซิงค์โมเดลกับฐานข้อมูล
/* RolePermissionModel.sync({ alter: true }); */

module.exports = RolePermissionModel;
