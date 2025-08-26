const http = require('http');

// CORS headers are set up for you
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
};

// Store wishes in memory
const wishes = [];

const server = http.createServer((req, res) => {
    // CORS is handled for you
    Object.entries(corsHeaders).forEach(([key, value]) => {
        res.setHeader(key, value);
    });
    
    // Handle preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Your code starts here
    // TODO: Implement GET and POST endpoints for /api/wishes
    
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));