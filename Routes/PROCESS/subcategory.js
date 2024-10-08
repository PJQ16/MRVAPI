const express = require('express');
const router = express.Router();
//import controller 
const {read,list,create,modify,remove} = require('../../controllers/PROCESS/SubCategoryController');

//กำหนด http request GET POST PUT DELETE
router.get('/subcategory',list);
router.get('/subcategory/:id',read);
router.post('/subcategory',create);
router.put('/subcategory/:id',modify);
router.delete('/subcategory/:id',remove);

//export ไปใช้ server
module.exports = router