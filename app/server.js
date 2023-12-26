const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/financialApp', { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('MongoDB connected successfully'))
 .catch((error) => console.log(error));

app.use(bodyParser.json());

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Server running on port ${port}`));