const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  // o MongoDB já cria um _id
  text: {
    type: String,
    trim: true,
    required: [true, 'Text is required']
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required.']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);