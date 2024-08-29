const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/MrvController');

//กำหนด http request GET POST PUT DELETE
router.get('/mrv',list);
router.get('/mrv/:id',read);
router.post('/mrv',create);
router.put('/mrv/:id',modify);
router.delete('/mrv/:id',remove);

//export ไปใช้ server
module.exports = router