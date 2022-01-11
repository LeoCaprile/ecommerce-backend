const router = require('express').Router();
const connection = require('../config/connection');

//Obtener todos los productos o filtrar por querys.

router.get('/', (req, res) => {
	const { category, price, name } = req.query;

	connection.query('SELECT * FROM product', (err, result) => {
		if (Object.keys(req.query).length !== 0) {
			const filter = result
				.filter((item) => {
					if (category) {
						return item.category === parseInt(category);
					} else {
						return item;
					}
				})
				.filter((item) => {
					if (name) {
						return item.name.toLowerCase().includes(name);
					} else {
						return item;
					}
				})
				.filter((item) => {
					if (price) {
						return item.price <= price;
					} else {
						return item;
					}
				});

			res.json(filter);
		} else {
			res.json(result);
		}
	});
});

module.exports = router;
