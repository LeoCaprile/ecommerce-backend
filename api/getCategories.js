const router = require('express').Router();
const connection = require('../config/connection');

//Obtener todas las categorias
router.get('/', (req, res) => {
	connection.query('SELECT * FROM category', (err, results) => {
		res.json(results);
	});
});

module.exports = router;
