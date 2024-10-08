const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/OutputController');

//กำหนด http request GET POST PUT DELETE
router.get('/output',list);
router.get('/output/:id',read);
router.post('/output',create);
router.put('/output/:id',modify);
router.delete('/output/:id',remove);

//export ไปใช้ server
module.exports = router