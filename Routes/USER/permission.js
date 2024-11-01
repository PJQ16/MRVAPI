const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/USER/permissionController');

//กำหนด http request GET POST PUT DELETE
router.get('/permission',list);
router.get('/permission/:id',read);
router.post('/permission',create);
router.put('/permission/:id',modify);
router.delete('/permission/:id',remove);

//export ไปใช้ server
module.exports = router