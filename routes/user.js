const express = require('express');
const {handlerAllUser, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleAddUser} = require('../controllers/user')

const router = express.Router();

router.get('/',handlerAllUser);

router
.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);

router.post('/',handleAddUser);

module.exports = router;