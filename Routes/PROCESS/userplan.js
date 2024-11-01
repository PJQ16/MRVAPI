const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/UserPlanController');

//กำหนด http request GET POST PUT DELETE
router.get('/userplan',list);
router.get('/userplan/:id',read);
router.post('/userplan',create);
router.put('/userplan/:id',modify);
router.delete('/userplan/:id',remove);

//export ไปใช้ server
module.exports = router