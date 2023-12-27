const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
 amount: Number,
 description: String,
 date: Date
});

module.exports = mongoose.model('Available', ExpenseSchema);