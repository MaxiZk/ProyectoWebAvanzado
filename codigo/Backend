const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const incomeRoutes = require('./routes/income');
const expenseRoutes = require('./routes/expense');
const investmentRoutes = require('./routes/investment');

const app = express();

mongoose.connect('mongodb://localhost:27017/financialApp', { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('MongoDB connected successfully'))
 .catch((error) => console.log(error));

app.use(bodyParser.json());
app.use('/income', incomeRoutes);
app.use('/expense', expenseRoutes);
app.use('/investment', investmentRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));