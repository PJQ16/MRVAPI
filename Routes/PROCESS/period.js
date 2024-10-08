const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/PeriodController');

//กำหนด http request GET POST PUT DELETE
router.get('/period',list);
router.get('/period/:id',read);
router.post('/period',create);
router.put('/period/:id',modify);
router.delete('/period/:id',remove);

//export ไปใช้ server
module.exports = router