require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/api/v1/products', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            products: []
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
