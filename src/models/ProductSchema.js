const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        reference: {
            type: String,
            require: true
        },
        price:{
            type: Number,
            require: true,
        },
        availableStock:{
            type: Number,
            require: true
        },
        image:{
            type: String, 
            require: false, //to be changed to true
        }
    }
);

const Product = mongoose.model('product', productSchema);
module.exports = Product;