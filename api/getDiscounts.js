const router = require('express').Router();
const connection = require('../config/connection');

//Obtener todas los descuentos
router.get('/', (req, res) => {
	connection.query(
		'SELECT * FROM product WHERE product.discount != 0 ORDER BY product.discount DESC',
		(err, results) => {
			console.log(err);
			res.json(results);
		}
	);
});

module.exports = router;
