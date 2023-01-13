const getSales = (req, res) => {
    res.send('A list of sales');
}

const createSales = (req, res) => {
    res.send('A sale has been created');
}

module.exports = {getSales, createSales};

