const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
	res.send('hola');
});

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
