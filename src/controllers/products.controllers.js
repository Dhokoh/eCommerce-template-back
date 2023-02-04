const product = require('../models/ProductSchema');

const getProducts = async (req, res) => {
    const products = await product.find({});
    res.json(products);
    console.log('Showing all products');
}

const addProduct = async (req, res) => {
    // const newProduct = await product.create(req.body);
    const {name, reference, price, availableStock, image} = req.body;
    const newProduct = await product.create({
        name,
        reference,
        price,
        availableStock,
        image
    });
    res.json(newProduct);
    console.log('A new product has been added to the inventory');
}

const deleteProduct = async (req, res) => { //untested
    const reference = req.params.reference;
    const product2Delete = await product.findOne({reference});
    // console.log(product2Delete);
    // res.json(product2Delete);
    if (!product2Delete){
        res.json({
            message:"an error happened while deleting product"
        });
        console.log('an error happened while deleting product');
    }else{
        const productDeletion = await product.findByIdAndDelete(product2Delete._id);
        res.json(productDeletion);
    }
}

const updateProduct = async (req, res) => { //untested
    const {reference} = req.params.reference;
    const product2Update = await product.findByIdAndUpdate(reference);
    if(!product2Update){
        res.status(404, {
            message:"Product to update not found",
        });
    }else{
        const productUpdate = await product.findByIdAndUpdate(product2Update._id);
        res.status(200, {
            message: "product successfully updated",
        });
    }
}

module.exports = {getProducts, addProduct, updateProduct, deleteProduct};