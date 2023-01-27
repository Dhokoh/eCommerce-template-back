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

module.exports = {getProducts, addProduct};