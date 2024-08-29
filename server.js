const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const { readdirSync, statSync } = require('fs');
const sequelize = require('./connect/config');

app.use(helmet());
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.NODE_PORT;

// ฟังก์ชันสำหรับอ่านไฟล์ในโฟลเดอร์หลักและโฟลเดอร์ย่อยแบบ recursive
function loadRoutesFromFolder(dir) {
  readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      // ถ้าเป็นโฟลเดอร์ ให้ทำการเรียกฟังก์ชันซ้ำเพื่อเข้าไปในโฟลเดอร์ย่อย
      loadRoutesFromFolder(fullPath);
    } else if (file.endsWith('.js')) {
      // ถ้าเป็นไฟล์ .js ให้ทำการ require และใช้เป็น route
      const route = require(fullPath);
      app.use('/api', route);
    }
  });
}

app.get('/', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).json('Connection has been established successfully.');
  } catch (error) {
    res.status(500).json('Unable to connect to the database:', error);
  }
});

// เรียกฟังก์ชันเพื่ออ่านไฟล์ทั้งหมดในโฟลเดอร์ Routes (รวมถึงโฟลเดอร์ย่อย)
loadRoutesFromFolder(path.join(__dirname, 'Routes'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
