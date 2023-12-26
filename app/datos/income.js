const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
 amount: Number,
 description: String,
 date: Date
});

module.exports = mongoose.model('Income', IncomeSchema);