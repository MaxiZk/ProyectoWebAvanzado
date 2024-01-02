const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    cantidad: { type: Number, required: true },
    tasa_de_interes: { type: Number, required: true },
    duracion: { type: Number, required: true }
});

module.exports = mongoose.model('Investment', InvestmentSchema);