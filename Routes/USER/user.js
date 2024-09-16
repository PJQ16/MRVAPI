const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,process,logout,modify,remove} = require('../../controllers/USER/userController');

//กำหนด http request GET POST PUT DELETE
router.get('/user',list);
router.get('/user/:id',read);
router.post('/user',create);
router.post('/user/signIn',process);
router.post('/user/signOut',logout);
router.put('/user/:id',modify);
router.delete('/user/:id',remove);

//export ไปใช้ server
module.exports = router