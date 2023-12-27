const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/app/datos/available.mjs', (req, res) => {
const available = [
    { id: 1, title: 'available', amount: 500, date: '2021-07-01' },
    { id: 2, title: 'available', amount: 700, date: '2021-07-02' },
];

res.json(available);
});

app.post('/app/datos/available.mjs', (req, res) => {
console.log('New available added:', req.body);
res.status(201).send();
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));