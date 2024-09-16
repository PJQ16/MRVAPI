const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/USER/verifyController');

//กำหนด http request GET POST PUT DELETE
router.get('/verify',list);
router.get('/verify/:token',read);
router.post('/verify',create);
router.put('/verify/:id',modify);
router.delete('/verify/:id',remove);

//export ไปใช้ server
module.exports = router