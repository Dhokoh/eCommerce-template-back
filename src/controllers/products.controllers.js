const product = require('../models/ProductSchema');

const getProducts = async (req, res) => {
    const products = await product.find({});
    res.json(products);
    console.log('Showing all products');
}

const addProduct = async (req, res) => {
    // const newProduct = await product.create(req.body);
    const {name, reference, availableStock} = req.body;
    const newProduct = await product.create({
        name: name,
        reference: reference,
        availableStock: availableStock
    })
    res.json(newProduct);
    console.log('A new product has been added to the inventory');
}

const deleteProduct = async (req, res) => { //untested
    // const {reference} = req.body
    const product2Delete = await product.find({reference: reference});
    console.log(product2Delete)
    // if (!product2Delete){
    //     console.log('an error happened while deleting product')
    // }
    // const productDeletion = await product.findByIdAndDelete(product2Delete._id);
    // res.then(()=>{
    //     console.log('A product has been deleted');
    // });
}

const updateProduct = async (req, res) => { //untested
    const {reference} = req.body;
    const product2Update = await product.findByIdAndUpdate(reference);
    res.then(()=>{
        console.log('A product has been updated');
    });
}

module.exports = {getProducts, addProduct, updateProduct, deleteProduct};