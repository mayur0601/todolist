const express = require('express');

const router = express.Router();

const homeControl = require('../controllers/home');

router.get('/',homeControl.home);

router.post('/create-task',homeControl.addTask);

router.post('/delete-task',homeControl.deleteTask);

module.exports = router;