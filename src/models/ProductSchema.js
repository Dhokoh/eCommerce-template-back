const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        referenceNumber: {
            type: String,
            require: true
        },
        availableStock:{
            type: String,
            require: true
        },
        image:{
            type:"", //what type would go here? 
            require: true,
        }
    }
);

const Product = mongoose.model('product', productSchema);
module.exports = Product;