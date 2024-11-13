const express = require('express');
const router = express.Router();
const {read,list,create,modify,remove,importData,exportData} = require('../../controllers/PROCESS/ProjectController');
const upload = require('../../middleware/Upload'); // นำเข้า middleware ของ multer


router.get('/project/:id',read);
router.get('/project',list);
router.post('/project',create);
router.put('/project/:id',modify);
router.delete('/project/:id',remove);

// Route สำหรับอัปโหลดและนำเข้าข้อมูลจากไฟล์
router.post('/project/import', upload.single('file'), importData);
router.get('/project/export', exportData);
module.exports = router