const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/PlanController');

//กำหนด http request GET POST PUT DELETE
router.get('/plan',list);
router.get('/plan/:id',read);
router.post('/plan',create);
router.put('/plan/:id',modify);
router.delete('/plan/:id',remove);

//export ไปใช้ server
module.exports = router