const {Router} = require('express');
const router = Router();
const {getProducts, addProduct, deleteProduct, updateProduct} = require('../controllers/products.controllers');

//localhost:PORT/products
router.get('/', getProducts);

//localhost:PORT/products
router.post('/', addProduct);

//localhost:PORT/products/{reference}
router.delete('/{reference}', deleteProduct);

//localhost:PORT/products/{reference}
router.put('/{reference}', updateProduct)

module.exports = router;