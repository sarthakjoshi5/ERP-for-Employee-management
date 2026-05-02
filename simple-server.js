const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Strip query string from URL
    const urlPath = req.url.split('?')[0];
    
    // Convert URL path to local file path
    // Remove leading slash to prevent path.join from treating it as root
    let relativePath = urlPath === '/' ? 'index.html' : urlPath.substring(1);
    let filePath = path.join(__dirname, relativePath);
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml'
    };
    
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404);
            res.end('File not found: ' + urlPath);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log('=====================================');
    console.log('🚀 Simple ERP Server Started!');
    console.log('📍 Port: ' + PORT);
    console.log('🏠 Dashboard: http://localhost:' + PORT + '/');
    console.log('📁 Root: ' + __dirname);
    console.log('⏰ Started at: ' + new Date().toLocaleString());
    console.log('=====================================');
    console.log('📱 Open browser: http://localhost:' + PORT + '/');
    console.log('🛑 To stop: Press Ctrl+C');
    console.log('=====================================');
});
