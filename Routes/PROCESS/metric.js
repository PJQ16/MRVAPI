const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/MetricController');

//กำหนด http request GET POST PUT DELETE
router.get('/metric',list);
router.get('/metric/:id',read);
router.post('/metric',create);
router.put('/metric/:id',modify);
router.delete('/metric/:id',remove);

//export ไปใช้ server
module.exports = router