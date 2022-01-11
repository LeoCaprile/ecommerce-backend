const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');
const getProducts = require('./api/getProducts');
const getCategories = require('./api/getCategories');
const getDiscounts = require('./api/getDiscounts');
app.use(cors());

app.use(express.json({ extended: false }));

app.use('/api/getProducts', getProducts);
app.use('/api/getCategories', getCategories);
app.use('/api/getDiscounts', getDiscounts);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
