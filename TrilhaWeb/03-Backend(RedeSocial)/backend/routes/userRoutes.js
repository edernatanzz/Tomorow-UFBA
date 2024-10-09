const express = require('express');
const { getAllUsers } = require('../controllers/userController');
const {createUser} = require('../controllers/userController')

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/createUser', createUser)



module.exports = router;
