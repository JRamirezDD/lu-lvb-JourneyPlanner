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

        // Fix: Ensure JSON responses are properly parsed
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



const allowCors = (fn: (req: any, res: any) => any) => async (req: any, res: any) => {
    const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['*'];
    let requestOrigin = req.headers.origin;
  
    // If Origin is undefined, try falling back to Referer header
    if (!requestOrigin && req.headers.referer) {
      try {
        const url = new URL(req.headers.referer);
        requestOrigin = url.origin;
      } catch (e) {
        console.error('Error parsing referer header:', e);
      }
    }
  
    // If still no origin is detected, decide whether to allow or block the request.
    if (!requestOrigin) {
      console.warn('No Origin or Referer header present; proceeding without strict CORS check.');
      return await fn(req, res);
    }
  
    if (!allowedOrigins.includes(requestOrigin) && !allowedOrigins.includes('*')) {
      res.status(403).json({ error: 'Origin not allowed: ' + requestOrigin });
      return;
    }
  
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', requestOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
  
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
    return await fn(req, res);
  };
  
  
  

export default allowCors(handler);