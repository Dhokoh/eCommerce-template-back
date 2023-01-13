const getUsers = (req, res) => {
    res.send('All clients go here');
}

const createUser = (req, res) => {
    res.send('A client has been created');
}

const updateUser = (req, res) => {
    res.send('A client has been updated');
}

const deleteUser = (req, res) => {
    res.send('A client has been deleted');
}

module.exports = {getUsers, createUser, updateUser, deleteUser};

