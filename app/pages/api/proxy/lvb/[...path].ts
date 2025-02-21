import { NextApiRequest, NextApiResponse } from 'next';
import { URL, URLSearchParams } from 'url';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { path, ...queryParams } = req.query; // Extract query params separately
        const apiUrl = new URL(`${process.env.LVB_API_BASE_URL}/${(path as string[]).join('/')}`);
        apiUrl.search = new URLSearchParams(queryParams as Record<string, string>).toString();

        console.log('Proxying request to:', apiUrl.toString());

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'X-API-Key': `${process.env.LVB_API_KEY}`,
        };

        // Forward client headers except `host` and `connection`
        for (const [key, value] of Object.entries(req.headers)) {
            if (!['host', 'connection'].includes(key.toLowerCase()) && typeof value === 'string') {
                headers[key] = value;
            }
        }

        // Add CORS Headers
        const allowedOrigins = process.env.LVB_PROXY_ALLOWED_ORIGINS || '*';
        res.setHeader('Access-Control-Allow-Origin', allowedOrigins);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-API-Key');

        
        // Handle Preflight (OPTIONS) Requests
        if (req.method === 'OPTIONS') {
            res.status(200).end();
            return;
        }
        

        const response = await fetch(apiUrl.toString(), {
            method: req.method,
            headers,
            body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
        });

        const contentType = response.headers.get('content-type');
        const rawText = await response.text();

        console.log('Raw API Response:', rawText);

        response.headers.forEach((value, key) => {
            res.setHeader(key, value);
        });

        // 🛠 Fix: Ensure JSON responses are properly parsed
        if (contentType?.includes('application/json')) {
            try {
                const jsonData = JSON.parse(rawText);
                res.status(response.status).json(jsonData);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                res.status(500).json({ error: 'Invalid JSON response from API' });
            }
        } else {
            res.status(response.status).send(rawText);
        }
    } catch (error) {
        console.error('Error in proxy:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
