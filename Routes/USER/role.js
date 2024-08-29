const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/USER/roleController');

//กำหนด http request GET POST PUT DELETE
router.get('/role',list);
router.get('/role/:id',read);
router.post('/role',create);
router.put('/role/:id',modify);
router.delete('/role/:id',remove);

//export ไปใช้ server
module.exports = router