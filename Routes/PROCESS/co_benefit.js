const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/Co_benefitController');

//กำหนด http request GET POST PUT DELETE
router.get('/co_benefit',list);
router.get('/co_benefit/:id',read);
router.post('/co_benefit',create);
router.put('/co_benefit/:id',modify);
router.delete('/co_benefit/:id',remove);

//export ไปใช้ server
module.exports = router