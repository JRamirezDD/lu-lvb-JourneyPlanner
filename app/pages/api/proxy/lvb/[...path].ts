import { NextApiRequest, NextApiResponse } from 'next';
import { URL, URLSearchParams } from 'url';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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



const allowCors = (fn: (arg0: any, arg1: any) => any) => async (req: { method: string; }, res: { setHeader: (arg0: string, arg1: string | boolean) => void; status: (arg0: number) => { (): any; new(): any; end: { (): void; new(): any; }; }; }) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
      res.status(200).end()
      return
    }
    return await fn(req, res)
  }
  

export default allowCors(handler);