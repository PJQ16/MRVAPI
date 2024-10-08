const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/SubTargetController');

//กำหนด http request GET POST PUT DELETE
router.get('/subtarget',list);
router.get('/subtarget/:id',read);
router.post('/subtarget',create);
router.put('/subtarget/:id',modify);
router.delete('/subtarget/:id',remove);

//export ไปใช้ server
module.exports = router