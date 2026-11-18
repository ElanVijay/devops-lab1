const http = require('http');

function handler(req, res) {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok' }));
  }
  res.writeHead(200);
  res.end('Welcome to Shop App');
}

const server = http.createServer(handler);

if (require.main === module) {
  server.listen(3000, () => console.log('Shop app running on port 3000'));
}

module.exports = server;
