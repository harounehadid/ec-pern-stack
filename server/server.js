require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/v1/products', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM products');

        res.status(200).json({
            status: 'success',
            results: rows.length,
            data: {
                products: rows
            }
        });
    } catch(err) {
        console.log(err);   
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
