const express = require('express');
const { getAllUsers,createUser,deleteUser } = require('../controllers/userController');



const router = express.Router();

router.get('/users', getAllUsers);
router.post('/createUser', createUser)
router.delete('/deleteUser/:id', deleteUser)



module.exports = router;
