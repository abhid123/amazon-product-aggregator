const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint for product search
app.get('/search', async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const url = `https://www.amazon.in/s?k=${encodeURIComponent(query)}`;
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
            },
        });

        const $ = cheerio.load(data);
        const products = [];

        $('div.s-main-slot div.s-result-item').each((index, element) => {
            const name = $(element).find('h2 a span').text().trim();
            const price = $(element).find('.a-price-whole').text().trim();
            const rating = $(element).find('.a-icon-alt').text().trim();
            const asin = $(element).attr('data-asin');

            if (name && asin) {
                products.push({
                    name,
                    price: price ? `₹${price}` : 'N/A',
                    rating: rating || 'N/A',
                    asin,
                });
            }
        });

        console.log(products); 
        res.json(products);
    } catch (error) {
        console.error('Error scraping data:', error);
        res.status(500).json({ error: 'Failed to fetch product data' });
    }
});


app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
