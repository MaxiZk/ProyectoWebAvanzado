import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const express = await import('express');
const app = express.default();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
 res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});