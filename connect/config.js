const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(`${process.env.MYSQL_DATABASE_NAME}`, `${process.env.MYSQL_USERNAME}`, `${process.env.MYSQL_PASSWORD}`, {
  host: `${process.env.MYSQL_HOSTNAME}`,
  dialect: process.env.DATABASE_TYPE,
  port:process.env.DATABASE_PORT,
  logging:false,
  pool: {
    max: 100,   // จำนวน connection สูงสุดใน pool
    min: 5,     // จำนวน connection ต่ำสุดใน pool
    acquire: 30000, // เวลา (เป็นมิลลิวินาที) ที่ pool จะพยายามเชื่อมต่อก่อนที่จะโยน error
    idle: 10000 // เวลา (เป็นมิลลิวินาที) ที่ connection สามารถอยู่เฉยๆ โดยไม่มีการใช้งาน ก่อนที่จะถูกปล่อยออกจาก pool
  },
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
});

module.exports = sequelize;
