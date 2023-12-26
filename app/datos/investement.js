const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
 amount: Number,
 description: String,
 date: Date
});

module.exports = mongoose.model('Investment', InvestmentSchema);