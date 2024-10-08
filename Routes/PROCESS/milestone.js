const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/MileStoneController');

//กำหนด http request GET POST PUT DELETE
router.get('/milestone',list);
router.get('/milestone/:id',read);
router.post('/milestone',create);
router.put('/milestone/:id',modify);
router.delete('/milestone/:id',remove);

//export ไปใช้ server
module.exports = router