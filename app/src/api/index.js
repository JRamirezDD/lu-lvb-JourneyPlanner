export * from './autocompleteService/autocompleteService';
export * from './autocompleteService/dto/autocompleteitemResponse';
export * from './autocompleteService/dto/searchparamsRequest';
import dotenv from 'dotenv';
dotenv.config();


const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json()); // not used, but will be necessary if POST requests are made through the proxy.

const cors = require('cors');
app.use(cors()); // Allow all origins

app.get('/proxy', async (req, res) => {
    try {
        const response = await axios.get(process.env.API_BASE_URL, {
            headers: {
                'X-API-Key': process.env.API_KEY,
                'Content-Type': 'application/json',
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Only runs if the server is ran locally (or not in vercel [proxy is ran as a serverless function])
if (require.main === module) {
    const PORT = process.env.NEXT_PUBLIC_PROXY_PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running locally on port ${PORT}`);
    });
}


module.exports = app;
