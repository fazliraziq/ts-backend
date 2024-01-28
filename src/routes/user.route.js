const express = require('express');
const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../services/user.service');

const userRoute = express.Router();

userRoute.post('/user', createUser);
userRoute.get('/users', getAllUsers);
userRoute.get('/users/:id', getUserById);
userRoute.put('/users/:id', updateUser);
userRoute.delete('/users/:id', deleteUser);

module.exports = userRoute;
