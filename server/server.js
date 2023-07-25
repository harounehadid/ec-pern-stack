require('dotenv').config();
const express = require('express');
const db = require('./db');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/v1/products', async (req, res) => {
    const { rows } = await db.query('SELECT * FROM products');

    res.status(200).json({
        status: 'success',
        data: {
            products: rows
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
