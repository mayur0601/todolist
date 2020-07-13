const express = require('express');

const router = express.Router();

const homeControl = require('../controllers/home');

router.get('/',homeControl.home);

router.post('/create-task',homeControl.addTask);



module.exports = router;