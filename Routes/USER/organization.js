const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/USER/organizationController');

//กำหนด http request GET POST PUT DELETE
router.get('/organization',list);
router.get('/organization/:id',read);
router.post('/organization',create);
router.put('/organization/:id',modify);
router.delete('/organization/:id',remove);

//export ไปใช้ server
module.exports = router