const {Router} = require('express');
const router = Router();
const {getProducts, addProduct} = require('../controllers/products.controllers');

//localhost:PORT/products
router.get('/', getProducts);

//localhost:PORT/products
router.post('/', addProduct);

module.exports = router;