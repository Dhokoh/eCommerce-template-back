const {Router} = require('express');
const router = Router();
const {getSales, createSales} = require('../controllers/sales.controllers')

//localhost:5000/sales
router.get('/', getSales);

//localhost:5000/sales
router.post('/', createSales);

module.exports = router;