const {Router} = require('express');
const router = Router();
const {getUsers, createUser, deleteUser, updateUser} = require('../controllers/users.controllers')

//localhost:5000/users
router.get('/', getUsers);

//localhost:5000/users
router.post('/', createUser);

//localhost:5000/users/{id}
router.put('/{id}', updateUser);

//localhost:5000/users/{id}
router.delete('/{id}', deleteUser);

module.exports = router;