const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/DetailController');

//กำหนด http request GET POST PUT DELETE
router.get('/detail',list);
router.get('/detail/:id',read);
router.post('/detail',create);
router.put('/detail/:id',modify);
router.delete('/detail/:id',remove);

//export ไปใช้ server
module.exports = router