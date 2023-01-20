const user = require('../models/UserSchema');

const getUsers = async (req, res) => {
    
    const users = await user.find({});

    //res.send('All clients go here');
    res.json(users);
}

const createUser = async (req, res) => {

    const newUser = await user.create(req.body);
    res.json(newUser);
    // res.send('A client has been created');
}

const updateUser = (req, res) => {
    res.send('A client has been updated');
}

const deleteUser = (req, res) => {
    res.send('A client has been deleted');
}

module.exports = {getUsers, createUser, updateUser, deleteUser};

