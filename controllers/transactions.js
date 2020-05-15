exports.getTransactions = (req, res, next) => {
  res.send('GET Transactions');
}

exports.addTransaction = (req, res, next) => {
  res.send('POST Transaction');
}

exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE Transactions');
}