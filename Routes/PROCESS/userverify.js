const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/UserVerifyController');

//กำหนด http request GET POST PUT DELETE
router.get('/userverify',list);
router.get('/userverify/:id',read);
router.post('/userverify',create);
router.put('/userverify/:id',modify);
router.delete('/userverify/:id',remove);

//export ไปใช้ server
module.exports = router