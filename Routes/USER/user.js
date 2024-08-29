const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/USER/userController');

//กำหนด http request GET POST PUT DELETE
router.get('/user',list);
router.get('/user/:id',read);
router.post('/user',create);
router.put('/user/:id',modify);
router.delete('/user/:id',remove);

//export ไปใช้ server
module.exports = router