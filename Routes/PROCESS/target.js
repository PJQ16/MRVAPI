const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/TargetController');

//กำหนด http request GET POST PUT DELETE
router.get('/target',list);
router.get('/target/:id',read);
router.post('/target',create);
router.put('/target/:id',modify);
router.delete('/target/:id',remove);

//export ไปใช้ server
module.exports = router