const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/TransectionController');

//กำหนด http request GET POST PUT DELETE
router.get('/transection',list);
router.get('/transection/:id',read);
router.post('/transection',create);
router.put('/transection/:id',modify);
router.delete('/transection/:id',remove);

//export ไปใช้ server
module.exports = router