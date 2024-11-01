const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/UserInputController');

//กำหนด http request GET POST PUT DELETE
router.get('/userinput',list);
router.get('/userinput/:id',read);
router.post('/userinput',create);
router.put('/userinput/:id',modify);
router.delete('/userinput/:id',remove);

//export ไปใช้ server
module.exports = router