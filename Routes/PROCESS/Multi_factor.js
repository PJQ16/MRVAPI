const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/Multi_factorController');

//กำหนด http request GET POST PUT DELETE
router.get('/multi_factor',list);
router.get('/multi_factor/:id',read);
router.post('/multi_factor',create);
router.put('/multi_factor/:id',modify);
router.delete('/multi_factor/:id',remove);

//export ไปใช้ server
module.exports = router