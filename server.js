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
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };
    
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found: ' + urlPath);
            } else {
                res.writeHead(500);
                res.end('Server error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});


server.listen(8001, () => {
    console.log('=====================================');
    console.log(' ERP Server Started Successfully!');
    console.log('=====================================');
    console.log(' Dashboard: http://localhost:8001/');
    console.log(' Employee Login: http://localhost:8001/erp_with_employee_login.html');
    console.log(' Root: ' + __dirname);
    console.log(' Started at: ' + new Date().toLocaleString());

    console.log('=====================================');
    console.log(' Open your browser and go to: http://localhost:8001/');
    console.log(' To stop: Press Ctrl+C');
    console.log('=====================================');
});
