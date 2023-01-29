const product = require('../models/ProductSchema');

const getProducts = async (req, res) => {
    const products = await product.find({});
    res.json(products);
    console.log('Showing all products');
}

const addProduct = async (req, res) => {
    const newProduct = await product.create(req.body);
    res.json(newProduct);
    console.log('A new product has been added to the inventory');
}

const deleteProduct = async (req, res) => { //untested
    const product2Delete = await product.findByIdAndDelete(req.body);
    res.then(()=>{
        console.log('A product has been deleted');
    });
}

const updateProduct = async (req, res) => { //untested
    const product2Update = await product.findByIdAndUpdate(req.body);
    res.then(()=>{
        console.log('A product has been updated');
    });
}

module.exports = {getProducts, addProduct, updateProduct, deleteProduct};