const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String, 
            require: true
        },
        lastname:{
            type: String,
            require: true
        },
        phoneNumber:{
          type: String,
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        }
    }
);

const User = mongoose.model('user', userSchema);
module.exports = User;
