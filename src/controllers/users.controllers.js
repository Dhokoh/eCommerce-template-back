const user = require('../models/UserSchema');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { restart } = require('nodemon');


const getUsers = async (req, res) => {
    
    const users = await user.find({});

    //res.send('All clients go here');
    res.json(users);
}

const createUser = async (req, res) => {
    try{
        const {name, lastname, email, password, phoneNumber, country} = req.body
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = await user.create({
            name: name,
            lastname: lastname,
            email: email,
            password: hashedPassword,
            phoneNumber: phoneNumber,
            country: country
        });
        
        res.json(newUser);
    }catch{
        res.json({
            msg: 'There was an error creating user.'
        })
    }
    // res.send('A client has been created');
}

const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        let foundUser = await user.findOne({email: email});

        if (!foundUser){
            return res.status(404).json({
                msg: 'Unregistered user'
            });
        };
        const success = await bcryptjs.compare(password, foundUser.password);
        if (!success){
            return await res.status(400).json({
                msg: 'Password incorrect'
            })
        };
        const payload = {
            user: {
                id: foundUser._id
            }
        }
        if (email && success){
            jwt.sign(payload, process.env.SECRET, {expiresIn:360000}, (error, token) => {
                if (error) throw error;
                res.json({token});               
            })
        }
    }catch(error){
        res.send('Error logging in');
        console.log(error);
    }
}

const updateUser = (req, res) => {
    res.send('A client has been updated');
}

const deleteUser = (req, res) => {
    res.send('A client has been deleted');
}

module.exports = {getUsers, createUser, updateUser, deleteUser, loginUser};

