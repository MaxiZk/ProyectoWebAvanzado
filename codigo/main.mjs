// ...
import { createServer } from 'http';
import { parse } from 'url';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

// ...

createServer(async (request, response) => {
    // ...

    const urlPath = parse(request.url).pathname;

    switch (urlPath) {
        // ...
        case '/ingreso':
        case '/inversion':
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            }).on('end', async () => {
                body = Buffer.concat(body).toString();
                // You can do whatever you want with the body data, for example, store it in a database.
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end('Transacción agregada con éxito');
            });
            break;
        default:
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end('Página no encontrada');
    }
}).listen(3000);