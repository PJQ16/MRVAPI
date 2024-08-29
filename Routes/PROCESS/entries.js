const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/EntriesController');

//กำหนด http request GET POST PUT DELETE
router.get('/entries',list);
router.get('/entries/:id',read);
router.post('/entries',create);
router.put('/entries/:id',modify);
router.delete('/entries/:id',remove);

//export ไปใช้ server
module.exports = router