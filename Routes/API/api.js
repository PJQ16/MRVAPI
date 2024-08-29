const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/API/apiMrvController');

//กำหนด http request GET POST PUT DELETE
router.get('/apiMrv',list);
router.get('/apiMrv/:id',read);
router.post('/apiMrv',create);
router.put('/apiMrv/:id',modify);
router.delete('/apiMrv/:id',remove);

//export ไปใช้ server
module.exports = router