const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/StaticAssumptionController');

//กำหนด http request GET POST PUT DELETE
router.get('/staticassumption',list);
router.get('/staticassumption/:id',read);
router.post('/staticassumption',create);
router.put('/staticassumption/:id',modify);
router.delete('/staticassumption/:id',remove);

//export ไปใช้ server
module.exports = router