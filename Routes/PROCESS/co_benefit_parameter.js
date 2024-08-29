const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/Co_benefit_parameterController');

//กำหนด http request GET POST PUT DELETE
router.get('/co_benefit_parameter',list);
router.get('/co_benefit_parameter/:id',read);
router.post('/co_benefit_parameter',create);
router.put('/co_benefit_parameter/:id',modify);
router.delete('/co_benefit_parameter/:id',remove);

//export ไปใช้ server
module.exports = router