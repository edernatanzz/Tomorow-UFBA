const express = require('express');
const { getAllUsers,createUser,deleteUser, login } = require('../controllers/userController');
const verifyToken = require('../middleware/middleware');



const router = express.Router();

router.get('/users', verifyToken, getAllUsers);
router.post('/createUser', createUser)
router.delete('/deleteUser/:id', deleteUser)
router.post('/login', login)



module.exports = router;
