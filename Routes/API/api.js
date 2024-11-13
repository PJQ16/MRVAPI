const express = require('express');
const router = express.Router();
//import controller 
const {target,plan} = require('../../controllers/API/apiMrvController');

//กำหนด http request GET POST PUT DELETE
router.get('/apiTarget',target);
router.get('/apiPlan',plan);

//export ไปใช้ server
module.exports = router